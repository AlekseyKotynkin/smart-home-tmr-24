
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
        var doc_bd = doc_page.doc_data;
        var doc_id = blog_id;
        var bd_date = doc_bd.bd_date;
        var bd_picture = doc_bd.bd_picture;
        var bd_picture_big = doc_bd.bd_picture_big;
        var bd_text_litl = doc_bd.bd_text_litl;
        var bd_text = doc_bd.bd_text;
        var bd_text_big = doc_bd.bd_text_big;
        var bd_title = doc_bd.bd_title;
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
          case 4: s="мае"; break;
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
              '<img src="img/blog/details.jpg" alt="blog-image">'+
          '</div>'+
          '<div class="blog-content">'+
              '<h1>Lorem ipsum dolor sit amet, consectl adip elit, sed do eiusmod tempor</h1>'+
              '<div class="blog-meta">'+
                  '<ul>'+
                      '<li><span>By: </span> <a href="#">Jantrik,</a></li>'+
                      '<li><span>On: </span> <a href="#">'+ bd_date_text +'</a></li>'+
                  '</ul>'+
              '</div>'+
              '<p class="mb-20">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example,</p>'+
              '<blockquote class="mb-30"> <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms with righteous indignation and dislike.</p><span>Christine Rios</span></blockquote>'+
              '<p class="mb-20">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>'+
              '<p class="mb-20">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>'+
              '<div class="blog-img blog-single-img">'+
                  '<div class="row">'+
                      '<div class="col-sm-4">'+
                          '<img src="img/products/1.jpg" alt="blog-image">'+
                      '</div>'+
                      '<div class="col-sm-4">'+
                          '<img src="img/products/2.jpg" alt="blog-image">'+
                      '</div>'+
                      '<div class="col-sm-4">'+
                          '<img src="img/products/3.jpg" alt="blog-image">'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '<p class="mb-20">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>'+
              '<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>'+
              '<div class="blog-share mtb-50">'+
                  '<div class="row">'+
                      '<div class="col-lg-4 col-md-5 col-sm-6">'+
                          '<span class="pull-left category-text">Categories: </span>'+
                          '<ul class="list-inline">'+
                              '<li><a href="#"> Tools</a></li>'+
                          '</ul>'+
                      '</div>'+
                      '<div class="col-lg-8 col-md-7 col-sm-6">'+
                          '<div class="social-links text-right">'+
                              '<ul class="social-link-list">'+
                                  '<li>Share:</li>'+
                                  '<li><a href="#"><i class="fa fa-google-plus"></i></a></li>'+
                                  '<li><a href="#"><i class="fa fa-linkedin"></i></a></li>'+
                                  '<li><a href="#"><i class="fa fa-instagram"></i></a></li>'+
                                  '<li><a href="#"><i class="fa fa-reddit"></i></a></li>'+
                              '</ul>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '</div>'+
              '<div class="blog-pager">'+
                  '<ul class="pager">'+
                      '<li class="previous"><a href="#"><i class="zmdi zmdi-chevron-left"></i>prev post</a></li>'+
                      '<li class="next"><a href="#">Next post<i class="zmdi zmdi-chevron-right"></i></a></li>'+
                  '</ul>'+
              '</div>'
        ].join('');
        var div_blog = document.createElement('div');
        div_blog.setAttribute('class', 'single-blog');
        div_blog.innerHTML = html_blog;
        blog_details_news.prepend(div_blog); // вставить liFirst в начало <ol>


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
          case 4: s="мае"; break;
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
                  '<a href="blog-details.html" id = "'+ doc_id +'" onclick="openBlogDetails(this)" ><img src="'+ bd_picture +'" alt="blog-image"></a>'+
              '</div>'+
              '<div class="blog-content">'+
                      '<h4 class="blog-title"><a href="blog-details.html" id = "'+ doc_id +'" onclick="openBlogDetails(this)" >'+ bd_text +'</a></h4>'+
                  '<div class="blog-meta">'+
                      '<ul>'+
                          '<li><span>Дата: </span> <a>'+ bd_date_text +'</a></li>'+
                      '</ul>'+
                  '</div>'+
                  '<div class="readmore">'+
                      '<a href="blog-details.html" id = "'+ doc_id +'" onclick="openBlogDetails(this)" >'+ bd_text_litl +'.....</a>'+
                  '</div>'+
              '</div>'
        ].join('');
        var div_blog = document.createElement('div');
        div_blog.setAttribute('class', 'single-blog');
        div_blog.innerHTML = html_blog;
        blog_details.prepend(div_blog); // вставить liFirst в начало <ol>
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
// function activBlogDetails() {
//   $('.blog-active').owlCarousel({
//       loop: false,
//       nav: true,
//       dots: false,
//       smartSpeed: 1000,
//       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
//       margin: 30,
//       responsive: {
//           0: {
//               items: 1,
//               autoplay:true
//           },
//           768: {
//               items: 2
//           },
//           1000: {
//               items: 3
//           }
//       }
//   })
// }
