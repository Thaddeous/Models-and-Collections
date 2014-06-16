'use strict';

// =======================================================
// =====Ideas Instance Instantiated with functions========
// ======================================================= 
var anotherIdeasCollection = new Ideas();
var ideaViewInstance;

anotherIdeasCollection.fetch().done(function(){
  anotherIdeasCollection.each(function(foo){
    ideaViewInstance = new IdeaView({model: foo});
  })
}) 


// =======================================================
// =====Approved Instance Instantiated with functions=====
// =======================================================
var anotherApprovedCollection = new Approved();
var approveViewInstance;

anotherApprovedCollection.fetch().done(function(){
  anotherApprovedCollection.each(function(foo){
  	approveViewInstance = new ApprovedView({model: foo});
  })
})


// =======================================================
// =====Progress Instance Instantiated with functions=====
// =======================================================
var anotherInProgressCollection = new InProgress();
var progressViewInstance;

anotherInProgressCollection.fetch().done(function(){
  anotherInProgressCollection.each(function(foo){
  	progressViewInstance = new InProgressView({model: foo});
  })
})


// =======================================================
// =====Progress Instance Instantiated with functions=====
// =======================================================
var anotherCompletedCollection = new Completed();
var completeViewInstance;

anotherCompletedCollection.fetch().done(function(){
  anotherCompletedCollection.each(function(foo){
  	completeViewInstance = new CompletedView({model: foo});
  })
})