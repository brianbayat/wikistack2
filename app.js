const express = require('express');
const morgan = require('morgan');
const main = require('./views/main');
const { db, Page, User } = require('./models');
const app = express();

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

app.get('/',(req,res)=>{
  res.send(main());
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



