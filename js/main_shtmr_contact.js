
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


var db = firebase.firestore();

// $('#form').submit(function(){
// 	var response = grecaptcha.getResponse();
// 	if(response.length == 0) {
// 		alert('Вы не прошли проверку CAPTCHA должным образом');
// 		return false;
// 	}
// });
  // function onSubmit(token) {
  //   document.getElementById("form").submit();
  // }


// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   let tk = '';
//   grecaptcha.ready(function() {
//     grecaptcha.execute('', {action: 'homepage'}).then(function(token) {
//       tk = token;
//       document.getElementById('token').value = token;
//       const data = new URLSearchParams();
//       for (const pair of new FormData(document.querySelector('form'))) {
//           data.append(pair[0], pair[1]);
//       }
//       fetch('send.php', {
//         method: 'post',
//         body: data,
//       })
//       .then(response => response.json())
//       .then(result => {
//         if (result['om_score'] >= 0.5) {
//           console.log('Человек')
//           // отправка данных на почту
//         } else {
//           console.log('Бот')
//         }
//       });
//     });
//   });
// });





/*====================================================*/
// Оформить ЗАКАЗ
/*====================================================*/
function sendTheReverseForm() {

  // получаем форму

  var form = document.forms["contact-form"]; // <form name="my"> element
  var form_name = form.elements[0].value; // ФИО
  var form_email = form.elements[1].value; // электронный адрес
  var form_telefon = form.elements[2].value; // электронный адрес
  var form_subject = form.elements[3].value; // тема сообщения
  var form_text = form.elements[4].value; // текст сообщения
  // if(form_name == ""){
  //   alert("")
  // }
  // if(form_email == ""){
  //   alert("")
  // }
  // if(form_telefon == ""){
  //   alert("")
  // }
  // if(form_subject == ""){
  //   alert("")
  // }
  // if(form_text == ""){
  //   alert("")
  // }

  // Add a new document with a generated id.
  db.collection("reverse_form").add({
    form_name: form_name,
    form_email: form_email,
    form_telefon: form_telefon,
    form_subject: form_subject,
    form_text: form_text,
    dateExample: firebase.firestore.Timestamp.fromDate(new Date())
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });

  alert("Сообщение отправлено!")
}

/*====================================================*/
// Оформить ЗАКАЗ
/*====================================================*/
function onSubmit(token) {
  document.getElementById("contact-form").submit();
}
