console.log("index.js")

function scrooll(){
  console.log("scrool")

  document.querySelectorAll("img").forEach((img,index)=>{
  	
  	var tamanho_lista = document.querySelectorAll("img").length - 1
  	
    const div = document.getElementById("faceboo")
    
    if(index >1  && index < tamanho_lista && img.getBoundingClientRect().top < window.innerHeight){ 
  	//	console.log("9999",window.innerHeight - 300,'\\\\vvv',img.getBoundingClientRect().top )
  
      img.classList.add("img_servico2")
    }
		else if(index == tamanho_lista  && img.getBoundingClientRect().top < window.innerHeight){ 
  		
  		//console.log("9999",window.innerHeight,'\\\\',img.getBoundingClientRect().top )
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