//导航点击变黑
$('.daohang li').on('click',function(){
	$('.daohang li').removeClass('active')
	$(this).addClass('active')
})

var num = 0;
var lunbo = function(){
	num++;
	if( num >=$('.bannerz li').length ){
		num = 0;
	}
	$('.bannerz li').css('display','none').eq(num).css('display','block')
    console.log(num)
}
setInterval(lunbo,3000)