//api geolocalizaçao daqui para baixo e somente sobre essa api 
function success (pos){

    var longi=  pos.coords.longitude
    
    var lanti=pos.coords.latitude
    console.log(longi)
    console.log(lanti)
    buscaCidade(longi,lanti)
    
    }
    navigator.geolocation.getCurrentPosition(success);
    
    
    
    
    
    var texto= document.getElementById("texto")



//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt`
//uso da api open whater 
const key= "5799d5b3b579c94b87286f29918ba109"

async function buscaCidade(longi,lanti){
 const dados= await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lanti}&lon=${longi}&appid=${key}&units=metric&lang=pt`).then(resposta => resposta.json());
 
 
 dadosNaTela(dados);
}
function dadosNaTela(dados){
   console.log(dados)
    document.querySelector(".cidade").innerHTML=` ${dados.name}`;
                                                        
    document.querySelector(".temperatura").innerHTML= ` <i class="fa-solid fa-temperature-quarter"</i> ${Math.floor(dados.main.temp)} &degC`;
    document.querySelector(".condicao_climatica").innerHTML=`<i class="fa-solid fa-cloud"></i> ${ dados.weather[0].description}`;
   
    
 
 
     
} 





