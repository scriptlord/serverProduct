
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let productName = document.getElementById("productName");
let size = document.getElementById("size");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let productdescription = document.getElementById("productdescription");
let image = document.getElementById("image");
let color = document.getElementById("color");

let urls ="http://jerrysofttechy-server.herokuapp.com/jerry/api";

submit.addEventListener("click",(e)=>{

    //  e.preventDefault();

     $(document).ready(function(){

        $.ajax({
            url: urls,
    
            type: "POST",
    
            success:function(data){
               
                for(let i=0;i<data.results.length;i++){
                    console.log( data[i]);
                }
            },
             error:function(err){
    
                console.log(err);
            }
        })
    })
    
    
    

// fetch(urls,{
//     method:"POST",
//     body:JSON.stringify({

//         productName:productName,
//             productDescription:productdescription,
//             productVarieties:[
//                 {
//                 size:size,
//                 color:color,
//                 quantity:quantity,
//                 images:image,
//                 price:price
//             }
           
//         ],
//         dateUploaded: new Date(),
//         dateEdited:new Date()
//     }),
//     headers:{

//         "Content-Type":"application/json; charset=UTF-8"
//     }
// }).then((Response)=>{
//     console.log( Response.json())
// }).then((ok)=>{
//    console.log(ok);
// })


})