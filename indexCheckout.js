// console.log(window.location.search);

// Get the total
const params = new URLSearchParams(window.location.search);

let totalInsert = document.getElementById('totalPrice');

let priceNum = Number(params.get('total'));

totalInsert.innerHTML = `Total Price: ${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(Number(params.get('total')))}`;


// Calculate shipping fee
function hitungShipping () {
    let priceNum = Number(params.get('total'));
    const selectDelivery = document.getElementById('exampleFormControlSelect2');
    const insertShipping = document.getElementById('shipping');
    let shipFee = 0;
    if (selectDelivery.value === "GnTea") {
        insertShipping.innerHTML = `Shipping Fee: Free`;
    } else if (selectDelivery.value === "taka") {
        insertShipping.innerHTML = `Shipping Fee: Rp. 15.000`;
        shipFee = 15000;
    } else if (selectDelivery.value === "theFast") {
        insertShipping.innerHTML = `Shipping Fee: Rp. 10.000`;
        shipFee = 10000;
    }

    let allTotal = priceNum + shipFee;
    totalInsert.innerHTML = `Total Price: ${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(allTotal)}`;
}