📖 Diccionario Web Profesional
¡Bienvenido al Diccionario Web Profesional! Esta es una aplicación web moderna, y responsiva diseñada para buscar definiciones de palabras en inglés  usadas en el mundo de diseño   web, en tiempo real. La aplicación se conecta de manera asíncrona a una API pública para obtener significados, sinónimos y audios de pronunciación oficial, ofreciendo además una experiencia de usuario altamente personalizable.

✨ Características Principales
Búsqueda Inteligente (Debounce): El buscador optimiza las peticiones al servidor esperando automáticamente 500ms tras la última pulsación de tecla antes de realizar la búsqueda, evitando colapsar la API.

Pronunciación en Audio: Si la palabra cuenta con un registro fonético de audio, se habilita un botón para escuchar la pronunciación exacta de forma inmediata.

Historial Local Reciente: Guarda automáticamente las últimas 5 palabras buscadas utilizando el almacenamiento local del navegador (LocalStorage). Puedes volver a buscar cualquiera de ellas con un solo clic.

Personalización de Interfaz:

Modo Oscuro/Claro: Alterna el tema visual de la aplicación para proteger la vista en entornos de baja luminosidad.

Selector de Fuentes: Permite cambiar dinámicamente la tipografía de la página entre cinco familias distintas (Sans Serif, Serif, Monospace, Cursive y Fantasy).

Diseño Responsivo y Accesible: Adaptado para una visualización óptima tanto en computadoras de escritorio como en dispositivos móviles. Incluye atributos de accesibilidad (aria-label, aria-live).

🛠️ Tecnologías Utilizadas
La aplicación está construida utilizando tecnologías web estándar (Vanilla Web Development), por lo que no requiere dependencias externas ni compiladores:

HTML5: Estructura semántica y componentes de accesibilidad.

CSS3: Estilos personalizados, variables nativas (:root) para el cambio de tema y Media Queries para el diseño responsivo.

JavaScript (ES6+): Lógica asíncrona (async/await), manipulación del DOM, consumo de API REST mediante fetch y persistencia de datos.

API Externa: Free Dictionary API para la obtención de datos lingüísticos.

📂 Estructura del Proyecto
El repositorio contiene una estructura limpia de tres archivos principales:

Bash
├── index.html        # Estructura visual y marcado de la aplicación.
├── style.css         # Hojas de estilo, variables de tema y responsividad.
└── app.js            # Lógica de negocio, peticiones API e historial.
🚀 Instalación y Ejecución
Al ser una aplicación puramente de Front-End, el proceso de puesta en marcha es extremadamente sencillo. Tienes dos opciones para ejecutarla:

Opción 1: Ejecución Directa (Local)
Descarga todos los archivos del proyecto en una misma carpeta en tu computadora.
Haz doble clic sobre el archivo index.html.
Tu navegador web predeterminado abrirá la aplicación automáticamente y estará lista para usar.

Opción 2: Usando un Servidor Local (Recomendado para Desarrollo)
Si utilizas un editor de código como Visual Studio Code, se recomienda usar una extensión de servidor local para simular un entorno de producción real:
Abre la carpeta del proyecto en Visual Studio Code.
Instala la extensión Live Server.
Haz clic derecho sobre index.html y selecciona "Open with Live Server".
La app se abrirá en http://127.0.0.1:5500/ y se recargará automáticamente cada vez que hagas un cambio en el código.

📖 ¿Cómo usar la aplicación?
Buscar una palabra: Haz clic en la barra de búsqueda y comienza a escribir una palabra en inglés (por ejemplo: hello, developer, run). No necesitas presionar "Enter", el resultado aparecerá automáticamente.
Escuchar pronunciación: Si aparece el botón 🔊 Escuchar pronunciación, haz clic en él para oír el audio.
Cambiar el diseño: Usa los controles de la esquina superior derecha para alternar el tema visual o cambiar el tipo de letra según tu preferencia.

Reutilizar el historial: En la sección "Recientes", haz clic sobre cualquier botón de palabra que hayas buscado previamente para repetir la búsqueda de forma instantánea.

⚠️ Nota sobre la conexión: Dado que la aplicación consume un servicio externo, requiere de una conexión activa a Internet para poder realizar las búsquedas de palabras de manera exitosa.
