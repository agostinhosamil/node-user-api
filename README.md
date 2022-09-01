# Node-API

# Funcionalidades e características:

    [X] Criar uma API para um cadastro de usuário em NodeJS
    [X] Campos Nome, email, telefone, data de nascimento, sexo
    [X] Não precisa ter frontend(mas é um diferencial)
    [X] Preferencia Banco Mysql
    [] API precisa ser autenticada.
    [X] Instruções de como executar.


## App (Introdução)

A API está constituida por uma entidade que é a principal a entidade User (Usuário)

As funcionalidades da mesma são as básicas de uma entidade, agrupadas em um conjunto chamado CRUD, uma forma de referenciar quatro ações que se podem executar em uma.

As funcionalidades incluidas são:

 - Create
 - Read
 - Update
 - Destroy

Para a criação, leitura, atualização e remoção de um usuário da aplicação usar-se-a as rotas que destinam a execução de uma dessas ações.

## Estrutura da Aplicação

A aplicação foi construída seguindo parte do modelo MVC.
Todo conteúdo da aplicação fora os testes (por serem desenvolvidos), se encontra na pasta 'src', lá onde estão os controllers, models e as views.

## Rodar a aplicação

Para rodar a aplicação em um servidor local pode-se seguir os seguntes passos:

- Instalar as dependências do projeto
    Para tal, rodar no prompt de comando (cmd no windows) o seguinte comando:

    No caso de se estar utilizando [Yarn](https://github.com/yarnpkg/yarn). 

    ```bash
    yarn
    ```
    Ou

    ```bash
    npm install
    ```

- Criar o banco de dados
    Está sendo utilizado um ORM para abstração do modo de interação com o banco de dados, este ORM é o [Sequelize](https://github.com/sequelize/sequelize).

    Para começar deve-se criar o banco de dados rodando o segunte comando:

    No caso de se estar utilizando [Yarn](https://github.com/yarnpkg/yarn). 

    ```bash
    yarn sequelize db:create
    ```
    Ou

    ```bash
    npx sequelize db:create
    ```

- Executar as migrations (no caso a única)

    No caso de se estar utilizando [Yarn](https://github.com/yarnpkg/yarn). 

    ```bash
    yarn sequelize db:migrate
    ```
    Ou

    ```bash
    npx sequelize db:migrate
    ```

- Rodar o servidor de desenvolvimento

    ```bash
    yarn dev
    ```

    Ou

    ```bash
    npm run dev
    ```

## Usar a aplicação

Existem para além da root (que é uma view que exibe uma lista de usuários), cinco rotas de navegação:

    GET /users - Lista todos os usuários
    GET /users/:id - Exibe dados do usuário a que o id enviado corresponde
    POST /users - Cria um novo usuário
    PUT /users/:id - Atualiza dados do usuário a que o id enviado corresponde
    DELETE /users/:id - Deleta dados do usuário a que o id enviado corresponde (apaga o usuário)

Para criar um usuário poderá enviar uma requisição POST para '/users' enviando no corpo da requisição os dados obrigatórios desse usuário:

```json 
{
    "name": "John Doe",
    "email": "john.doe@gmail.com",
    "gender": "M", // M ou F
    "birthday": "12-04-1987", // dia-mês-ano
    "phone": "92234456" // pode incluir código do país
}
```

