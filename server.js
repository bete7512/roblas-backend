const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const initModels = require('./models/init-models');
const dbConfig = require('./configuration/db');
const config = require('./configuration/keys');
const auth_route = require('./routes/auth');
const recource_route = require('./routes/routes');

const app = express();

const models = initModels(dbConfig.sequelize);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.get('/', function(req, res) {
  res.send('hello');
});
app.use('/api/auth/', auth_route);
app.use('/api/', recource_route);

dbConfig.sequelize
  .sync()
  .then(function() {
    app.listen(config.server.PORT,()=>{
      console.log(`Server connected ${config.server.PORT}`);
    });
  });
