# Adivina el Tv Show

Creado con [Create React App](https://github.com/facebook/create-react-app) y [TailwindCSS](https://tailwindcss.com/).

Desafio tomado de [Gonzalo Pozzo](https://github.com/goncy)

## Descripción

Juego de adivinar el nombre del Tv Show, teniendo como pista inicial algunas letras del mismo

### Características

- Data obtenida del sitio web [TMDB API](https://developer.themoviedb.org/docs)
- El juego posee 3 vidas, se pierde 1 vida al ingresar un intento incorrecto, posee indicador visual ❤️
- Sistema de puntos, por cada intento correcto ganas 1 punto, el puntaje se visualiza en pantalla
- Dificultad vinculada a la cantidad de caracteres que posee el nombre del Tv Show, a mayor longitud mas letras faltantes
- Cada nivel posee 1 pista disponible, al usarla se muestra 1 letra adicional del nombre del Tv Show
- Flexibilidad al ingresar el intento con mayúsculas o minúsculas, se tomara como correcta
- Al perder o ganar, se muestra la posiblidad de reiniciar el juego

### Deploy

Puede verse el deploy [acá](https://guess-the-tv-show-challenge.vercel.app/)
