const express = require('express')
const app = express()
const mongoose = require('mongoose')
const peronne = require('./models/personne');
// variable d'environnement
require('dotenv').config()

// connexion à la base de données
const uri = process.env.uriAtlas
mongoose.connect(uri, 
  { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  
  .then(() => console.log('connexion à la BDD réussie'))
  .catch(() => console.log('Erreur !!! conexion à la BDD échoué.'))

// Déclarer le model de template à utiliser
  app.set('views', './views')
  app.set('view engine', 'ejs')  
  app.use(express.static('public'))


  app.get('/', (req,res) => {
      res.render('pages/home', {
          title: 'Accueil'
      })
  }) 
app.listen(8080)