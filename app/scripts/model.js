"use strict";
 
var IdeasData = Backbone.Model.extend({
	idAttribute: "_id",

	defaults: {
		title: "None",
		caption: "None"
	} 
  })
 
  var Ideas = Backbone.Collection.extend({
  	model: IdeasData,
  	url: "http://tiny-pizza-server.herokuapp.com/collections/tad-ideas", 

  initialize: function() {
  	console.log("this is Ideas initialized");
  }
  })

//=======================================================================
  
var ApprovedData = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    title: "None",
    caption: "None"
  } 
  })

var Approved = Backbone.Collection.extend({
  model: ApprovedData,
  url: "http://tiny-pizza-server.herokuapp.com/collections/tad-approved",

  initialize: function() {
  	console.log("this is Approved initialized");
  }
  })




// //=======================================================================
//   var Progress = Backbone.Collection.extend({
//     model: Data,
//     url: "http://tiny-pizza-server.herokuapp.com/collections/tad-progress",

//   initialize: function() {
//     console.log("this is Progress initialized");
//   }

//   })



// //=======================================================================
//   var Complete = Backbone.Collection.extend({
//     model: Data,
//     url: "http://tiny-pizza-server.herokuapp.com/collections/tad-complete",

//   initialize: function() {
//     console.log("this is Complete initialized");
//   }

//   })