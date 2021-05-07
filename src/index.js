const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// middlewares


// routes
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname,'public')));
// static files


// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
