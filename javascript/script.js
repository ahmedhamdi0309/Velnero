let count = 0;

function addToCartEffect() {
   
    var msg = document.getElementById("cart-msg");
    msg.className = "cart-notification show"; 
    
    
    setTimeout(function(){ 
        msg.className = msg.className.replace("show", ""); 
    },4000);

    
    count++;
    var cartBadge = document.getElementById("cart-count");
    if(cartBadge) {
        cartBadge.innerText = count;
    }
}


function orderNowEffect() {
   
    var msg = document.getElementById("order-msg");
    msg.className = "order-notification show"; 
    
    
    setTimeout(function(){ 
        msg.className = msg.className.replace("show", ""); 
    },4000);
