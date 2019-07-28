

function recommendItems(item,boxId) {
    /**
     * 说明：新房推荐列表公用方法
     * */
    if(item && boxId){
        var html = ''
        for (var i = 0;i<item.length;i++){
            html+= '<div class="recommend-item clearfix">'
            html+='<a href="'+item[i].link+'" >'
            html+='<div class="shop-img-box fl">'
            html+='<img src="'+item[i].src+'" />'
            html+='</div>'
            html+='<div class="t1 h-box">'+item[i].name+'</div>'
            html+='<div class="t2 h-box">'+item[i].city+'</div>'
            html+='<div class="t3 h-box">'+item[i].pric+'</div>'
            html+='</a></div>'
        }
        $("#"+boxId).append(html)
    }


}

function swiperWrapper(item,boxId) {
    if(item && boxId){
        var html = ''
        for (var i = 0;i<item.length;i++){
            html+='<div class="swiper-slide"><a href="'+item[i].link+'" ><img class="swiper-bottom-img" src="'+item[i].src+'" /></a>'
            html+='<div class="swiper-slide-box box-shadow"><a href="'+item[i].link+'" >'
            html+='<p class="t1">'+item[i].name+'</p>'
            html+='<p class="t2"><span>均价</span>'+item[i].pric+'</p>'
            html+='</a></div>'
            html+='</div>'
        }
        $("#"+boxId).append(html)
    }


}