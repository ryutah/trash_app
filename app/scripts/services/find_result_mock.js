'use strict';

var MockContent = {
  Base: function() {
    this.baseId = undefined;
    this.baseName = undefined;
    this.descId = undefined;
  },

  BaseTag: function() {
    this.baseId = undefined;
    this.tagId = undefined;
  },

  Tag: function() {
    this.tagId = undefined;
    this.tagName = undefined;
    this.explain = undefined;
  },

  Group: function() {
    this.groupId = undefined;
    this.groupName = undefined;
    this.explain = undefined;
    this.index = undefined;
  },

  BaseGroup: function() {
    this.baseId = undefined;
    this.groupId = undefined;
  },

  OtherName: function() {
    this.otherId = undefined;
    this.baseId = undefined;
    this.otherName = undefined;
    this.explain = undefined;
  },

  Description: function() {
    this.descId = undefined;
    this.baseId = undefined;
    this.title = undefined;
    this.explain = undefined;
  }
};

var CreateContent = {
  createBase: function(){
    var base1 = new MockContent.Base();
    base1.baseId = 1;
    base1.baseName = '平山';
    base1.descId = '1';

    var baseArray = [base1];
    return baseArray;
  },

  createOtherName: function() {
    var otherName1 = new MockContent.OtherName();
    otherName1.otherId = 1;
    otherName1.baseId = 1;
    otherName1.otherName = '変態';
    otherName1.explain = '別名';

    var otherArray = [otherName1];
    return otherArray;
  },

  createTag: function() {
    var tag1 = new MockContent.Tag();
    tag1.tagId = 1;
    tag1.tagName = 'HENTAI';
    tag1.explain = 'ヘンタイはタグであり分類である';

    var tagArray = [tag1];
    return tagArray;
  },

  createBaseTag: function() {
    var bt = new MockContent.BaseTag();
    bt.baseId = 1;
    bt.tagId = 1;

    var btArray = [bt];
    return bt;
  },

  createGroup: function() {
    var group1 = new MockContent.Group();
    group1.groupId = 1;
    group1.groupName = 'ヘンタイ';
    group1.explain = '男、女にと並ぶ人を分類するうえでの基本となるもの\nいい意味で。';

    var groupArray = [group1];
    return groupArray;
  },

  createBaseGroup: function() {
    var bg = new MockContent.BaseGroup();
    bg.baseId = 1;
    bg.groupId = 1;

    var bgArray = [bg];
    return bg;
  },

  createDesc: function() {
    var desc1 = new MockContent.Description();
    desc1.descId = 1;
    desc1.baseId = 1;
    desc1.title = '概要';
    desc1.explain = '平山（しすてむえんじにあ）';

    var descArray = [desc1];
    return descArray;
  }
};

/**
 * @ngdoc service
 * @name trashAppApp.findResultMock
 * @description
 * # findResultMock
 * Factory in the trashAppApp.
 */
angular.module('trashAppApp')
  .factory('findResultMock', function () {

    return {
      Bases: function() {
        var bases = function(){
          var _base = CreateContent.createBase();

          this.findAll = function() {
            return _base;
          };

          this.findById = function(baseId) {
            var result;
            _base.forEach(function(b) {
              if(baseId === b.baseId) {
                result = b;
              }
            });
            return result;
          };

          this.findByName = function(name) {
            var result = [];
            _base.forEach(function(b) {
              if (name === b.baseName) {
                result.push(b);
              }
            });
            return result;
          };
        };
        return new bases();
      },

      Tags: function() {
        var tags = function() {
          var _tag = CreateContent.createTag();

          this.findAll = function() {
            return _tag;
          };

          this.findById = function(id) {
            var result;
            _tag.forEach(function(t) {
              if (id === t.tagId) {
                result = t;
              }
            });
            return result
          };

          this.findByNae = function(name) {
            var result = [];
            _tag.forEach(function(t) {
              if (name === t.tagName) {
                result.push(t);
              }
            });
            return result;
          };
        };
        return new tags();
      },

      BaseTags: function() {
        var bts = function() {
          var _bt = CreateContent.createBaseTag();

          this.findAll = function() {
            return _bt;
          };

          this.findByBaseId = function(id) {
            var result = [];
            _bt.forEach(function(b) {
              if (id === b.baseId) {
                result.push(b);
              }
            });
            return result;
          };

          this.findByTagId = function(id) {
            var result = [];
            _bt.forEach(function(b) {
              if (id === b.tagId) {
                result.push(b);
              }
            });
            return result;
          };
        };
        return new bts();
      },

      groups: function() {
        return CreateContent.createGroup();
      },

      baseGroups: function() {
        return CreateContent.createBaseGroup();
      },

      otherNames: function() {
        return CreateContent.createOtherName();
      },

      descs: function() {
        return CreateContent.createDesc();
      }
    };
  });
