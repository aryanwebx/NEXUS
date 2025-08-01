const express = require('express');
const app = express();
const main = require('./database')
const User = require('./models/user')

app.use(express.json());

app.get("/info", async (req, res) => {
    res.send(await User.find())

})

app.post("/info", async (req, res) => {

    const user = new User(req.body);
    await user.save();
    res.send("Saved")
})

app.delete("/info", async (req, res) => {
    await User.deleteOne({name:"Ronnie"})
    res.send("Deleted Successfully")    
})


app.put("/info",async(req,res)=>{
    await User.updateOne({name:'Aryan'},{age:20,City:"Delhi"})
    res.send("Updated Successfully");
})

main()
    .then(() => {
        console.log("connected to DB");
        app.listen(3000, () => {
            console.log("Listening at port 3000")
        })
    })
    .catch((err) => console.log(err));

