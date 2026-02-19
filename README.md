# 🚀 Projeto de Pipeline CI/CD - Fatec Matão

[![Pipeline Status](https://github.com/isisbia/first-pipeline/actions/workflows/ci.yml/badge.svg)](https://github.com/isisbia/first-pipeline/actions)

Este projeto foi desenvolvido como parte de um exercício prático de estruturação de pipelines de **Integração Contínua (CI)** e **Entrega Contínua (CD)** utilizando **GitHub Actions** e **Vercel**.

## 🛠️ Tecnologias e Ferramentas
- **Linguagem:** Node.js
- **Testes:** Runner nativo do Node.js (pasta `tests`)
- **Automação:** GitHub Actions
- **Deploy:** Vercel
- **Segurança:** GitHub Secrets (proteção de chaves de API)

## ⚙️ Funcionamento do Pipeline
O fluxo de automação é acionado a cada `push` ou `pull request` na branch `main`:

1.  **Validação de Código (CI):** O ambiente é configurado, as dependências são instaladas e os testes unitários (`npm test`) são executados automaticamente.
2.  **Segurança:** O pipeline utiliza variáveis de ambiente seguras (Secrets) para realizar a autenticação com a Vercel sem expor dados sensíveis no código.
3.  **Deploy Automático (CD):** Caso os testes passem com sucesso, a aplicação é enviada instantaneamente para o ambiente de produção na Vercel.

## 📊 Monitoramento em Tempo Real
A aplicação possui um **Monitor de Pipeline** integrado ao HTML, permitindo visualizar o status da última integração diretamente no site oficial.

---
**Desenvolvido por:** Isis
**Curso:** Desenvolvimento de Software Multiplataforma - Fatec Matão