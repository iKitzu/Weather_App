const ciudad = "Cucuta"; // 🏙️ Cambia el nombre de la ciudad aquí
const apiKey = "aab246b2ae19426f95b121358242110"; // 🔑 Clave de API para el servicio del clima
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&lang=es&days=1`; // 🌐 URL de la API para obtener el pronóstico

// 📡 Función asíncrona para actualizar el DOM con los datos del clima
async function fetchWeather() {
  try {
    const response = await fetch(url); // 🔄 Obtener respuesta de la API
    const data = await response.json(); // 📥 Convertir la respuesta a JSON

    // 📍 Extraer datos relevantes
    const locationName = `${data.location.name}, ${data.location.region}`; // 🗺️ Nombre de la ciudad y región
    const temp = data.current.temp_c; // 🌡️ Temperatura actual en °C
    const feelsLike = data.current.feelslike_c; // 🌡️ Sensación térmica
    const iconUrl = data.current.condition.icon;  // 🌤️ Icono del clima
    const conditionText = data.current.condition.text; // 📋 Descripción del clima
    const dateTime = new Date(data.location.localtime); // 🕒 Hora local
    const maxTempDay = data.forecast?.forecastday[0]?.day?.maxtemp_c || temp; // 🔝 Temperatura máxima del día
    const minTempNight = data.forecast?.forecastday[0]?.day?.mintemp_c || temp; // 🔽 Temperatura mínima de la noche

    // 📊 Datos para las estadísticas
    const windSpeed = data.current.wind_kph; // 💨 Velocidad del viento en km/h
    const precipitation = data.current.precip_mm; // 🌧️ Precipitación en mm
    const pressure = data.current.pressure_mb; // ⚖️ Presión en mb
    const uvIndex = data.current.uv; // ☀️ Índice UV

    // 🌅 Datos de salida y puesta del sol
    const sunrise = data.forecast.forecastday[0].astro.sunrise; // 🌄 Salida del sol
    const sunset = data.forecast.forecastday[0].astro.sunset; // 🌇 Puesta del sol

    // 📅 Formatear fecha en estilo "January 18, 16:14" // Como en el Figna
    const dateOptions = { 
      month: 'long', 
      day: 'numeric' 
    };
    const timeOptions = { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    };
    const formattedDate = dateTime.toLocaleDateString('en-US', dateOptions); // 📅 Fecha formateada
    const formattedTime = dateTime.toLocaleTimeString('en-US', timeOptions); // ⏰ Hora formateada
    const formattedDateTime = `${formattedDate}, ${formattedTime}`; // 🗓️ Fecha y hora combinadas

    // 🖥️ Actualizar el DOM con la información del clima
    document.querySelector('.location').textContent = `${locationName}`; // 🌍 Ubicación
    document.querySelector('.temp-value').textContent = `${temp}°C`; // 🌡️ Temperatura
    document.querySelector('.temperature span:nth-child(2)').textContent = `Feels like ${feelsLike}°`; // 🌡️ Sensación térmica
    document.querySelector('.weather-icon').innerHTML = `<img src="${iconUrl}" alt="${conditionText}">`; // 🌥️ Icono del clima
    document.querySelector('.date-time').textContent = formattedDateTime; // 🕒 Fecha y hora
    document.querySelector('.additional-info').innerHTML = `Day ${maxTempDay}° <br> Night ${minTempNight}°`; // ☀️ Mínima y máxima

    // 📊 Actualizar sección de estadísticas
    document.querySelectorAll('.stats .stat')[0].querySelector('.stat-info').innerHTML = `Wind: <br><span class="wind-speed">${windSpeed} km/h</span>`; // 💨 Viento
    document.querySelectorAll('.stats .stat')[1].querySelector('.stat-info').innerHTML = `Rain: <br><span class="precipitation">${precipitation}%</span>`; // 🌧️ Lluvia
    document.querySelectorAll('.stats .stat')[2].querySelector('.stat-info').innerHTML = `Pressure: <br><span class="pressure">${pressure} mb</span>`; // ⚖️ Presión
    document.querySelectorAll('.stats .stat')[3].querySelector('.stat-info').innerHTML = `UV Index: <br><span class="uv-index">${uvIndex}</span>`; // ☀️ Índice UV

    // ⏳ Actualizar pronóstico por horas
    const hourlyForecast = data.forecast.forecastday[0].hour.slice(0, 6); // 🕒 Obtener las primeras 6 horas de pronóstico
    const hoursContainer = document.querySelector('.hours');
    hoursContainer.innerHTML = ''; // 🗑️ Limpiar contenido anterior

    hourlyForecast.forEach((hour) => {
      const hourTime = new Date(hour.time).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }); // ⏰ Formato de hora
      const hourTemp = hour.temp_c; // 🌡️ Temperatura por hora
      const hourIcon = hour.condition.icon; // 🌤️ Icono por hora
      const hourCondition = hour.condition.text; // 📋 Descripción del clima por hora

      // 📦 Crear y añadir el elemento de la hora
      const hourElement = document.createElement('div');
      hourElement.classList.add('hour');
      hourElement.innerHTML = `${hourTime} <span><img src="${hourIcon}" alt="${hourCondition}"></span> ${hourTemp}°C`; // 🕒 Elemento de hora
      hoursContainer.appendChild(hourElement); // ➕ Añadir al contenedor
    });

    // 🌅 Actualizar sección de salida y puesta del sol
    document.querySelector('.sunrise-sunset .sun-info:nth-child(1) .sun-detail').textContent = `Sunrise: ${sunrise}`; // 🌄 Información de salida del sol
    document.querySelector('.sunrise-sunset .sun-info:nth-child(2) .sun-detail').textContent = `Sunset: ${sunset}`; // 🌇 Información de puesta del sol

  } catch (error) {
    console.error('🚨 Error fetching weather data:', error); // ⚠️ Manejo de errores
  }
}

// 🚀 Llamar a la función al cargar la página
window.onload = fetchWeather;
