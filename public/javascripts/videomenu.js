$(function(){
	var div = $('#item_container');
	var header = $('#menu_header');
	var lastLi = $("#item_list").find('li:last-child');
    
    var scrollEdgePadding = 200;
	var imgDuration = 400;
	
	var headerDuration = 250; //msecs
	var headerHeight = header.outerHeight();
	
	//div.Touchable();

	div.css("overflow", "hidden");
	$('#item_list').css("margin-top", headerHeight);
	header.css("top", headerHeight);
		
	$("#item_list").hover(
		function() {
			header.stop().animate({ top : "0" }, headerDuration);
		},
		function() {
			header.stop().animate({ top : headerHeight }, headerDuration);
		}
	);
	
	$('#item_list li').bind("mouseenter", function() {
		header.html($(this).find("span").html());
		//header.width($(this).find("span").width() + 200);
	});
	
	$(".item_image_over").hover(
		function() {
			$(this).stop().animate({"opacity": "1"}, imgDuration);
		},
		function() {
			$(this).stop().animate({"opacity": "0"}, imgDuration);
		}
	);
	
	div.mousemove(function(e){
		var divWidth = div.width();
		var hangingWidth = lastLi[0].offsetLeft + lastLi.outerWidth() - divWidth;
		var $left = ((e.pageX - div.offset().left - scrollEdgePadding) * (hangingWidth + scrollEdgePadding*2)/divWidth);
		
		if($left > hangingWidth){
			$left = hangingWidth;
		}

		div.scrollLeft($left);
	});
	
	//div.bind("touchmove", function(e, touch){
	//	var $tleft = div.currentStartDelta * (hangingWidth/divWidth);
	//	
	//	div.scrollLeft($tleft);
	//});
	
	
});