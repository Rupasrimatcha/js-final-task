// task5 product count

let apidata="https://fakestoreapi.com/products/"

fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
    
})
.then((jsdata)=>{
    
    jsdata.forEach((c,i,t)=>{
   
        let productLength=jsdata.length
  
    // console.log("productLength: ",productLength);
  
    let before=document.querySelector(".before")
   
        before.innerHTML=` <p>Total Products: ${productLength}</p>`
    
    let apicard=document.querySelector(".apicard")

    let api=document.createElement("div")
 
        

    api.innerHTML=`<img src="${c.image}" height="300px"/>
                <h1>Title:${c.title}</h1><h2>Category:${c.category}</h2>
                <p>$ ${c.price}</p><p>Description: ${c.description}</p>`

    apicard.append(api)
    console.log(api);
    

    })
})