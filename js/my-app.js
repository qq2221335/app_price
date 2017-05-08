var myApp = new Framework7({
	template7Pages: true, //连接参数
	pushState: true,
	swipePanel: 'left',
	modalTitle:"提示",
	// enable Template7 rendering for Ajax and Dynamic pages
});

var $$ = Dom7;


var viewindex = myApp.addView('#Farm_food',{
	domCache: true,  //页面缓存

});

//var viewnews = myApp.addView('#index-news',{
//	domCache: true,
//});
//
//var viewnearby = myApp.addView('#index-nearby',{
//	domCache: true,
//
//});
//
//var viewWo = myApp.addView('#index-wo',{
//	domCache: true,
//});


