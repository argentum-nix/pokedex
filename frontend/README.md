# Front-end de la aplicación

Esta carpeta contiene los archivos y directorios base de la parte frontend de proyecto.
Para el frontend, el stack de tecnologías fue:

- React
- Material UI

Para mejorar la carga de los datos sobre los pokémon, se implementa la carga infinita, que se encapsula en la componente InfinityScroll.
De esta forma, los datos, en vez de ser cargados simultáneamente, se cargan de forma consecutiva en pequeños batches, definidos por parámetros dentro del código. Se busca evitar tiempos de espera de la respuesta de api al cargar y procesar muchos datos.
