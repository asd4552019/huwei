// 设置二级导航栏显示
// 获取元素
var cateItems = document.getElementsByClassName('category-item')
// console.log(cTems);
var catePanels = document.getElementsByClassName('category-panels');
// console.log(catePanels.length)

// for(var i=0;i<cateItems.length;i++){
// 	cateItems[i].onmouseover = function(){
// 		for(var i=0;i<catePanels.length;i++){
// 			catePanels[i].style.display = 'block';
// 		}
// 	}
// }

// for(var i=0;i<cateItems.length;i++){
// 	cateItems[i].onmouseout = function(){
// 		for(var i=0;i<catePanels.length;i++){
// 			catePanels[i].style.display = 'none';
// 		}
// 	}
// }



// 设置鼠标悬浮事件
cateItems[0].onmouseover = function(){
	catePanels[0].style.display = 'block';
}		
// 设置鼠标移出事件
cateItems[0].onmouseout = function(){
	catePanels[0].style.display = 'none';
	
}

// 设置鼠标悬浮事件
cateItems[1].onmouseover = function(){
	catePanels[1].style.display = 'block';
}		
// 设置鼠标移出事件
cateItems[1].onmouseout = function(){
	catePanels[1].style.display = 'none';	
}

// 设置鼠标悬浮事件
cateItems[2].onmouseover = function(){
	catePanels[2].style.display = 'block';
}		
// 设置鼠标移出事件
cateItems[2].onmouseout = function(){
	catePanels[2].style.display = 'none';	
}

// 设置鼠标悬浮事件
cateItems[3].onmouseover = function(){
	catePanels[3].style.display = 'block';
}		
// 设置鼠标移出事件
cateItems[3].onmouseout = function(){
	catePanels[3].style.display = 'none';	
}

// 设置鼠标悬浮事件
cateItems[4].onmouseover = function(){
	catePanels[4].style.display = 'block';
}		
// 设置鼠标移出事件
cateItems[4].onmouseout = function(){
	catePanels[4].style.display = 'none';	
}

// 设置鼠标悬浮事件
cateItems[5].onmouseover = function(){
	catePanels[5].style.display = 'block';
}		
// 设置鼠标移出事件
cateItems[5].onmouseout = function(){
	catePanels[5].style.display = 'none';	
}
	


// 悬浮广告特效
// 获取元素
var box = document.getElementById('box');
var close = document.getElementById('close');
// 定时器启动的标志
var gbrun;
// 设置小球运动的步径
var stepX = 2;
var stepY = 2;

// 声明广告运动的函数
function gbautoRun(){
	// 定时器只启动一次
	if(gbrun){
		return;
	}

	// 设置定时器
	gbrun = setInterval(function(){
		// 获取当前可视区域的宽度和高度
		var cW = document.documentElement.clientWidth;
		var cH = document.documentElement.clientHeight;

		// 元素当前的left偏移值+步径 = 新的left值
		var newLeft = box.offsetLeft + stepX;
		// 元素当前的top+步径 = newTop
		var newTop = box.offsetTop + stepY;
		// console.log(newLeft);

		// 判断小球右侧运动的最大值
		if(newLeft >= (cW-box.offsetWidth)){
			// 赋值为最大值
			newLeft = cW - box.offsetWidth;

			// 动画反向经典运用 * -1 反向
			stepX *= -1
		}

		// 左侧最小值判定
		if(newLeft<=0){
			newLeft = 0;
			// 反向
			stepX *= -1;

		}

		// 垂直方向 top的最大值
		if(newTop >= (cH-box.offsetHeight)){
			newTop = cH - box.offsetHeight;

			stepY *= -1;

		}

		// 垂直方向最小值
		if(newTop<=0){
			newTop = 0;
			stepY*=-1;
		}

		// 赋值操作
		box.style.left = newLeft+'px';
		box.style.top = newTop+'px';
	},20);

}
// 调用函数
gbautoRun();
	
// 设置输入移入广告停止
box.onmouseover = function(){
	clearInterval(gbrun);
	gbrun = undefined;
}

// 鼠标移开广告开始运动
box.onmouseout = function(){
	gbautoRun();
}
// 点击叉号关闭广告
close.onclick = function(){
	box.style.display = 'none';
}


// 轮播图特效
// 获取元素
var bigBox = document.getElementById('bigbox');

// 左右箭头
var left = document.getElementById('left');
var right = document.getElementById('right');

// 获取所有图片的li
var lis = bigBox.children[0].children;
// console.log(lis);

// 获取小圆点
var lists = document.getElementById('circlelist').children;
// console.log(lists);

// 定义索引index，标志要显示的图片的索引
var index = 0;

// 定义变量run，就是定时器是否运行的标志
var run;

// 定义轮播图自动轮显函数 autoRun()
function autoRun(){
	// 定时器一次只启动一个
	if(run){
		// 终止程序
		return;
	}

	// 设置定时器
	run = setInterval(function(){
		// 轮播图核心理论：当前图片隐藏，下一张显示
		lis[index].removeAttribute('id');
		// 圆点切换
		lists[index].removeAttribute('class');
		// 索引自增++
		index++;

		// 临界值判断
		if(index==lis.length){
			// 重置为0
			index = 0;
		}

		// 下一张显示
		lis[index].setAttribute('id','active');
		lists[index].setAttribute('class','current');
	},3000);
}

// 当页面第一次进入时自动调用轮播图函数
autoRun();	

// 当鼠标移入bigBox容器时，停止定时器
bigBox.onmouseover = function(){
	// 停止
	clearInterval(run);
	// console.log(run);
	// 将标志run重新赋值为空
	run = undefined;

	// 左右箭头显示
	left.style.display = 'block';
	right.style.display = 'block';
}
// 鼠标离开bigBox容器时
bigBox.onmouseout = function(){
	// 调用轮播图函数
	autoRun();

	// 隐藏左右箭头
	left.style.display = 'none';
	right.style.display = 'none';
}

// 左箭头的鼠标移入事件
left.onmouseover = function(){
	// console.log(1111);
	this.style.background = 'rgba(0,0,0,0.6)';
}
left.onmouseout = function(){
	this.style.background = 'rgba(0,0,0,0.1)';
}

// 右箭头
right.onmouseover = function(){
	// console.log(1111);
	this.style.background = 'rgba(0,0,0,0.6)';
}
right.onmouseout = function(){
	this.style.background = 'rgba(0,0,0,0.1)';
}

// 左右箭头的单击事件
left.onclick = function(){
	// 对于轮播图自身

	// 当前元素隐藏
	lis[index].removeAttribute('id');
	lists[index].removeAttribute('class');
	// 当前的索引-1
	index--;

	// 最小值临界判定
	if(index<0){
		// 赋值为最大值 = 长度 - 1
		index = lis.length - 1;
	}

	// 上一张显示
	lis[index].setAttribute('id','active');
	lists[index].setAttribute('class','current');
}

// 右侧箭头
right.onclick = function(){
	// 当前隐藏	
	lis[index].removeAttribute('id');
	lists[index].removeAttribute('class');
	// 索引++
	index++;

	// 最大值
	if(index==lis.length){
		// 重新赋值为0
		index = 0;
	}

	// 下一张显示
	lis[index].setAttribute('id','active');
	lists[index].setAttribute('class','current');
}

// 圆点li的移入和移出事件
for(var i=0;i<lists.length;i++){
	// 手动设置元素的标记
	lists[i].setAttribute('data-index',i);			

	// 移入事件
	lists[i].onmouseover = function(){
		// 将之前显示的元素移除class
		lis[index].removeAttribute('id');
		lists[index].removeAttribute('class');

		// 获取该元素身上的data-index的值

		index = this.getAttribute('data-index');

		// 当前图片、圆点显示
		lis[index].setAttribute('id','active');
		lists[index].setAttribute('class','current');
	}
}

// 设置楼层导航
$(function() { 
    // 获取电梯的高度
    var h = $('.lift').height();
    // 设置电梯的上外边距，实现垂直居中
    $('.lift').css('margin-top',-1 * h / 2);

    // 视口的高度
    var vpHeight = $(window).height();
    // 视口高度的一半
    var halfVpHeight = vpHeight/2;

    // 获取各个栏目相对于文档顶部的距离
    var floor1Top = $('#iphone').offset().top;
    var floor2Top = $('#book').offset().top;
    var floor3Top = $('#watch').offset().top;
    var floor4Top = $('#house').offset().top;
    var floor5Top = $('#parts').offset().top;
    var floor6Top = $('#brand').offset().top;

    // 为窗口添加滚动事件响应函数 
    // 声明事件响应函数
    function onScroll() {
    	// 滚动事件不断触发，就不断获取滚动条滚动过的距离
    	var st = $(this).scrollTop();

    	// 求出栏目与视口顶部之间的距离tx
    	var t1 = floor1Top - st;
    	var t2 = floor2Top - st;
    	var t3 = floor3Top - st;
    	var t4 = floor4Top - st;
    	var t5 = floor5Top - st;
    	var t6 = floor6Top - st;

    	// 滚动到一定距离就把电梯显示出来
    	if (t1 <= halfVpHeight) {
    		// 显示电梯，执行动画前，推荐先暂停所有正在执行的动画（stop方法）
    		$('.lift').stop().fadeIn(300);
    		$('.lift li').eq(0).addClass('curr').siblings().removeClass('curr');
    	}else {
    		$('.lift').stop().fadeOut(300);
    	}

    	if (t2 <= halfVpHeight) {
    		$('.lift li').eq(1).addClass('curr').siblings().removeClass('curr');
    	}
    	if (t3 <= halfVpHeight) {
    		$('.lift li').eq(2).addClass('curr').siblings().removeClass('curr');
    	}
    	if (t4 <= halfVpHeight) {
    		$('.lift li').eq(3).addClass('curr').siblings().removeClass('curr');
    	}
    	if (t5 <= halfVpHeight) {
    		$('.lift li').eq(4).addClass('curr').siblings().removeClass('curr');
    	}
    	if (t6 <= halfVpHeight) {
    		$('.lift li').eq(5).addClass('curr').siblings().removeClass('curr');
    	}
    }
    // onScroll函数结束

    // 为窗口添加滚动事件响应函数（前面声明的函数）
    $(window).scroll(onScroll);

	// 为电梯按钮添加单击事件响应函数 
	$('.lift li').click(function(event) {
		// 用off方法把滚动事件响应函数解绑
		$(window).off('scroll');

		// 被单击那个按钮（li）添加curr类，兄弟元素移除curr类
		$(this).addClass('curr').siblings().removeClass('curr');

		// 判断当前被单击的按钮是不是第一个li，如果是，那么通过动画滚屏
		if ($(this).index() === 0) {
			// 自定义动画，实现自动滚屏
			$('html,body').stop().animate({
				'scrollTop':floor1Top
			},800,function() {
				// 滚屏结束后，重新把滚动事件响应函数绑定
				$(window).scroll(onScroll);
			});
		}
		// 后面的若干if类似于上面的，是在判断其余楼层
		if ($(this).index() === 1) {
			$('html,body').stop().animate({
				'scrollTop':floor2Top
			},800,function() {
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index() === 2) {
			$('html,body').stop().animate({
				'scrollTop':floor3Top
			},800,function() {
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index() === 3) {
			$('html,body').stop().animate({
				'scrollTop':floor4Top
			},800,function() {
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index() === 4) {
			$('html,body').stop().animate({
				'scrollTop':floor5Top
			},800,function() {
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index() === 5) {
			$('html,body').stop().animate({
				'scrollTop':floor6Top
			},800,function() {
				$(window).scroll(onScroll);
			});
		}
		if ($(this).index() === 6) {
			$('html,body').stop().animate({
				'scrollTop':floor7Top
			},800,function() {
				$(window).scroll(onScroll);
			});
		}

	});

});



// 设置输入框获取焦点的时候里面的字隐藏
// 获取元素
var text = document.getElementById('text');
var hide = document.getElementById('hide');
// console.log(hide1)

// 获取焦点
text.onfocus = function(){
	hide.style.display = 'none';
	this.style.borderColor='#eee';
}

// 失去焦点的时候再次显示
text.onblur = function(){
	hide.style.display = 'block';
}


var retutnTop = document.getElementById('return-top');

var sT = document.documentElement.scrollTop || document.body.scrollTop

// if(sT>1000){
// 	retutnTop.style.display = 'block';
// }else{
// 	retutnTop.style.display = 'none';
// }