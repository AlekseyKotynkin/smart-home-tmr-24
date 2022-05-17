
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

// Initialize Cloud Firestore and get a reference to the service
var cycle_blok = 0;
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
                        '<h4><a href="product.html">'+p_Title+'</a></h4>'+
                        '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'+
                        '<div class="pro-actions">'+
                            '<div class="actions-secondary">'+
                                '<a href="wishlist.html" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                                '<a class="add-cart" href="cart.html" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                                '<a href="compare.html" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
            ].join('');
            var div = document.createElement('div');
            div.setAttribute('class', 'single-product');
            div.innerHTML = html;
            if (cycle_blok > 0 && cycle_blok <= 7){
              ipdl_blok.prepend(div); // вставить liFirst в начало <ol>
            }
            // console.log("Переполнен список");

        });
        // console.log("вариант 1");
        startBlok();

    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    function startBlok(){
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

  /*====================================================*/
  // Заполнения index.html блок левой части экрана
  /*====================================================*/

  // Initialize Cloud Firestore and get a reference to the service
  var cycle_blok_l = 0;
  var db = firebase.firestore();
  db.collection("product").where("p_Filtr_index", "==", "ipdl")
      .get()
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
                          '<h4><a href="product.html">'+p_Title+'</a></h4>'+
                          '<p><span class="price">'+p_price_min+'</span><del class="prev-price">'+p_price_max+'</del></p>'+
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

/*====================================================*/
function countRabbits(obj) {
  var h = obj.id;
  localStorage.setItem('product_id', h);
  window.location.replace("product.html");
}




/*====================================================*/

/*====================================================*/
