# 🌤️ Weather App

## 🌍 Descripción

**Weather App** es una aplicación móvil prototipo que proporciona información meteorológica en tiempo real a través de una interfaz optimizada para dispositivos móviles. La aplicación permite consultar la **temperatura actual**, **sensación térmica**, **condiciones climáticas generales**, y ofrece pronósticos por horas, días y hasta 10 días. Además, muestra datos detallados como **velocidad del viento**, **probabilidad de lluvia**, **presión atmosférica**, **índice UV**, **salida y puesta de sol**. ☀️🌧️🌬️

Este proyecto **no es una versión final** 🛠️, está en constante desarrollo, y es un prototipo abierto a cambios para mejoras y optimización. Actualmente, la funcionalidad depende de la integración con APIs externas para obtener datos meteorológicos en tiempo real, que se reflejan de manera dinámica en la interfaz.

## ✨ Características

- **🌡️ Pronóstico del Tiempo**: Consulta la temperatura actual, sensación térmica y el ícono de las condiciones climáticas.
- **🕰️ Pronóstico por Hora y por Día**: Proporciona pronósticos detallados para las próximas horas y días, incluyendo una barra gráfica que indica la probabilidad de lluvia. 🌧️📊
- **📈 Información Adicional**: Muestra la velocidad del viento 🌬️, presión atmosférica 🌡️, probabilidad de lluvia 🌧️, índice UV ☀️ y otras variables relevantes.
- **📊 Visualización Gráfica**: Se incluyen gráficos para mostrar la evolución del clima durante el día (prototipo en desarrollo).

## 📁 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **HTML**: Estructura la aplicación y define las secciones principales de la página.
- **CSS**: Estilos aplicados a la interfaz, incluyendo un diseño optimizado para dispositivos móviles.
- **JavaScript**: Código para gestionar la funcionalidad dinámica, como la obtención de datos del clima a través de APIs, la actualización de los elementos de la interfaz y la interacción del usuario con botones.

## 🗂️ Archivos

Este diagrama refleja cómo están organizadas las carpetas y archivos principales dentro del proyecto:

```bash
WeatherApp/
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── img/
│   │   ├── logo.png
│   │   ├── air.png
│   │   ├── rainy.png
│   │   ├── waves.png
│   │   ├── light_mode.png
│   │   ├── nights_stay.png
│   │   └── grafica_insana_xd.png
│   └── js/
│       ├── script.js
│       ├── index.js
│       └── test.js
│
├── index.html
└── README.md
```

## 💻 Instalación y Uso

Este prototipo puede utilizarse de la siguiente forma:

**Ejecución Local**: Puedes descargar el repositorio y ejecutarlo de manera local en tu equipo. Sigue estos pasos:

   - Clona el repositorio:
     ```bash
     git clone https://github.com/iKitzu/Weather_App.git
     ```
   - Navega a la carpeta del proyecto 📂
   
   - Abre el archivo `index.html` en tu navegador favorito 🌐
   
**Requisitos**:
- Un navegador moderno compatible con HTML5, CSS3 y JavaScript. 🖥️
- Conexión a Internet si se ejecuta de manera local, ya que la aplicación obtiene los datos meteorológicos en tiempo real mediante una API externa.

## ⚙️ Funcionamiento de la Aplicación

1. **Inicio**: Al cargar la aplicación, se obtiene la ubicación del usuario 📍 y se muestra el clima actual de dicha ubicación.
2. **Botones de Navegación**: El usuario puede elegir ver el clima de hoy, mañana o un pronóstico extendido de 10 días. 🔄📅
3. **Actualización Dinámica**: Toda la información del clima (temperatura, sensación térmica, condiciones) se actualiza de manera dinámica con la API integrada. 🌐🔄

## 🚧 Estado del Proyecto

**Weather App** es un **prototipo en desarrollo** 🛠️, y aún no está en su versión final. Estamos trabajando en:

- Mejorar la integración de los gráficos de pronóstico del clima. 📊
- Optimizar la interfaz para ofrecer una experiencia más fluida en dispositivos móviles. 📱
- Implementar nuevas funcionalidades. 💡
