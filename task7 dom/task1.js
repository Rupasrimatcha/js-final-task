//Task1 Product card design

let apidata="https://fakestoreapi.com/products/"

fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
    
})
.then((jsdata)=>{
   // console.log((jsdata));
    jsdata.forEach((c,i,t)=>{
       
      // console.log(c);

       let apicard=document.querySelector(".apicard")

       let api=document.createElement("div")

       api.innerHTML=`<img src="${c.image}" height="300px"/>
                        <h1>Title:${c.title}</h1><h2>Category:${c.category}</h2>
                        <p>$ ${c.price}</p><p>Description: ${c.description}</p>
                        <button onclick="viewProduct(${c.id})">View Product</button>`

       apicard.append(api)
        
    })
})
function viewProduct(id){
    alert("Product Id: "+id)
}




