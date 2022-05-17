
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
var cycle_blok_shop = 0;
var db = firebase.firestore();
db.collection("product").where("p_Filtr_index", "==", "ipdl")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            cycle_blok_shop = cycle_blok_shop + 1;
            var doc_product = doc.data();
            var doc_id = doc.id;
            var p_Foto_link = doc_product.p_Foto_link;
            var p_Title = doc_product.p_Title;
            var p_price_max = doc_product.p_price_max;
            var p_price_min = doc_product.p_price_min;
            var p_comment = doc_product.p_comment;
            // Заполняем список таблицей
            var html = [
              '<div class="pro-img">'+
                  '<a href="product.html">'+
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
                  '<h4><a href="product.html">'+p_Title+'</a></h4>'+
                  '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'+
                  '<p>'+p_comment+'.</p>'+
                  '<div class="pro-actions">'+
                      '<div class="actions-secondary">'+
                          '<a href="wishlist.html" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                          '<a class="add-cart" href="cart.html" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                          '<a href="compare.html" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                      '</div>'+
                  '</div>'+
              '</div>'
            ].join('');
            var div = document.createElement('div');
            div.setAttribute('class', 'single-product');
            div.innerHTML = html;
            if (cycle_blok_shop > 0 && cycle_blok_shop <= 7){
            list_view.prepend(div); // вставить liFirst в начало <ol>
            }
            console.log("Переполнен список");
            // Заполняем список столбиком
            var html_grid_view = [
              '<div class="single-product">'+
                  '<div class="pro-img">'+
                      '<a href="product.html">'+
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
                      '<h4><a href="product.html">'+p_Title+'</a></h4>'+
                      '<p><span class="price">'+p_price_min+' ₽</span><del class="prev-price">'+p_price_max+' ₽</del></p>'+
                      '<div class="pro-actions">'+
                          '<div class="actions-secondary">'+
                              '<a href="wishlist.html" data-toggle="tooltip" title="в избранное"><i class="fa fa-heart"></i></a>'+
                              '<a class="add-cart" href="cart.html" data-toggle="tooltip" title="в корзину">в корзину</a>'+
                              '<a href="compare.html" data-toggle="tooltip" title="сравнить"><i class="fa fa-signal"></i></a>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>'
            ].join('');
            var div_grid_view = document.createElement('div');
            div_grid_view.setAttribute('class', 'col-lg-4 col-sm-6');
            div_grid_view.innerHTML = html_grid_view;
            if (cycle_blok_shop > 0 && cycle_blok_shop <= 7){
            grid_view.prepend(div_grid_view); // вставить liFirst в начало <ol>
            }
            console.log("Переполнен список");

        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

/*====================================================*/

// Заполнения shop.html Категория
/*====================================================*/
// Initialize Cloud Firestore and get a reference to the service
var cycle_category = 0;
db.collection("product_group").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        cycle_category = cycle_category + 1;
        var doc_category = doc.data();
        var category_title = doc_category.category_title;
        var html_category = [
            '<div class="checkout-form-list create-acc mb-30">'+
                '<input id="cbox" type="checkbox" />'+
                '<label>'+category_title+'</label>'+
            '</div>'
        ].join('');
        var div_category = document.createElement('div');
        div_category.setAttribute('class', 'col-md-12');
        div_category.innerHTML = html_category;
        if (cycle_blok_shop > 0 && cycle_blok_shop <= 7){
        list_category.prepend(div_category); // вставить liFirst в начало <ol>
        }
        console.log(doc.id, " => ", doc.data());
    });
});


/*====================================================*/
// Заполнения shop.html Производитель
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
        console.log(doc.id, " => ", doc.data());
    });
});
/*====================================================*/

/*====================================================*/
function countRabbits(obj) {
  var h = obj.id;
  localStorage.setItem('product_id', h);
  window.location.replace("product.html");
}


/*====================================================*/
/*====================================================*/
