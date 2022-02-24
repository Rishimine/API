// jQueryを用いたAPIの実装
$(function(){
    $(".submit-btn").on("click",function(){
        var search =$("#keyword").val();
    $.ajax({
    url: `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=4fbd9178b450695a&keyword=${search}&format=jsonp`,
    type: 'GET',
    dataType: 'jsonp',
    jsonpCallback: 'callback'
  }).done(function(data) {
      console.log(data);
      $(".search-result").css("display","flex");
      $(".shop-img img").attr("src",data["results"]["shop"][0]["logo_image"]);
      $(".shop-name").append(data["results"]["shop"][0]["name"]) ;
      $(".shop-address").append(data["results"]["shop"][0]["address"]) ;
      $(".shop-time").append(data["results"]["shop"][0]["open"]) ;
      $(".shop-homepage a").append("ホームページ");
      $(".shop-homepage a").attr("href",data["results"]["shop"][0]["urls"]["pc"]);
  }).fail(function(data) {
      console.log(data); 
  });
    })
    
})