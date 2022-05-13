require('dotenv').config()
const express = require('express');
const app = express();
console.log(process.env.PORT);

const port = process.env.PORT|| 3003;
//const port = 3000;np


const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];
//----------------------------------------------------------------------
//more specific to less specific
app.get('/awesome', (req, res) => {
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});


//--------------------------------------------------------------------------------------
///trying to get multiple response for request. 1 response per request
/*app.get('/oops/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
    // error cannot send more than one response!
    res.send('this is the index: ' + req.params.indexOfPlantsArray);
});*/
//----------------------------------------------------------------------------------
//if else statements can be used to have multipke responses per request if conditions are met
/*app.get('/fixed/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.index]) {
          res.send(plants[req.params.indexOfPlantsArray]);
    } else {
      res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
    }

});*/
//--------------------------------------------------------------------------------------
//request have to be made in order of importance, runs code in order. so place things from more specific to less.
//function below did not work until moved above what it described.
/*app.get('/awesome', (req, res) => { 
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });*/
  app.listen(port,() => {
    console.log('I am listening on port' , port);
});