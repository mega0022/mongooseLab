  class window.Section extends Backbone.Model
    urlRoot: '/section'
    idAttribute: '_id' #conforming to mongodb id syntax
    initialize: ->
      console.log 'Initializing a Section'

    defaults:
      title: 'Title'
      link: '#'
      body: 'Hello world'
      category: 'default'
      htmlId: '#'
      img: 'http://fc00.deviantart.net/fs70/i/2012/292/b/2/pumpkin_stock_2___blossom_by_nickistock-d5ia9li.jpg'