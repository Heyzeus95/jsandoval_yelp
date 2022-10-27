require("dotenv").config();
const express = require("express");
const morgan = require('morgan');
const app = express();




// This is our MIDDLEWARE, ((it's just a function, can have multiples, express.js)

app.use(express.json());

// Get all Restaurants

app.get("/api/v1/restaurants", (req, res) => {
   console.log("route handler ran");
    res.status(200).json({
        status: "success",
        data: {
          restaurant: ["mcdonalds", "wendys"],
        },
    });
});


//Get a Restaurant

app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "succes",
        data: {
            restaurant:"mcdonalds"
        }
    })
});


// Create a Restaurant

app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "succes",
        data: {
            restaurant:"mcdonalds",
        },
    });
});


// Update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "succes",
        data: {
            restaurant:"mcdonalds",
        },
    });
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "sucess"
    });

});



//http://localhost:3000/getRestaurants

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`server is up and listening on port ${port}`); 
});
