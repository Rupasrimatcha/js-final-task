 
        //3.slect elements
        let input=document.querySelector("input")
let button=document.querySelector("button")
let ol=document.querySelector("ol")
let btn=document.querySelector("#btn")

//4.add is clicked
button.addEventListener("click",()=>{

    let inputVal=input.value

    let li=document.createElement("li")
    li.innerText= inputVal
    
    ol.append(li)
    
    btn.addEventListener("click",()=>{
       
        li.remove()
    })
    input.value=" "
})

   