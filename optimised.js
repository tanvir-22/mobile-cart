function handlebtn(id,isincrease){

    var productcount = parseInt(document.getElementById(id+'-count').value);

    // let productcNewcount=productcount;
    if(isincrease==true){
        productcount = productcount+1;
    }
   if(isincrease==false&&productcount>0){
    productcount = productcount-1;
   }
   document.getElementById(id+'-count').value=productcount;

   let productTotal =0;
   if(id=='phone'){
    productTotal = 1219*productcount;
   }
   if(id=='case'){
    productTotal = 59*productcount;

   }

document.getElementById(id+'-total').innerText='$'+productTotal;

calculateTotal();

}
function calculateTotal(id){
    const totalPhone = parseInt(document.getElementById("phone-count").value);
    console.log(totalPhone);
    const totalCase = parseInt(document.getElementById('case-count').value);
    console.log(totalCase);
    const subtotal = (totalPhone*1219)+(totalCase*59);
    console.log(subtotal);
    document.getElementById("Subtotal").innerText="$"+subtotal;
    const tax = Math.round(subtotal*(15/100));
    const grandTotal = tax+subtotal;
    document.getElementById("tax").innerText="$"+tax;
    document.getElementById("grandtotal").innerText="$"+grandTotal;
}