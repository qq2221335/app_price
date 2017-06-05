var myApp = new Framework7({
    template7Pages: true, //连接参数
    pushState: true,
    swipePanel: 'left',
    modalTitle:"提示",
    // enable Template7 rendering for Ajax and Dynamic pages
});

var $$ = Dom7;

var viewindex = myApp.addView('#index',{
 domCache: true,  //页面缓存
 });

 var viewTask = myApp.addView('#index-Task',{
 domCache: true,
 });

 var viewSearch = myApp.addView('#index-Search',{
 domCache: true,
 });

 var viewWo = myApp.addView('#index-Wo',{
 domCache: true,
 });

var _thisArea ;//地区选择当前点击对象

$$(document).on('pageBeforeAnimation', function(e) {
    var page = e.detail.page;

    //填报
    /*if (page.name === 'TaskWrite' || page.name === 'TaskCheck') {
        //滑动切换
        var nav = new Swiper('.taskSwiperNav', {
            slidesPerView: 'auto',
            freeMode: true,
            noSwiping: true,
            freeModeFluid: true,
            calculateHeight: true,
            visibilityFullFit: true,
            onTap: function (nav) {
                pages.slideTo(nav.clickedIndex, 300, false);
                $$(".taskSwiperNav .active").removeClass('active');
                $$(".taskSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
            }
        });

        var pages = new Swiper('.taskSwiperPages', {
            noSwiping: true,
            onSlideChangeStart: function () {
                $$(".taskSwiperNav .active").removeClass('active')
                $$(".taskSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
            }
        });

        pages.params.control = nav;
        //滑动切换----结束

    }*/
    //填报----结束

    //任务监控
   /* if (page.name === 'Task') {
        var nav = new Swiper('.TabSwiperNav', {
            slidesPerView: 'auto',
            freeMode: true,
            noSwiping: true,
            freeModeFluid: true,
            calculateHeight: true,
            visibilityFullFit: true,
            onTap: function (nav) {
                pages.slideTo(nav.clickedIndex, 300, false);
                $$(".TabSwiperNav .active").removeClass('active');
                $$(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
            }
        });

        var pages = new Swiper('.TabSwiperPages', {
            noSwiping: true,
            onSlideChangeStart: function () {
                $$(".TabSwiperNav .active").removeClass('active')
                $$(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
            }
        });

        pages.params.control = nav;

    }*/
    //任务监控----结束

//  //任务监控-任务详情
//  if (page.name === 'Report_pull') {
//      $$(".btnArea").click(function(){
//          var ishidden = $$('.pull_area').css('display');
//          if(ishidden == 'flex'){
//              $$('.pull_area').css('display','none');
//          }else if(ishidden == 'none'){
//              $$('.pull_area').css('display','flex');
//          }
//      });
//      $$(".pull_left li").click(function(){
//          $$(".pull_left li").removeClass('select');
//          $$(this).addClass('select');
//      });
//      var nav = new Swiper('.TabSwiperNav', {
//          slidesPerView: 'auto',
//          freeMode: true,
//          noSwiping: true,
//          freeModeFluid: true,
//          calculateHeight: true,
//          visibilityFullFit: true,
//          onTap: function (nav) {
//              pages.slideTo(nav.clickedIndex, 300, false);
//              $$(".TabSwiperNav .active").removeClass('active');
//              $$(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
//          }
//      });
//
//      var pages = new Swiper('.TabSwiperPages', {
//          noSwiping: true,
//          onSlideChangeStart: function () {
//              $$(".TabSwiperNav .active").removeClass('active')
//              $$(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
//          }
//      });
//
//      pages.params.control = nav;
//
//  }
    //任务监控-任务详情----结束

});

//地区选择
function areaToChange(_this){
    _thisArea = $$(_this);
    var val = $$(".areaSelect").css('display');
    if(val == 'none'){
        $$(".areaSelect").css('display','flex');
    }else{
        $$(".areaSelect").css('display','none');
    }
}

function SelesctArea(){
    $$(".areaSelect .box").on("click",function(e){
        e.stopPropagation();
    });
    $$(".areaSelect li").on("click",function(){
        var area = $$(this).html();
        $$(_thisArea).find(".a-tackArea").html(area);
        areaToChange();
    });
}
SelesctArea();
//地区选择----结束

$$(document).on('pageBeforeAnimation', function(e) {

    //SelesctArea();
    $$(".areaSelect .box").on("click",function(e){
        e.stopPropagation();
    });
    $$(".areaSelect li").on("click",function(){
        var area = $$(this).html();
        //$$(this).parents(".page-content").find(".a-tackArea").html(area);
        $$(_thisArea).find(".a-tackArea").html(area);
        areaToChange();
    });

    //点击详情
    $$(".d-details").on("click",function(){
        var ele = $$(this).parents("li").find(".taskDetails");
        if(ele.css("display") == "none"){
            ele.css('display','flex');
        }else{
            ele.css('display','none');
        }
    });
    //点击详情----结束

    //备注
    $$(".d-remark").on("click",function(){
        $$(".d-fullscreen, .remarksBox").show();
    });
    //图片--更换
    $$(".taskBox .taskList li .col-20 img").on("click",function(){
        $$(".d-fullscreen, .uploadBox").show();
    });
    //底部--编辑
    $$(".d-TaskList").on("click",function(){
        if($$(".taskToolbarBox .taskList").css("display") == "none"){
            $$(".d-fullscreen, .taskToolbarBox .taskList").show();
        }else{
            $$(".d-fullscreen, .taskToolbarBox .taskList").hide();
        }
    });
    //遮罩--关闭所有
    $$(".d-fullscreen").on("click",function(){
        $$(".d-fullscreen, .remarksBox, .uploadBox, .taskToolbarBox .taskList").hide();
    });
    //地区选择，点击阴影关闭
    $$(".areaSelect").on("click",function(){
        $$(".areaSelect").css('display','none');
    });

    //全部复制上期
    $$(".d-copy").on("click",function(){
        var li = $$(".swiper-pages .taskList li");
        var val = "";
        for(var i=0;i < li.length ; i++){
            val = $$(li[i]).find(".a-pre span").text();
            $$(li[i]).find(".a-current input").val(val);
        }
    });


});

$$(document).on('pageInit', function(e) {
    var page = e.detail.page;

    //数据查询-筛选
    if (page.name === 'DataQuery') {
        $$(".a-filtrate").on("click", function () {
            toggleSH()
        });
        $$(".filtrateBox .box").on("click", function (e) {
            e.stopPropagation();
        });
        //点击阴影隐藏
        $$(".filtrateBox").on("click", function () {
            $$(".filtrateBox").css('display', 'none');
        });

        function toggleSH() {
            var val = $$(".filtrateBox").css('display');
            if (val == 'none') {
                $$(".filtrateBox").css('display', 'block');
            } else {
                $$(".filtrateBox").css('display', 'none');
            }
        }
    }
    //数据查询-筛选------结束
    
    //swiper初始化方法
   	function SwiperInit(){
   		var nav = new Swiper('.TabSwiperNav', {
	        slidesPerView: 'auto',
	        freeMode: true,
	        noSwiping: true,
	        freeModeFluid: true,
	        calculateHeight: true,
	        visibilityFullFit: true,
	        onTap: function (nav) {
	            pages.slideTo(nav.clickedIndex, 300, false);
	            $$(".TabSwiperNav .active").removeClass('active');
	            $$(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
	        }
   		});

	    var pages = new Swiper('.TabSwiperPages', {
	        noSwiping: true,
	        onSlideChangeStart: function () {
	            $$(".TabSwiperNav .active").removeClass('active')
	            $$(".TabSwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
	        }
	    });
	
	    pages.params.control = nav;
   	};
   	function ReportSwiper(){
   		var nav = new Swiper('.Report-SwiperNav', {
	        slidesPerView: 'auto',
	        freeMode: true,
	        noSwiping: true,
	        freeModeFluid: true,
	        calculateHeight: true,
	        visibilityFullFit: true,
	        onTap: function (nav) {
	            pages.slideTo(nav.clickedIndex, 300, false);
	            $$(".Report-SwiperNav .active").removeClass('active');
	            $$(".Report-SwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
	        }
   		});

	    var pages = new Swiper('.Report-SwiperPages', {
	        noSwiping: true,
	        onSlideChangeStart: function () {
	            $$(".Report-SwiperNav .active").removeClass('active')
	            $$(".Report-SwiperNav .swiper-slide").eq(pages.activeIndex).addClass('active');
	        }
	    });
	    
	    pages.params.control = nav
   	};
    
    
	//包含搜索框页面 编辑隐藏label文字
	if(page.name === 'Farm_food' || page.name === 'Macro_data' || page.name === 'PriceWarning'
		|| page.name === 'Mail_message'){
			
		document.getElementById('q').onfocus = function(){		
			document.getElementById('q_label').style.display = 'none';
            document.getElementById('q_i').style.display = 'none';		
		}
		document.getElementById('q').onblur = function(){	
			var len = document.getElementById('q').value;
			if(len == ''){
				document.getElementById('q_label').style.display = 'block';
            	document.getElementById('q_i').style.display = 'block';	
			}		
		}
	}
	//价格预警页面JS
	if( page.name === 'PriceWarning'){
		$$(".btnShow").click(function(){
			var ishidden = $$('.rule_table').css('display');
			if(ishidden == 'block'){
				$$('.rule_table').hide() 
			}else if(ishidden == 'none'){
				$$('.rule_table').show(); 
			}
		});
	};
	//明察暗访页面JS
	if(page.name === 'InvestigateFill' || page.name === 'Search_Commodity'){
		SwiperInit();
		$$(document).click(function(){
 			$$(".pull_list").hide();
		});
		$$('input.onlyred').click(function(e){
			if($$(this).nextAll('.pull_list').css('display') == 'block'){
				$$(this).nextAll('.pull_list').hide();
			} else{
				$$(".pull_list").hide();
				$$(this).nextAll('.pull_list').show();
			}
			e.stopPropagation();
		});
		var myCalendar = myApp.calendar({
	   	 	input: '#calendar',
	   	 	monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月' , '九月' , '十月', '十一月', '十二月'],
	   	 	dayNamesShort:['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
	   	 	onDayClick:function (p, dayContainer, year, month, day){
	   	 		myCalendar.close();
	   	 	}
		});
        var myCalendarEnd = myApp.calendar({
            input: '#calendarEnd',
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月' , '九月' , '十月', '十一月', '十二月'],
            dayNamesShort:['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            onDayClick:function (p, dayContainer, year, month, day){
                myCalendarEnd.close();
            }
        });
	}
	//swiper 初始化
	if( page.name === 'price_news' || page.name === 'Task' || page.name === 'Notice' || page.name === 'TaskWrite' || page.name === 'TaskCheck'){
		  SwiperInit();
	}
	//	Report_pull 月报
	if(page.name === 'Report_pull'){
		ReportSwiper();
		$$(".btnArea").click(function(){
			var ishidden = $$('.pull_area').css('display');
			if(ishidden == 'flex'){
				$$('.pull_area').css('display','none'); 
			}else if(ishidden == 'none'){
				$$('.pull_area').css('display','flex'); 
			}
		});
		$$(".pull_left li").click(function(){
			$$(".pull_left li").removeClass('select');
			$$(this).addClass('select');
		});
	};
	
});
