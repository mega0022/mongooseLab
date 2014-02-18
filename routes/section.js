// Generated by CoffeeScript 1.7.1
(function() {
  var Section, createAndAdd, populateDB;

  Section = require('../schemas/schemas').Section;

  Section.count({}, function(err, c) {
    if (err) {
      console.log(err);
    }
    if (c === 0) {
      console.log('Populating database');
      return populateDB();
    }
  });

  exports.addClass = function(req, res) {
    return createAndAdd();
  };

  exports.findAll = function(req, res) {
    return Section.find(function(err, items) {
      return res.send(items);
    });
  };

  exports.create = function(req, res) {
    var newSection;
    newSection = new Section(req.body);
    console.log('created section ' + newSection.title);
    newSection.save();
    return res.send();
  };

  exports.getById = function(req, res) {
    var id;
    id = req.route.params['id'];
    return Section.findById(id, function(err, result) {
      return res.send(result);
    });
  };

  exports.edit = function(req, res) {
    var id, section;
    section = req.body;
    delete section._id;

    /*console.log req */
    id = req.params.id;
    return Section.update({
      _id: id
    }, {
      $set: section
    }, function(err, numAffected, raw) {
      if (err) {
        console.log(err);
      }
      console.log('The number of updated documents was %d', numAffected);
      return res.send(section);
    });
  };

  populateDB = function() {
    var section, sections, _i, _len, _results;
    sections = [
      {
        className: 'Class 1',
        htmlId: 'class 1'
      }, {
        className: 'Class 2',
        htmlId: 'class 2'
      }, {
        className: 'Class 3',
        htmlId: 'class 3'
      }, {
        className: 'Class 4',
        htmlId: 'class 4'
      }
    ];
    _results = [];
    for (_i = 0, _len = sections.length; _i < _len; _i++) {
      section = sections[_i];
      createAndAdd(section);
      _results.push(console.log(section.className));
    }
    return _results;
  };

  createAndAdd = function(sec) {
    var newSection;
    newSection = new Section(sec);
    return newSection.save();
  };

}).call(this);

//# sourceMappingURL=section.map
