// console.log(" HELLO ");
// const name="NISHA";
// console.log(name,"Vaghela");


// odd even


// const a=7
// if (a%2==0)
// {
//     console.log("The number is EVEN");
// }
// else
// {
//     console.log ("THe number is ODD");
// }

// MAx from 2
// const b=10
// if (a>b)
// {
//     console.log("The max Number is : ",a);
// }
// else
// {
//     console.log ("The max Number is : ",b);
// }


// Leap year or not

// const y=2024

// if((y % 4 === 0 && y%100!==0)||(y%400===0))
// {
//     console.log("the year: ",y,"Is a Leap Year");
// }
// else{
//     console.log("the year: ",y,"Is not a Leap Year")
// }


// sum of n numbers

// const n=10;
// const s=0;
// for(let i=1;i<=n;i++)
// {

//     s+=i;
   
// }
// console.log(s);

// factorial of a number  5

// const f=5;
// let fact=1;

// for(let i=1;i<=f;i++)

// {
//     fact*=i;
// }
// console.log("The factorial of ",f," is: ",fact);

//table 6

// const t=3;
// for(let i=1;i<=10;i++)
// {
//     console.log(t,"*",i,"=",t*i);        
// }

// Reverse of a number

// for(let i=4;i>=1;i--)
// { 
//     console.log(i);
// }


//palindrome 
// let num = 121;
// let original = num;
// let reversed = 0;

// while (num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10);
// }

// if (original === reversed) {
//     console.log("It is a palindrome.");
// } else {
//     console.log("It is not a palindrome.");
// }

//prime number 
// const num = 29;
// let isPrime = true;         
// if (num <= 1) {
//     isPrime = false;
// }

// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }

// count the length of the number

// let num = 1223634;
// let count = 0;

// while (num != 0) {
//     num = (num - (num % 10)) / 10;
//     count = count + 1;
// }

// if (count === 0) {
//     count = 1; // for the case when num is 0
// }

// console.log("Number of digits:", count);