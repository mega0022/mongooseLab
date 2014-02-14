// Generated by CoffeeScript 1.7.1

/*
Created by mart2967 on 1/30/14.
 */

(function() {
  var AppRouter, app,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AppRouter = (function(_super) {
    __extends(AppRouter, _super);

    function AppRouter() {
      return AppRouter.__super__.constructor.apply(this, arguments);
    }

    AppRouter.prototype.routes = {
      '': 'index'
    };

    AppRouter.prototype.index = function() {
      var sectionList;
      sectionList = new window.SectionCollection();
      sectionList.fetch({
        success: function() {
          $('#content').html(new window.SectionCollectionView({
            collection: sectionList
          }).$el);
          $('#bs-example-navbar-collapse-1').html(new window.NavbarView({
            collection: sectionList
          }).$el);
        }
      });
    };

    return AppRouter;

  })(Backbone.Router);

  app = new AppRouter();

  Backbone.history.start({
    pushState: true
  });

}).call(this);