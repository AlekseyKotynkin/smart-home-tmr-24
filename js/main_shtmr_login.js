
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
  /*====================================================*/
  // Заполнения index.html блок левой части экрана
  /*====================================================*/

  // Initialize Cloud Firestore and get a reference to the service
/*====================================================*/

/*====================================================*/
// function countRabbits(obj) {
//   var h = obj.id;
//   localStorage.setItem('product_id', h);
//   window.location.replace("product.html");
// }





/*====================================================*/
/**  Регистрация нового пользователя через форму.*/
/*====================================================*/
function signUpRegister()
{
  var email = document.getElementById("input-email").value;
  var password = document.getElementById("input-password").value;
  console.log(email);
  console.log(password);


  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert (errorCode,errorMessage);
    window.location.replace("login.html")
  });

    // sign up the Username
}



/*====================================================*/
/**   Выход из личного кабинета и очиска localStorage 'firebaseui::rememberedAccounts'.*/
/*====================================================*/

   function SignoutAdmin() {
     localStorage.clear('firebaseui::rememberedAccounts');
     window.location.replace("index.html")
   }
/*====================================================*/
