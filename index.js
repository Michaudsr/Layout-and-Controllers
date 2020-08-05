const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts');


app.set('view engine', 'ejs')
app.use(ejsLayouts);
app.use('/faves', require('./controllers/faves'));
app.use('/hates', require('./controllers/hates'));

app.get('/', (req, res)=>{
    res.render('home')
  });

// app.get('/animals', (req, res)=>{
//     res.render('animals', {title: 'Favorite Animals', animals: ['cat', 'squirrel']})
//   });

// app.get('/foods', (req, res)=>{
//     res.render('foods', {title: 'Favorite Foods', foods: ['potatoe', 'shrimp', 'rice', 'spinach']})
// });


app.listen(8000)