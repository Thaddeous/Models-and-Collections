'use strict';

var anotherIdeasCollection = new Ideas();
var dataViewInstance;


anotherIdeasCollection.fetch().done(function(){

  anotherIdeasCollection.each(function(foo){
    dataViewInstance = new DataView({model: foo});
  });

}) 