import requests
import time
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


def get_pkmn_data(pkmn_id):
    """
    Función auxiliar. Retorna datos de un pokémon con id igual a pkmn_id
    Los datos se obtienen desde el endpoint de pokeapi https://pokeapi.co/api/v2/pokemon/id

    Return: diccionario con nombre, id, peso, altura, objeto de tipos y link al sprite de pokemon de id=pkmn_id.
    """
    r = requests.get("https://pokeapi.co/api/v2/pokemon/{}".format(pkmn_id))
    data = {}
    if r.status_code == 200:
        response = r.json()
        data = {
            "name": response["name"],
            "id": pkmn_id,
            "weight": response["weight"],
            "height": response["height"],
            "types": response["types"],
            "sprite": response["sprites"]["front_default"],
        }
    return data


class FetchPkmnList(APIView):
    """
    Endpoint que permite obtener listado de pokemons en un rango de ids definido.
    La url de endpoint recibe parametros offset y limit.
    Se utilizan para limitar la carga de datos y mejorar el tiempo de respuesta del endpoint.

    Return: un objeto con objetos, correspondientes a pokemons, con id entre offset+1 y offset+limit+1.
    """

    def get(self, request):
        data = {}
        offset = int(request.GET.get("offset"))
        limit = int(request.GET.get("limit", 10))
        for pkmn_id in range(offset + 1, offset + limit + 1):
            try:
                r = get_pkmn_data(pkmn_id)
                if r != {}:
                    data[pkmn_id] = r
            except IndexError:
                break
        return Response(data, status=status.HTTP_200_OK)


class GetFilteredWeightPkm(APIView):
    """
    Endpoint que permite obtener listado de pokemons con filtro de peso entre 30 y 80 (no inclusive).
    La url de endpoint recibe parametros offset y limit.
    Se utilizan para limitar la carga de datos y mejorar el tiempo de respuesta del endpoint.

    Return: un objeto con objetos de pokemons con peso entre 30 y 80, de cantidad igual a lo más a valor de limit.
    """

    def get(self, request):
        data = {}
        offset = int(request.GET.get("offset"))
        limit = int(request.GET.get("limit", 10))
        for pkmn_id in range(offset + 1, offset + limit + 1):
            try:
                r = get_pkmn_data(pkmn_id)
                if r != {} and r["weight"] > 30 and r["weight"] < 80:
                    data[pkmn_id] = r
            except IndexError:
                break
        return Response(data, status=status.HTTP_200_OK)


class GetFilteredFlyingPkm(APIView):
    """
    Endpoint que permite obtener listado de pokemons de tipo flying y altura mayor a 10.
    La url de endpoint recibe parametros offset y limit.
    Se utilizan para limitar la carga de datos y mejorar el tiempo de respuesta del endpoint.

    Return: un objeto con objetos de pokemons de tipo flying con altura mayor a 10, de cantidad igual a lo más a valor de limit.
    """

    def get(self, request):
        data = {}
        r = requests.get("https://pokeapi.co/api/v2/type/flying", timeout=10)
        if r.status_code == 200:
            flying_pkmn = r.json()["pokemon"]
            offset = int(request.GET.get("offset"))
            limit = int(request.GET.get("limit", 10))
            for i in range(offset + 1, offset + limit + 1):
                try:
                    response = get_pkmn_data(flying_pkmn[i]["pokemon"]["name"])
                    if response != {}:
                        if response["height"] > 10:
                            data[i] = response
                except:
                    break
        return Response(data, status=status.HTTP_200_OK)


class GetGrassPkmn(APIView):
    """
    Endpoint que permite obtener listado de pokemons de tipo grass.
    La url de endpoint recibe parametros offset y limit.
    Se utilizan para limitar la carga de datos y mejorar el tiempo de respuesta del endpoint.

    Return: un objeto con objetos de pokemons de tipo grass, de cantidad igual a lo más a valor de limit.
    """

    def get(self, request):
        data = {}
        r = requests.get("https://pokeapi.co/api/v2/type/grass", timeout=10)
        if r.status_code == 200:
            grass_pkmn = r.json()["pokemon"]
            offset = int(request.GET.get("offset"))
            limit = int(request.GET.get("limit", 10))
            for i in range(offset + 1, offset + limit + 1):
                try:
                    response = get_pkmn_data(grass_pkmn[i]["pokemon"]["name"])
                    if response != {}:
                        data[i] = response
                except:
                    break
        return Response(data, status=status.HTTP_200_OK)


class GetInvertedPkmn(APIView):
    """
    Endpoint que permite obtener listado de pokemons en un rango de ids definido, con nombres invertidos.
    La url de endpoint recibe parametros offset y limit.
    Se utilizan para limitar la carga de datos y mejorar el tiempo de respuesta del endpoint.

    Return: un objeto con objetos, correspondientes a pokemons con nombres invertidos, con id entre offset+1 y offset+limit+1.
    """

    def get(self, request):
        data = {}
        offset = int(request.GET.get("offset"))
        limit = int(request.GET.get("limit", 10))
        for pkmn_id in range(offset + 1, offset + limit + 1):
            try:
                r = get_pkmn_data(pkmn_id)
                if r != {}:
                    r["name"] = r["name"][::-1]
                    data[pkmn_id] = r
            except:
                break
        return Response(data, status=status.HTTP_200_OK)
