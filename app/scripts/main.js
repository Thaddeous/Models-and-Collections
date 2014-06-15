'use strict';

//================================================
var anotherIdeasCollection = new Ideas();
var ideaViewInstance;

anotherIdeasCollection.fetch().done(function(){

  anotherIdeasCollection.each(function(foo){
    ideaViewInstance = new IdeaView({model: foo});
  });
}) 


//================================================
var anotherApprovedCollection = new Approved();
var approveViewInstance;

anotherApprovedCollection.fetch().done(function(){

  anotherApprovedCollection.each(function(foo){
    approveViewInstance = new ApprovedView({model: foo});
  });
})


// //================================================
// var anotherApprovedCollection = new Approved();
// var approveViewInstance;

// anotherApprovedCollection.fetch().done(function(){

//   anotherApprovedCollection.each(function(foo){
//     approveViewInstance = new ApprovedView({model: foo});
//   });
// })

// //================================================
// var anotherApprovedCollection = new Approved();
// var approveViewInstance;

// anotherApprovedCollection.fetch().done(function(){

//   anotherApprovedCollection.each(function(foo){
//     approveViewInstance = new ApprovedView({model: foo});
//   });
// })