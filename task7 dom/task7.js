let apicard=document.querySelector(".apicard")
let high=document.querySelector(".high")
let low=document.querySelector(".low")
let product=[]
let apidata="https://fakestoreapi.com/products/"

fetch(apidata).then((data)=>{
   // console.log(data);

     return data.json()
     
    })
    .then((jsdata)=>{
       
        product=jsdata

        displayProducts(product)
            
    })

        function displayProducts(list){
            apicard.innerHTML=""
            list.forEach((c,i,t)=>{

            let api= document.createElement("div")
            api.innerHTML=`<img src="${c.image}" height="300px"/>
                        <h1>Title:${c.title}</h1><h2>Category:${c.category}</h2>
                        <p>$ ${c.price}</p><p>Description: ${c.description}</p>`
                        
                        apicard.append(api)
            })
        }
        
        high.addEventListener("click",()=>{
        
            let sortProduct=[...product].sort((a,b)=>{
                
              return b.price - a.price
        
            })
            displayProducts(sortProduct)
       })
        
       low.addEventListener("click",()=>{
        
            let sortProduct=[...product].sort((a,b)=>{
                
                return a.price - b.price
        
            })
            
            displayProducts(sortProduct)
            
        })
   
   
   
   
