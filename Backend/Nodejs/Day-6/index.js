const express = require("express");
const app = express();



app.use(("/about/:id"),(req, res) => {
    console.log(req.params);
    res.send("This is About Page");
})

app.use(("/contact"),(req, res) => {
    res.send("This is contact Page");
})

app.use(("/detail"),(req, res) => {
    res.send({"Name":"Aryan","Age":23,});
})

app.use(("/"), (req, res) => {
    res.send("Hello Everyone This is Homepage!");
})

app.listen(3000,()=>{
    console.log("I'm listening at Port No 3000");
})