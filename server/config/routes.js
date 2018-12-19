console.log ("inside of routes.js");



const Pets = require("../controllers/pets");



module.exports = function(app){

    app.get("/pets", Pets.getAll);

    app.get("/pet/:id", Pets.getId);

    app.post("/pet", Pets.create);

    app.post('/pet/:id/like', Pets.addLike);

    app.put('/pet/:id', Pets.update);

    app.delete('/pet/:id', Pets.delete);

}