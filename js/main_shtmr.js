
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
var cycle_blok_product = 0;

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
var cycle_blok = 0;
var cycle_blok_bracket = 0;
var cycle_blok_casing = 0;
var cycle_blok_service_equipment = 0;

var db = firebase.firestore();
db.collection("product").where("p_Filtr_index", "==", "ipdl")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            cycle_blok = cycle_blok + 1;
            var doc_product = doc.data();
            var doc_id = doc.id;
            var p_Foto_link = doc_product.p_Foto_link;
            var p_Title = doc_product.p_Title;
            var p_price_max = doc_product.p_price_max;
            var p_price_min = doc_product.p_price_min;
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
                        '<h4><a onclick="countRabbits(this)" id = '+ doc_id +' href="product.html">'+p_Title+'</a></h4>'+
                        '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
                        '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
                        '<div class="pro-actions">'+
                            '<div class="actions-secondary">'+
                                '<a id = '+doc_id+' onclick = "go_wishlist(this)" href="#" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                                '<a id = '+doc_id+' onclick = "go_cart(this)" class="add-cart" href="#" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                                '<a id = '+doc_id+' onclick = "go_compare(this)" href="#" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
            ].join('');
            var div = document.createElement('div');
            div.setAttribute('class', 'single-product');
            div.innerHTML = html;
            if (cycle_blok > 0 && cycle_blok <= 12){
              ipdl_blok.prepend(div); // вставить liFirst в начало <ol>
            }
            // console.log("Переполнен список");

        });
        // console.log("вариант 1");
        cycle_blok_product = cycle_blok_product + 1;
        startBlok();

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    db.collection("product").where("p_Filtr_index", "==", "bracket")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                cycle_blok_bracket = cycle_blok_bracket + 1;
                var doc_product = doc.data();
                var doc_id = doc.id;
                var p_Foto_link = doc_product.p_Foto_link;
                var p_Title = doc_product.p_Title;
                var p_price_max = doc_product.p_price_max;
                var p_price_min = doc_product.p_price_min;
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
                            '<h4><a onclick="countRabbits(this)" id = '+ doc_id +' href="product.html">'+p_Title+'</a></h4>'+
                            // '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'+
                            '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
                            '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
                            '<div class="pro-actions">'+
                                '<div class="actions-secondary">'+
                                    '<a id = '+doc_id+' onclick = "go_wishlist(this)" href="#" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                                    '<a id = '+doc_id+' onclick = "go_cart(this)" class="add-cart" href="#" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                                    '<a id = '+doc_id+' onclick = "go_compare(this)" href="#" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'
                ].join('');
                var div_bracket = document.createElement('div');
                div_bracket.setAttribute('class', 'single-product');
                div_bracket.innerHTML = html;
                if (cycle_blok_bracket > 0 && cycle_blok_bracket <= 7){
                  bracket_blok.prepend(div_bracket); // вставить liFirst в начало <ol>
                }
                // console.log("Переполнен список");

            });
            // console.log("вариант 1");
            cycle_blok_product = cycle_blok_product + 1;
            startBlok();

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        db.collection("product").where("p_Filtr_index", "==", "casing")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    cycle_blok_casing = cycle_blok_casing + 1;
                    var doc_product = doc.data();
                    var doc_id = doc.id;
                    var p_Foto_link = doc_product.p_Foto_link;
                    var p_Title = doc_product.p_Title;
                    var p_price_max = doc_product.p_price_max;
                    var p_price_min = doc_product.p_price_min;
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
                                '<h4><a onclick="countRabbits(this)" id = '+ doc_id +' href="product.html">'+p_Title+'</a></h4>'+
                                // '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'+
                                '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
                                '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
                                '<div class="pro-actions">'+
                                    '<div class="actions-secondary">'+
                                        '<a id = '+doc_id+' onclick = "go_wishlist(this)" href="#" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                                        '<a id = '+doc_id+' onclick = "go_cart(this)" class="add-cart" href="#" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                                        '<a id = '+doc_id+' onclick = "go_compare(this)" href="#" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                    ].join('');
                    var div_casing = document.createElement('div');
                    div_casing.setAttribute('class', 'single-product');
                    div_casing.innerHTML = html;
                    if (cycle_blok_casing > 0 && cycle_blok_casing <= 7){
                      casing_blok.prepend(div_casing); // вставить liFirst в начало <ol>
                    }
                    // console.log("Переполнен список");

                });
                // console.log("вариант 1");
                cycle_blok_product = cycle_blok_product + 1;
                startBlok();

            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

            db.collection("product").where("p_Filtr_index", "==", "service_equipment")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        cycle_blok_service_equipment = cycle_blok_service_equipment + 1;
                        var doc_product = doc.data();
                        var doc_id = doc.id;
                        var p_Foto_link = doc_product.p_Foto_link;
                        var p_Title = doc_product.p_Title;
                        var p_price_max = doc_product.p_price_max;
                        var p_price_min = doc_product.p_price_min;
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
                                    '<h4><a onclick="countRabbits(this)" id = '+ doc_id +' href="product.html">'+p_Title+'</a></h4>'+
                                    // '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'+
                                    '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
                                    '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
                                    '<div class="pro-actions">'+
                                        '<div class="actions-secondary">'+
                                            '<a id = '+doc_id+' onclick = "go_wishlist(this)" href="#" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                                            '<a id = '+doc_id+' onclick = "go_cart(this)" class="add-cart" href="#" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                                            '<a id = '+doc_id+' onclick = "go_compare(this)" href="#" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'
                        ].join('');
                        var div_service_equipment = document.createElement('div');
                        div_service_equipment.setAttribute('class', 'single-product');
                        div_service_equipment.innerHTML = html;
                        if (cycle_blok_service_equipment > 0 && cycle_blok_service_equipment <= 7){
                          service_equipment_blok.prepend(div_service_equipment); // вставить liFirst в начало <ol>
                        }
                        // console.log("Переполнен список");

                    });
                    // console.log("вариант 1");
                    cycle_blok_product = cycle_blok_product + 1;
                    startBlok();

                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });






    function startBlok(){
      if(cycle_blok_product === 4){

        $('.new-pro-active').owlCarousel({
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
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }

            });
       }
    }

  /*====================================================*/
  // Заполнения index.html блок левой части экрана
  /*====================================================*/

  // Initialize Cloud Firestore and get a reference to the service
  var cycle_blok_l = 0;
  var db = firebase.firestore();
  // db.collection("product").where("p_Filtr_index", "==", "ipdl")
  db.collection("product").get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              cycle_blok_l = cycle_blok_l + 1;
              var doc_product = doc.data();
              var doc_id = doc.id;
              var p_Foto_link = doc_product.p_Foto_link;
              var p_Title = doc_product.p_Title;
              var p_price_max = doc_product.p_price_max;
              var p_price_min = doc_product.p_price_min;
              var html = [
                      '<div class="pro-img">'+
                          '<a onclick="countRabbits(this)" id = '+ doc_id +' ><img class="img" src='+p_Foto_link+' alt="product-image"></a>'+
                      '</div>'+
                      '<div class="pro-content">'+
                          '<div class="product-rating">'+
                              '<i class="fa fa-star"></i>'+
                              '<i class="fa fa-star"></i>'+
                              '<i class="fa fa-star"></i>'+
                              '<i class="fa fa-star"></i>'+
                              '<i class="fa fa-star"></i>'+
                          '</div>'+
                          '<h4><a onclick="countRabbits(this)" id = '+ doc_id +' href="product.html">'+p_Title+'</a></h4>'+
                          // '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+'</del></p>'+
                          '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
                          '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
                      '</div>'
              ].join('');
              var div = document.createElement('div');
              div.setAttribute('class', 'single-product');
              div.innerHTML = html;
              if (cycle_blok_l > 0 && cycle_blok_l <= 5){
                product_blok_sale_1.prepend(div); // вставить liFirst в начало <ol>
              }
              if (cycle_blok_l > 5 && cycle_blok_l <= 10){
                product_blok_sale_2.prepend(div); // вставить liFirst в начало <ol>
              }
              if (cycle_blok_l > 10 && cycle_blok_l <= 15){
                product_blok_sale_3.prepend(div); // вставить liFirst в начало <ol>
              }
              if (cycle_blok_l > 15 && cycle_blok_l <= 20){
                product_blok_sale_4.prepend(div); // вставить liFirst в начало <ol>
              }
              // console.log("Переполнен список");
          });
          // console.log("вариант 1");
          startBlok_l();

      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });

      function startBlok_l(){
        $('.side-product-list-active')
            .on('changed.owl.carousel initialized.owl.carousel', function (event) {
                $(event.target)
                    .find('.owl-item').removeClass('last')
                    .eq(event.item.index + event.page.size - 1).addClass('last');
            }).owlCarousel({
                loop: false,
                nav: true,
                dots: false,
                smartSpeed: 1500,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                margin: 1,
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
                    991: {
                        items: 1
                    }
                }
            })
        }

/*====================================================*/
// Запись localStorage в  продукта
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
