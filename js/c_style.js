//菜单切换图标
$$(".toolbar .toolbar-inner a").click(function(){
		switch($$(this).index())
		{
		case 0:
			$$(this).eq(0).find("i").attr("class","iconfont icon-shouye2");
			$$(".toolbar .toolbar-inner a").eq(1).find("i").attr("class","iconfont icon-renwu2");
			$$(".toolbar .toolbar-inner a").eq(2).find("i").attr("class","iconfont icon-chaxun2");
			$$(".toolbar .toolbar-inner a").eq(3).find("i").attr("class","iconfont icon-wo1");
			break;
		case 1:
			$$(this).find("i").attr("class","iconfont icon-renwumian1");
			$$(".toolbar .toolbar-inner a").eq(0).find("i").attr("class","iconfont icon-shouyexian");
			$$(".toolbar .toolbar-inner a").eq(2).find("i").attr("class","iconfont icon-chaxun2");
			$$(".toolbar .toolbar-inner a").eq(3).find("i").attr("class","iconfont icon-wo1");
			break;
		case 2:
			$$(this).find("i").attr("class","iconfont icon-chaxunmian1");
			$$(".toolbar .toolbar-inner a").eq(0).find("i").attr("class","iconfont icon-shouyexian");
			$$(".toolbar .toolbar-inner a").eq(1).find("i").attr("class","iconfont icon-renwu2");
			$$(".toolbar .toolbar-inner a").eq(3).find("i").attr("class","iconfont icon-wo1");
			break;
		case 3:
			$$(this).find("i").attr("class","iconfont icon-womian");
			$$(".toolbar .toolbar-inner a").eq(0).find("i").attr("class","iconfont icon-shouyexian");
			$$(".toolbar .toolbar-inner a").eq(1).find("i").attr("class","iconfont icon-renwu2");
			$$(".toolbar .toolbar-inner a").eq(2).find("i").attr("class","iconfont icon-chaxun2");
			break;
		}
});