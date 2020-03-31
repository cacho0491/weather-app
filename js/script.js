{
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(pos){
            displayData(pos.coords.latitude, pos.coords.longitude);
        });
        
    } else{
        document.getElementById("location-name").innerHTML = "Navigation not suppertted!";
    }

    function displayData(lat, lon){
        console.log(lat, lon);
        fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
            .then(res => res.json())
            .then(data => {
                const weather = data.weather[0].main;
                console.log(data)
                console.log(data.main.feels_like);
                document.getElementById("location-name").innerHTML = `${data.name}, ${data.sys.country}`;
                document.getElementById("temperature").innerHTML = `${data.main.temp} C`;
                document.getElementById("feels_like").innerHTML = `${data.main.feels_like} C`
                document.getElementById("max_temp").innerHTML = `${data.main.temp_max} C`;
                document.getElementById("min_temp").innerHTML = `${data.main.temp_min} C`;
                document.getElementById("humidity").innerHTML = `${data.main.humidity} %`;
                if(weather === "Rain"){
                     document.getElementById("comment").innerHTML = "Chilli!, Go back to bed :)";
                     document.body.style.backgroundColor = "linear-gradient(rgba(11, 12, 12, 0), rgba(38, 41, 41, 0.924))";
                     createWeatherDivs("rain");
                } else if(weather === "Clouds"){
                    document.getElementById("comment").innerHTML = "Cloudy";
                    createWeatherDivs("snow");
                    document.body.style.background ="linear-gradient(rgba(11, 12, 12, 0), rgba(38, 41, 41, 0.924))";
                }
                else {
                    document.getElementById("comment").innerHTML = "Normal!, go for a walk";
                };
            });
    }

    function createWeatherDivs(name){
        for(let i = 1; i<=10; i++){
            const div = document.createElement("DIV");
            div.setAttribute("class", name);
        
            document.getElementById("weather-animation").appendChild(div);
        };
    };

}