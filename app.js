

const express=require('express')




const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const homepage=require('./router/homepagerouter');
const flashcard=require('./router/flashcardrouter')
const apifetcher=require('./router/apifetcher')
const flashcardfetcher=require('./router/flashcardfetcher')
const flashcardloader=require('./router/flashcardloader')
const db=require("./utils/databaseUtil");
const {mongoconnect} = require('./utils/databaseUtil');


app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(homepage);
app.use(flashcard);
app.use(apifetcher);
app.use(flashcardfetcher);
app.use(flashcardloader)



const PORT = 3000;
mongoconnect(client =>{
  console.log(client);
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });

})


