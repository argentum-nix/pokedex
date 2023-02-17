# Front-end de la aplicación

Esta carpeta contiene los archivos y directorios base de la parte frontend de proyecto.
Para el frontend, el stack de tecnologias fue:

- React
- Material UI

Para mejorar la carga de los datos sobre los pokémon, se implemnta la carga infinita, que se encapsula en la componente InfinityScroll.
De esta forma, los datos, en vez de ser cargados simultaneamente, se cargan de forma consecutiva en pequeños batches, definidos por parámetros dentro del código. De esta forma se evitan tiempos de espera de la respuesta de la api al cargar y procesar muchos datos.
