
/*================================================
[  Table of contents  ]
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
 22.

 1. Всплывающее окно новостной рассылки
  2. Активация Мобильного Меню
  3 Активация страницы Оформления Заказа
  4. Активация NivoSlider
  5. Активация Новых Продуктов
  6. Активация нового продукта Upsell
  7. Активация левой бокового блока продукции
  8. Активация Бестселлера
  9. Активация Ручного Инструмента
  10. Активация Баннера Бренда
  11. Активация Блога
  12. Активация второго блога
  13. Активация WOW Js
  14. Прокрутите Активацию вверх
  15. Активация Липкого Меню
  16. Активация Ценового Слайдера
  17. Скользкая Карусель Отзывов
  18. Активация Бестселлера
  19. Лучшая Активация Продукта
  20. Активация поста, связанного с блогом
  21.Уникальная активация Бестселлера
  22.
================================================*/

(function ($) {
    "use Strict";
    /*--------------------------
    1. Newsletter Popup
    ---------------------------*/
    setTimeout(function () {
        $('.popup_wrapper').css({
            "opacity": "1",
            "visibility": "visible"
        });
        $('.popup_off').on('click', function () {
            $(".popup_wrapper").fadeOut(500);
        })
    }, 2500);

    /*----------------------------
    2. Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
    });

    /*----------------------------
    3 Checkout Page Activation
    -----------------------------*/
     $('.categorie-title').on('click', function () {
    $('.vertical-menu-list').slideToggle();
    });

    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle();
    });
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle();
    });
    $('#cbox').on('click', function () {
        $('#cbox_info').slideToggle();
    });
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle();
    });

    /*----------------------------
    4. NivoSlider Activation    Главный слайдер index.html
    -----------------------------*/
    $('#slider').nivoSlider({
        effect: 'random',
        animSpeed: 300,
        pauseTime: 5000,
        directionNav: false,
        manualAdvance: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        controlNav: true,
        prevText: "<i class='zmdi zmdi-chevron-left'></i>",
        nextText: "<i class='zmdi zmdi-chevron-right'></i>"
    });

    /*----------------------------------------------------
    5. New Products Activation  Бок с товарами правый index.html
    -----------------------------------------------------*/
    // $('.new-pro-active').owlCarousel({
    //         loop: false,
    //         nav: true,
    //         dots: false,
    //         smartSpeed: 1000,
    //
    //         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //         margin: 30,
    //         responsive: {
    //             0: {
    //                 items: 1,
    //                 autoplay:true
    //             },
    //             480: {
    //                 items: 2
    //             },
    //             768: {
    //                 items: 2
    //             },
    //             1000: {
    //                 items: 2
    //             },
    //             1200: {
    //                 items: 3
    //             }
    //         }
    //
    //     })
    /*----------------------------------------------------
    6. New Upsell Product Activation
    -----------------------------------------------------*/
    // $('.new-upsell-pro').owlCarousel({
    //         loop: false,
    //         nav: true,
    //         dots: false,
    //         smartSpeed: 1000,
    //
    //         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //         margin: 30,
    //         responsive: {
    //             0: {
    //                 items: 1,
    //                 autoplay:true
    //             },
    //             480: {
    //                 items: 2
    //             },
    //             768: {
    //                 items: 2
    //             },
    //             1000: {
    //                 items: 3
    //             },
    //             1200: {
    //                 items: 4
    //             }
    //         }
    //
    //     })

    /*----------------------------------------------------
    7. Side Product Activation   7. Активация левой бокового блока продукции
    -----------------------------------------------------*/
    // $('.side-product-list-active')
    //     .on('changed.owl.carousel initialized.owl.carousel', function (event) {
    //         $(event.target)
    //             .find('.owl-item').removeClass('last')
    //             .eq(event.item.index + event.page.size - 1).addClass('last');
    //     }).owlCarousel({
    //         loop: false,
    //         nav: true,
    //         dots: false,
    //         smartSpeed: 1500,
    //         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //         margin: 1,
    //         responsive: {
    //             0: {
    //                 items: 1,
    //                 autoplay:true
    //             },
    //            480: {
    //                 items: 2
    //             },
    //             768: {
    //                 items: 2
    //             },
    //             991: {
    //                 items: 1
    //             }
    //         }
    //     })

    /*----------------------------------------------------
    8. Best Seller Activation
    -----------------------------------------------------*/
    $('.best-seller-pro-active')
        .on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target)
                .find('.owl-item').removeClass('last')
                .eq(event.item.index + event.page.size - 1).addClass('last');
        }).owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            smartSpeed: 1200,
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
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })

    /*----------------------------------------------------
    9. Hand Tool Activation
    -----------------------------------------------------*/
    $('.hand-tool-active').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            smartSpeed: 1200,
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
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
    })
    /*----------------------------------------------------
    10. Brand Banner Activation
    -----------------------------------------------------*/
$('.brand-banner').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target)

                .find('.owl-item').removeClass('last')
                .eq(event.item.index + event.page.size - 1).addClass('last');

            $(event.target)
                .find('.owl-item').removeClass('first')
                .eq(event.item.index).addClass('first')


        }).owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 1200,
        margin: 1,
        responsive: {
            0: {
                items: 1,
                autoplay:true
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    /*----------------------------------------------------
    11. Blog Activation
    -----------------------------------------------------*/
    $('.blog-active').owlCarousel({
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
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    /*----------------------------------------------------
    12. Blog two Activation
    -----------------------------------------------------*/
    $('.blog-active2').owlCarousel({
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
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    /*----------------------------
    13. WOW Js Activation
    -----------------------------*/
    new WOW().init();

    /*----------------------------
    14. ScrollUp Activation
    -----------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '550', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollSpeed: 900,
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*----------------------------
    15. Sticky-Menu Activation
    ------------------------------ */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('.header-sticky').addClass("sticky");
        } else {
            $('.header-sticky').removeClass("sticky");
        }
    });

    /*----------------------------
    16. Price Slider Activation
    -----------------------------*/
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 30000,
        values: [0, 15000],
        slide: function (event, ui) {
            $("#amount").val("₽" + ui.values[0] + "  ₽" + ui.values[1]);
        }
    });
    $("#amount").val("₽" + $("#slider-range").slider("values", 0) +
        "  ₽" + $("#slider-range").slider("values", 1));

    /*--------------------------------
    17. Testimonial Slick Carousel
    -----------------------------------*/
    $('.testext_active').owlCarousel({
        loop: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*----------------------------------------------------
    18. Best Seller Activation
    -----------------------------------------------------*/
    $('.best-seller-pro').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target)
                .find('.owl-item').removeClass('last')
                .eq(event.item.index + event.page.size - 1).addClass('last');
        }).owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 0,
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
                items: 1
            }
        }
    })
    /*----------------------------------------------------
    19. Best Product Activation
    -----------------------------------------------------*/
    $('.best-seller-pro-two')
        .owlCarousel({
            loop: false,
            nav: false,
            dots: false,
            smartSpeed: 1200,
            margin: 0,
            responsive: {
                0: {
                    items: 1,
                    autoplay:true
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        })

    /*-------------------------------------
    20. Blog Realted Post activation
    --------------------------------------*/
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

    /*----------------------------------------------------
    21.Best Seller  Unique Activation
    -----------------------------------------------------*/
    $('.best-seller-unique').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target)
                .find('.owl-item').removeClass('last')
                .eq(event.item.index + event.page.size - 1).addClass('last');
        }).owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 0,
        responsive: {
            0: {
                items: 1,
                autoplay:true
            },
            768: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    })


})(jQuery);


/*====================================================*/
//  22.Заполнения index.html блок отражение авторизации
/*====================================================*/

function authStateListenerGlob() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = user.displayName;
      var displayEmail = user.email;
      // alert ('Вы вошли под логином '+ displayEmail +'! Благодарим Вас '+ displayName +'');
      var html = [
            '<a><i class="fa fa-user-circle-o"></i></a>'+
            '<ul class="ht-dropdown">'+
                '<p>Активный:</p>'+
                '<a>'+ displayEmail +'</a>'+
                '<li><a onclick = "authExitListenerGlob()" href="#">Выход</a></li>'+
            '</ul>'
      ].join('');
      var div = document.createElement('li');
      // div.setAttribute('class', 'fa fa-user-circle-o');
      div.innerHTML = html;
      active_account.prepend(div); // вставить liFirst в начало <ol>
      // ...
    } else {
      // User is signed out
      // ...
      var html_w = [
            '<a><i class="fa fa-cog"></i></a>'+
            '<ul class="ht-dropdown">'+
                '<li><a href="login.html">Вход</a></li>'+
                '<li><a href="register.html">Регистрация</a></li>'+
            '</ul>'
      ].join('');
      var div_w = document.createElement('li');
      // div.setAttribute('class', 'fa fa-user-circle-o');
      div_w.innerHTML = html_w;
      active_account.prepend(div_w); // вставить liFirst в начало <ol>
    }
  });
  // [END auth_state_listener]
}

/*====================================================*/
// 23. Выход из авторизации
/*====================================================*/

function authExitListenerGlob() {

    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
      window.location.replace("login.html");
    }, function(error) {
      console.error('Sign Out Error', error);
    });

}
/*====================================================*/
/** 24. Проверка авторизации КОРЗИНА'.*/
/*====================================================*/

function authStateListener_cart() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = user.displayName;
      var displayEmail = user.email;
      window.location.replace("cart.html");
      // ...
    } else {
      // User is signed out
      // ...
      alert ('Для работы с "Корзина" Вам необходимо авторизироваться!');
      window.location.replace("login.html");

    }
  });
  // [END auth_state_listener]
}

/*====================================================*/
/** 25. Проверка авторизации ИЗБРАННОЕ'.*/
/*====================================================*/

function authStateListener_wishlist() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = user.displayName;
      var displayEmail = user.email;
      window.location.replace("wishlist.html");
      // ...
    } else {
      // User is signed out
      // ...
      alert ('Для работы с "Избранное" Вам необходимо авторизироваться!');
      window.location.replace("login.html");

    }
  });
  // [END auth_state_listener]
}

/*====================================================*/
/** 26.Проверка авторизации СРАВНИТЬ'.*/
/*====================================================*/

function authStateListener_compare() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = user.displayName;
      var displayEmail = user.email;
      window.location.replace("compare.html");
      // ...
    } else {
      // User is signed out
      // ...
      alert ('Для работы с функцией "Сравнить" Вам необходимо авторизироваться!');
      window.location.replace("login.html");

    }
  });
  // [END auth_state_listener]
}

/*====================================================*/
/** 27.Отправка email  для рассылки новостей.*/
/*====================================================*/

function go_email() {
  // [START auth_state_listener]
  var email_newsletter = document.getElementById('email_newsletter').value;
  var email_newsletter_array = [];
  var docRef = db.collection("email_newsletter").doc("b2zlXp7eiHV22tXwcXqq");
  docRef.get().then((doc) => {
      if (doc.exists) {
          // console.log("Document data:", doc.data());
          var doc_array = doc.data();
          email_newsletter_array = doc_array.email_newsletter;
          if ( email_newsletter_array.indexOf( email_newsletter ) === -1 ){
            email_newsletter_array.push(email_newsletter);
            var washingtonRef = db.collection("email_newsletter").doc("b2zlXp7eiHV22tXwcXqq");
            // Set the "capital" field of the city 'DC'
            return washingtonRef.update({
                email_newsletter: email_newsletter_array
            })
            .then(() => {
                console.log("Document successfully updated!");
                alert('Ваш email '+ email_newsletter +' добавлен!');
                window.location.reload();
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
          }
          alert('Ваш email '+ email_newsletter +' был добавлен ранее!');
          window.location.reload();
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
  // [END auth_state_listener]
}

/*====================================================*/
/** 28.Поиск ПРОДУКЦИИ.*/
/*====================================================*/

function searchForYourProduct() {
  // [START auth_state_listener]

  alert("работает")
  // [END auth_state_listener]
}

/*====================================================*/
/** 29.Переход в каталог
/*====================================================*/
function openTheCatalog() {
  localStorage.removeItem('selection_criteria');
  window.location.replace("shop.html");
}
/*====================================================*/
/** 30. Переход в каталог ИПДЛ
/*====================================================*/
function openTheCatalog_IPDL() {
  localStorage.setItem('selection_criteria', "ipdl");
  window.location.replace("shop.html");
}
/*====================================================*/
/** 31. Переход в каталог Кожухи casing
/*====================================================*/
function openTheCatalog_Casing() {
  localStorage.setItem('selection_criteria', "casing");
  window.location.replace("shop.html");
}
/*====================================================*/
/** 32. Переход в каталог Кронштейны bracket
/*====================================================*/
function openTheCatalog_Bracket() {
  localStorage.setItem('selection_criteria', "bracket");
  window.location.replace("shop.html");
}
/*====================================================*/
/** 33. Переход в каталог Сервисное оборудование service_equipment
/*====================================================*/
function openTheCatalog_ServiceEquipment() {
  localStorage.setItem('selection_criteria', "service_equipment");
  window.location.replace("shop.html");
}
