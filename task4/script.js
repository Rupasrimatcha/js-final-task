 //Level1 - variables & Operators
//1. Salary Calculator
let salary=30000;
let bonus=5000;
let tax=2000;

let finalSalary=salary+bonus-tax;
console.log("Final Salary:-",finalSalary);
 
//2.Predict the Output
let a=10;
let b=a++; //11
let c=++a; //12 a=12

console.log(a);
console.log(b); //10
console.log(c); //12

//3.Logical Operators
console.log(10>5 && 20<10 || 5 ==="5");

   //true && false=false || false = false


console.log(10<5 || 20>=20 && 5 =="5");
   
    // false || true =true && true = true

console.log(!(10>5));
    //false


//Level2 - conditions
//4. ATM Withdrawl
let balance=10000;
let withdrawal=2500;

if(withdrawal<0){
   console.log("Invalid amount:must be grater than 0");
    
}else if(withdrawal > balance){
    console.log("withdrawal amount less than or equal to balnce");
    
}else if(withdrawal % 100 !== 0){
    console.log("invalid");
    
}else{
    balance=balance-withdrawal;
    console.log("Withdrawal successful");
    console.log("Remaing balance:",balance);
    
}


//5 student grade
let mark=78;
 if(mark>=90 && mark<=100){
    console.log("A");
    
 }else if(mark>=80 && mark<=89){
    console.log("B");
    
 }else if(mark>=70 && mark<=79){
    console.log("C");
    
 }else if(mark>=60 && mark<=69){
    console.log("D");
    
 }else{
    console.log("Fail");
    
 }


 //6 Nested Login
 let username="admin"
 let password="1234"
 let otp=5555;
  let enteruser=prompt('enetr user name:');
  let enterpwd=prompt("enetr password");
  let enetrOTP=prompt("Enter OTP");

  if(username == enteruser){
    if(password == enterpwd){
        if(otp == enetrOTP){
            console.log("Login Successful");
            
        }else{
            console.log("Incorrect OTP");
            
        }
    }else{
            console.log("Incorrect Password");
            
    }
  }else{
    console.log("Check Username once");
    
  }


  //Level3 Loops
  //7 Number pattern
  for(let i=1; i<=10; i++){
    console.log(i);
    
  }

  //8 Multiplication table
  let num=7;
  let j;
  
  for(j=1; j<=10; j++){
    let k=num*j;
    console.log(num+"x"+j+"=",num*j);
    
  }


  //9 reverse count down
  let i1=10;
  while(i1>=0){
    console.log(i1);
    i1--;
    
  }


  //OTP system
  let correctOTP=1234;
  let verified=false;
  let attempt=0;
  while(attempt<3){
    let enterOTP=Number(prompt("enetr otp"));
    if(correctOTP === enetrOTP){
       console.log("OTP verified");
        verified=true;
        break;
    }else{
        attempt++;
        console.log("incorrect otp");
        
    }
    
 }
 if(!verified){
  console.log("account blocked");
}
 


//Level4 - arrays and Obhject
//11 Array search
let fruits=["apple","banana","orange","grapes","mango"]
for(let i=0; i<fruits.length-1; i++){
console.log(fruits[i]);
}
console.log("First fruit:-",fruits[0]);
console.log("Last fruit:-",fruits[fruits.length-1]);

//12 Object details
let employee={
    name:"arun",
    empid:"STK-101",
    role:"developer",
    salary:20000
};
for(let key in employee){
    console.log(key+":"+employee[key]);
    
}


//Level5 Functions
//13 calculator function
function calculator(a,b,operator){
   switch(operator){
    case "+":
        return a+b;
   
   case "-":
    return a-b;

    case "*":
        return a*b;

        case "/":
            return a/b;

            case "%":
                return a%b;
                default:
                    return "invalid operator";
   } 
}
console.log(calculator(20,5,"+"));
console.log(calculator(20,5,"-"));
console.log(calculator(20,5,"*"));
console.log(calculator(20,5,"/"));
console.log(calculator(20,5,"%"));

 
//14.Employee salary
function salaryDetails(salary1,bonus1){
    return fnlSalary=salary1+bonus1;
}
salaryDetails(40000,5000);
console.log(fnlSalary);


//15 Function with Default parameter
function employee2(name,role="Trainee"){
    console.log("name:",name);
    console.log("role:",role);
    
}
employee2("arun");
employee2("kamal","developer");


//Advanced function
//16 callback task
function calculate(a,b,callback){
    const result=callback(a,b);
    console.log(result);
    
}
function add(a,b){
   return a+b;
    
}
function sub(a,b){
    return a-b;
    
}
function mul(a,b){
    return a*b;
    
}

calculate(10,5,add);
calculate(10,5,sub);
calculate(10,5,mul);


//17 generator task
function* rewards(){
    yield "100rs cashback";
    yield "10% discount";
    yield "500rs cashback";
    yield "20% discount";
    yield "better luck next time"
}
const reward=rewards();
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);

//level7 spread/rest/ desructuring operator
//18.spread operator
let frontend=["HTML","CSS","JAVASCRIPT"];
let backend=["NODE","EXPRESS","MONGODB"];
let fullstack=[...frontend,...backend];
console.log(fullstack);


//19array destructuring
let student1=["arun","ECE",8.5,"developer"];
let [name,department,cgpa,role]=student1;
console.log(name);
console.log(department);
console.log(cgpa);
console.log(role);


//nested object destructuring
let company={
    name:"stackly",
    employee:{
        name:"arun",
        role2:"developer",
        salary2:50000
    }
};
let {employee:{
    name:employeename,
    role2,
    salary2
}
}=company;
console.log(employeename);
console.log(role2);
console.log(salary2);


//Final Challenge- mini project
let students=[
    {
    name:"arun",
    department1:"ECE",
    marks:85
},
{
    name:"kamal",
    department1:"CSE",
    marks:72
},
{
    name:"livin",
    department1:"ECE",
    marks:92
}
]

//1.print all students
function printAllStudents(){
    console.log("All Students:-");
    for(let {name,department1,marks} of students){
        console.log(name,department1,marks);
        
    }
    
}
printAllStudents();

//2 print only ECE students
function printECEstudents(){
    console.log("ECE students:-");
    for(let{name,department1,marks} of students){
        if(department1==="ECE"){
            console.log(name,marks);
            
        }
    }
    
}
printECEstudents();


//3 find students whom scored above 80
function studentsAbove80(){
    console.log("Students scoring above 80:-");
    for (let {name,marks}of students){
        if(marks>80){
            console.log(name,marks);
            
        }
    }
    
}
studentsAbove80();

//4 calculate total marks
function totalMarks(){
    let total=0;
    for(let {marks}of students){
        total=total+marks
    }
    console.log("Total marks:-",total);

    
}
totalMarks();

//5 calculate average
function averageMarks(){
    return totalMarks()/students.length;
}
console.log("average marks:-",averageMarks());
 

//6 Display hiighest marks
function highestMarks(){
    let highest=0;
    for( let {marks}of students){
        if(marks>highest){
            highest=marks;
        }
    }
    console.log("Highest marks:-",highest);
    
}
highestMarks();

//7 lowest marks
function lowestMarks(){
    let lowest=students[0].marks;
    for( let {marks}of students){
        if(marks<lowest){
            lowest=marks;
        }
    }
    console.log("Lowest marks:-",lowest);
    
}
lowestMarks();