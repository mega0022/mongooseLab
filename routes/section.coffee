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
      title: 'Node.js'
      link: 'http://www.nodejs.org'
      category: 'default'
      htmlId: 'node'
      body: ' <select id ="grade1" name="grade1">
              <option value=0>-select grade-</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="D-">D-</option>
              <option value="F">F</option>
          </select>'
      img: 'http://www.wvliving.com/Fall-2011/pumpkin_stock.jpg'
    },
    {
      title: 'Coffeescript'
      link: 'http://www.coffeescript.org'
      htmlId: 'coffee'
      body: 'CoffeeScript is a programming language that transcompiles to JavaScript. The language adds syntactic sugar inspired by Ruby, Python and Haskell to enhance JavaScript\'s brevity and readability, adding additional features like list comprehension and pattern matching. CoffeeScript compiles predictably to JavaScript, and programs can be written with less code, typically 1/3 fewer lines, with no effect on runtime performance. Since March 16, 2011, CoffeeScript has been on GitHub\'s list of most-watched projects, and as of 2013 was the twelfth[5] most popular language on GitHub in terms of project-count (at one point it was tenth). However, also in 2013 it was ranked 29th among languages, based on number of questions tagged at Stack Overflow.'
      img: 'http://fc09.deviantart.net/fs71/i/2011/282/8/c/pumpkin_stock_by_lost_neverfound-d4cda05.jpg'
    },
    {
      title: 'Mocha'
      link: 'http://visionmedia.github.io/mocha/'
      htmlId: 'mocha'
      body: 'Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.'
      img: 'http://design1.com/wp-content/uploads/2013/03/Pumpkin-Stock-Photo.jpg'
    },
    {
      title: 'Backbone.js'
      link: 'http://www.backbonejs.org'
      htmlId: 'backbone'
      body: 'Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.'
      img: 'http://www.sxc.hu/assets/19/182620/pumpkin-201015-m.jpg'
    },
    {
      title: 'pumkin'
      link: ''
      htmlId: ''
      img: ''

    }
    {
      title: 'pumkinb'
      link: ''
      htmlId: ''
      img: ''

    }

  ]
  for section in sections
    createAndAdd section
    console.log section.title

createAndAdd = (sec)->
  newSection = new Section(sec)
  newSection.save()