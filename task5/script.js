//Level1 Basics
//task1 Student details
var name="Rupasri"
let age=26
let department="EEE"
let cgpa=7.7

console.log("Name of the student:"+name);
console.log("Age of the student:"+age);
console.log("Student Department:"+department);
console.log("Student CGPa:-"+cgpa);

console.log(`Name:-${name}`);
console.log(`age:-${age}`);
console.log(`Department:-${department}`);
console.log(`CGPA:-${cgpa}`);

//Task2 Simple calculator
var a=20, b=10;
console.log("Addittion:-",a+b);
console.log("Subtraction:-",a-b);
console.log("Multiplication:-",a*b);
console.log("Division:-",a/b);
console.log("Modulus:-",a%b);
console.log("Power:-",a**b);


//Task3 Age calculator
let age1=prompt("Enter age:-")
if(age1>=18){
    console.log("Eligible to vote");
    
}else{
    console.log("Below 18 people are not eligible to vote");
    
}



//Level2 Conditions
//Task4 Student Grade
let marks=prompt("Enter marks:-");
if(marks>=90 && marks<=100){
    console.log("Grade A");
    

}else if(marks>=80 && marks<=89){
    console.log("Grade B");
    
}else if(marks>=70 && marks<=79){
    console.log("Grade c");
    
}else if(marks>=60 && marks<=69){
    console.log("Grade D");
    
}else if(marks<60){
    console.log("Fail");
    
}else{
    console.log("Invalid marks");
    
}


//task5 login system
let correctUsername="admin";
let correctPassword="1234";
let userName=prompt("Enter username");
let password=prompt("Enter password");
if(correctUsername === userName && correctPassword === password){
    
        console.log("Login Successful");
        
}else if(correctUsername !== userName && correctPassword !== password){
        console.log("Invalid Credentials");
        
}else if(correctUsername !== userName){
    console.log("Invalid usename");
    
}else{
    console.log("Invalid password");
    
}


//task6 ATM withdrawal
let balance=10000;
let withdrawal=Number(prompt("Enter withdraw amount:-"));
if(withdrawal<=0){
    console.log("ampunt must be grater than 0");
    
}else if(withdrawal >balance){
    console.log("Insufficient balance");
    
}else if(withdrawal%100 !==0){
    console.log("Amount must be multiple of 100");
    
}else{
    balance=balance-withdrawal;
    console.log("Withdrawl successful");
    console.log("withdrawal amount:-"+withdrawal);
    
    console.log("remaining balance:-"+balance);
    
    
}


//Level3 -loops
//task7 multiplication table
let num=prompt("Enter a number");
for(let i=1; i<=10; i++){
    console.log(num+ "x" +i+ "=" +(num*i));
    
}

//task8 Reverse number
let n=12345;
let rev=0;
while(n>0){
    let d=n%10;
    rev=rev*10 + d;
    n=Math.floor(n/10);
      
}
 console.log("Reverse number:-"+rev);


 //task9 OTP system
 let corrrectOTP=1234;
 let attempt=0;
 let verified=false;
 while(attempt<3){
    let otp=Number(prompt("enter otp:-"));
    if(otp ===corrrectOTP){
        console.log("OTP verified");
        verified=true;
       break;
        
    }else{
        attempt++;
        console.log("Wrong Otp,try again");
        
    }
 }
 if(!verified){
    console.log("Account Blocked");
    
 }

 //level 14
 //task10 functions
 function newpara(parameter){
    console.log("hi");
    
 }