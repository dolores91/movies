# Practica en REACT del bootcamp Alkemy
La realicé siguiendo los siguientes lineamientos:
● Crear una APP de React con el paquete create-react-app
● Manejar componentes stateless y stateful (FC) poniendo el foco en
    ○ JSX
    ○ Estados
    ○ Event handlers
    ○ Props / Keys
    ○ Renderizado condicional
● Realizar peticiones asincrónicas a distintas API
● Lograr la persistencia de información (token, favoritos, etc) en almacenamiento local
● Utilizar hooks de estado, efecto y otros para manejo de componentes
● Implementar la librería de ruteo React Router Dom
● Implementar una librería de CSS (Bootstrap).

REQUERIMIENTOS:
● Login - Usará el mismo endpoint de Alkemy para obtener el token
● Listado de películas - traerá las películas más recientes en cartelera con toda su información
● Detalle de película - mostrará la información particular de cada película mostrada en el listado, aquí se podrá ampliar más en detalle cada película
● Buscador - permitirá buscar películas por una palabra clave y mostrará los resultados que coincidan
● Favoritos - cada película tendrá la opción de ser agregada a esta sección. Solo las películas elegidas por el usuario como "Favorita" podrán estar aquí. Se deberá
validar que haya por lo menos una película de categoría "FAMILIA". También que se puedan quitar / eliminar películas de las sección Favoritos.
● Barra de navegación - Debe existir un indicador de la cantidad de películas en favoritos. Y en el detalle, se especificará si esa película ya está en Favoritos y
deberá haber un acumulado de Rating de las películas en "Favoritos".

# API KEY
6059216fb415c21feabd30ee81b69d48

# API detalle:
https://developers.themoviedb.org/3/movies/get-movie-details
https://api.themoviedb.org/3/movie/505642?api_key=6059216fb415c21feabd30ee81b69d48&language=en-US

# API search
https://api.themoviedb.org/3/search/movie?api_key=6059216fb415c21feabd30ee81b69d48&language=en-US&query={keyword}
