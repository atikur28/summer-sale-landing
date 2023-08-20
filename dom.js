let total = 0;
function cardListClick(target){
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[5].childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    const price = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(price);
    totalPrice = total.toFixed(2);
    document.getElementById('total').innerText = totalPrice;
    document.getElementById('after-discount-price').innerText = totalPrice;
    const purchaseBtn = document.getElementById("purchase-btn");
    const applyBtn = document.getElementById('apply-btn');
    if(totalPrice === 0){
        purchaseBtn.disabled = true;
    }
    else{
        purchaseBtn.disabled = false;
    }
    if(totalPrice >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
    applyBtn.addEventListener('click', function(){
        const couponCodeElement = document.getElementById('coupon-code');
        const couponCode = couponCodeElement.value;
        const discountPercentage = 20;
        if(couponCode === 'SELL200'){
            const discountPrice = (discountPercentage / 100) * totalPrice;
            const finalDiscountPrice = totalPrice - discountPrice;
            document.getElementById('discount-price').innerText = discountPrice.toFixed(2);
            document.getElementById('after-discount-price').innerText = finalDiscountPrice.toFixed(2);
        }
        else{
            alert('Please provide SELL200 as coupon code.');
        }
    });
    document.getElementById("reset-button").addEventListener('click', function(){
        window.location.reload();
    });
}