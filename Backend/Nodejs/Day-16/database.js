const mongoose = require('mongoose');

async function main() {

    await mongoose.connect("mongodb+srv://aryanwebx:yadavhai2%40@aryanwebx.a3mry3m.mongodb.net/Bookstore")
}

module.exports = main;    