# API

En este directorio se ubican las definciones de los endpoints, donde cada uno cumple alguna de las siguientes funciones:

- Obtener listado de pokémons
- Obtener pokémons de tipo flying y altura mayor a 10
- Obtener pokémons de tipo grass
- Obtener pokémons con peso en rango entre 30 y 80 (no inclusive)
- Obtener pokémons, invieriendo sus nombres

Notar que la API se define de tal modo de mejorar la respuesta. Para ello, las apis funcionan en términos de carga por lotes de datos, lo cual se controla desde el front-end según corresponda, mediante parámetros de url. Cada endpoint se encuentra documentado mediante un docstring dentro del archvio `views.py`
