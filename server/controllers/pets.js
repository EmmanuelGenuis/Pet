console.log("inside of foodtrucks.js");



const mongoose = require("mongoose");

const Pet = mongoose.model("Pet");



class Pets {

    getAll(req, res){

        Pet.find({}).sort({"likes" : -1}).exec( function(err, pets){

            if(err){

                res.json({"status": "not ok", "errors": err});

            }else{

                res.json({"status": "ok", "pets": pets});

            }

        });

    }



    getId(req, res){

        Pet.findOne({_id: req.params.id}, function(err, pet){

          if(err){

              res.json({"status": "not ok", "errors": err});

          }

          else{

              res.json({"status": "ok", "pet": pet});

          }

        })

    }


    create(req, res){

        Pet.find({name: req.body.name}, function(err, pets){

            if (err) {

                res.json({"status": "not ok", "errors": err});

            } else if(pets.length > 0){

                res.json(

                    {"status": "not ok", 

                        "errors": {

                            "errors": {

                                "name": { 

                                    "message": "Pick something else"

                                }

                            }

                        }

                    });

            } else {

                let pet = new Pet(req.body);

                pet.save(function(err){

                    if(err){

                        res.json({"status": "not ok", "errors": err});

                    }else{

                        res.json({"status": "ok", "id": pet._id});

                    }

                });

            }

        })

    }



    update(req, res){

      Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){

        if(err){

            res.json({"status": "not ok", "errors": err});

        }else{

            res.json({"status": "ok"});

        }

      })

    }



    delete(req, res){

      Pet.remove({_id: req.params.id}, function(err){

        if(err){

            res.json({"status": "not ok", "errors": err});

        }else{

            res.json({"status": "ok"});

        }

      })

    }

    addLike(req, res){
        Pet.findOne({_id:req.params.id}, function(err, pet){

                            pet.likes+=1;
                            
                            pet.save(function(err){

                                if (err){
        
                                    res.json({"status": 'not ok', "errors": err});
        
                                }
        
                                else{
        
                                    res.json({"status": 'ok'});
        
                                }
        
        
        
                            })

    })
}

}

module.exports = new Pets();