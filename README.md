# 🚀 Insight4You – Plataforma de Inteligência Competitiva Baseada em Dados

Insight4You é um sistema web desenvolvido como parte do Trabalho de Conclusão do MBA em Tecnologia para Negócios: AI, Data Science e Big Data (PUC-RS). A aplicação permite que empresas tomem decisões mais estratégicas com base em dados reais de mercado, utilizando técnicas de **web scraping**, **machine learning** e **visualização de dados**.

## 🎯 Objetivo

Criar uma ferramenta de **inteligência competitiva baseada em dados**, capaz de:

- Coletar dados públicos sobre produtos (ex: Mercado Livre, Amazon)
- Analisar sentimentos, média de preços e tendências
- Exibir dashboards com informações relevantes por produto
- Ajudar empresas a evitarem decisões baseadas em achismo
- Entregar dados que sejam uteis para uma melhor tomada de decisao

## 🧠 Tecnologias Utilizadas

### Backend
- Python 3
- Flask
- BeautifulSoup (Web Scraping)
- Flask-CORS

### Frontend
- React + Vite
- TailwindCSS
- Chart.js + react-chartjs-2
- React Router DOM



## ⚙️ Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/PKpacheco/mba_puc_project.git
cd mba_puc_project
```

### 2. Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # activate virtual env
pip install -r requirements.txt
python app.py
```
### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

### Acesse: http://localhost:3000

## ✅ Funcionalidades
Dashboard com análise de sentimento, média de preços e tendências
Visualização de devoluções por produto nos últimos 10 dias
Cadastro de produtos com tags e visualização por ID
Layout moderno com navegação por menu lateral


## 📚 Base Teórica
Este projeto está baseado no TCC:

### "Inteligência Competitiva Baseada em Dados: Aplicação de Machine Learning na Análise de Mercado"
📍 PUCRS – MBA em Tecnologia para Negócios: AI, Data Science e Big Data


👩‍💻 Autoria
Paola Katherine
Desenvolvedora de software
🔗 GitHub: @pkpacheco