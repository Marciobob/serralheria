console.log("botao portao")

var  portao = document.getElementById('btn_portao')

var  porta = document.getElementById('btn_portas')

var  janela = document.getElementById('btn_janela')

var  corrimao= document.getElementById('btn_corrimao')

var  vidro = document.getElementById('btn_vidros')




function scrooll(){
  console.log("scrool")

  document.querySelectorAll("img").forEach((img,index)=>{
  	
  	var tamanho_lista = document.querySelectorAll("img").length - 1
  	
    //const div = document.getElementById("faceboo")
    
    if(index >1  && index < tamanho_lista && img.getBoundingClientRect().top < window.innerHeight){ 
  
      img.classList.add("img_servico2")
    }
	//else if(index == tamanho_lista  && img.getBoundingClientRect().top < window.innerHeight){ 
  		
     // div.classList.add("facebook2")
      
   // }
    else{
		img.classList.remove("img_servico2")
		//div.classList.remove("facebook2")
    }
  })
}


function cria_img(lista, pasta, div) {
	
  	portao = Array.from(Array(lista).keys()) 	
		
		portao.forEach((index)=>{
			
			const divs = document.getElementById(div)
    
    	    const img = document.createElement("img")
    
    
    	    divs.appendChild(img)
    
    	    img.src="https://marciobob.github.io/serralheria/Img/"+pasta+"/"+pasta+index+".jpg"
    
    	    img.classList.add("img_servico")
    	    img.loading="lazy"
			
		})
		botao_servicos(div)
		
  }


function botao_servicos(div) {
	console.log("abrindo div portão",document.getElementById(div).getBoundingClientRect().top)
	document.getElementById(div).style.width="100%"
	scrooll()
}


portao.addEventListener("click", ()=>{
	cria_img(13, "Portao", "div_portao")
});

porta.addEventListener("click",  ()=>{
	cria_img(10, "Portas", "div_porta")
});


janela.addEventListener("click",  ()=>{
	cria_img(9, "Janelas", "div_janela")
});


corrimao.addEventListener("click",  ()=>{
	cria_img(14, "Corrimao", "div_corrimao")
});


vidro.addEventListener("click",  ()=>{
	cria_img(15, "Vidros", "div_vidros")
});



document.addEventListener("scroll", scrooll)

