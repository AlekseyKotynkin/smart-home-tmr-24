
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
var doc_wishlist_id;
var db = firebase.firestore();
var arrfy_wishlist = [];
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    email = user.email;
    // alert ('Вы вошли под логином '+ displayEmail +'! Благодарим Вас '+ displayName +'');
    // ...
    var cycle_blok_wishlist = 0;
    db.collection("wishlist").where("email", "==", email)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                cycle_blok_wishlist = cycle_blok_wishlist + 1;
                doc_wishlist_id = doc.id;
                var doc_wishlist = doc.data();
                arrfy_wishlist = doc_wishlist.wishlist;
                // Заполняем список таблицей
                arrfy_wishlist.forEach(function(entry) {
                    // alert(entry);
                    var docRef = db.collection("product").doc(entry);
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then((doc) => {
                        // Document was found in the cache. If no cached document exists,
                        // an error will be returned to the 'catch' block below.
                        console.log("Cached document data:", doc.data());
                        var item = doc.data();

                        var tr = document.createElement("tr");
                        /*====================================================*/
                        var product_remove_to = document.createElement('a');
                        var html_remove_to = [
                           '<i class="fa fa-times" aria-hidden="true"></i>'
                        ].join('');
                        product_remove_to.innerHTML = html_remove_to;
                        product_remove_to.id = doc.id;
                        product_remove_to.setAttribute('onclick', 'delete_wishlist(this)');

                        var product_remove = document.createElement('td');
                        product_remove.className = 'product-remove';
                        product_remove.appendChild(product_remove_to);
                        /*====================================================*/

                        var product_thumbnail_to = document.createElement('a');
                        var product_remove_to_im = item.p_Foto_link;
                        var html_thumbnail_to = [
                           '<img src='+product_remove_to_im+' alt="cart-image" />'
                        ].join('');
                        product_thumbnail_to.innerHTML = html_thumbnail_to;
                        product_thumbnail_to.setAttribute('onclick', 'go_cart(this)');
                        product_thumbnail_to.id = doc.id;

                        var product_thumbnail = document.createElement('td');
                        product_thumbnail.className = 'product-thumbnail';
                        product_thumbnail.appendChild(product_thumbnail_to);
                        /*====================================================*/
                        var product_name_to = document.createElement('a');
                        product_name_to.innerHTML = item.p_Title;
                        product_name_to.setAttribute('onclick', 'go_cart(this)');
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
                        var product_quantity_to = document.createElement('span');
                        product_quantity_to.innerHTML = item.p_availability;

                        var product_quantity = document.createElement('td');
                        product_quantity.className = 'product-stock-status';
                        product_quantity.appendChild(product_quantity_to);
                        /*====================================================*/
                        var product_subtotal_to = document.createElement('a');
                        product_subtotal_to.innerHTML = "в корзину";
                        product_subtotal_to.id = doc.id;
                        product_subtotal_to.setAttribute('onclick', 'go_cart(this)');

                        var product_subtotal = document.createElement('td');
                        product_subtotal.className = 'product-add-to-cart';
                        product_subtotal.appendChild(product_subtotal_to);
                        /*====================================================*/
                        tr.appendChild(product_remove);
                        tr.appendChild(product_thumbnail);
                        tr.appendChild(product_name);
                        tr.appendChild(product_price);
                        tr.appendChild(product_quantity);
                        tr.appendChild(product_subtotal);
                        /*====================================================*/
                        container.appendChild(tr);

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
function delete_wishlist(obj) {
  var h = obj.id;
  var new_arrfy_wishlist = arrfy_wishlist.filter(function(f) { return f !== h });
  var washingtonRef = db.collection("wishlist").doc(doc_wishlist_id);

  // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
      wishlist: new_arrfy_wishlist
  })
  .then(() => {
      console.log("Document successfully updated!");
      window.location.replace("wishlist.html");
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
