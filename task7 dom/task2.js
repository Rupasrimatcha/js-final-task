//Task2 Show only 5 products


let apidata="https://fakestoreapi.com/products/"

fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
    
})
.then((jsdata)=>{
    let sliceVal=jsdata.slice(0,5)

  //  console.log(sliceVal);
    

   let apicard=document.querySelector(".apicard")

    sliceVal.forEach((c,i,t)=>{

   
    let api=document.createElement("div")

    api.innerHTML= `<img src="${c.image}" height="300px"/>
                        <h1>Title:${c.title}</h1><h2>Category:${c.category}</h2>
                        <p>$ ${c.price}</p><p>Description: ${c.description}</p>
                        <button onclick="viewProduct(${c.id})">View Product</button>`

   // console.log(api);
    
    apicard.append(api)

   
     })  
    

})