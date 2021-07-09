//PORT
const PORT = process.env.PORT || 7000;

const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const knex = require("knex");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

//HELPERS
const dbConfig = require("./knexfile");
const db_helpers = require("./db_helpers");
const db = knex(dbConfig.development);

server.get("/rsvp", (req, res) => {
  db_helpers
    .getUsers()
    .then((userInfo) => {
      res.send(userInfo);
      console.log(userInfo)
    })
    .catch((err) => {
      let error = err;
      console.log(error);
      res.status(500).send(error);
    });
});



server.post("/register", (req, res) => {
  let rsvp = req.body;
  db("RSVP")
    .insert(rsvp)
    .then((ids) => {
      res.status(201).json(ids);
    })
    .catch((err) => {
      const Error = err;
      console.log(Error);
      res.status(500).send(Error);
    });
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
