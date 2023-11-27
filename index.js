const plusbtn1 = document.getElementById("plus");
plusbtn1.addEventListener("click",function(){
    const value =getvalue();
   updatephoneprice(value,1,1219);

}) 
const minusbtn1 = document.getElementById("minus");
minusbtn1.addEventListener("click",function(){
    const value=getvalue();
   updatephoneprice(value,-1,1219);
}) 


function updatephoneprice(countNumber,input,price){
 
     const totalqnt = countNumber+input;
     document.getElementById("count").value=totalqnt;
    const totalprice = price*totalqnt;
    document.getElementById("pricetxt").innerText=totalprice;
}

function getvalue(){
    const count = document.getElementById("count").value;
    const countNumber = parseFloat(count);
    return countNumber;
}



const plusbtn2 =document.getElementById("plus2")
    plusbtn2.addEventListener("click",function(){
        const value =getvalue2();
        updatephoneprice2(value,1,59);
    })

    const minusbtn2 =document.getElementById("minus2")
    minusbtn2.addEventListener("click",function(){
        const value =getvalue2();
        updatephoneprice2(value,-1,59);
    })

function getvalue2(){
    const count = document.getElementById("count2").value;
    const countNumber = parseFloat(count);
    return countNumber;
}
function updatephoneprice2(countNumber,input,price){
 
    const totalqnt = countNumber+input;
    document.getElementById("count2").value=totalqnt;
   const totalprice = price*totalqnt;
   document.getElementById("casepricetxt").innerText=totalprice;
}

function chekout(){
    const phoneprice = parseFloat(document.getElementById("pricetxt").innerText);
    const caseprice = parseFloat(document.getElementById("casepricetxt").innerText);
    const subtotal = phoneprice+caseprice;
    const tax=(subtotal)*(15/100);
    const total=tax+subtotal;
 
  
    document.getElementById("tax").innerText=tax;
    document.getElementById("subtotal").innerText=subtotal;
    document.getElementById("total").innerText=total;

}
const checkoutbtn = document.getElementById("chekoutbtn");
checkoutbtn.addEventListener("click",function(){
    chekout();
})