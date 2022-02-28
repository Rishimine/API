
// jQueryを用いたAPIの実装
$(function () {
  // ここまで

  // ここから初めのアニメーション
  setTimeout(function () {
    $('.start p').fadeIn(1600);
  }, 500);
  setTimeout(function () {
    $('.start').fadeOut(500);
  }, 2500);
  // ここまで

  // ハンバーガー
  $(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });
  // ハンバーガー

























// ?key=4fbd9178b450695a&keyword=${search}&format=jsonp&lunch=${lunch}

  // -------検索ーーーーーーーーーーー

  $(".submit-btn").on("click", function () {
    var search = $("#keyword").val();
    let lunch = $('#lunch').val();
    let english =$('#english').val();
    let data = {
      'key': '4fbd9178b450695a',
      'keyword': search,
      'format': 'jsonp',
      'lunch': lunch,
      'english':english,

    }
    $.ajax({
      url: `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/`,
      type: 'POST',
      dataType: 'jsonp',
      jsonpCallback: 'callback',
      data:data,
    }).done(function (data) {
      console.log(data);
      let input = $('#lunch').val();
      // ランチ内容
      let lunch = $('#lunch').val();
      // englishmenu
      let english =$('#english').val();

      console.log($('#english').val());
      $('#lunch').val();
      console.log($('#lunch').val());




      //   var searchResult = document.createElement("div");
      //   searchResult.classList.add("search-result");
      //   var shopImg = document.createElement("div");
      //   shopImg.classList.add("shop-img");
      //   searchResult.append(shopImg);
      //   var sIMG =document.createElement("img");
      //   shopImg.append(sIMG);
      //   var introBox = document.createElement("div");
      //   introBox.classList.add("intro-box");
      //   searchResult.append(introBox);
      //   var shopName =document.createElement("p");
      //   shopName.classList.add("shop-name");
      //   introBox.append(shopName);
      //   var shopAddress =document.createElement("p");
      //   shopAddress.classList.add("shop-address");
      //   introBox.append(shopAddress);
      //   var shopTime =document.createElement("p");
      //   shopTime.classList.add("shop-time");
      //   introBox.append(shopTime);
      //   var shopHomepage =document.createElement("p");
      //   shopHomepage.classList.add("shop-homepage");
      //   introBox.append(shopHomepage);
      //   var HPLink = document.createElement("a");
      //   HPLink.classList.add("HP");
      //   shopHomepage.append(HPLink);
      $(".shop-name").empty();
      $(".shop-address").empty();
      $(".shop-time").empty();
      $(".shop-homepage a").empty();
      $(".search-result").css("display", "flex");
      $(".shop-img img").attr("src", data["results"]["shop"][0]["logo_image"]);
      $(".shop-name").append(data["results"]["shop"][0]["name"]);
      $(".shop-address").append(data["results"]["shop"][0]["address"]);
      $(".shop-time").append(data["results"]["shop"][0]["open"]);
      $(".shop-homepage a").append("ホームページ");
      $(".shop-homepage a").attr("href", data["results"]["shop"][0]["urls"]["pc"]);
      //   var slide = document.createElement("div");
      //   slide.classList.add("slide");
      //   $(".slide-container").append(slide);
      $(".shop-name2").empty();
      $(".shop-address2").empty();
      $(".shop-time2").empty();
      $(".shop-homepage2 a").empty();
      $(".search-result2").css("display", "flex");
      $(".shop-img2 img").attr("src", data["results"]["shop"][1]["logo_image"]);
      $(".shop-name2").append(data["results"]["shop"][1]["name"]);
      $(".shop-address2").append(data["results"]["shop"][1]["address"]);
      $(".shop-time2").append(data["results"]["shop"][1]["open"]);
      $(".shop-homepage2 a").append("ホームページ");
      $(".shop-homepage2 a").attr("href", data["results"]["shop"][1]["urls"]["pc"]);

      $(".shop-name3").empty();
      $(".shop-address3").empty();
      $(".shop-time3").empty();
      $(".shop-homepage3 a").empty();
      $(".search-result3").css("display", "flex");
      $(".shop-img3 img").attr("src", data["results"]["shop"][2]["logo_image"]);
      $(".shop-name3").append(data["results"]["shop"][2]["name"]);
      $(".shop-address3").append(data["results"]["shop"][2]["address"]);
      $(".shop-time3").append(data["results"]["shop"][2]["open"]);
      $(".shop-homepage3 a").append("ホームページ");
      $(".shop-homepage3 a").attr("href", data["results"]["shop"][2]["urls"]["pc"]);

      $(".shop-name4").empty();
      $(".shop-address4").empty();
      $(".shop-time4").empty();
      $(".shop-homepage4 a").empty();
      $(".search-result4").css("display", "flex");
      $(".shop-img4 img").attr("src", data["results"]["shop"][3]["logo_image"]);
      $(".shop-name4").append(data["results"]["shop"][3]["name"]);
      $(".shop-address4").append(data["results"]["shop"][3]["address"]);
      $(".shop-time4").append(data["results"]["shop"][3]["open"]);
      $(".shop-homepage4 a").append("ホームページ");
      $(".shop-homepage4 a").attr("href", data["results"]["shop"][3]["urls"]["pc"]);

      $(".shop-name5").empty();
      $(".shop-address5").empty();
      $(".shop-time5").empty();
      $(".shop-homepage5 a").empty();
      $(".search-result5").css("display", "flex");
      $(".shop-img5 img").attr("src", data["results"]["shop"][4]["logo_image"]);
      $(".shop-name5").append(data["results"]["shop"][4]["name"]);
      $(".shop-address5").append(data["results"]["shop"][4]["address"]);
      $(".shop-time5").append(data["results"]["shop"][4]["open"]);
      $(".shop-homepage5 a").append("ホームページ");
      $(".shop-homepage5 a").attr("href", data["results"]["shop"][4]["urls"]["pc"]);

      $(".shop-name6").empty();
      $(".shop-address6").empty();
      $(".shop-time6").empty();
      $(".shop-homepage6 a").empty();
      $(".search-result6").css("display", "flex");
      $(".shop-img6 img").attr("src", data["results"]["shop"][5]["logo_image"]);
      $(".shop-name6").append(data["results"]["shop"][5]["name"]);
      $(".shop-address6").append(data["results"]["shop"][5]["address"]);
      $(".shop-time6").append(data["results"]["shop"][5]["open"]);
      $(".shop-homepage6 a").append("ホームページ");
      $(".shop-homepage6 a").attr("href", data["results"]["shop"][5]["urls"]["pc"]);

      $(".shop-name7").empty();
      $(".shop-address7").empty();
      $(".shop-time7").empty();
      $(".shop-homepage7 a").empty();
      $(".search-result7").css("display", "flex");
      $(".shop-img7 img").attr("src", data["results"]["shop"][6]["logo_image"]);
      $(".shop-name7").append(data["results"]["shop"][6]["name"]);
      $(".shop-address7").append(data["results"]["shop"][6]["address"]);
      $(".shop-time7").append(data["results"]["shop"][6]["open"]);
      $(".shop-homepage7 a").append("ホームページ");
      $(".shop-homepage7 a").attr("href", data["results"]["shop"][6]["urls"]["pc"]);

      $(".shop-name8").empty();
      $(".shop-address8").empty();
      $(".shop-time8").empty();
      $(".shop-homepage8 a").empty();
      $(".search-result8").css("display", "flex");
      $(".shop-img8 img").attr("src", data["results"]["shop"][7]["logo_image"]);
      $(".shop-name8").append(data["results"]["shop"][7]["name"]);
      $(".shop-address8").append(data["results"]["shop"][7]["address"]);
      $(".shop-time8").append(data["results"]["shop"][7]["open"]);
      $(".shop-homepage8 a").append("ホームページ");
      $(".shop-homepage8 a").attr("href", data["results"]["shop"][7]["urls"]["pc"]);

      $(".shop-name9").empty();
      $(".shop-address9").empty();
      $(".shop-time9").empty();
      $(".shop-homepage9 a").empty();
      $(".search-result9").css("display", "flex");
      $(".shop-img9 img").attr("src", data["results"]["shop"][8]["logo_image"]);
      $(".shop-name9").append(data["results"]["shop"][8]["name"]);
      $(".shop-address9").append(data["results"]["shop"][8]["address"]);
      $(".shop-time9").append(data["results"]["shop"][8]["open"]);
      $(".shop-homepage9 a").append("ホームページ");
      $(".shop-homepage9 a").attr("href", data["results"]["shop"][8]["urls"]["pc"]);

    }).fail(function (data) {
      console.log(data);
    });
  })
  // ここまで
  // ここからスライド
  let index = 0;
  let slideMax = $('.slide').length
  $('.right-arrow').on('click', function () {
    if (index !== slideMax - 1) {
      index++;
      num = index * -1 * 100;
      $('.slide-container').css({ 'transform': `translateX(${num}%)` })
    }
  })

  $('.left-arrow').on('click', function () {
    if (index !== 0) {
      index--;
      num = index * -1 * 100;
      $('.slide-container').css({ 'transform': `translateX(${num}%)` })
    }
  })
  //   ここまで
  // togobtn実装
  $(".togobtn1").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn2").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name2").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn3").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name3").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn4").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name4").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn5").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name5").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn6").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name6").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn7").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name7").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn8").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    var togolink = document.createElement("a");
    togo.append(togolink);
    togolink.append($(".shop-name8").text())
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);
  })
  $(".togobtn9").on("click", function () {
    var togo = document.createElement("li");
    $(".togolist").append(togo);
    togo.append($(".shop-name9").text());
    // ここからデリート
    var delbtn = document.createElement("span");
    delbtn.textContent = "delete";
    delbtn.addEventListener("click", function () {
      this.parentElement.remove();
    })
    togo.append(delbtn);

  })






  //ランチ検索　ーーーーーーーーーーーーーーー

  $('.lunch-btn').on('click', function () {
    // $('#lunch')
  })

  let input = $('#lunch').val();


  // let data={
  //   "lunch":input
  // }

  
  // englishmenu検索

  $.ajax({
    url: `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=4fbd9178b450695a&english=${input}&format=jsonp`,
    type: 'GET',
    dataType: 'jsonp',
    jsonpCallback: 'callback' //アクセスするときに必要なデータを記載  （連想配列で渡す）    
    //   ↑左キー名
  })
    .done(function (response) {
      //通信成功時の処理
      //  console.log(response.results[0].address1);
      //  $('.result').append(response.results[0].address1,response.results[0].address2);
      // その他の方法
      // let postadd =response.results[0];
      // $('.result').append(postadd.address1,postadd.address2,postadd.address3);
      // その他の方法

      // for(let i=1;i<4;i++){
      // $('.result').append(postadd["address" + i]);
      // その他
      console.log(response);




      //成功したとき実行したいスクリプトを記載
    })
    .fail(function (xhr) {
      //通信失敗時の処理
      //失敗したときに実行したいスクリプトを記載
    })
    .always(function (xhr, msg) {
      //通信完了時の処理
      //結果に関わらず実行したいスクリプトを記載
    });

  $('.cook1').mouseover(function () {
    $('.cook1').css('opacity', 0.6)
  })

  $('.cook1').mouseleave(function () {
    $('.cook1').css('opacity', 1)
  })


  $('.cook2').mouseover(function () {
    $('.cook2').css('opacity', 0.6)
  })

  $('.cook2').mouseleave(function () {
    $('.cook2').css('opacity', 1)
  })

  $('.cook3').mouseover(function () {
    $('.cook3').css('opacity', 0.6)
  })

  $('.cook3').mouseleave(function () {
    $('.cook3').css('opacity', 1)
  })

  $('.cook4').mouseover(function () {
    $('.cook4').css('opacity', 0.6)
  })

  $('.cook4').mouseleave(function () {
    $('.cook4').css('opacity', 1)
  })










})


