
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
// Initialize Cloud Firestore and get a reference to the service
var email;
var doc_compare_id;
var db = firebase.firestore();
var arrfy_compare = [];
var map_compare = new Map();
var arrfy_compare_C = 0;
var arrfy_compare_L = 0;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    email = user.email;
    // alert ('Вы вошли под логином '+ displayEmail +'! Благодарим Вас '+ displayName +'');
    // ...
    var cycle_blok_compare = 0;
    db.collection("compare").where("email", "==", email)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                cycle_blok_compare = cycle_blok_compare + 1;
                doc_compare_id = doc.id;
                var doc_compare = doc.data();
                arrfy_compare = doc_compare.compare;
                arrfy_compare_L = arrfy_compare.length;
                // var arrfy_cart_C = 0;
                // Заполняем список таблицей
                arrfy_compare.forEach(function(entry) {
                    var docRef = db.collection("product").doc(entry);
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then((doc) => {
                        // Document was found in the cache. If no cached document exists,
                        // an error will be returned to the 'catch' block below.
                        // console.log("Cached document data:", doc.data());
                        map_compare.set(doc.id, doc.data());
                        // console.log(map_compare);
                        fill_in_table()
                    }).catch((error) => {
                        console.log("Error getting cached document:", error);
                    });

                });
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
  } else {
    // User is signed out
    // ...
    window.location.replace("login.html");
  }
});
// [END auth_state_listener]
/*====================================================*/
// Оформить ЗАКАЗ
/*====================================================*/
function fill_in_table() {
arrfy_compare_C += 1;
  if(arrfy_compare_C === arrfy_compare_L){
    for (let entry of map_compare) { // то же самое, что и recipeMap.entries()
      // alert(entry); // огурец,500 (и так далее)
      console.log(entry);
      var doc_id = entry[0];
      var doc_product = entry[1];
      var p_Filtr_index = doc_product.p_Filtr_index;
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

      /*====================================================*/
      var html_total = [
            '<div class="compare-details">'+
                '<div class="compare-detail-img">'+
                    '<a id = '+doc_id+' onclick = "countRabbits(this)" href="#"><img src='+p_Foto_link+' alt="compare-product"></a>'+
                '</div>'+
                '<div class="compare-detail-content">'+
                    '<span>'+ p_Filtr_index +'</span>'+
                    '<h4><a id = '+doc_id+' onclick = "countRabbits(this)" href="product.html">'+p_Title+'</a></h4>'+
                '</div>'+
            '</div>'
      ].join('');
      var div_total = document.createElement('td');
      div_total.setAttribute('class', 'product-description');
      div_total.innerHTML = html_total;
      table_compare_total.after(div_total); // вставить liFirst в начало <ol>
      /*====================================================*/
      var html_description = [
        '<p>'+p_comment+'</p>'
      ].join('');
      var div_description = document.createElement('td');
      div_description.setAttribute('class', 'product-description');
      div_description.innerHTML = html_description;
      table_compare_description.after(div_description); // вставить liFirst в начало <ol>
      /*====================================================*/
      var div_price = document.createElement('td');
      div_price.setAttribute('class', 'product-description');
      div_price.innerHTML = p_price_min;
      table_compare_price.after(div_price); // вставить liFirst в начало <ol>
      /*====================================================*/
      var html_specifications_1 = [
        '<p>'+p_comment+'</p>'
      ].join('');
      var div_specifications_1 = document.createElement('td');
      div_specifications_1.setAttribute('class', 'product-description');
      div_specifications_1.innerHTML = html_specifications_1;
      table_compare_specifications_1.after(div_specifications_1); // вставить liFirst в начало <ol>
      /*====================================================*/
      // var html_specifications_2 = [
      //   '<p>'+p_comment+'</p>'
      // ].join('');
      // var div_specifications_2 = document.createElement('td');
      // div_specifications_2.setAttribute('class', 'product-description');
      // div_specifications_2.innerHTML = specifications_2;
      // table_compare_specifications_2.after(div_specifications_2); // вставить liFirst в начало <ol>
      /*====================================================*/
      var div_stock = document.createElement('td');
      div_stock.setAttribute('class', 'product-description');
      div_stock.innerHTML = p_availability;
      table_compare_stock.after(div_stock); // вставить liFirst в начало <ol>
      /*====================================================*/
      var html_cart = [
        '<a id = '+doc_id+' onclick = "go_cart(this)" class="compare-cart text-uppercase" href="#">в корзину</a>'
      ].join('');
      var div_cart = document.createElement('td');
      div_cart.setAttribute('class', 'product-description');
      div_cart.innerHTML = html_cart;
      table_compare_cart.after(div_cart); // вставить liFirst в начало <ol>
      /*====================================================*/
      var html_delete = [
        '<i id = '+doc_id+' onclick = "delete_compare(this)" class="fa fa-trash-o"></i>'
      ].join('');
      var div_delete = document.createElement('td');
      div_delete.setAttribute('class', 'product-description');
      div_delete.innerHTML = html_delete;
      table_compare_delete.after(div_delete); // вставить liFirst в начало <ol>
      /*====================================================*/
      var html_rating = [
        '<div class="product-rating">'+
            '<i class="fa fa-star"></i>'+
            '<i class="fa fa-star"></i>'+
            '<i class="fa fa-star"></i>'+
            '<i class="fa fa-star"></i>'+
            '<i class="fa fa-star-o"></i>'+
        '</div>'
      ].join('');
      var div_rating = document.createElement('td');
      div_rating.setAttribute('class', 'product-description');
      div_rating.innerHTML = html_rating;
      table_compare_rating.after(div_rating); // вставить liFirst в начало <ol>
      /*====================================================*/

    }

  }
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
// Удалить позицию из списка ИЗБРАННОЕ
/*====================================================*/
function delete_compare(obj) {
  var h = obj.id;
  var new_arrfy_compare = arrfy_compare.filter(function(f) { return f !== h });
  var washingtonRef = db.collection("compare").doc(doc_compare_id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      compare: new_arrfy_compare
  })
  .then(() => {
      console.log("Document successfully updated!");
      window.location.replace("cart.html");
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
}

/*====================================================*/
// Добавить позицию в список КОРЗИНЫ
/*====================================================*/
function go_cart(obj) {
  var h = obj.id;
  var arrfy_cart = [];
  var doc_cart_id;
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
}
