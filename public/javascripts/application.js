// Put your application scripts here


function getVideo(id) {
	$.ajax({
	    url: '/home/video/' + id,
	    type: 'GET',
	    dataType: 'html',
	    timeout: 1000,
	    error: function(){
	    
	    },
	    success: function(html){
	        $("#video").html(html);
	    }
	});
}

function getPage(id) {
	
	$("#vmenu li").each(function(i, item) {
		$(item).removeClass("active");
	})
	
	$("#item" + id).addClass("active");
	
	$.ajax({
	    url: '/home/page/' + id,
	    type: 'GET',
	    dataType: 'html',
	    timeout: 1000,
	    error: function(){
	    
	    },
	    success: function(html){
	        $("#content").html(html);
	    }
	});
}