const mongoose = require('mongoose')

// Définir mon schéma
var personSchema = new mongoose.Schema({
    name: {type:String, require : true},
    age: Number,
    favoriteFood: [{
         food: String
    }]
})

// Création du model de schéma dont le document est "personne"
const person = mongoose.model('personne', personSchema)


// Création de l'instance de model

people = new person({name:'Mouhamed'})
    person.age = 30
    person.favoriteFood = ({food: 'venisia'})


// Création de plusieurs enregistrement

var arrayOfPeople = ([
{
    name:'Fatim',
    age:22,
    favoriteFood: ({food: ['Pizza', 'burritos'].toString()})
},

{
    name:'Mary',
    age:30,
    favoriteFood: ({food: ['burritos', 'Norvégien'].toString()})
},
{
    name:'Tata',
    age:25,
    favoriteFood: ({food: ['Oriental', 'burritos'].toString()})
},
{
    name:'Mary',
    age:35,
    favoriteFood:({food: ['hamburger', 'burritos'].toString()})
},
{
    name:'Fatim',
    age:35,
    favoriteFood:({food: ['hamburger', 'Pizza'].toString()})
},
{
    name:'Thierno',
    age:35,
    favoriteFood:({food: ['hamburger', 'Pizza'].toString()})
}
])

// Création des enregistrement dans la base de données
person.create(arrayOfPeople, (err, data) => {
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
})

// Sauvegarde les enregistrement dans la base
person.save(arrayOfPeople, (err, data) => {
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
})

// Rechercher dans la base toute personne ayant comme nom Fatim
person.find({name: 'Fatim'},  (err, data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})

//Trouvez une seule personne qui a un certain aliment dans les favoris de la personne
person.findOne({food: 'Hamburger'}, (err, data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})

// Trouvez la (seule !!) personne ayant un _id donné (exemple: _id:'6367b9c3f55f73b15a27b859')
var id = '6367b9c3f55f73b15a27b859'
person.findById(id, (err, data) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

//Recherchez une personne par nom et définissez son âge sur 20 ans
person.findOneAndUpdate({name:'Thierno'}, {age: 20}, (err, data) =>{
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

// Supprimer une personne par le _id de la personne
person.findByIdAndRemove(id= '6367d60bbd0dd09244dcf636', (err, data) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

// Supprimez toutes les personnes dont le nom est "Mary", en utilisant Model.remove()
person.remove({name: 'Mary'}, (err, data) => {
    if (err){
        console.log(err)
    }else{
        console.log(data) 
    }
})

// Trouvez des gens qui aiment les burritos et les triez
person.find({food: 'burritos'})
    .sort({name : "desc"})
    .limit(2)
    .select("-name")
    .exec((err, data) => {
        if (err){
            console.log(err)
        }else{
            console.log(data) 
        }
    })