// const btn=document.querySelector(".btn")
// const esas=document.querySelector(".esas")

// btn.addEventListener("click", function(){
//     esas.style.display="block"

// })


const yazi = document.querySelectorAll(".yazi")
const vur = document.querySelectorAll(".vur")
const minus = document.querySelectorAll(".minus")

vur.forEach(function (element) {
    element.addEventListener("click", function () {
        yazi.forEach(function (yazilar) {
            yazilar.style.display = "block"
            element.style.display = "none"
            minus.forEach(function (minuslar) {
                minuslar.style.display = "block"
                minuslar.addEventListener("click", function () {
                    yazilar.style.display = "none"
                    minuslar.style.display = "none"
                    element.style.display = "block"
                })
            })
        })
    })
})



// for(let i=0; i<vur.length; i++){
//     for(let j=0; j<yazi.length; j++){
//          vur[i].addEventListener("click", function(){
//          yazi[i].style.display="block"
//          vur[i].style.display="none"
//          for(let y=0; y<minus.length; y++){
//             minus[i].style.display="block"
//             minus[i].addEventListener("click", function(){
//                 yazi[i].style.display="none"
//                 minus[i].style.display="none"
//                 vur[i].style.display="block"
//             })
//          }
//     })
//     }
// }