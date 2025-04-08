# def run_analysis(produto_id):
#     return {
#         "nome_produto": f"Produto {produto_id}",
#         "sentimento_geral": "Positivo",
#         "media_precos": 3499.99,
#         "produto_mais_caro": "Produto XYZ - R$ 5.299,00",
#         "tendencia": "Alta demanda nos últimos dias"
#     }
def run_analysis(produto_id):
    nomes = {
        "1": "iPhone 14 Pro Max",
        "2": "Samsung Galaxy S23",
        "3": "Motorola Edge 40",
        "4": "Xiaomi Redmi Note 12"
    }

    nome_produto = nomes.get(produto_id, f"Produto {produto_id}")

    return {
        "nome_produto": nome_produto,
        "sentimento_geral": "Positivo",
        "media_precos": 3499.99,
        "produto_mais_caro": "iPhone 14 Pro Max - R$ 5.299,00",
        "tendencia": "Alta demanda nos últimos dias"
    }
