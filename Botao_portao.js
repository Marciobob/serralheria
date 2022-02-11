console.log("botao portao")

var  portao = document.getElementById('btn_portao')
console.log(portao)

function cria_img() {
	
  	portao = Array.from(Array(13).keys())
  	
		console.log(portao);
		
		portao.forEach((index)=>{
			console.log(index)
			
			const div = document.getElementById("div_servicos")
    
    	    const img = document.createElement("img")
    
    
    	    div.appendChild(img)
    
    	    img.src="https://marciobob.github.io/serralheria/Img/Portao/Portao"+index+".jpg"
    
    	    console.log("IMG ",img)

    	    img.classList.add("img_servico")
    	    img.loading="lazy"
			
		})
		window.scrollTo(0, window.innerHeight+470);
  }


function botao_servicos() {
	console.log("abrindo div portão",document.getElementById('img_servicos'))
	document.getElementById('div_servicos').style.width="100%"
	cria_img()
	
}

portao.addEventListener("click", botao_servicos);
