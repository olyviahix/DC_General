const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
const pgp = require('pg-promise');
const pgpromise = pgp();
const dbConnection = pgpromise("postgres://postgres:postgres123@localhost:5432/postgres");

app.get('/books',(req,res)=>{
    dbConnection.any("select * from dc_library.books").then((books)=>{
        res.send(books);
    })
})

app.get('/books/:isbn',(req,res)=>{
    const isbn = req.params['isbn'];
    console.log(isbn);
    dbConnection.oneOrNone("select * from dc_library.books where isbn_number=$1",[isbn]).then((book)=>{
        if(book){
            res.send(book);
        }else{
            res.status(404).send("Book not found")
        }
    });
})

app.post('/books',(req,res)=>{
    const bookData = req.body;
    console.log(bookData);
    dbConnection.none("Insert into dc_library.books (isbn_number,book_name,year_of_publication,genre,price,author_id) values ($1,$2,$3,$4,$5,$6)",
    [bookData.isbnNumber,bookData.bookName,bookData.year,bookData.genre,bookData.price,bookData.authorId]);
    res.status(201).send("Book added successfully!");
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