const express = require('express');
const morgan = require('morgan');

const { db, Page, User } = require('./models');
const app = express();

const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
// parses json bodies
app.use(express.json());

app.use(morgan('dev'));
app.use(express.static('public'));

db.authenticate().
then(() => {
  console.log('connected to the database');
});

app.use('/wiki',wikiRouter);
app.use('/user',userRouter);

app.get('/',(req,res)=>{
  try {
    res.redirect("/wiki");
  }
  catch (err) {
    res.sendStatus(404)
  }
});


const PORT = 1337;

const connect = async () =>{
  await User.sync();
  await Page.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

connect();



