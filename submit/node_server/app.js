


var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    cors = require("cors"),
    Task = require('./views/model/model');
    var routes = require('./views/route/route');
    app.use(express.json());
mongoose.connect('mongodb+srv://test:test@cluster0.bdfr1.mongodb.net/testdb?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true},
      () => console.log(" Mongoose is connected")
)


app.use(cors());
app.use(routes);
const PORT = process.env.PORT || 9000;
app.listen(PORT);
console.log(`Server listening on port express ${PORT}`)