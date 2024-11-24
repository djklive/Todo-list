const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connection to mongodb

// mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('Connected to MongoDB'))
//  .catch(err => console.error('Failed to connect to MongoDB', err));

mongoose.connect('mongodb://mongo:27017/mydatabase')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Could not connect to MongoDB', err);
});

// middleware
app.use(express.urlencoded({extended: true} ));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));




// server configurations...
app.listen(3000, () => console.log('listening on port: 3000'));