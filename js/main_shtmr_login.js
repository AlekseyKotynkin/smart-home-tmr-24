
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
  // console.log(email);
  // console.log(password);
  if (email == "" )
  {
    alert ( "Пожалуйста заполните поле 'Логин'." );
    valid = false;
  }
  if (password == "" )
  {
    alert ( "Пожалуйста заполните поле 'Пароль'." );
    valid = false;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    authStateListener();
    // ...
    // alert ("Вы вошли!");
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
/** Проверка авторизации'.*/
/*====================================================*/

function authStateListener() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = user.displayName;
      var displayEmail = user.email;
      alert ('Вы вошли под логином '+ displayEmail +'! Благодарим Вас '+ displayName +'');
      window.location.replace("index.html")
      // ...
    } else {
      // User is signed out
      // ...
      signUpRegister()
    }
  });
  // [END auth_state_listener]
}

/*====================================================*/

/*====================================================*/
/** Проверка авторизации при запросе на восстановления пароля'.*/
/*====================================================*/

function authStateListenerForgot() {
  // [START auth_state_listener]
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var displayName = user.displayName;
      var displayEmail = user.email;
      alert ('Вы вошли под логином '+ displayEmail +'! Благодарим Вас '+ displayName +'');
      // ...
      window.location.replace("login.html")

    } else {
      // User is signed out
      // ...
      // signUpRegister()
    }
  });
  // [END auth_state_listener]
}

/*====================================================*/

/*====================================================*/
/** отправка ссылки для восстановления пароля'.*/
/*====================================================*/
function sendPasswordReset() {
  // const email = "sam@example.com";
  var email_forgot = document.getElementById("email-forgot").value;
  if (email_forgot == "" )
  {
    alert ( "Пожалуйста заполните поле 'Ваш электронный адрес'." );
    valid = false;
  }
  // [START auth_send_password_reset]
  firebase.auth().sendPasswordResetEmail(email_forgot)
    .then(() => {
      // Password reset email sent!
      // ..
      // Отправлено электронное письмо для сброса пароля!
      alert ('На Ваш электронный адрес '+ email_forgot +'отправленно письмо! Благодарим Вас!');
      window.location.replace("login.html")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  // [END auth_send_password_reset]
}

/*====================================================*/
