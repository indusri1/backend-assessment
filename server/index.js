const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getCharacter } = require('./controller')
const { getMovie } = require('./controller')
const { getAnimal } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/character", getCharacter);
app.get("/api/movie", getMovie);
app.get("/api/animal", getAnimal);




app.listen(4000, () => console.log("Server running on 4000"));
