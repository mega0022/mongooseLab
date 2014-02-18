// Generated by CoffeeScript 1.7.1

/*
Created by mart2967 on 1/30/14.
 */

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.SectionView = (function(_super) {
    __extends(SectionView, _super);

    function SectionView() {
      return SectionView.__super__.constructor.apply(this, arguments);
    }

    SectionView.prototype.tagName = 'div';

    SectionView.prototype.template = _.template($('#section-template').html());

    SectionView.prototype.editTemplate = _.template($('#section-edit-template').html());

    SectionView.prototype.events = {
      'change': 'change',
      'click button.edit': 'editSection',
      'click button.save': 'saveSection'
    };

    SectionView.prototype.initialize = function() {
      this.render();
    };

    SectionView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    SectionView.prototype.change = function(event) {
      var change;
      console.log('changed');
      change = {};
      change[event.target.name] = event.target.value;
      this.model.set(change);
      this.model.save();
      return this.render();
    };

    SectionView.prototype.editSection = function() {
      this.$el.html(this.editTemplate(this.model.toJSON()));
      return this;
    };

    SectionView.prototype.addClass = function() {
      return this.render();
    };

    SectionView.prototype.saveSection = function() {
      console.log('saving...');
      this.model.save({}, {
        success: function() {
          return console.log('saved');
        },
        error: function() {
          return console.log('error');
        }
      });
      return this.render();
    };

    return SectionView;

  })(Backbone.View);

}).call(this);

//# sourceMappingURL=sectionView.map
