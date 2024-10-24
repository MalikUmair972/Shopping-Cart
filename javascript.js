let i = 0;
function addCart() {
    document.getElementById('increment').innerHTML = ("00" + ++i).slice(-2);
}
function clearCart() {
   if(i > 0) {
    document.getElementById('increment').innerHTML = ("00" + --i).slice(-2);
   }
}