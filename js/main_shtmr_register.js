
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
function signRegister()
{
  var f_name = document.getElementById("f-name").value;
  var l_name = document.getElementById("l-name").value;
  var email = document.getElementById("email").value;
  var telefon = document.getElementById("number").value;
  var password = document.getElementById("pwd").value;
  var password_confirm = document.getElementById("pwd-confirm").value;
  var pwd_pd = document.getElementById("pwd-pd").checked ;
  // var radio = document.getElementByName("radio").value;
  var rates = document.getElementsByName('newsletter');
  var rate_value;
  for(var i = 0; i < rates.length; i++){
      if(rates[i].checked){
          rate_value = rates[i].value;
          alert (rate_value);

      }
  }
  // alert (rates);
  if (f_name == "" )
  {
    alert ( "Пожалуйста заполните поле 'Ваше имя'." );
    valid = false;
  }
  if (l_name == "" )
  {
    alert ( "Пожалуйста заполните поле 'Ваша фамилия'." );
    valid = false;
  }
  if (email == "" )
  {
    alert ( "Пожалуйста заполните поле 'Ваш электронный адрес'." );
    valid = false;
  }
  if (telefon == "" )
  {
    alert ( "Пожалуйста заполните поле 'Ваш телефон'." );
    valid = false;
  }
  if (password == "" )
  {
    alert ( "Пожалуйста заполните поле 'Ваш пароль'." );
    valid = false;
  }
  if (password_confirm == "" )
  {
    alert ( "Пожалуйста заполните поле 'Подтверждения пароля'." );
    valid = false;
  }
  if (password_confirm !== password )
  {
    alert ( "Поля *Пароль* и *Подтверждение пароля не совпадают!*" );
    valid = false;
  }
  if ( pwd_pd === false )
  {
    alert ( "Отметьте согласие на обработку персональных данных!" );
    valid = false;
  }else{

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      alert (errorCode,errorMessage);
      window.location.replace("login.html")

    });
  }
  console.log(email);
  console.log(password);

}





/*====================================================*/
/**   Выход из личного кабинета и очиска localStorage 'firebaseui::rememberedAccounts'.*/
/*====================================================*/

   function SignoutAdmin() {
     localStorage.clear('firebaseui::rememberedAccounts');
     window.location.replace("index.html")
   }
/*====================================================*/
