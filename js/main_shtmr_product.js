
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
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    var displayName = user.displayName;
    email = user.email;
    // ...
  } else {
    // User is signed out
    // ...
    email = "";
  }
});
// [END auth_state_listener]

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();
product_id = localStorage.getItem('product_id');
var docRef = db.collection("product").doc(product_id);
docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
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
          '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'
        ].join('');
        product_price.insertAdjacentHTML('afterbegin', html_price);
        // Заполняем комментарий большой
        var html_comment = [
          '<p class="ptb-20">'+p_comment_big+'</p>'
        ].join('');
        product_title.insertAdjacentHTML('beforeend', html_comment);
        // Заполняем описание
        var html_description = [
          '<li> '+p_description_1+'</li>'+
          '<li> '+p_description_2+'</li>'+
          '<li> '+p_description_3+'</li>'
        ].join('');
        var div_product_description = document.createElement('ul');
        div_product_description.setAttribute('class', 'tab-list-item');
        div_product_description.innerHTML = html_description;
        d_tail.prepend(div_product_description); // вставить liFirst в начало <ol>
        var html_description_1 = [
          '<p>'+p_description+'</p>'
        ].join('');
        d_tail.insertAdjacentHTML('afterBegin', html_description_1);

        // Заполняем сопутствующие товары
        var h = p_upsell_doc_map.length;
        for (let i = 0; i < h; i++) {
          // alert( p_upsell_doc_map[i] );
          // console.log( p_upsell_doc_map[i] );
          var cycle_upsell_doc_map = 0;
          var id_doc = p_upsell_doc_map[i];
          var docRef = db.collection("product").doc(id_doc);
          docRef.get().then((doc) => {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
                  var doc_product = doc.data();
                  var doc_id = doc.id;
                  var p_Foto_link = doc_product.p_Foto_link;
                  var p_Title = doc_product.p_Title;
                  var p_price_max = doc_product.p_price_max;
                  var p_price_min = doc_product.p_price_min;
                  var p_comment = doc_product.p_comment;
                  var p_sale = doc_product.p_sale;
                  console.log(p_sale);
                  var html_sale ='';
                  if (p_sale !== '') {
                    html_sale ='<span class="sticker-new">'+p_sale+'</span>';
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
                            '<i class="fa fa-star"></i>'+
                            '<i class="fa fa-star"></i>'+
                            '<i class="fa fa-star"></i>'+
                            '<i class="fa fa-star"></i>'+
                            '<i class="fa fa-star"></i>'+
                        '</div>'+
                        '<h4><a href="product.html">'+p_Title+'</a></h4>'+
                        '<p><span class="price">'+p_price_min+' ₽ ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'+
                        // '<p>'+p_comment+'.</p>'+
                        '<div class="pro-actions">'+
                            '<div class="actions-secondary">'+
                                // '<a href="wishlist.html" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                                // '<a class="add-cart" href="cart.html" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                                // '<a href="compare.html" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
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
