
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
var doc_cart_id;
var db = firebase.firestore();
var arrfy_cart = [];
var arrfy_cart_L = 0;
var arrfy_cart_C = 0;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    email = user.email;
    // alert ('Вы вошли под логином '+ displayEmail +'! Благодарим Вас '+ displayName +'');
    // ...
    var cycle_blok_cart = 0;
    db.collection("cart").where("email", "==", email)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                cycle_blok_cart = cycle_blok_cart + 1;
                doc_cart_id = doc.id;
                var doc_cart = doc.data();
                arrfy_cart = doc_cart.cart;
                arrfy_cart_L = arrfy_cart.length;
                // var arrfy_cart_C = 0;
                // Заполняем список таблицей
                arrfy_cart.forEach(function(entry) {
                    var docRef = db.collection("product").doc(entry);
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then((doc) => {
                        // Document was found in the cache. If no cached document exists,
                        // an error will be returned to the 'catch' block below.
                        console.log("Cached document data:", doc.data());
                        var item = doc.data();

                        var tr = document.createElement("tr");
                        /*====================================================*/
                        var product_thumbnail_to = document.createElement('a');
                        var product_remove_to_im = item.p_Foto_link;
                        var html_thumbnail_to = [
                           '<img src='+product_remove_to_im+' alt="cart-image" />'
                        ].join('');
                        product_thumbnail_to.innerHTML = html_thumbnail_to;
                        product_thumbnail_to.id = doc.id;

                        var product_thumbnail = document.createElement('td');
                        product_thumbnail.className = 'product-thumbnail';
                        product_thumbnail.appendChild(product_thumbnail_to);
                        /*====================================================*/
                        var product_name_to = document.createElement('a');
                        product_name_to.innerHTML = item.p_Title;
                        product_name_to.id = doc.id;

                        var product_name = document.createElement('td');
                        product_name.className = 'product-name';
                        product_name.appendChild(product_name_to);
                        /*====================================================*/
                        var product_price_to = document.createElement('span');
                        product_price_to.className = 'amount';
                        product_price_to.innerHTML = item.p_price_min;

                        var product_price = document.createElement('td');
                        product_price.className = 'product-price';
                        product_price.appendChild(product_price_to);
                        /*====================================================*/
                        var product_quantity_to = document.createElement('input');
                        // product_quantity_to.innerHTML = item.p_availability;
                        product_quantity_to.setAttribute('type', 'number');
                        product_quantity_to.setAttribute('value', '1');
                        product_quantity_to.setAttribute('min', '1');
                        // product_quantity_to.setAttribute('onclick', 'quantity_product');


                        var product_quantity = document.createElement('td');
                        product_quantity.className = 'product-quantity';
                        product_quantity.appendChild(product_quantity_to);
                        /*====================================================*/
                        // var product_subtotal_to = document.createElement('a');
                        // product_subtotal_to.innerHTML = "в корзину";
                        // product_subtotal_to.id = doc.id;

                        // var product_subtotal = document.createElement('td');
                        // product_subtotal.innerHTML = item.p_price_min;
                        // product_subtotal.className = 'product-subtotal';
                        // product_subtotal.appendChild(product_subtotal_to);
                        /*====================================================*/
                        var product_remove_to = document.createElement('a');
                        var html_remove_to = [
                           '<i class="fa fa-times" aria-hidden="true"></i>'
                        ].join('');
                        product_remove_to.innerHTML = html_remove_to;
                        product_remove_to.id = doc.id;
                        product_remove_to.setAttribute('onclick', 'delete_cart(this)');

                        var product_remove = document.createElement('td');
                        product_remove.className = 'product-remove';
                        product_remove.appendChild(product_remove_to);
                        /*====================================================*/
                        tr.appendChild(product_thumbnail);
                        tr.appendChild(product_name);
                        tr.appendChild(product_price);
                        tr.appendChild(product_quantity);
                        // tr.appendChild(product_subtotal);
                        tr.appendChild(product_remove);
                        /*====================================================*/
                        container.appendChild(tr);
                        cartTotal();
                        start_addEventListener();
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
function delete_cart(obj) {
  var h = obj.id;
  var new_arrfy_cart = arrfy_cart.filter(function(f) { return f !== h });
  var washingtonRef = db.collection("cart").doc(doc_cart_id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      cart: new_arrfy_cart
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
// Обновить сумму КОРЗИНЫ
/*====================================================*/
function cartTotal() {
    var price_table = document.getElementById('table_cart'),
      price_rows = price_table.rows,
      rows_count = price_rows.length;
    var total = 0;
    for( var i = 1; i < rows_count; ++i ) {
      var fields = price_rows[i].cells,
        unit_weight = fields[2].getElementsByTagName('span')[0].innerText,
        unit_amount = fields[3].getElementsByTagName('input')[0].value,
        row_total = unit_weight * unit_amount;
        total += row_total;
        var span = document.getElementById("total_cart");
        span.innerText = span.textContent = total;
    }

}

/*====================================================*/
// Старт start_addEventListener();
/*====================================================*/
function start_addEventListener() {
  arrfy_cart_C += 1;
  if(arrfy_cart_C === arrfy_cart_L){
    var c_input = document.querySelectorAll('input[type=number]');
    c_input.forEach(input => {
      input.addEventListener('click', (event) => {
        cartTotal();
      }, true);
    });
  }
}

/*====================================================*/
// Оформить ЗАКАЗ
/*====================================================*/
function proceed_to_Checkout() {
alert("Оформить заказ")
}
