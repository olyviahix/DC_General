const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
const pgp = require('pg-promise');
const pgpromise = pgp();
const dbConnection = pgpromise("postgres://postgres:Livins11223344!!@localhost:5432/olyviahix");

app.get('/expenses',(req,res)=>{
    dbConnection.any("select * from expenses_project.expenses").then((expenses)=>{
        res.send(expenses);
    })
})
app.post('/expenses',(req,res)=>{
    const expenseData = req.body;
    console.log(expenseData);
    dbConnection.none("Insert into expense_project.expenses (expense_ID,expense_name,expense_description,expense_amount) values ($1,$2,$3,$4)",
    [expenseData.ID,expenseData.name,expenseData.description,expenseData.amount]);
    res.status(201).send("Expenses added successfully!");
})

app.get('/expenses/:isbn',(req,res)=>{
    const isbn = req.params['isbn'];
    console.log(isbn);
    dbConnection.oneOrNone("select * from expenses_project.expenses where isbn_number=$1",[isbn]).then((book)=>{
        if(book){
            res.send(book);
        }else{
            res.status(404).send("Book not found")
        }
    });
})



app.put('/books/:isbn',(req,res)=>{
    const isbn = req.params['isbn'];
    dbConnection.oneOrNone("select * from dc_library.books where isbn_number=$1",[isbn]).then((book)=>{
        if(book){
            const bookData = req.body;
            dbConnection.none("Update dc_library.books set book_name=$1,year_of_publication=$2,genre=$3,price=$4,author_id=$5 where isbn_number=$6",[
                bookData.bookName,bookData.year,bookData.genre,bookData.price,bookData.authorId,isbn
            ])
            res.status(200).send('Book updated successfully!');        
        }else{
            res.status(404).send("Book not found")
        }
    });
})

app.delete('/books/:isbn',(req,res)=>{
    const isbn = req.params['isbn'];
    dbConnection.oneOrNone("select * from dc_library.books where isbn_number=$1",[isbn]).then((book)=>{
        if(book){
            dbConnection.none("Delete from dc_library.books where isbn_number=$1",[
                isbn
            ])
            res.status(200).send('Book deleted successfully!');        
        }else{
            res.status(404).send("Book not found")
        }
    });
})

const server = http.createServer(app);
server.listen(3000,'127.0.0.1',()=>{
    console.log("Server started");
})