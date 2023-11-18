# 🚀 Jest - Tests unitários com ExpressJS

## 📜 Descrição

Este repositório contém um projeto simples em ExpressJS acompanhado de testes de unidade utilizando o framework Jest. O objetivo deste projeto é demonstrar como criar e executar testes unitários para rotas em uma aplicação ExpressJS.

<br>

## 🛠️ Tecnologias Utilizadas

- **Node.js e npm:** Ambiente de execução e gerenciador de pacotes para JavaScript.
- **Express:** Framework para construção de aplicativos web em Node.js.
- **Jest:** Framework de teste de JavaScript.
- **Supertest:** Biblioteca para testar APIs HTTP.

<br>

## 📋 Pré-requisitos  

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).
- **Docker Desktop:** Necessário para o banco de dados PostgreSQL. Baixe em [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
- **Ferramentas de Teste de API:** <br>
Postman [https://www.postman.com/downloads/](https://www.postman.com/downloads/)<br>
Insomnia [https://insomnia.rest/download/](https://insomnia.rest/download/)<br>
Ou Thunder Client (extensão no Visual Studio Code).


<br>

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/EdisonMatos/Jest-Unity-tests-on-a-CRUD-with-ExpressJS.git
    cd Jest-Unity-tests-on-a-CRUD-with-ExpressJS
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Executar Testes:**

    ```bash
    npm test
    ```

4. **Iniciar o Projeto:**

    ```bash
    npm start
    ```

5. Acesse [http://localhost:3000](http://localhost:3000).

<br>

## 📘 Jest e Testes de Unidade

O projeto utiliza o framework Jest para criar testes de unidade. O arquivo `server.spec.js` contém um teste simples para a rota principal (`/`) da aplicação. O teste verifica se a resposta da rota possui a propriedade "message" e se o status code é 200.

```javascript
const request = require("supertest");
const app = require("./server");

describe("Get route test", () => {
  it("Get body brings a message property and status code 200", async () => {
    const res = await request(app).get("/");

    expect(res.body).toHaveProperty("message");
    expect(res.statusCode).toEqual(200);
  });
});
```

Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

Isso irá rodar o Jest utilizando o arquivo `server.spec.js` e mostrar os resultados dos testes.

<br>

## 🧑‍💻 Autor

Este projeto foi desenvolvido por Edison Matos.

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

Edison Matos é um entusiasta da tecnologia, desenvolvedor backend de software e apaixonado por criar soluções inovadoras.<br>
Saiba mais sobre no [GitHub](https://github.com/EdisonMatos) para descobrir mais projetos e colaborações.

<br>

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
