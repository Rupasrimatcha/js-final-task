// task4 category filter

let apidata="https://fakestoreapi.com/products/"

fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
    
})
.then((jsdata)=>{
    let catFiletr=jsdata.filter((c,i,t)=>{
        return c.category == "men's clothing"
    })
    let apicard= document.querySelector(".apicard")

catFiletr.forEach((c,i,t)=>{
    let api= document.createElement("div")

    api.innerHTML=`<img src="${c.image}" height="300px"/>
                        <h1>Title:${c.title}</h1><h2>Category:${c.category}</h2>
                        <p>$ ${c.price}</p><p>Description: ${c.description}</p>`

    apicard.append(api)
})
})