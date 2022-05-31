
/*================================================
[  Таблица контента файла  ]
==================================================
 1. Newsletter Popup
 2. Mobile Menu Activation
 3 Checkout Page Activation
 4. NivoSlider Activation
 5. New Products Activation
 6. New Upsell Product Activation
 7. Side Product Activation
 8. Best Seller Activation
 9. Hand Tool Activation
 10. Brand Banner Activation
 11. Blog Activation
 12. Blog two Activation
 13. WOW Js Activation
 14. ScrollUp Activation
 15. Sticky-Menu Activation
 16. Price Slider Activation
 17. Testimonial Slick Carousel
 18. Best Seller Activation
 19. Best Product Activation
 20. Blog Realted Post activation
 21.Best Seller  Unique Activation

================================================*/
// Заполнения index.html блок правой части экрана товары
/*====================================================*/
var email;
var list_bd = [];
/*====================================================*/
// Запись localStorage в  продукта
/*====================================================*/
var blog_id = localStorage.getItem('blog_id');
if (blog_id === null){
  window.location.replace("index.html");
}
/*====================================================*/
// Запись localStorage в  продукта
/*====================================================*/
var db = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    var displayName = user.displayName;
    email = user.email;
  } else {
    email = "";
  }
});

/*====================================================*/
// Запись localStorage в  продукта
/*====================================================*/

var docRef = db.collection("blog_details").doc(blog_id);

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());

        var doc_bd = doc.data();
        var doc_id = blog_id;
        var bd_date = doc_bd.bd_date;
        var bd_picture = doc_bd.bd_picture;
        var bd_picture_big = doc_bd.bd_picture_big;
        var bd_picture_litl_1 = doc_bd.bd_picture_litl_1;
        var bd_picture_litl_2 = doc_bd.bd_picture_litl_2;
        var bd_picture_litl_3 = doc_bd.bd_picture_litl_3;
        var bd_text_litl = doc_bd.bd_text_litl;
        var bd_text = doc_bd.bd_text;
        var bd_text_big = doc_bd.bd_text_big;
        var bd_title = doc_bd.bd_title;
        var bd_author = doc_bd.bd_author;
        var bd_quote_text = doc_bd.bd_quote_text;
        var bd_quote_author = doc_bd.bd_quote_author;
        var bd_category = doc_bd.bd_category;

        var fireBaseTime = new Date(
          bd_date.seconds * 1000 + bd_date.nanoseconds / 1000000,
        );
        var y=fireBaseTime.getFullYear();
        var d=fireBaseTime.getDate();
        var mon=fireBaseTime.getMonth();
        switch (mon)
        {
          case 0: s="января"; break;
          case 1: s="февраля"; break;
          case 2: s="марта"; break;
          case 3: s="апреля"; break;
          case 4: s="мая"; break;
          case 5: s="июня"; break;
          case 6: s="июля"; break;
          case 7: s="августа"; break;
          case 8: s="сентября"; break;
          case 9: s="октября"; break;
          case 10: s="ноября"; break;
          case 11: s="декабря"; break;
        }
        var bd_date_text =d+" "+s+" "+y;
        // Заполняем список таблицей
        var html_blog = [
          '<div class="blog-img">'+
              '<img src="'+ bd_picture_big +'" alt="blog-image">'+
          '</div>'+
          '<div class="blog-content">'+
              '<h1>'+ bd_title +'</h1>'+
              '<div class="blog-meta">'+
                  '<ul>'+
                      '<li><span>Автор: </span> <a href="#">'+ bd_author +'</a></li>'+
                      '<li><span>Дата: </span> <a href="#">'+ bd_date_text +'</a></li>'+
                  '</ul>'+
              '</div>'+
              '<p class="mb-20">'+ bd_text_big +'</p>'+
              '<blockquote class="mb-30"> <p>'+ bd_quote_text +'</p><span>'+ bd_quote_author +'</span></blockquote>'+
              '<p class="mb-20">'+ bd_text +'</p>'+
              '<div class="blog-img blog-single-img">'+
                  '<div class="row">'+
                      '<div class="col-sm-4">'+
                          '<img src="'+ bd_picture_litl_1 +'" alt="blog-image">'+
                      '</div>'+
                      '<div class="col-sm-4">'+
                          '<img src="'+ bd_picture_litl_2 +'" alt="blog-image">'+
                      '</div>'+
                      '<div class="col-sm-4">'+
                          '<img src="'+ bd_picture_litl_3 +'" alt="blog-image">'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '<p class="mb-20">'+ bd_text_litl +'</p>'+
              '<div class="blog-share mtb-50">'+
                  '<div class="row">'+
                      '<div class="col-lg-4 col-md-5 col-sm-6">'+
                          '<span class="pull-left category-text">Категория: </span>'+
                          '<ul class="list-inline">'+
                              '<li><a href="#"> '+ bd_category +'</a></li>'+
                          '</ul>'+
                      '</div>'+
                      '<div class="col-lg-8 col-md-7 col-sm-6">'+
                          '<div class="social-links text-right">'+
                              '<ul class="social-link-list">'+
                                  '<li>Мы в социальных сетях:</li>'+
                                  '<li><a href="#"><i class="fa fa-youtube-play" style="color:#c4302b"></i></a></li>'+
                                  '<li><a href="#"><i class="fa fa-telegram" style="color:#0088cc"></i></a></li>'+
                                  '<li><a href="#"><i class="fa fa-vk" style="color:#597da3"></i></a></li>'+
                              '</ul>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '</div>'
        ].join('');
        var div_blog = document.createElement('div');
        div_blog.setAttribute('class', 'single-blog');
        div_blog.innerHTML = html_blog;
        blog_details_news.prepend(div_blog); // вставить liFirst в начало <ol>

        var html_blog_1 = [
              '<div class="blog-img">'+
                  '<a href="blog-details.html" id = "'+ doc_id +'" onclick="openBlogDetails(this)" ><img src="'+ bd_picture +'" alt="blog-image"></a>'+
              '</div>'+
              '<div class="blog-content">'+
                      '<h4 class="blog-title"><a href="blog-details.html" id = "'+ doc_id +'" onclick="openBlogDetails(this)" >'+ bd_title +'</a></h4>'+
                  '<div class="blog-meta">'+
                      '<ul>'+
                          '<li><span>Дата: </span> <a>'+ bd_date_text +'</a></li>'+
                      '</ul>'+
                  '</div>'+
                  '<div class="readmore">'+
                      '<a href="blog-details.html" id = "'+ doc_id +'" onclick="openBlogDetails(this)" >Читать далее.....</a>'+
                  '</div>'+
              '</div>'
        ].join('');
        var div_blog_1 = document.createElement('div');
        div_blog_1.setAttribute('class', 'single-blog');
        div_blog_1.innerHTML = html_blog_1;
        blog_details.prepend(div_blog_1); // вставить liFirst в начало <ol>
        activBlogDetails();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});



/*====================================================*/
// Запись localStorage в  продукта
/*====================================================*/
function countRabbits(obj) {
  var h = obj.id;
  localStorage.setItem('product_id', h);
  window.location.replace("product.html");
}


/*====================================================*/
// Добавить позицию в блок НОВОСТЕЙ
/*====================================================*/
db.collection("blog_details")
    // .where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var doc_data = doc.data();
            var bd_date = doc_data.bd_date;
            if(doc.id !== blog_id){
              var doc_map = { bd_date: bd_date, doc_id: doc.id, doc_data: doc.data() }
              list_bd.push(doc_map);
            }
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
      }).finally(() => {
        // use slice() to copy the array and not just make a reference
        var byDate = list_bd.slice(0);
        byDate.sort(function(a,b) {
            return a.bd_date - b.bd_date;
        });
        byDate.forEach((doc_page) => {
        var doc_bd = doc_page.doc_data;
        var doc_id = doc_page.doc_id;
        var bd_date = doc_bd.bd_date;
        var bd_picture = doc_bd.bd_picture;
        var bd_picture_big = doc_bd.bd_picture_big;
        var bd_text_litl = doc_bd.bd_text_litl;
        var bd_text = doc_bd.bd_text;
        var bd_text_big = doc_bd.bd_text_big;
        var bd_title = doc_bd.bd_title;
        var bd_author = doc_bd.bd_author;
        var fireBaseTime = new Date(
          bd_date.seconds * 1000 + bd_date.nanoseconds / 1000000,
        );
        var y=fireBaseTime.getFullYear();
        var d=fireBaseTime.getDate();
        var mon=fireBaseTime.getMonth();
        switch (mon)
        {
          case 0: s="января"; break;
          case 1: s="февраля"; break;
          case 2: s="марта"; break;
          case 3: s="апреля"; break;
          case 4: s="мая"; break;
          case 5: s="июня"; break;
          case 6: s="июля"; break;
          case 7: s="августа"; break;
          case 8: s="сентября"; break;
          case 9: s="октября"; break;
          case 10: s="ноября"; break;
          case 11: s="декабря"; break;
        }
        var bd_date_text =d+" "+s+" "+y;
        // Заполняем список таблицей
        var html_blog = [
              '<div class="left-post-thumb f-left mr-20 mb-20">'+
                  '<a href="#"><img class="img" src="'+ bd_picture +'" alt="latest-post-imgae"></a>'+
              '</div>'+
              '<div class="right-post-thumb fix">'+
                  '<h4><a href="#" onclick="openBlogDetails(this)">'+ bd_title +'</a></h4>'+
                  '<span>'+ bd_date_text +'</span>'+
              '</div>'
        ].join('');
        var div_blog = document.createElement('li');
        div_blog.setAttribute('class', 'post-thumb fix');
        div_blog.innerHTML = html_blog;
        blog_details_right.prepend(div_blog); // вставить liFirst в начало <ol>
        });
      // activBlogDetails();
    });


/*====================================================*/
// Переход на позицию в блок ДЕТАЛЬНЫХ НОВОСТЕЙ blog-details.html
/*====================================================*/
function openBlogDetails(obj) {
  var h = obj.id;
  localStorage.setItem('blog_id', h);
  window.location.replace("blog-details.html");
}

/*====================================================*/
// Активировать нижнюю часть экрана с НОВОСТНЫМ блоком
/*====================================================*/
function activBlogDetails() {
  $('.blog-related-post-active').owlCarousel({
      loop: false,
      margin: 30,
      smartSpeed: 1000,
      nav: false,
      dots: false,
      items: 2,
      responsive: {
          0: {
              items: 1,
              autoplay:true
          },
          480: {
              items: 1
          },
          768: {
              items: 2
          },
          992:{
              margin: 29,
              items: 2
          },
          1200: {
              items: 2
          }
      }
  })
}
/*====================================================*/
// Заполняем блок КОММЕНТАРИЕВ К НОВОСТЯМ blog-details.html
/*====================================================*/
var list_bс = [];
db.collection("blog_comment").where("bc_id", "==", blog_id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var doc_data = doc.data();
            var bс_date = doc_data.bс_date;
            var doc_map = { bс_date: bс_date, doc_id: doc.id, doc_data: doc.data() }
            list_bс.push(doc_map);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
      }).finally(() => {
        // use slice() to copy the array and not just make a reference
        var bc_length = list_bс.length;
        if(bc_length === 0){
          var html_blog_bc = [
            '<div class="single-comment">'+
                '<a class="reply" onclick="addСomment()" href="#">Прокомментировать</a>'+
            '</div>'
          ].join('');
          var div_blog_bc = document.createElement('div');
          div_blog_bc.setAttribute('class', 'single-blog');
          div_blog_bc.innerHTML = html_blog_bc;
          blog_details_comment.append(div_blog_bc); // вставить liFirst в начало <ol>
        }
        var elem = document.getElementById('blog_details_comment');
        var text = elem.getElementsByTagName("h3")['0'].textContent;
        elem.getElementsByTagName("h3")['0'].textContent = 'Комментарии к статье - '+ bc_length +'';

        var byDate_bc = list_bс.slice(0);
        byDate_bc.sort(function(a,b) {
            return a.bс_date - b.bс_date;
        });
        var cycle_bc_comment = 0;

        byDate_bc.forEach((doc_page) => {
        cycle_bc_comment = cycle_bc_comment + 1;
        var doc_bc = doc_page.doc_data;
        var doc_id = doc_page.doc_id;
        var bc_date = doc_bc.bc_date;
        var bc_user_email = doc_bc.bc_user_email;
        var bc_text = doc_bc.bc_text;
        var fireBaseTime = new Date(
          bc_date.seconds * 1000 + bc_date.nanoseconds / 1000000,
        );
        var y=fireBaseTime.getFullYear();
        var d=fireBaseTime.getDate();
        var mon=fireBaseTime.getMonth();
        var hours = fireBaseTime.getHours();
        var minutes = fireBaseTime.getMinutes();
        if(hours < 10 ){
          hours = 0+""+hours;
        }
        if(minutes < 10){
          minutes = 0+""+minutes;
        }

        switch (mon)
        {
          case 0: s="января"; break;
          case 1: s="февраля"; break;
          case 2: s="марта"; break;
          case 3: s="апреля"; break;
          case 4: s="мая"; break;
          case 5: s="июня"; break;
          case 6: s="июля"; break;
          case 7: s="августа"; break;
          case 8: s="сентября"; break;
          case 9: s="октября"; break;
          case 10: s="ноября"; break;
          case 11: s="декабря"; break;
        }
        var bd_date_text =d+" "+s+" "+y;
        var bd_time_text =hours+" : "+minutes;

        // Заполняем список таблицей
        if(cycle_bc_comment == bc_length){
          var html_blog_bc = [
            '<div class="single-comment">'+
                '<div class="comment-details fix">'+
                    '<h8><a href="#">'+ bc_user_email +'</a></h8>'+
                    '<h8><p>'+ bd_date_text +' _ '+ bd_time_text +'</p></h8>'+
                    '<p>'+ bc_text +'</p>'+
                '</div>'+
                '<a class="reply" onclick="addСomment()" href="#">Прокомментировать</a>'+
            '</div>'
          ].join('');
          var div_blog_bc = document.createElement('div');
          div_blog_bc.setAttribute('class', 'single-blog');
          div_blog_bc.innerHTML = html_blog_bc;
          blog_details_comment.append(div_blog_bc); // вставить liFirst в начало <ol>
        } else {
          var html_blog_bc_1 = [
            '<div class="single-comment">'+
                '<div class="comment-details fix">'+
                    '<h8><a href="#">'+ bc_user_email +'</a></h8>'+
                    '<h8><p>'+ bd_date_text +' _ '+ bd_time_text +'</p></h8>'+
                    '<p>'+ bc_text +'</p>'+
                '</div>'+
            '</div>'
          ].join('');
          var div_blog_bc_1 = document.createElement('div');
          div_blog_bc_1.setAttribute('class', 'single-blog');
          div_blog_bc_1.innerHTML = html_blog_bc_1;
          blog_details_comment.append(div_blog_bc_1); // вставить liFirst в начало <ol>
        }
        });
    });

/*====================================================*/
// Активировать нижнюю часть экрана с НОВОСТНЫМ блоком
/*====================================================*/
function addСomment() {
  if (email === ""){
    alert("Войдите пожалуйста под своим логином!");
    window.location.replace("login.html");
  }
var bc_comment = prompt('Благодарим Вас за комментарий '+ email +' !', 'пишите текст в этом поле');
// Add a new document with a generated id.

// Add a new document with a generated id.
db.collection("blog_comment").add({
    bc_date: firebase.firestore.Timestamp.fromDate(new Date()),
    bc_id: blog_id,
    bc_text: bc_comment,
    bc_user_email: email
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    alert("Благодарим за комментарий!");
})
.catch((error) => {
    console.error("Error adding document: ", error);
});





}
