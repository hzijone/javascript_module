/**
 * 不需要依赖其它关系
 * @param  {[type]} ){                   var add [description]
 * @return {[type]}     [description]
 */
define(function(){
  
    var add = function(x,y){
    	return x+y;
    };
    return {
    	add:add
    }; 

});

// define(['myLib'],function(myLib){
//   function foo(){

//   	  // myLib.doSomething();
//   	  return "myLib";
//   }
//   return {
//   	  foo:foo
//   };

// });