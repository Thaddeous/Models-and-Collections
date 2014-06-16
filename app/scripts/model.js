"use strict";

// =======================================================
// =============Ideas Model and Collection================
// ======================================================= 
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



// =======================================================
// =============Approve Model and Collection==============
// ======================================================= 
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



// =======================================================
// ============Progress Model and Collection==============
// ======================================================= 
var InProgressData = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    title: "None",
    caption: "None"
  }
})

var InProgress = Backbone.Collection.extend({
  model: InProgressData,
  url: "http://tiny-pizza-server.herokuapp.com/collections/tad-progress",

  initialize: function() {
    console.log("this is Progress initialized");
  }
})



// =======================================================
// ============Complete Model and Collection==============
// =======================================================
var CompletedData = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: {
    title: "None",
    caption: "None"
  }
})

var Completed = Backbone.Collection.extend({
  model: CompletedData,
  url: "http://tiny-pizza-server.herokuapp.com/collections/tad-complete",

  initialize: function() {
    console.log("this is Complete initialized");
  }
})
