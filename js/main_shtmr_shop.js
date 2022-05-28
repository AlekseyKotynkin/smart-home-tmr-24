
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
// Проверяем авторизирован ли сеанс shop.html
/*====================================================*/
var db = firebase.firestore();
var email;
var list_product_array = [];

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

/*====================================================*/
// Считываем какую страницу надо отображать на экране.
/*====================================================*/
var number_page = localStorage.getItem('page_numerList');
if (number_page === null){
  number_page = 1;
}

/*====================================================*/
// Считываем сколько позиций товара надо отображать на странице.
/*====================================================*/
var page_positions = localStorage.getItem('page_positions');
if (page_positions === null){
  page_positions = 12;
}
var select = document.getElementById('Ultra');
var option;
for (var i=0; i<select.options.length; i++) {
  option = select.options[i];
  if (option.value == page_positions) {
     option.setAttribute('selected', true);
  }
}
/*====================================================*/
// Устанавливаем сортировку на странице (рейтинг, наименование, цена)
/*====================================================*/
var page_sorter = localStorage.getItem('page_sorter');
if (page_sorter === null){
  page_sorter = "Position";
}
var select_page_sorter = document.getElementById('page_sorter');
var option_page_sorter;
for (var i=0; i<select_page_sorter.options.length; i++) {
  option_page_sorter = select_page_sorter.options[i];
  if (option_page_sorter.value == page_sorter) {
     option_page_sorter.setAttribute('selected', true);
  }
}
/*====================================================*/
// Устанавливаем сортировку от убывания к возрастанию или на оборот на странице
/*====================================================*/
var className = localStorage.getItem('page_sascending_descending');
  if (className === null){
    className = "fa fa-arrow-down";
  }
  if(className === "fa fa-arrow-up"){
    document.getElementById("sascending_descending").className = "fa fa-arrow-up";

  }

/*====================================================*/
// Формируем массив полного ассортимента или с отбором по группе
/*====================================================*/
var number_of_products = 0;
var list_product = [];
var selection_criteria = localStorage.getItem('selection_criteria');
if (selection_criteria === null){
  db.collection("product").get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              var doc_data = doc.data();
              var p_popularity = doc_data.p_popularity;
              var p_Title = doc_data.p_Title;
              var p_price_min = doc_data.p_price_min;
              var doc_map = { doc_title: p_Title, doc_popularity: p_popularity, doc_price: p_price_min, doc_id: doc.id, doc_data: doc.data() }
              list_product.push(doc_map);
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      }).finally(() => {
          processingTheArray();
      });
}else{
  db.collection("product").where("p_Filtr_index", "==", selection_criteria)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              var doc_data = doc.data();
              var p_popularity = doc_data.p_popularity;
              var p_Title = doc_data.p_Title;
              var p_price_min = doc_data.p_price_min;
              // console.log(doc.id, " => ", doc.data());
              var doc_map = { doc_title: p_Title, doc_popularity: p_popularity, doc_price: p_price_min, doc_id: doc.id, doc_data: doc.data() }
              list_product.push(doc_map);

          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      }).finally(() => {
         processingTheArray();
      });

}

/*====================================================*/
// Обрабатываем массив.
/*====================================================*/
function processingTheArray() {
  number_of_products = list_product.length;
  // var number_of_products_text = 'Страница 1 - '+ page_positions +' из '+ number_of_products +'.';
  // document.getElementById("number_of_products_id").innerText = number_of_products_text;
  if(page_sorter === "Position"){
    var list_product_popularity = list_product.slice(0);
    list_product_popularity.sort(function(a,b) {
        return a.doc_popularity - b.doc_popularity;
    });
    list_product = list_product_popularity;
  }
  if(page_sorter === "Product Name"){
    var list_product_title = list_product.slice(0);
    list_product_title.sort(function(a,b) {
        var x = a.doc_title.toLowerCase();
        var y = b.doc_title.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });
    list_product = list_product_title;
  }
  if(page_sorter === "Price"){
    var list_product_price = list_product.slice(0);
    list_product_price.sort(function(a,b) {
        return a.doc_price - b.doc_price;
    });
    list_product = list_product_price;
  }
   var k = 0;
   var l = 0 + parseInt(page_positions);
   // var list_product_array = [];
   for (let i = 0; i <= list_product.length - 1; i = i + page_positions) {
     var list_product_page = list_product.slice(k, l)
     k = parseInt(l);
     l = parseInt(l) + parseInt(page_positions);
     list_product_array.push(list_product_page);
   }
   var m = list_product_array.length;

   for (let i = 1; i <= m; i++) { // выведет 0, затем 1, затем 2
     var select_blog_pagination = document.getElementById('blog_pagination');
     var html_blog_pagination = [
           '<a href="#" onclick="openPageNumber(this)">'+ i +'</a>'
     ].join('');
     var div_blog_pagination = document.createElement('li');
     div_blog_pagination.value = i;
     div_blog_pagination.innerHTML = html_blog_pagination;
     select_blog_pagination.append(div_blog_pagination);
   }
   var navbar = document.getElementById("blog_pagination").querySelectorAll('li');
   navbar.forEach((item, index) => {
     if (item.value == number_page) {
        item.setAttribute('class', 'active');
       if (number_page < m ){
         var select_blog_increase = document.getElementById('blog_pagination');
         var html_blog_increase = [
               '<a onclick="openPageNumber_plus()" href="#"><i class="fa fa-angle-right"></i></a>'
         ].join('');
         var div_blog_increase = document.createElement('li');
         div_blog_increase.innerHTML = html_blog_increase;
         select_blog_increase.append(div_blog_increase);
       }
       if (number_page > 1 ){
         var select_blog_reduce = document.getElementById('blog_pagination');
         var html_blog_reduce = [
               '<a onclick="openPageNumber_minus()" href="#"><i class="fa fa-angle-left"></i></a>'
         ].join('');
         var div_blog_reduce = document.createElement('li');
         div_blog_reduce.innerHTML = html_blog_reduce;
         select_blog_reduce.prepend(div_blog_reduce);
       }
     }
   });
   var g = number_page * page_positions;
   if( g <= number_of_products ){
     g = page_positions;
   } else {
     g = number_of_products - page_positions * (number_page - 1);
   }
   var number_of_products_text = 'Страница '+ number_page +' из '+ m +'. Товаров '+ g +' из '+ number_of_products +'.';
   document.getElementById("number_of_products_id").innerText = number_of_products_text;
   displayThePage();
}

/*====================================================*/
// Отображаем данные из массива на странице shop.html
/*====================================================*/

function displayThePage(){
var p = parseInt(number_page) - 1;
var display_the_page_map = list_product_array[p];
display_the_page_map.forEach((doc_page) => {
    var doc_product = doc_page.doc_data;
    var doc_id = doc_page.doc_id;
    var p_Foto_link = doc_product.p_Foto_link;
    var p_Title = doc_product.p_Title;
    var p_price_max = doc_product.p_price_max;
    var p_price_min = doc_product.p_price_min;
    var p_comment = doc_product.p_comment;
    // Заполняем список таблицей
    var html = [
      '<div class="pro-img">'+
          '<a onclick="countRabbits(this)" id = '+ doc_id +' href="product.html">'+
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
          '<p><span class="price">оптовая '+p_price_min+' ₽</span><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
          // '<p><span class="price">оптовая '+p_price_min+' ₽</span></p>'+
          // '<p><span class="prev-price">розничная '+p_price_max+' ₽</span></p>'+
          '<p>'+p_comment+'.</p>'+
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
      '</div>'
    ].join('');
    var div = document.createElement('div');
    div.setAttribute('class', 'single-product');
    div.innerHTML = html;
    // if (cycle_blok_shop > 0 && cycle_blok_shop <= page_positions){
    list_view.prepend(div); // вставить liFirst в начало <ol>
    // }
    // console.log("Переполнен список");
    // Заполняем список столбиком
    var html_grid_view = [
      '<div class="single-product">'+
          '<div class="pro-img">'+
              '<a onclick="countRabbits(this)" id = '+ doc_id +' href="product.html">'+
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
                      // '<a href="wishlist.html" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                      // '<a class="add-cart" href="cart.html" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                      // '<a href="compare.html" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                      '<a id = '+doc_id+' onclick = "go_wishlist(this)" href="#" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                      '<a id = '+doc_id+' onclick = "go_cart(this)" class="add-cart" href="#" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                      '<a id = '+doc_id+' onclick = "go_compare(this)" href="#" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                  '</div>'+
              '</div>'+
          '</div>'+
      '</div>'
    ].join('');
    var div_grid_view = document.createElement('div');
    div_grid_view.setAttribute('class', 'col-lg-4 col-sm-6');
    div_grid_view.innerHTML = html_grid_view;
    // if (cycle_blok_shop > 0 && cycle_blok_shop <= page_positions){
    grid_view.prepend(div_grid_view); // вставить liFirst в начало <ol>
    // }
    // console.log("Переполнен список");

    });
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
  }
/*====================================================*/
// Заполняем список с левой стороны shop.html Категория
/*====================================================*/
// Initialize Cloud Firestore and get a reference to the service
var cycle_category = 0;
db.collection("product_group").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        cycle_category = cycle_category + 1;
        var doc_category = doc.data();
        var category_name = doc_category.category_name;;
        var category_title = doc_category.category_title;
        var html_category;
        // var category_checked;
        if (category_name === selection_criteria ){
          html_category = [
              '<div class="checkout-form-list create-acc mb-30">'+
                  '<input id="'+category_name+'" type="checkbox" checked ="true" />'+
                  '<label>'+category_title+'</label>'+
              '</div>'
          ].join('');
        }else {
          html_category = [
              '<div class="checkout-form-list create-acc mb-30">'+
                  '<input id="'+category_name+'" type="checkbox"/>'+
                  '<label>'+category_title+'</label>'+
              '</div>'
          ].join('');
        }
        var div_category = document.createElement('div');
        div_category.setAttribute('class', 'col-md-12');
        div_category.innerHTML = html_category;
        if (cycle_category > 0 && cycle_category <= 7){
        list_category.prepend(div_category); // вставить liFirst в начало <ol>
        }
    });
});


/*====================================================*/
// Заполняем список с левой стороны shop.html Производитель
/*====================================================*/
// Initialize Cloud Firestore and get a reference to the service
var cycle_manufacturer = 0;
db.collection("manufacturer").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        cycle_manufacturer = cycle_manufacturer + 1;
        var doc_manufacturer = doc.data();
        var m_title = doc_manufacturer.m_title;
        var html_manufacturer = [
          '<div class="checkout-form-list create-acc mb-30">'+
              '<input id="cbox" type="checkbox" />'+
              '<label>'+m_title+'</label>'+
          '</div>'
          // '<li><a href="#">'+m_title+'</a></li>'
        ].join('');
        // var div_manufacturer = document.createElement('li');
        // div.setAttribute('class', 'single-product');
        var div_manufacturer = document.createElement('div');
        div_manufacturer.setAttribute('class', 'col-md-12');
        div_manufacturer.innerHTML = html_manufacturer;
        if (cycle_manufacturer > 0 && cycle_manufacturer <= 7){
        list_manufacturer.prepend(div_manufacturer); // вставить liFirst в начало <ol>
        }
        // console.log(doc.id, " => ", doc.data());
    });
});
/*====================================================*/
// Записываем в localStorage id продукта, карточку какова откроем в product.html.
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
                // console.log(doc.id, " => ", doc.data());
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
                // console.log(doc.id, " => ", doc.data());
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
// Записываем в localStorage количество позиций для вывода на странице.
/*====================================================*/
function pagePositionsActiv() {
  page_positions = document.getElementById("Ultra").value;
  localStorage.setItem('page_positions', page_positions);
  window.location.replace("shop.html");
}

/*====================================================*/
// Записываем в localStorage сортировку по группам товара для вывода на страницу.
/*====================================================*/
function pageSorterActiv() {
  page_sorter = document.getElementById("page_sorter").value;
  localStorage.setItem('page_sorter', page_sorter);
    if(page_sorter === "Position"){
      // window.location.replace("shop.html");


      window.location.replace("shop.html");
    }
    if(page_sorter === "Product Name"){


      window.location.replace("shop.html");
    }
    if(page_sorter === "Price"){


      window.location.replace("shop.html");
    }

}

/*====================================================*/
// Записываем в localStorage сортировку ао возрастанию или убыванию товара для вывода на страницу.
/*====================================================*/
function ascendingDescending() {
  var sascending_descending = document.getElementById("sascending_descending");
  className = sascending_descending.className;
  if(className === "fa fa-arrow-up"){
    localStorage.setItem('page_sascending_descending', "fa fa-arrow-down");
    document.getElementById("sascending_descending").className = "fa fa-arrow-down";
  }
  if(className === "fa fa-arrow-down"){
    localStorage.setItem('page_sascending_descending', "fa fa-arrow-up");
    document.getElementById("sascending_descending").className = "fa fa-arrow-up";
  }

}

/*====================================================*/
// Записываем в localStorage номер страницы для отображения.
/*====================================================*/
function openPageNumber(obj) {
  number_page = obj.innerHTML;
  alert(number_page);
  localStorage.setItem('page_numerList', number_page);

}
/*====================================================*/
// Уменьшить на одну позицию номер страницы для отображения и в в localStorage.
/*====================================================*/
function openPageNumber_minus() {
  number_page = parseInt(number_page) - 1;
  alert(number_page);
  localStorage.setItem('page_numerList', number_page);

}
/*====================================================*/
// Увеличить на одну позицию номер страницы для отображения и в в localStorage.
/*====================================================*/
function openPageNumber_plus() {
  number_page = parseInt(number_page) + 1;
  alert(number_page);
  localStorage.setItem('page_numerList', number_page);

}
