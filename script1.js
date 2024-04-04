function btnClicking(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
    })
    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"
    })
}