const express = require("express");

const app = express();

const bookstore = [
    { id: 1, book: "wings", author: "APJ" },
    { id: 2, book: "throne", author: "Aryan" },
    { id: 3, book: "hinfs", author: "Amar" },
    { id: 4, book: "weapon", author: "JKUkJ"},
    { id: 5, book: "trap", author: "Aryan" }
]

app.use(express.json());

app.get("/book", (req, res) => {    
    const Book =bookstore.filter(info=>info.author===req.query.author)
    res.send(Book);
})


app.get("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const Book = bookstore.find(info => info.id === id);
    res.send(Book);
})

app.post("/book", (req, res) => {
    const data = req.body;
    bookstore.push(data);
    res.send("Data Saved Successfully");
})

app.patch("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const books = bookstore.find(info => info.id === id);

    if (req.body.author)
        books.author = req.body.author;

    if (req.body.book)
        books.book = req.body.book;

    res.send("Patch updated")

})

app.put("/book", (req, res) => {
    const id = parseInt(req.body.id);
    const book = bookstore.find(info => info.id === id);

    book.author = req.body.author;
    book.book = req.body.book;
    res.send("Updated successfully")
})

app.delete("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    bookstore.splice(id - 1, 1);

    res.send("Item Deleted successfully")
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
})


