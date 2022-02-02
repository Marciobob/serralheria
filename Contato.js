console.log("Contato.js")

function scroolll(){
  console.log("scroolnnnn")


  document.querySelectorAll("img").forEach((img,index)=>{
    
    if(index ==  6 && img.getBoundingClientRect().top < window.innerHeight){ 
      console.log(index,img)
      img.classList.add("img_servico2")
    }
    else{
      img.classList.remove("img_servico")
    }
  })
}
scroolll()
document.addEventListener("scroll", scroolll)


