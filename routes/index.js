const axios = require("axios");
const db = require("../models");

function apiRoutes(app) {
    app.get("/api/google/:title", function (req, res) {
        var title = req.params.title;

        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=" + title)
            .then((response) => {
                res.json(response.data);
            });
    });

    app.post("/api/books", function (req, res) {
        var newBook = req.body;
        db.Book.create(newBook).then((response) => {
            res.json(response);
        });
    });

    app.get("/api/books", function (req, res) {
        db.Book.find().then((response) => {
            res.json(response);
        });
    });

    app.delete("/api/books/:id", function (req, res) {
        var id = req.params.id;
        console.log(id);

        db.Book.findByIdAndDelete(id, function (err) {
            if (err) console.log(err);
            console.log("Successful deletion");
            res.send("Successful Deletion");
        });
    });
}

module.exports = apiRoutes;
