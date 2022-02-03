console.log('criar img')
//https://marciobob.github.io/serralheria/Img/
function cria_img() {
	
  	portao = Array.from(Array(5).keys())
  	
		console.log(portao);
		
		portao.forEach((index)=>{
			console.log(index)
			
			const div = document.getElementById("div_servicos")
    
    	    const img = document.createElement("img")
    
    
    	    div.appendChild(img)
    
    	    img.src="./Img/portao"+index+".png"
    
    	    console.log("IMG ",img)

    	    img.classList.add("img_servico")
    	    img.loading="lazy"
			
		})

    
  }
  
window.addEventListener("load", cria_img);


