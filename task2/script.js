 //1  Student Details
var studentName="Rupasri"
const age=26
let course="IT"
let marks=90

console.log("Student Name:-",studentName);
console.log("Age:-",age);
console.log("Course:-",course);
console.log("Marks:-",marks);


//2 User print
var name=prompt("Enter Name:-")
var age1=prompt("Age:-")
console.log("Name",name);
alert("Age:-"+age1);

//3 Data types
let str="rupasri";
let num=50;
let bol=true;
let undefinedValue;
let nullValue=null;
console.log(str,"|",typeof str);
console.log(num,"|",typeof num);
console.log(bol,"|",typeof bol);
console.log(undefinedValue,"|",typeof undefinedValue);
console.log(nullValue,"|",typeof nullValue);
 

//4 Array -shopping list
let shpList=["shirt","Pant","Shoes","watch","Bag","Cap"]
console.log("First Product:-",shpList[0]);
console.log("Third Product:-",shpList[2]);
console.log("Last Product:-",shpList[shpList.length-1]);
console.log("Complete Array:-",shpList);


//5 Object-Employee details

var emp={
    name:"rupasri",
    age3:26,
    role:"developer",
    salary:30000
};
console.log("Name:-",emp.name);
console.log("Age:-",emp.age3);
console.log("role:-",emp.role);
console.log("salary:-",emp.salary);


//6 Airthmetic Operator
let productPrice=500;
let qual=3;
let totalPrice=productPrice*qual;
console.log("Total Price:-",totalPrice);

let discount=100;
console.log("Discount:-",discount);

let finalAmount=totalPrice-discount;
console.log("Final Amount:-",finalAmount);

console.log("Product Price + Quality",productPrice+qual);
console.log("Product Price / Quality",productPrice/qual);


//7 Comparison operator

console.log(25>20);
console.log(15<10);
console.log(50=="50");
console.log(50 ==="50");
console.log(100 != "100");
console.log(100 !== "100");



//8 Logical Operator
console.log(10>5 && 20>15 || 5>10);
    //  true && true =ture || false = true

console.log(10<5 || 20>=20 && 5=="5");
   //  true || true = ture && true = true

console.log(15 ==="15" || 10>5 && 8<3);
   // false || true =ture && false = false

console.log(20>=20 && 5!=="5" || 10<5);
   //   true && true = ture || false = true


console.log(25<20 || 30=="30" && 10>=10);
   //  false || true =ture && true = true



//9 Ternary Operator- Login
let pwdCrt=true;
pwdCrt ? console.log("Login Successful"): console.log("Invalid Password");


//10 Type Cating -Marks
let mark1="80";
let mark2="70";

mark1=Number(mark1)
mark2=Number(mark2)
let total=mark1+mark2;

console.log("Total:-",total);


//11 Voting Eligibility
let age4=20;
if(age4>=18){
    console.log("You can Vote");
    
}else{
    console.log("You can't vote");
    
}


//12 Student Grade
let marks1=100;
if(marks1>100 || marks1<=0){
    console.log("Invalid Marks");
}
else if(marks1>=90 && marks1<=100){
    console.log("Grade A");
    
}else if(marks1>=75 && marks1<=89){
    console.log("Grade B");
    
}else if(marks1>=50 && marks1<=74){
    console.log("Grade C");
    
}else{
    console.log("Fail");   
}


//13 Time Greeting
let time=15;
if(time>=1 && time<=6){
    console.log("Early Morning");
    
}else if(time>=7 && time<=12){
    console.log("Good Morning");
    
}else if(time>=13 && time<=15){
    console.log("Good Afternoon");
    
}else if(time>=16 && time<=19){
    console.log("Good Evening");
    
}else if(time>=20 && time<=24){
    console.log("Good Night");
    
}else{
    console.log("Invalid Time");
    
}


//14 Nested If- Job Eligibility
let age2=19;
let height=173;
let weight=75;
if(age2>=21){
    if(height>=170){
        if(weight>=70){
            console.log("Candidate Eligible for Job ");
            
        }else{
            console.log("not Eligible: Weight should be atleast 70kg");
            
        }
    }else{
        console.log("not Eligible: Height should be atleast 170cm");
        
    }
}else{
    console.log("not Eligible: Age should be atlest 21");
    
}


//15 switch- Traffic Light
let trafficLight="Green";
switch(trafficLight){
    case "red":
        console.log("Stop the Vehicle");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Traffic Light");
}