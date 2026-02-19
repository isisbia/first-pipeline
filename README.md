[![Pipeline Integração Contínua Vercel](https://github.com/isisbia/first-pipeline/actions/workflows/ci.yml/badge.svg)](https://github.com/isisbia/first-pipeline/actions/workflows/ci.yml)

# 🚀 Meu Primeiro Pipeline CI/CD

Este projeto faz parte de um exercício prático de estruturação de pipelines utilizando **GitHub Actions**.

## 🛠️ Tecnologias utilizadas
- **Linguagem:** Node.js
- **Testes:** Runner nativo do Node.js
- **CI/CD:** GitHub Actions
- **Deploy:** Vercel

## ⚙️ Como funciona o Pipeline
O pipeline é acionado automaticamente em cada `push` ou `pull request` na branch `main`.
1. **Lint/Test:** O código é baixado, as dependências são instaladas (`npm install`) e os testes unitários são executados (`npm test`).
2. **Deploy:** Se os testes passarem, o código é enviado automaticamente para a Vercel.