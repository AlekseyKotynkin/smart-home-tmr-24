
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
// Заполнения shop.html
/*====================================================*/
var email;
var product_id;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    var displayName = user.displayName;
    email = user.email;
  } else {
    email = "";
  }
});
// [END auth_state_listener]

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();
product_id = localStorage.getItem('product_id');
if (product_id === null){
  window.location.replace("index.html");
}
var docRef = db.collection("product").doc(product_id);
docRef.get().then((doc) => {
    if (doc.exists) {
        var doc_product = doc.data();
        var p_Foto_link = doc_product.p_Foto_link;
        var p_Foto_link_1 = doc_product.p_Foto_link_1;
        var p_Foto_link_2 = doc_product.p_Foto_link_2;
        var p_Foto_link_3 = doc_product.p_Foto_link_3;
        var p_Title = doc_product.p_Title;
        var p_FuiiTitle = doc_product.p_FuiiTitle;
        var p_price_max = doc_product.p_price_max;
        var p_price_min = doc_product.p_price_min;
        var p_comment = doc_product.p_comment;
        var p_comment_big = doc_product.p_comment_big;
        var p_description = doc_product.p_description;
        var p_description_1 = doc_product.p_description_1;
        var p_description_2 = doc_product.p_description_2;
        var p_description_3 = doc_product.p_description_3;
        var p_sale = doc_product.p_sale;
        var p_availability = doc_product.p_availability;
        var p_upsell_doc_map = doc_product.p_upsell_doc_map;
        var p_documentation_map = doc_product.p_documentation_map;
        var p_specifications_map = doc_product.p_specifications_map;
        var p_popularity = doc_product.p_popularity;
        var star_1;
        if(p_popularity >=1){
          star_1 = "color: #f9ba48; font-size: 14px; line-height: 20px";
        } else {
          star_1 = "color: ##444";
        }
        var star_2;
        if(p_popularity >=2){
          star_2 = "color: #f9ba48; font-size: 14px; line-height: 20px";
        } else {
          star_2 = "color: ##444";
        }
        var star_3;
        if(p_popularity >=3){
          star_3 = "color: #f9ba48; font-size: 14px; line-height: 20px";
        } else {
          star_3 = "color: ##444";
        }
        var star_4;
        if(p_popularity >=4){
          star_4 = "color: #f9ba48; font-size: 14px; line-height: 20px";
        } else {
          star_4 = "color: ##444";
        }
        var star_5;
        if(p_popularity >=5){
          star_5 = "color: #f9ba48; font-size: 14px; line-height: 20px";
        } else {
          star_5 = "color: ##444";
        }

        // Заполняем ссылки на большое фото
        var html_product_availability = [
          '<p><span class="in-stock">'+p_availability+'</span></p>'
          // '<p><span class="in-stock">'+p_availability+'</span><span class="sku">50</span></p>'
        ].join('');
        product_availability.insertAdjacentHTML('afterbegin', html_product_availability);
        var html_link = [
          '<a data-fancybox="images" href='+p_Foto_link+'><img src='+p_Foto_link+' alt="product-view"></a>'
        ].join('');
        thumb1.insertAdjacentHTML('afterbegin', html_link);
        var html_link_1 = [
          '<a data-fancybox="images" href='+p_Foto_link_1+'><img src='+p_Foto_link_1+' alt="product-view"></a>'
        ].join('');
        thumb2.insertAdjacentHTML('afterbegin', html_link_1);
        var html_link_2 = [
          '<a data-fancybox="images" href='+p_Foto_link_2+'><img src='+p_Foto_link_2+' alt="product-view"></a>'
        ].join('');
        thumb3.insertAdjacentHTML('afterbegin', html_link_2);
        var html_link_3 = [
          '<a data-fancybox="images" href='+p_Foto_link_3+'><img src='+p_Foto_link_3+' alt="product-view"></a>'
        ].join('');
        thumb4.insertAdjacentHTML('afterbegin', html_link_3);
        // Заполняем ссылки на маленькие фото
        var html_product_thumbnail = [
          '<a class="active" data-toggle="tab" href="#thumb1"> <img src='+p_Foto_link+' alt="product-thumbnail"></a>'+
          '<a data-toggle="tab" href="#thumb2"> <img src='+p_Foto_link_1+' alt="product-thumbnail"></a>'+
          '<a data-toggle="tab" href="#thumb3"> <img src='+p_Foto_link_2+' alt="product-thumbnail"></a>'+
          '<a data-toggle="tab" href="#thumb4"> <img src='+p_Foto_link_3+' alt="product-thumbnail"></a>'
        ].join('');
        var div_product_thumbnail = document.createElement('div');
        div_product_thumbnail.setAttribute('class', 'thumb-menu nav');
        div_product_thumbnail.innerHTML = html_product_thumbnail;
        product_thumbnail.prepend(div_product_thumbnail); // вставить liFirst в начало <ol>
        // Заполняем название
        var html_title = [
          '<h3 class="product-header">'+p_FuiiTitle+'</h3>'
        ].join('');
        product_title.insertAdjacentHTML('afterbegin', html_title);
        // Заполняем цену
        var html_price = [
          // '<p><span class="price">оптовая '+p_price_min+' ₽</span><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'
          '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
          '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'

        ].join('');
        product_price.insertAdjacentHTML('afterbegin', html_price);
        // Заполняем рейтинг
        var html_star = [
          '<span class="fa fa-star" style="'+ star_1 +'"></span>'+
          '<span class="fa fa-star" style="'+ star_2 +'"></span>'+
          '<span class="fa fa-star" style="'+ star_3 +'"></span>'+
          '<span class="fa fa-star" style="'+ star_4 +'"></span>'+
          '<span class="fa fa-star" style="'+ star_5 +'"></span>'
        ].join('');
        product_star.insertAdjacentHTML('beforeend', html_star);

        // Заполняем комментарий большой
        var html_comment = [
          '<p class="ptb-20">'+p_comment_big+'</p>'
        ].join('');
        product_title.insertAdjacentHTML('beforeend', html_comment);
        // Заполняем описание
        // var l = p_description_map[0];
        if(p_description_1 !== ""){
          // var p_description_1 = "";
          // var p_description_2 = "";
          // var p_description_3 = "";
          //
          var html_description = [
            '<li> '+p_description_1+'</li>'+
            '<li> '+p_description_2+'</li>'+
            '<li> '+p_description_3+'</li>'
          ].join('');
          var div_product_description = document.createElement('ul');
          div_product_description.setAttribute('class', 'tab-list-item');
          div_product_description.innerHTML = html_description;
          d_tail.prepend(div_product_description); // вставить liFirst в начало <ol>
        }
        var html_description_1 = [
          '<p>'+p_description+'</p>'
        ].join('');
        d_tail.insertAdjacentHTML('afterBegin', html_description_1);
        // Заполняем документация
        var k = p_documentation_map.length;
        for (let m = 0; m < k; m++) {
          var documentation_doc = p_documentation_map[m];
          var documentation_name = documentation_doc.name;
          var documentation_name_action = documentation_doc.name_action;
          var documentation_position = m + 1;
          var documentation_picture = documentation_doc.picture;
          var documentation_picture_big = documentation_doc.picture_big;
          var documentation_download = documentation_doc.download;
          if(documentation_picture_big === "" ){
            var html_documentation = [
              '<span>'+documentation_position+'</span>'+
              '<div class="ht-work-text">'+
                  '<h5><a href='+documentation_picture+' target="_blank">'+documentation_name+'</a></h5>'+
                  '<a href='+documentation_download+' download="">'+documentation_name_action+'  <i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>'+
              '</div>'
            ].join('');
            var div_documentation = document.createElement('div');
            div_documentation.setAttribute('class', 'ht-about-work');
            div_documentation.innerHTML = html_documentation;
            d_documentation_list.append(div_documentation); // вставить liFirst в начало <ol>
          }else{
            var html_documentation_v = [
              '<span>'+documentation_position+'</span>'+
              '<div class="ht-work-text">'+
                  '<h5><a>'+documentation_name+'</a></h5>'+
                  '<a data-fancybox="images" href='+documentation_picture_big+'><img src='+documentation_picture+'alt="product-view"></a>'+
                  '<h5><a href='+documentation_download+' download="">'+documentation_name_action+'  <i class="fa fa-file-pdf-o" aria-hidden="true"></i></a></h5>'+
              '</div>'
            ].join('');
            var div_documentation_v = document.createElement('div');
            div_documentation_v.setAttribute('class', 'ht-about-work');
            div_documentation_v.innerHTML = html_documentation_v;
            d_documentation_list.append(div_documentation_v); // вставить liFirst в начало <ol>
           }
         }
         // Заполняем характеристики
          for (let entry of p_specifications_map) { // то же самое, что и recipeMap.entries()

           var tr = document.createElement("tr");
           tr.className = 'cart_item';
           /*====================================================*/
           var div_title_to = document.createElement('strong');
           div_title_to.className = 'product-quantity';

           var div_title = document.createElement('td');
           div_title.className = 'product-name';
           div_title.innerHTML = entry.title;
           div_title.appendChild(div_title_to);
           /*====================================================*/
           var div_meaning_to = document.createElement('span');
           div_meaning_to.className = 'amount';
           div_meaning_to.innerHTML = entry.meaning;

           var div_meaning = document.createElement('td');
           div_meaning.className = 'product-total';
           div_meaning.appendChild(div_meaning_to);
           /*====================================================*/
           tr.appendChild(div_title);
           tr.appendChild(div_meaning);
           /*====================================================*/
           container.appendChild(tr);

        }
       // Заполняем сопутствующие товары
        var h = p_upsell_doc_map.length;
        for (let i = 0; i < h; i++) {
          var cycle_upsell_doc_map = 0;
          var id_doc = p_upsell_doc_map[i];
          var docRef = db.collection("product").doc(id_doc);
          docRef.get().then((doc) => {
              if (doc.exists) {
                  var doc_product = doc.data();
                  var doc_id = doc.id;
                  var p_Foto_link = doc_product.p_Foto_link;
                  var p_Title = doc_product.p_Title;
                  var p_price_max = doc_product.p_price_max;
                  var p_price_min = doc_product.p_price_min;
                  var p_comment = doc_product.p_comment;
                  var p_sale = doc_product.p_sale;
                  var html_sale ='';
                  if (p_sale !== '') {
                    html_sale ='<span class="sticker-new">'+p_sale+'</span>';
                   }
                  var p_popularity = doc_product.p_popularity;
                  var star_1_W;
                  if(p_popularity >=1){
                    star_1_W = "color: #f9ba48; font-size: 14px; line-height: 20px";
                  } else {
                    star_1_W = "color: ##444";
                  }
                  var star_2_W;
                  if(p_popularity >=2){
                    star_2_W = "color: #f9ba48; font-size: 14px; line-height: 20px";
                  } else {
                    star_2_W = "color: ##444";
                  }
                  var star_3_W;
                  if(p_popularity >=3){
                    star_3_W = "color: #f9ba48; font-size: 14px; line-height: 20px";
                  } else {
                    star_3_W = "color: ##444";
                  }
                  var star_4_W;
                  if(p_popularity >=4){
                    star_4_W = "color: #f9ba48; font-size: 14px; line-height: 20px";
                  } else {
                    star_4_W = "color: ##444";
                  }
                  var star_5_W;
                  if(p_popularity >=5){
                    star_5_W = "color: #f9ba48; font-size: 14px; line-height: 20px";
                  } else {
                    star_5_W = "color: ##444";
                  }
                  // Заполняем список таблицей
                  var html = [
                    '<div class="pro-img">'+
                        '<a onclick="countRabbits(this)" id = '+ doc_id +' >'+
                            '<img class="primary-img" src='+p_Foto_link+' alt="single-product">'+
                            '<img class="secondary-img" src='+p_Foto_link+' alt="single-product">'+
                        '</a>'+
                    '</div>'+
                    '<div class="pro-content">'+
                        '<div class="product-rating">'+
                            '<span class="fa fa-star" style="'+ star_1_W +'"></span>'+
                            '<span class="fa fa-star" style="'+ star_2_W +'"></span>'+
                            '<span class="fa fa-star" style="'+ star_3_W +'"></span>'+
                            '<span class="fa fa-star" style="'+ star_4_W +'"></span>'+
                            '<span class="fa fa-star" style="'+ star_5_W +'"></span>'+
                        '</div>'+
                        '<h4><a onclick="countRabbits(this)" id = '+ doc_id +' href="#">'+p_Title+'</a></h4>'+
                        '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
                        '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
                        '<div class="pro-actions">'+
                            '<div class="actions-secondary">'+
                                '<a id = '+doc_id+' onclick = "go_wishlist(this)" href="#" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                                '<a id = '+doc_id+' onclick = "go_cart(this)" class="add-cart" href="#" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                                '<a id = '+doc_id+' onclick = "go_compare(this)" href="#" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    html_sale
                  ].join('');
                  var div = document.createElement('div');
                  div.setAttribute('class', 'single-product');
                  div.innerHTML = html;
                  upsell_product.prepend(div); // вставить liFirst в начало <ol>
                  cycle_upsell_doc_map = cycle_upsell_doc_map + 1;
                  if (cycle_upsell_doc_map === h){
                    UpsellPro()
                  }
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }

          }).catch((error) => {
              console.log("Error getting document:", error);
          });

        }

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

}).catch((error) => {
    console.log("Error getting document:", error);
}).finally(() => {
  activateBlogReviews();
});

// взято из файла main.js
function UpsellPro()
{  $('.new-upsell-pro').owlCarousel({
          loop: false,
          nav: true,
          dots: false,
          smartSpeed: 1000,

          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          margin: 30,
          responsive: {
              0: {
                  items: 1,
                  autoplay:true
              },
              480: {
                  items: 2
              },
              768: {
                  items: 2
              },
              1000: {
                  items: 3
              },
              1200: {
                  items: 4
              }
          }

      })

}
/*====================================================*/

/*====================================================*/
function countRabbits(obj) {
  var h = obj.id;
  localStorage.setItem('product_id', h);
  window.location.replace("product.html");
}
/*====================================================*/
// Добавить позицию в список КОРЗИНЫ
/*====================================================*/
function go_cart(obj) {
  var h = obj.id;
  var arrfy_cart = [];
  var doc_cart_id;
  if(email !==""){
    db.collection("cart").where("email", "==", email)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var doc_cart = doc.data();
                arrfy_cart = doc_cart.cart;
                doc_cart_id = doc.id;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
        .finally(() => {
            if ( arrfy_cart.indexOf( h ) === -1 ){
              arrfy_cart.push(h);
              var washingtonRef = db.collection("cart").doc(doc_cart_id);
              // Set the "capital" field of the city 'DC'
              return washingtonRef.update({
                  cart: arrfy_cart
              })
              .then(() => {
                  console.log("Document successfully updated!");
                  alert("Новая позиция добавлена в КОРЗИНУ");
              })
              .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
              });
            }
            alert("Данная позиция уже добавлена в КОРЗИНУ ранее!");
        });

  }else{
    alert ('Для работы с функцией "КОРЗИНА" Вам необходимо авторизироваться!');
    window.location.replace("login.html");
  }

}

/*====================================================*/
/*====================================================*/
// Добавить позицию в список СРАВНИТЬ
/*====================================================*/
function go_compare(obj) {
  var h = obj.id;
  var arrfy_compare = [];
  var doc_compare_id;
  if(email !==""){
    db.collection("compare").where("email", "==", email)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var doc_compare = doc.data();
                arrfy_compare = doc_compare.compare;
                doc_compare_id = doc.id;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
        .finally(() => {
            if ( arrfy_compare.indexOf( h ) === -1 ){
              arrfy_compare.push(h);
              var washingtonRef = db.collection("compare").doc(doc_compare_id);
              // Set the "capital" field of the city 'DC'
              return washingtonRef.update({
                  compare: arrfy_compare
              })
              .then(() => {
                  console.log("Document successfully updated!");
                  alert("Новая позиция добавлена в СРАВНИТЬ");
              })
              .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
              });
            }
            alert("Данная позиция уже добавлена в СРАВНИТЬ ранее!");
        });
      }else{
        alert ('Для работы с функцией "СРАВНИТЬ" Вам необходимо авторизироваться!');
        window.location.replace("login.html");
      }
}

/*====================================================*/
// Добавить позицию в список ИЗБРАННОЕ
/*====================================================*/
function go_wishlist(obj) {
  var h = obj.id;
  var arrfy_wishlist = [];
  var doc_wishlist_id;
  if(email !==""){
    db.collection("wishlist").where("email", "==", email)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                var doc_wishlist = doc.data();
                arrfy_wishlist = doc_wishlist.wishlist;
                doc_wishlist_id = doc.id;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
        .finally(() => {
            if ( arrfy_wishlist.indexOf( h ) === -1 ){
              arrfy_wishlist.push(h);
              var washingtonRef = db.collection("wishlist").doc(doc_wishlist_id);
              // Set the "capital" field of the city 'DC'
              return washingtonRef.update({
                  wishlist: arrfy_wishlist
              })
              .then(() => {
                  console.log("Document successfully updated!");
                  alert("Новая позиция добавлена в ИЗБРАННОЕ");
              })
              .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
              });
            }
            alert("Данная позиция уже добавлена в ИЗБРАННОЕ ранее!");
        });
      }else{
        alert ('Для работы с функцией "ИЗБРАННОЕ" Вам необходимо авторизироваться!');
        window.location.replace("login.html");
      }
}

/*====================================================*/
// Добавить позицию в список ИЗБРАННОЕ со страници product.html
/*====================================================*/
function stateListener_wishlist() {
  var obj = {id: product_id};
  go_wishlist(obj)
}
/*====================================================*/
// Добавить позицию в список КОРЗИНА со страници product.html
/*====================================================*/
function stateListener_cart() {
  var obj = {id: product_id};
  go_cart(obj)
}
/*====================================================*/
// Добавить позицию в список СРАВНИТЬ со страници product.html
/*====================================================*/
function stateListener_compare() {
  var obj = {id: product_id};
  go_compare(obj)
}

/*====================================================*/
// Заполняем блок КОММЕНТАРИЕВ К НОВОСТЯМ blog-details.html
/*====================================================*/

function activateBlogReviews(){
  var list_bс = [];
  db.collection("blog_comment").where("bc_id", "==", product_id)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              var doc_data = doc.data();
              var bc_date = doc_data.bc_date;
              var doc_map = { bc_date: bc_date, doc_id: doc.id, doc_data: doc.data() }
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
          } else {
            var elem = document.getElementById('blog_details_comment');
            var text = elem.getElementsByTagName("h3")['0'].textContent;
            elem.getElementsByTagName("h3")['0'].textContent = 'Комментарии к статье - '+ bc_length +'';

            var byDate_bc = list_bс.slice(0);
            byDate_bc.sort(function(a,b) {
                return b.bc_date - a.bc_date;
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
          }
      });
}

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
    bc_id: product_id,
    bc_text: bc_comment,
    bc_user_email: email
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    alert("Благодарим за комментарий!");
    var parent_list_view = document.getElementById("blog_details_comment");
    parent_list_view.replaceChildren();
    var div_blog_bc_2 = document.createElement('h3');
    div_blog_bc_2.setAttribute('class', 'sidebar-title');
    div_blog_bc_2.innerHTML = "Ваш комментарий может стать первым.";
    blog_details_comment.append(div_blog_bc_2); //
    activateBlogReviews();
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}
