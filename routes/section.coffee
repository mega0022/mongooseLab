Section = require('../schemas/schemas').Section

# Populate the database if there are no records
Section.count({},(err, c) ->
  console.log err if err
  if c == 0
    console.log 'Populating database'
    populateDB()
)

exports.findAll = (req, res) ->
  Section.find (err, items) ->
    res.send items


exports.create = (req, res) ->
  newSection = new Section req.body
  console.log 'created section ' + newSection.title
  newSection.save()
  res.send()

exports.getById = (req, res) ->
  id = req.route.params['id']
  Section.findById id, (err, result) ->
    res.send result

exports.edit = (req, res) ->
  section = req.body
  delete section._id
  ###console.log req###

  id = req.params.id
  Section.update({ _id: id }, { $set: section }, (err, numAffected, raw) ->
    console.log err if err
    console.log 'The number of updated documents was %d', numAffected
    #console.log 'The raw response from Mongo was ', raw



    res.send(section)
  )

populateDB = ->
  sections = [
    {
      className: 'Class 1'
      link: 'http://www.nodejs.org'
      category: 'default'
      htmlId: 'class 1'
    },
    {
      className: 'Class 2'
      link: 'http://www.coffeescript.org'
      htmlId: 'class 2'
    },
    {
      className: 'Class 3'
      link: 'http://visionmedia.github.io/mocha/'
      htmlId: 'class 3'
    },
    {
      className: 'Class 4'
      link: 'http://www.backbonejs.org'
      htmlId: 'class 4'
    }

  ]
  for section in sections
    createAndAdd section
    console.log section.className

createAndAdd = (sec)->
  newSection = new Section(sec)
  newSection.save()