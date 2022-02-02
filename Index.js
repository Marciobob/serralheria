console.log("index.js")

function scrooll(){
  console.log("scrool")

  document.querySelectorAll("img").forEach((img,index)=>{
  	
    const div = document.getElementById("faceboo")
    
    if(index >1 && index <6  && img.getBoundingClientRect().top < window.innerHeight){ 
  
      img.classList.add("img_servico2")
    }
		else if(index == 6   && img.getBoundingClientRect().top < window.innerHeight){ 
  		
  		console.log("9999",div)
      div.classList.add("facebook2")
      
    }
    else{
      img.classList.remove("img_servico2")
			div.classList.remove("facebook2")
    }
  })
}

scrooll()

document.addEventListener("scroll", scrooll)