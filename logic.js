/* 
  Logic.js v1.0.0
*/
(function (global, factory) {
  // typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : (typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Logic = factory()));
  if(typeof exports === 'object' && typeof module !== 'undefined'){
    module.exports = factory()
  }else if(typeof define === 'function' && define.amd){
    define(factory)
  }else{
    global = global || self, 
    global.Logic = factory()
  }
})(this, function(){
  'use strict';
  var Logic = function(){

  }

  return Logic
})
