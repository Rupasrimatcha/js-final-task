//Task6 Search product

let apidata="https://fakestoreapi.com/products/"

fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
    
})
.then((jsdata)=>{

    let input=document.querySelector("input")
    let search=document.querySelector("button")
    let apicard=document.querySelector(".apicard")
    
    search.addEventListener("click",()=>{
        let inputVal=input.value
           let filterVal= jsdata.filter((c,i,t)=>{
            
            return c.title.includes(inputVal)
            
        })
        apicard.innerHTML="" 

        filterVal.forEach((c,i,t)=>{

            let api=document.createElement("div")
            
            api.innerHTML=`<img src="${c.image}" height="300px"/>
            <h1>Title:${c.title}</h1><h2>Category:${c.category}</h2>
            <p>$ ${c.price}</p><p>Description: ${c.description}</p>`
            
            apicard.append(api)
        })
    })    
})
   
