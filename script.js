/** Add any JavaScript you need to this file. */

var allProducts = [
    {
        id: 1,
        name: 'Hamburguer',
        category: 1,
        price: 9.99,
        description: 'Kit with 10 hamburguer (100g each)'
    },
    {
        id: 2,
        name: 'Ice cream',
        category: 1,
        price: 19.99,
        description: '5 ice cream pot (150ml each)'
    },
    {
        id: 3,
        name: 'Cupcake',
        category: 1,
        price: 8,
        description: '5 Cupcakes (30g each)'
    },
    {
        id: 4,
        name: 'Breakfast',
        category: 1,
        price: 35.99,
        description: 'Breakfast kit for one week (5 meals 300g each)'
    },
    {
        id: 5,
        name: 'BBQ',
        category: 1,
        price: 79.99,
        description: 'Kit for a barbecue for 5 people (2lb)'
    },
    {
        id: 6,
        name: 'Tacos',
        category: 2,
        price: 5.99,
        description: '3 meat tacos ready to eat, just need to heat up (150g each)'
    },
    {
        id: 7,
        name: 'Teriaky Steak',
        category: 2,
        price: 19.99,
        description: '3 pieces of steak ready to eat (300g)'
    },
    {
        id: 8,
        name: 'Sushi combo',
        category: 2,
        price: 59.99,
        description: '50 pieces of sushi'
    },
    {
        id: 9,
        name: 'Mix Bowl for two',
        category: 2,
        price: 49.99,
        description: 'Bowl with mixture of meats, vegetables and breads (1lb)'
    },
    {
        id: 10,
        name: 'Bowl of salad for two',
        category: 2,
        price: 19.99,
        description: 'Bowl with caesar salad (200g)'
    },
];

function showProducts(category = null){

    var productsToList = [...allProducts];
    if(category != null){
        productsToList = productsToList.filter(function(item) {
            return item.category == category;
        });
    }

    var row = document.getElementById('products');
    var html = '';
    productsToList.forEach(element => {
        html += '<div class="col-lg-4 col-md-6 mb-4">';
        html += '   <div class="card h-100">';
        html += '       <a href="#"><img class="card-img-top" src="images/product'+element.id+'.svg" alt="'+element.name+'" alt=""></a>';
        html += '       <div class="card-body">';
        html += '           <h4 class="card-title">';
        html += '               <a href="#">'+element.name+' ['+ (element.category === 1 ? 'Food Kit' : 'Ready Meal') +']</a>';
        html += '           </h4>';
        html += '           <h5>$'+element.price+'</h5>';
        html += '           <p class="card-text">'+element.description+'</p>';
        html += '       </div>';
        html += '       <div class="card-footer">';
        html += '           <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>';
        html += '      </div>';
        html += '   </div>';
        html += '</div>';
    });
    row.innerHTML = html;
}

function handleRadio(action){
    var order_number = document.getElementById('order_number');
    if (action === "show") {
        order_number.style.display = "block";
    } else {
        order_number.style.display = "none";
    }
    
}
    
    var category_header = document.getElementById('product_category');
    if(category_header){
        category_header.innerHTML = 'Category: All';
        showProducts();

        var food_kit = document.getElementById('food_kits');
        food_kit.onclick = function(){
            showProducts(1);
            document.getElementById('product_category').innerHTML = 'Category: Food Kits';
            document.getElementById('clear_filters').style.display = "block";
            
        };
        var ready_food = document.getElementById('ready_food');
        ready_food.onclick = function(){
            showProducts(2);
            document.getElementById('product_category').innerHTML = 'Category: Ready Food';
            document.getElementById('clear_filters').style.display = "block";
        };

        var clear_filter = document.getElementById('clear_filters');
        clear_filter.onclick = function(){
            showProducts();
            document.getElementById('product_category').innerHTML = 'Category: All';
            document.getElementById('clear_filters').style.display = "none";
        };
    }
