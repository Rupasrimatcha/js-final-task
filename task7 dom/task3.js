// task3 Price filter

let apidata="https://fakestoreapi.com/products/"

fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
    
})
.then((jsdata)=>{
   let filterVal= jsdata.filter((c,i,j)=>{

    return c.price>50
 
 // console.log(filterVal);
  
    })

   let apicard=document.querySelector(".apicard")

    filterVal.forEach((c,i,j)=>{

   
    let api=document.createElement("div")

    api.innerHTML= `<img src="${c.image}" height="300px"/>
                       <h1>Title:${c.title}</h1>
                       <p>$ ${c.price}</p><p>Description: ${c.description}</p>`

   // console.log(api);
    
    apicard.append(api)

   
       
    
     })
})