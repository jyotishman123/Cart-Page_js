let cartBtn = document.getElementById("cart");
let cartArea = document.getElementById("crt-area");
let Cart_Area = document.getElementsByClassName("cart-product-area")[0];
let total_price = document.getElementById("Total_price");

 


cartBtn.addEventListener("click",()=>{
    cartArea.classList.toggle("active")
})


// Collection of all cart element attribute and tag;

let Add_Btn = document.getElementsByClassName("Addbtn");


// document.addEventListener("DOMContentLoaded",load);

// function load(){
//     var remove  = document.getElementsByClassName("btn-remove");
//     for(let i=0; i<remove.length; i++){
//         remove[i].addEventListener("click",remove1)
//     }
//     let range = document.getElementsByClassName("int-number");

//   for(let i=0; i<range.length; i++){
//     range[i].addEventListener("change",check)
//   }
//     update()
     
// }


 


 


for(let i=0; i<Add_Btn.length; i++){
    Add_Btn[i].addEventListener("click",(e)=>{
         let ParentElement = e.target.parentElement;
        //  console.log(ParentElement)

         let img = ParentElement.getElementsByClassName("img-area")[0];
         let Product_Desc = ParentElement.getElementsByClassName("description")[0];
         let Product_price = ParentElement.getElementsByClassName("product_price")[0]
         AddToCart(img,Product_Desc,Product_price, e.target)

    })
}


function AddToCart(img,desc,price){


 let createDiv = document.createElement("div");
 createDiv.classList.add("cart-product");

 let cartDesc = cartArea.getElementsByClassName("des");

  for(let i=0; i<cartDesc.length; i++){
    if(desc.innerHTML == cartDesc[i].innerHTML){
      alert("Already Added to Cart")
        return
    }
     
    
  }


  createDiv.innerHTML  = `<div class="image">
 <img src="${img.src}" alt="" class="cart-img">
</div>
<div class="desc">
<h4 class="des">${desc.innerHTML}</h4>
<h5 class="crtprice">${price.innerHTML}</h5>
<input type="number" class="int-number" value = 1>
<button class="btn-remove">Remove</button>
    
</div> `

 

 
     
Cart_Area.appendChild(createDiv)

  createDiv.getElementsByClassName("btn-remove")[0].addEventListener("click",remove2)

  let range = document.getElementsByClassName("int-number");

  for(let i=0; i<range.length; i++){
    range[i].addEventListener("change",check)
  }


 


  
 
update()
 
 
 
}


function check(e){
    if(isNaN(e.target.value)|| e.target.value <=0){
        e.target.value = 1
    }
    update()
}







//  function remove1(e){
//     e.target.parentElement.parentElement.remove()
//     update()
     
//  }
 function remove2(e){
    e.target.parentElement.parentElement.remove();


    update()
     
 }


function update(){
     
    let cartProduct = document.getElementsByClassName("cart-product");
    let num  = 0
      
    for(let i=0; i<cartProduct.length; i++){
        let AllPro = cartProduct[i];
        let crtprice = AllPro.getElementsByClassName("crtprice")[0].innerText.replace("$","");
        let value = AllPro.getElementsByClassName("int-number")[0].value
        let price = parseInt(crtprice * value) 
        // console.log(price)
        num+=price
        
     
}
total_price.innerHTML = "$" + num
 

 
 
}


 
 