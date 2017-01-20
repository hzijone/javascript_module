// alert("加载成功");
/**
 * [先加这些内容，再执行大括号里的内容]
 * @param  {[type]} $             [description]
 * @param  {[type]} _             [description]
 * @param  {[type]} Backbone){} [description]
 * @return {[type]}               [description]
 */
// require(['jquery','underscore','backbone'],function($,_,backbone){




// });


/**
 * [baseUrl 对模块进行命名，指定加载路径]
 * @type {String}   
 */
require.config({
	// baseUrl:"js",
	paths:{
		// "jquery":"jquery.min",
		"underscore":"http://cdn.bootcss.com/underscore.js/1.8.3/underscore-min.js",
		"backbone":"http://cdn.bootcss.com/backbone.js/1.3.3/backbone-min.js",
		"jquery": "http://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"
	}

});



/**************一个模块不依赖其它模块*******/

define(function(){
  
    var add = function(x,y){
    	return x+y;
    };
    return {
    	add:add
    }; 

})();


require(['math'],function(math){
	 alert(math.add(1,1));
});







