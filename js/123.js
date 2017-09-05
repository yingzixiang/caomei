//变量初始化
	var ZRM = {
		"lightMax": 4 // 当前星期几
	}
	$(function(){
	    var oC = document.getElementById('weekWork');
	    oC.width = document.body.scrollWidth*4;
		oC.height = document.body.scrollHeight*2.5;
		  
	    var oGC = oC.getContext('2d');
	    oGC.lineWidth = 8;
	    let o = document.getElementById("weekWork");
		let h = o.offsetHeight/4;  //高度
		let tH = parseInt((h-10))
		oGC.strokeStyle = "rgb(234,211,211)";
		oGC.scale(4,4);
		oGC.beginPath();
		oGC.moveTo(65,30);
		oGC.lineTo(65,tH+40);
		oGC.stroke();
	   
	    for(let i=0 ; i<=6; i++){
	    	 //画空心圆
		    //开始一个新的绘制路径
		    oGC.beginPath();
		    oGC.lineWidth = 4;
		    //设置弧线的颜色为
		    var circleS = {
		        x : 65,    //圆心的x轴坐标值
		        r : 9     //圆的半径
		    };
		    oGC.stroStyle = '#93c1ff';
		    oGC.fillStyle = "#fff";
	    	//沿着坐标x=50,半径为10px的圆的顺时针方向绘制弧线
	    	oGC.arc(circleS.x, i*((tH+50)/8)+30, circleS.r, 0, Math.PI * 2, false);   
	    	//按照指定的路径绘制弧线
	    	oGC.stroke();
	    	oGC.fill();
	    	oGC.closePath();
		    var taskDay = document.getElementsByClassName("task-day");
		    var weekDay = document.getElementsByClassName('weekday');
	    	taskDay[i].style.top= 0.5*i*((tH+50)/4)+18 + "px";
	    }
	    
		//开始一个新的绘制路径
	    oGC.beginPath();
	   
	    for(let i=0 ; i<ZRM.lightMax; i++){
	    	 //画实心圆
		    //开始一个新的绘制路径
		    oGC.beginPath();
		    //设置弧线的颜色为
		    var circleS = {
		        x : 65,    //圆心的x轴坐标值
		        r : 7     //圆的半径
		    };
		    oGC.fillStyle = "#b23636"
	    	//沿着坐标x=25,半径为5px的圆的顺时针方向绘制弧线
	    	oGC.arc(circleS.x, i*((tH+50)/8)+30, circleS.r, 0, Math.PI * 2, false);   
	    	//按照指定的路径绘制弧线
	    	oGC.fill();
	    	oGC.closePath();
	    }
	    
	    //点击切换
	    $(".footer-nav").unbind().bind("click",function(){
	    	$(".footer-nav").removeClass("nav-active");
	    	$(this).addClass('nav-active');
	    })
	})    