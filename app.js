// Generated by CoffeeScript 1.7.1
(function() {
  var app, db, express, http, mongoose, path, routes, section;

  express = require('express');

  routes = require('./routes');

  section = require('./routes/section');

  http = require('http');

  path = require('path');

  mongoose = require('mongoose');

  app = express();

  mongoose.connect('mongodb://localhost/test');

  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {
    return console.log('DB connection opened');
  });

  app.set('layout', 'layouts/main');

  app.set('partials', {
    head: 'partials/head',
    navbar: 'partials/navbar',
    scripts: 'partials/scripts'
  });

  app.engine('html', require('hogan-express'));

  app.enable('view cache');

  app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express["static"](path.join(__dirname, 'public')));
    return app.use(express["static"](path.join(__dirname, 'bower_components')));
  });

  app.configure('development', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', routes.index);

  app.get('/section/:id', section.getById);

  app.post('/section', section.create);

  app.get('/sections', section.findAll);

  app.put('/section/:id', section.edit);

  http.createServer(app).listen(app.get('port'), function() {
    return console.log('Express server listening on port ' + app.get('port'));
  });

}).call(this);

//# sourceMappingURL=app.map
