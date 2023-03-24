const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
const { Sequelize, DataTypes } = require('sequelize');

const sequelizeConnection = new Sequelize('postgres://postgres:postgres123@localhost:5432/postgres',{
    define:{
        timestamps: false,
        schema: 'dc_library'
    }
})

const Book = sequelizeConnection.define("books",{
    isbnNumber :{
        type: DataTypes.STRING,
        field: 'isbn_number',
        primaryKey: true
    },
    bookName: {
        type: DataTypes.STRING,
        field:  'book_name'
    },
    year: {
        type: DataTypes.INTEGER,
        field: "year_of_publication"
    },
    price :{
        type: DataTypes.DECIMAL,
        field: "price"
    },
    genre : {
        type: DataTypes.STRING,
        field: "genre"
    }
})

const Customer = sequelizeConnection.define("customer",{
    customerId :{
        type: DataTypes.INTEGER,
        field: 'customer_id',
        primaryKey: true
    },
    customerName: {
        type: DataTypes.STRING,
        field:  'customer_name'
    }
})

app.get('/books',(req,res)=>{
    Book.findAll().then(books=>{
        let booksList = JSON.stringify(books);
        res.setHeader('Content-type','application/json')
        res.send(booksList);
    })
})

app.get('/books/:isbn',(req,res)=>{
    const isbn = req.params['isbn'];
    Book.findByPk(isbn).then(book=>{
        if(book){
            res.send(book);
        }else{
            res.status(404).send("Book not found");
        }
    })
})

app.post('/books',(req,res)=>{
    const bookData = req.body;
    Book.create({
        isbnNumber:bookData.isbnNumber,bookName:bookData.bookName,price:bookData.price,year:bookData.year
    })
    res.status(201).send("Book created successfully");
})

app.put('/books/:isbn',(req,res)=>{
    const isbn = req.params['isbn'];
    Book.findByPk(isbn).then(book=>{
        if(book){
            const bookData = req.body;
            Book.update({
                bookName:bookData.bookName,price:bookData.price,year:bookData.year,genre:bookData.genre
            },{
                where:{isbnNumber:isbn}
            })
            res.status(200).send("Book updated successfully");            
        }else{
            res.status(404).send("Book not found");            
        }
    })
    }
)

app.delete('/books/:isbn',(req,res)=>{
    const isbn = req.params['isbn'];
    Book.findByPk(isbn).then((book)=>{
        if(book){
            Book.destroy({
                where:{isbnNumber:isbn}
            })
            res.status(200).send("Book deleted successfully");
        }else{
            res.status(404).send("Book not found");
        }
    })
})

sequelizeConnection.authenticate().then(()=>{
    console.log("Database connection successfull")
}).catch((error)=>{
    console.log(error);
})

sequelizeConnection.sync().then(()=>{
    console.log("Tables created successfully");
})



const server = http.createServer(app);
server.listen(3000,'127.0.0.1',()=>{
    console.log("Server started");
})