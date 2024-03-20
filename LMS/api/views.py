from django.shortcuts import render
<<<<<<< HEAD
from .recomendations.recomendation import get_recommendations, recomendation_cluster_tabel

def test(request): 
    recommendations = get_recommendations(2)
    recomendation_table = recomendation_cluster_tabel()
    data = {
            'recomendation_table': recomendation_table.to_html(), 

            'recomendations': recommendations.to_html()
            }
    return render(request, 'test.html', data)
=======
>>>>>>> 5b46ec04fc8b908edf66c795ca460798cf5ffe8f
