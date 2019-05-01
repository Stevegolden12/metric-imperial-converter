'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var expect = require('chai').expect;
var cors = require('cors');
const helmet = require('helmet')

var apiRoutes = require('./routes/api.js');
var fccTestingRoutes = require('./routes/fcctesting.js');
var runner = require('./test-runner');
var convertHandler = require('./controllers/convertHandler.js')

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({ origin: '*' })); //For FCC testing purposes only

//Security measures
app.use(helmet.noSniff())
app.use(helmet.xssFilter())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

/********************************************************************
 *  Figure out why convertHandler methods are not being recognize
 * ******************************************************************/
//Get number
var cH = new convertHandler;

app.route('/api/convert')
  .get(function (req, res) {
    const qInput = req.query.input;
    console.log("checkInput: " + cH.chkInput(qInput))
    console.log("getNum: " + cH.getNum(qInput))
    console.log("getUnit: " + cH.getUnit(qInput))
    const ggUnit = cH.getUnit(qInput)
    const rrUnit = cH.getReturnUnit(ggUnit)
    console.log("spell out units: " + cH.spellOutUnit(rrUnit))

    res.send('TESTING')
  })

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + process.env.PORT);
  if (process.env.NODE_ENV === 'test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch (e) {
        var error = e;
        console.log('Tests are not valid:');
        console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
