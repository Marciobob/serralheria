console.log("botao portao")

var  portao = document.getElementById('btn_portao')

var  porta = document.getElementById('btn_portas')
console.log("&&&",porta)


function cria_img(lista, pasta, div) {
	
  	portao = Array.from(Array(lista).keys())
  	
		console.log(portao);
		
		portao.forEach((index)=>{
			console.log(index)
			
			const divs = document.getElementById(div)
    
    	    const img = document.createElement("img")
    
    
    	    divs.appendChild(img)
    
    	    img.src="https://marciobob.github.io/serralheria/Img/"+pasta+"/"+pasta+index+".jpg"
    
    	    console.log("IMG ",img)

    	    img.classList.add("img_servico")
    	    img.loading="lazy"
			
		})
		botao_servicos(div)
		
  }


function botao_servicos(div) {
	console.log("abrindo div portão",document.getElementById('img_servicos'))
	document.getElementById(div).style.width="100%"
	//cria_img(lista, pasta, div)
	//window.scrollTo(1,1);
}


portao.addEventListener("click", ()=>{
	cria_img(13, "Portao", "div_portao")
});

porta.addEventListener("click",  ()=>{
	cria_img(10, "Portas", "div_porta")
});

