const widgetsWindowElem = document.querySelector('.widgetsWindow');
widgetsWindow.innerHTML = `
        <div class="input-container">
            <div class="search" id="">
                <input type="text" id="searchInput">
            </div>
            <div class="searchBtn" id="">
                <button id="searchBtn">Search</button>
            </div>
        </div>        
      <div class="weather-container" id=""> 
            <div class="temprature" id="temprature">temp</div>
            <div class="location-date" id="">
                <div class="location" id="location">location</div>
                 </div>
            <div class="weather-state">
          
                <div class="condition" id="condition"> status</div>
            </div>
        </div>




`












//select
const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');
const temprature = document.querySelector('#temprature');
const locationElem = document.querySelector('#location');
const conditionElem = document.querySelector('#condition');
//event Listener
searchBtn.addEventListener('click', async function () {
    const location = searchInput.value;
    console.log(location);

    if (location !="") {
        //get data
        const data = await fetchWeather(location);
        searchInput.value = "";
            //update data inside my dom
    if (data == null) {
        
    }else{
        updateDOM(data);
    }
    }


    
})

function updateDOM(data) {

    //filter required data
    console.log('I will update the ui with this',data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData = data.location.localtime;
    const [date,time] = timeData.split(" ");
    const condition = data.current.condition.text;
    const iconLink = data.current.condition.icon;
    console.log("temp",temp,location,date,time);

    // update DOM
    temprature.textContent = temp;
    locationElem.textContent = location;
    conditionElem.textContent = condition;

}

async function fetchWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=f510da795bed4b34ac642154242207&q=${location}&aqi=yes`
    const response = await fetch(url);
    if (response.status == 400) {
        alert("City not found");
    }else if (response.status == 200) {
        const json = await response.json();
        console.log(json)
        return json;
    }
}


