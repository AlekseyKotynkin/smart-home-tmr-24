
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
var items = new Array();
var db = firebase.firestore();
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
                var arrfy_wishlist = doc_wishlist.wishlist;
                // Заполняем список таблицей
                arrfy_wishlist.forEach(function(entry) {
                    // alert(entry);
                    var docRef = db.collection("product").doc(entry);
                    // Get a document, forcing the SDK to fetch from the offline cache.
                    docRef.get().then((doc) => {
                        // Document was found in the cache. If no cached document exists,
                        // an error will be returned to the 'catch' block below.
                        console.log("Cached document data:", doc.data());
                        items.push({...doc.data(),...{idSubdivision: doc.id}});
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

/*====================================================*/
function countRabbits(obj) {
  var h = obj.id;
  localStorage.setItem('product_id', h);
  window.location.replace("product.html");
}
