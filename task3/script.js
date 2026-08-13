 //task1 Employee Eligibility
let employeeName=prompt("Enter Employee Name")
let age=prompt("Enter Age")
let exp=prompt("Enter Experience")
let salary=prompt("Enter salary")

if(age>=21  && exp>=1&& salary>=20000){
    
     console.log("Employee is eligible");
      
}else{
    if(age<21){
    console.log("Employee is not Eligible: age must be 21 or above" );
    }
    if(exp<1) {
     console.log("Employee is not Eligible: Experience must be 1 or above" );   
    }
    if(salary<20000){
        console.log("Employee is not Eligible: Salary must be 20000 or above" );
    }   
}
  

//task2 ATM withdrawl
let curntBlnc=10000;
let withDraw=prompt("Enter withdrawl amount:-");

if(withDraw>0 && withDraw<=curntBlnc && withDraw%100 === 0){
    console.log("withdraw Successful");
    console.log("Remaing Balnce:-",curntBlnc-withDraw);
}else{
    if(withDraw<=0){
        console.log("Invalid amount :Amount must be greater than 0");
        
    }else if(withDraw>curntBlnc){
        console.log("Insufficient balance");
        
    }else if(withDraw % 100===0){
        console.log("Invalid amount :withdraw amount must be a multiple of 100");
        
    }
}


//task3 Login system with 3 Attempts
let correctUsername = "admin"
let correctPassword = "12345"
let attempts = 0
let maxAttempts = 3
let loginSuccess = false

while(attempts < maxAttempts && !loginSuccess) {
    attempts++
    let enteredUsername = prompt("Enter username:")
    let enteredPassword = prompt("Enter password:")
    
    if(enteredUsername === correctUsername && enteredPassword === correctPassword) {
        console.log("Attempt " + attempts + " → correct")
        console.log("Login successful")
        loginSuccess = true
        break
    } else {
        console.log("Attempt " + attempts + " → wrong")
    }
}

if(!loginSuccess) {
    console.log("Account locked")
}

//task4 Student Grade system
let telugu=Number(prompt("Enter Telugu marks:-"))
let english=Number(prompt("Enter English marks:-"))
let science=Number(prompt("Enter Science marks:-"))
let social=Number(prompt("Enter Social marks:-"))
let maths=Number(prompt("Enter Maths marks:-"))

let total=telugu+english+science+social+maths;
let avg=total/5;

let garde;
if(avg>=90 && avg<=100){
    garde="A";
}else if(avg>=80){
    garde="B";
}else if(avg>=70){
    garde="C"
}else if(avg>=60){
    garde="D";
}else{
    garde="F";
}
console.log("Total="+total);
console.log("Average="+avg);
console.log("Grade="+garde);


//task5 number pattern
//for
let i;
for(i=1; i<=5; i++){
    console.log(i);
    
}

//while
let i1=5;
while(i1>=1){
    console.log(i1);
    i1--;
    
}

let i2=1;
do{
    console.log(i2);
    i2++;
    
}while(i2<=5); 

//task6 shopping cart
let prduct=["Laptop","Mouse","Keyboard","Monitor"];
let price=[50000,1000,2000,15000];

let tot=0;
for(let j=0; j<prduct.length; j++){
    console.log(prduct[j]+""+price[j]);
    tot=tot+price[j];
    
}
console.log("Total=",tot);


//task7 Employee Object
let employee={
    name:"arun",
    empID:"STK-101",
    role:"Software Engineer",
    salary1:45000
};
for(let k in employee){
    console.log(k+":"+employee[k]);
    
}
function calBonus(){
    if(employee.salary1>=40000){
        return 5000;
    }else{
        return 3000;
    }

}
let bonus=calBonus();
console.log("Bonus:"+bonus);


//task8 Bank account Functions
let bal=10000;
function deposit(bal,amut){
    bal=bal+amut;
    return bal

}
function withdraw(bal,amut){
    bal=bal-amut;
    return bal;
}
function checkBalance(bal){
    return bal;
}
bal=deposit(bal,5000);
console.log("Deposited:-5000");
 bal=withdraw(bal,2000);
 console.log(("Withdrwan:-2000"));
 let currentBlnc=checkBalance(bal);
 console.log("current Blance:-"+currentBlnc);


 //task9 callback calculator
 function add(a,b){
    return a+b;
 }
 function sub(a,b){
    return a-b;
 }
 function mul(a,b){
    return a*b;
 }
 function div(a,b){
    return a/b;
 }
function calculate(callback,a,b){
    return callback(a,b);
}
console.log(calculate(add,20,10));

console.log(calculate(sub,20,10));

console.log(calculate(mul,20,10));

console.log(calculate(div,20,10));