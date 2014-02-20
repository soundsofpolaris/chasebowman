$(function(){
	var div = $('#item_container');
	var header = $('#menu_header');
    
    var headerDuration = 250; //msecs
	var imgDuration = 400;
	
	var selectedCategory = "";
	var headerHeight = header.outerHeight();

	div.css("overflow", "hidden");
	$('#item_list').css("margin-top", headerHeight);
	header.css("top", headerHeight);
	
	$(".item_image_over").css("width", 80);
	$(".item_image_over").css("height", 55);
	$(".item_image").css("width", 80);
	$(".item_image").css("height", 55);
		
	$("#item_list").bind("mouseleave",
		function() {
			setHeader("");
	});
	
	$('#item_list li').bind("mouseenter", function() {
		var $currentCategory = $(this).find("span").html();
		setHeader($currentCategory);
	});
	
	function setHeader($currentCategory){
		if($currentCategory != selectedCategory){
			selectedCategory = $currentCategory;
			
			if(selectedCategory != ""){
				var $categoryTotalWidth = 0;
				var $categoryPos = 0;
			
				$('#item_list li span:contains('+ selectedCategory +')').each(function(i, itm){
					$categoryTotalWidth += ($(itm).parent().parent().innerWidth());
				
					if(i == 0){
						$categoryPos = $(itm).parent().parent().position().left;
					}
				});
		
				header.stop().animate(
					{top:headerHeight}, headerDuration, function(){
						header.html(selectedCategory);
						header.css("left", $categoryPos);
						header.css("width", ($categoryTotalWidth - 6)); //subtract left-padding on header and 1 for style		
						header.animate(
							{top:"0"}, headerDuration
						);
						}
				)
			} else {
				header.stop().animate({top:headerHeight}, headerDuration);	
			}
		} 
	}
	
	$(".item_image_over").hover(
		function() {
			$(this).stop().animate({"opacity": "1"}, imgDuration);
		},
		function() {
			$(this).stop().animate({"opacity": "0"}, imgDuration);
		}
	);
});