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
      var searchResult = document.createElement("div");
      searchResult.classList.add("search-result");
      var shopImg = document.createElement("div");
      shopImg.classList.add("shop-img");
      searchResult.append(shopImg);
      var sIMG =document.createElement("img");
      shopImg.append(sIMG);
      var introBox = document.createElement("div");
      introBox.classList.add("intro-box");
      searchResult.append(introBox);
      var shopName =document.createElement("p");
      shopName.classList.add("shop-name");
      introBox.append(shopName);
      var shopAddress =document.createElement("p");
      shopAddress.classList.add("shop-address");
      introBox.append(shopAddress);
      var shopTime =document.createElement("p");
      shopTime.classList.add("shop-time");
      introBox.append(shopTime);
      var shopHomepage =document.createElement("p");
      shopHomepage.classList.add("shop-homepage");
      introBox.append(shopHomepage);
      var 

      $(".search-result").css("display","flex");
      $(".shop-img img").attr("src",data["results"]["shop"][0]["logo_image"]);
      $(".shop-name").append(data["results"]["shop"][0]["name"]) ;
      $(".shop-address").append(data["results"]["shop"][0]["address"]) ;
      $(".shop-time").append(data["results"]["shop"][0]["open"]) ;
      $(".shop-homepage a").append("ホームページ");
      $(".shop-homepage a").attr("href",data["results"]["shop"][0]["urls"]["pc"]);
      var shoplist = document.createElement("div");
      shoplist.classList.add("slide");
      $(".slide-container").append(shoplist);
      
  }).fail(function(data) {
      console.log(data); 
  });
    })
    // ここまで
    // ここからスライド
    let index = 0;
  let slideMax = $('.slide').length
  $('.right-arrow').on('click',function () {
    if (index !== slideMax-1) {
      index++;
      num = index * -1 * 100;
      $('.slide-container').css({'transform':`translateX(${num}%)`})
    }
  })

  $('.left-arrow').on('click',function () {
    if (index !== 0) {
      index--;
      num = index * -1 * 100;
      $('.slide-container').css({'transform':`translateX(${num}%)`})
    }
  })
//   ここまで
})