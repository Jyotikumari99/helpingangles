// const x=setTimeout(()=>{
//      console.log("After 1 sec");
//      clearInterval(x);
// },1000);

// const http=require("http");
// const server=http.createServer((req,res)=>{
//      console.log("first node server");
//      res.write("<html><h1>jyoti kumari</h1><html>")
//      const sum=require("./Add");
// console.log(sum(2,3));
// }).listen(3000);

// const express=require ("express")
// const app= express();
// app.use("/",(req,res,next)=>{
//      console.log("middleware 1");
//      next();
// })
// app.use("/new",(req,res,next)=>{
//      console.log("middleware bew");

// })
// app.use("/product",(req,res,next)=>{
//      console.log("another middleware");
//      res.send("from express")
//      next();
// }).listen(3000);

// const express=require("express")
// const app=express();
// const bodyParser=require("body-parser")
// const path=require('path')
// app.use(bodyParser.urlencoded({extended:false}));//URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.
// app.get("/product",(req,res,next)=>{
//      console.log("uisng body parser");
//      res.send("<html><form action='/newproduct' method='GET'><input type='text'name='text1'/><input type='submit' value='click'/></form></html>")
// })

// app.get("/newproduct",(req,res,next)=>{
//      console.log(req.query.text1); //req.body.text1 in case of post
//      // res.redirect("/");
//      res.sendFile(path.join(__dirname,"./views/feed.hbs"))
//  })
// app.get('/',(req,res,next)=>{
//      console.log("finished");
// }).listen(3000);

//counter dilema
// let x=0;
// function counter()
// {
//      x++;
// }
// counter();
// counter()
// counter()
// console.log(x);//3

// function counter()
// {
//      var x=0;
//      x++;
//      return x;
// }
// counter()

// counter()
// counter()
// console.log(x);

// const add=(function(){
//      let counter=0;
//      function inner()
//      {
//           counter=counter+1;
//           return counter;
//      }
//      return inner;
// })();
// add();
// add();
// add();
// // console.log(counter);
// console.log(add());

//async await
// let x=0;
// let transact=function()
// {
//      let random=Math.floor(Math.random()*100);
//      setTimeout(()=>{
//           x=1;
//           console.log(x);
//      },random)
// }
// transact();

// let x = 0;
// let transact = function (callback) {
//   let random = Math.floor(Math.random() * 100);
//   setTimeout(() => {
//     callback(); //calling the callback
//   }, random);
// };
// transact(() => {//pyramid of dom always print a first then b
//   x = x + 1;
//   console.log("A" + x);
//   transact(() => {
//      x = x + 1;
//      console.log("B" + x);

//    });

// });

//to resolve the problem of callback hell use promises
// let x = 0;
// let transact = function (callback) {
//      return new Promise((resolve,reject)=>{
//           let random = Math.floor(Math.random() * 100);
//           setTimeout(() => {
//             resolve (callback()); //calling the callback
//           }, random);
//      })

// };

// transact(() => {//pyramid of dom always print a first then b
//   x = x + 1;
//   console.log("A" + x);
// })
// .then(()=>{
//      x=x+1;
//      console.log("B"+x);
// })

//async await
// let x = 0;
// let transact = function (callback) {
//      return new Promise((resolve,reject)=>{
//           let random = Math.floor(Math.random() * 100);
//           setTimeout(() => {
//             resolve (callback()); //calling the callback
//           }, random);
//      })

// };
// (async function()//self invoking funciton
// {
//      await transact(() => {//pyramid of dom always print a first then b
//           x = x + 1;
//           console.log("A" + x);
//         })
//         await transact(() => {//await will let js to wait 2nd transadt until first promise is resolved
//           x = x + 1;
//           console.log("B" + x);
//         })
// })()

//callback chainng
// let err;
// function transact(title, callback) {
//   let random = Math.floor(Math.random() * 100);
//   if (title.toUpperCase() != title) err = new Error("not in upperacse");
//   setTimeout(() => callback(err), random); //RANDOM OP WILL BE PRINTED SO OUTPUT CANNOT BE PREDICTED
// }
// transact("DEALER", (err) => {
//   //err is callback funciotn
//   if (err) {
//     console.log(err);
//   } else
//   console.log("dealer has done transation");
// });
// transact("RETAILER", (err) => {
//   //err is callback funciotn
//   if (err) {
//     console.log(err);
//   } else
//   console.log("dealer has done transation");
// });

// let err;
// function transact(title, callback) {
//   let random = Math.floor(Math.random() * 100);
//   if (title.toUpperCase() != title) err = new Error("not in upperacse");
//   setTimeout(() => callback(err), random); //RANDOM OP WILL BE PRINTED SO OUTPUT CANNOT BE PREDICTED OUTPUT WILL TOGGLE
// }
// transact("DEALER", (err) => {
//   //err is callback funciotn
//   if (err) {
//     console.log(err);
//   } else console.log("dealer has done transation"); //OUTPUT WILL BE FIXED chaining called callback hell
//   transact("RETAILER", (err) => {
//     //err is callback funciotn
//     if (err) {
//       console.log(err);
//     } else console.log("REATILER has done transation");
//   });
// });

//promis is js object 

let ptg=new Promise((resolve,reject)=>{
     //asssertion
     let isclean=true;
     if(isclean)
     resolve("kitechn is clean");
     else
     reject("kitechen is not cleean");
});
ptg
.then((resolved)=>{
     console.log(resolved+"you will get an ice crewam");

})
.catch((rejected)=>
{
  console.log(rejected+"not get an icecream")     
})

