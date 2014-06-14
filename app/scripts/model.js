"use strict";
 
var Data = Backbone.Model.extend({
	idAttribute: "_id",

	defaults: {
		title: "None",
		caption: "None"
	} 
  })
 

  var Ideas = Backbone.Collection.extend({
  	model: Data,
  	url: "http://tiny-pizza-server.herokuapp.com/collections/tad-ideas", 

  initialize: function() {
  	console.log("this is IDEAS initialized");
  }

  })




  // var Approved = Backbone.Collection.extend({

  // initialize: function() {
  // 	console.log("this is IDEAS initialized");
  // }

  // })




  // var Progress = Backbone.Collection.extend({

  // initialize: function() {
  // 	console.log("this is IDEAS initialized");
  // }

  // })





  // var Complete = Backbone.Collection.extend({

  // initialize: function() {
  // 	console.log("this is IDEAS initialized");
  // }

  // })
