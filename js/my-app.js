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

$$(document).on('pageBeforeAnimation', function(e) {
    var page = e.detail.page;

    //填报
    if (page.name === 'TaskWrite' || page.name === 'TaskCheck') {
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

    }
    //填报----结束
});

//地区选择
function areaToChange(){
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
        $$(this).parents(".page-content").find(".a-tackArea").html(area);
        areaToChange();
    });
}
SelesctArea();
//地区选择----结束

$$(document).on('pageBeforeAnimation', function(e) {

    SelesctArea();

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

