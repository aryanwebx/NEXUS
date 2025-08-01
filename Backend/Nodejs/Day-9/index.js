const express = require('express');
const app = express();
const { Auth } = require("./middleware/auth")



//for convert json into javascript object
app.use(express.json());

//Local database
const menu = [
    { id: 1, foodName: "Paneer Butter Masala", price: 250, isVeg: true },
    { id: 2, foodName: "Chicken Biryani", price: 300, isVeg: false },
    { id: 3, foodName: "Veg Fried Rice", price: 180, isVeg: true },
    { id: 4, foodName: "Mutton Rogan Josh", price: 350, isVeg: false },
    { id: 5, foodName: "Masala Dosa", price: 120, isVeg: true },
    { id: 6, foodName: "Fish Curry", price: 280, isVeg: false },
    { id: 7, foodName: "Chole Bhature", price: 150, isVeg: true },
    { id: 8, foodName: "Egg Curry", price: 220, isVeg: false },
    { id: 9, foodName: "Pasta Alfredo", price: 200, isVeg: true },
    { id: 10, foodName: "Tandoori Chicken", price: 320, isVeg: false },
    { id: 11, foodName: "Shahi Paneer", price: 260, isVeg: true },
    { id: 12, foodName: "Prawns Masala", price: 340, isVeg: false },
    { id: 13, foodName: "Aloo Paratha", price: 100, isVeg: true },
    { id: 14, foodName: "Butter Chicken", price: 330, isVeg: false },
    { id: 15, foodName: "Dal Makhani", price: 180, isVeg: true },
    { id: 16, foodName: "Keema Naan", price: 250, isVeg: false },
    { id: 17, foodName: "Schezwan Noodles", price: 190, isVeg: true },
    { id: 18, foodName: "Lamb Korma", price: 370, isVeg: false },
    { id: 19, foodName: "Pani Puri", price: 50, isVeg: true },
    { id: 20, foodName: "Hyderabadi Haleem", price: 360, isVeg: false },
    { id: 21, foodName: "Dhokla", price: 90, isVeg: true },
    { id: 22, foodName: "Mutton Kebab", price: 300, isVeg: false },
    { id: 23, foodName: "Vegetable Spring Roll", price: 120, isVeg: true },
    { id: 24, foodName: "Crab Curry", price: 400, isVeg: false },
    { id: 25, foodName: "Malai Kofta", price: 240, isVeg: true },
    { id: 26, foodName: "Grilled Fish", price: 350, isVeg: false },
    { id: 27, foodName: "Hakka Noodles", price: 180, isVeg: true },
    { id: 28, foodName: "Beef Steak", price: 420, isVeg: false },
    { id: 29, foodName: "Rajma Chawal", price: 160, isVeg: true },
    { id: 30, foodName: "Chicken Kebab", price: 270, isVeg: false }
];


let AddToCart = [];

//Admin functionality

app.get("/food", (req, res) => {
    res.status(200).send(menu);
})

app.post("/Admin", Auth, (req, res) => {
    const FoodItem = req.body;
    menu.push(FoodItem);
    res.status(201).send("FoodItem is added successfully")
})

app.delete("/Admin/:id", Auth, (req, res) => {
    const id = parseInt(req.params.id);
    const index = menu.findIndex(item => item.id === id);

    if (index === -1)
        res.send("Item doesn't exist");
    else {
        menu.splice(index, 1);
        res.send("Item Deleted successully");
    }
})

app.patch("/Admin/:id", Auth, (req, res) => {
    const id = parseInt(req.params.id);

    const fooditem = menu.find(item => item.id === id);


    if (fooditem) {
        if (req.body.foodName)
            fooditem.foodName = req.body.foodName;
        if (req.body.price)
            fooditem.price = req.body.price;
        if (req.body.isVeg != menu.isVeg)
            fooditem.isVeg = req.body.isVeg;

        res.send("Item updated succesfully");
    }
    else {
        res.send("item doesn't exist");
    }

})


//user functionality

app.get("/Cart", (req, res) => {
    res.status(200).send(AddToCart)
})

app.post("/Addtocart/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const fooditem = menu.find(item => item.id === id)

    if (fooditem) {
        AddToCart.push(fooditem);
        res.status(201).send("Item Added to Cart successfully");
    }
    else {
        res.send("Item doesn't exist");
    }

})

app.delete("/deleteCart/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = AddToCart.findIndex(item => item.id === id);

    if (index!=-1) {
        AddToCart.splice(index, 1);
        res.send("Item successfully deleted from cart");
    }
    else {
        res.send("Item doesn't exist in cart");
    }

})

app.listen(3000, () => {
    console.log("Listening at Port Number 3000");
})