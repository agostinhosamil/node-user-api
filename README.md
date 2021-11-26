# Node-Test-Beeleads

# O teste para a vaga é o seguinte:

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