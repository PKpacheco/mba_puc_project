from flask import Flask, jsonify
from flask_cors import CORS
from scraper import get_sample_data
from analysis import run_analysis

app = Flask(__name__)
CORS(app)  # Permite requisições do React

@app.route("/api/smartphones")
def smartphones():
    data = get_sample_data()
    return jsonify(data)

# @app.route("/api/insights")
# def insights():
#     insights = run_analysis()
#     return jsonify(insights)

@app.route("/api/insights/<produto_id>")
def insights(produto_id):
    insights = run_analysis(produto_id)
    return jsonify(insights)

if __name__ == "__main__":
    app.run(debug=True)
