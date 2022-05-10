
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
var docRef = db.collection("product").doc("Gt4RDnKjEwXsBfR1J93s");
docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        var doc_product = doc.data();
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
        // Заполняем ссылки на большое фото
        var html_link = [
          '<a data-fancybox="images" href='+p_Foto_link+'><img src='+p_Foto_link+' alt="product-view"></a>'
        ].join('');
        thumb1.insertAdjacentHTML('afterbegin', html_link);
        var html_link_1 = [
          '<a data-fancybox="images" href='+p_Foto_link_1+'><img src='+p_Foto_link_1+' alt="product-view"></a>'
        ].join('');
        thumb2.insertAdjacentHTML('afterbegin', html_link_1);
        var html_link_2 = [
          '<a data-fancybox="images" href='+p_Foto_link_2+'><img src='+p_Foto_link_2+' alt="product-view"></a>'
        ].join('');
        thumb3.insertAdjacentHTML('afterbegin', html_link_2);
        var html_link_3 = [
          '<a data-fancybox="images" href='+p_Foto_link_3+'><img src='+p_Foto_link_3+' alt="product-view"></a>'
        ].join('');
        thumb4.insertAdjacentHTML('afterbegin', html_link_3);
        // Заполняем ссылки на маленькие фото
        var html_product_thumbnail = [
          '<a class="active" data-toggle="tab" href="#thumb1"> <img src='+p_Foto_link+' alt="product-thumbnail"></a>'+
          '<a data-toggle="tab" href="#thumb2"> <img src='+p_Foto_link_1+' alt="product-thumbnail"></a>'+
          '<a data-toggle="tab" href="#thumb3"> <img src='+p_Foto_link_2+' alt="product-thumbnail"></a>'+
          '<a data-toggle="tab" href="#thumb4"> <img src='+p_Foto_link_3+' alt="product-thumbnail"></a>'
        ].join('');
        var div_product_thumbnail = document.createElement('div');
        div_product_thumbnail.setAttribute('class', 'thumb-menu nav');
        div_product_thumbnail.innerHTML = html_product_thumbnail;
        product_thumbnail.prepend(div_product_thumbnail); // вставить liFirst в начало <ol>
        // Заполняем название
        var html_title = [
          '<h3 class="product-header">'+p_FuiiTitle+'</h3>'
        ].join('');
        product_title.insertAdjacentHTML('afterbegin', html_title);
        // Заполняем цену
        var html_price = [
          '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'
        ].join('');
        product_price.insertAdjacentHTML('afterbegin', html_price);
        // Заполняем комментарий большой
        var html_comment = [
          '<p class="ptb-20">'+p_comment_big+'</p>'
        ].join('');
        product_title.insertAdjacentHTML('beforeend', html_comment);
        // Заполняем комментарий



    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
