$(function(){

	$(".gotop a").hover(function(){
		$(this).find("dt").hide().siblings("dd").fadeIn().parents("a").siblings("p").hide().animate({left:"-130px"});
		
	},function(){
		$(this).find("dt").fadeIn().siblings("dd").hide().parents("a").siblings("p").hide();
	});
	$(window).scroll(function(){
		var wh=$(window).scrollTop();
		if(wh>100){
			$(".toptop").fadeIn();
		}else{
			$(".toptop").fadeOut();
		}
		
	});
	$(".toptop").click(function(){
			let l = s = Math.floor(document.documentElement.scrollTop);
		    let st = setInterval(function () {
				 s = Math.ceil(l / 600 * 15)+2;  //路程/时间;用来控制移动的距离,向上取整
				 console.log("s = ", s)
		        l -= s;
				console.log(l)
		        if (l <= 1) {
		            l = 0; //当l<=0时，设置l=0
		            clearInterval(st);
					st = null;
		        }
				
		        document.documentElement.scrollTop = l;
		    }, 1000/60)
	});
	
});
