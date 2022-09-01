## Este repositório contém projeto de uma API em NodeJS utilizando TypeScript e POO!
Projeto para estudos sobre composição e herança.

<div style="display: inline_block"><br>
<img align="center" height="30" width="100" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img align="center" height="30" width="100" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img align="center" height="30" width="100" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img align="center" height="30" width="100" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
<img align="center" height="30" width="100" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white">
</div>

##

> Nessa aplicação CRUD que simula o sistema de uma concessionária de veículos, é possível:<br>

        - cadastrar um novo veículo
        - consultar por todos os veículos ou apenas um veículo específico
        - atualizar informações sobre um veículo específico
        - deletar um veículo específico

## Rotas:<br>

`post/cars`
<details>
  <summary>Cria novo veículo</summary>
    <br>
corpo da requisição deve conter JSON com seguinte formato:

```
    {
       model: "Nome do modelo do veículo",
       year: "Ano de fabricação",
       color: "cord",
       buyValue: "valor de venda",
       seatsQty: quantidade de assentos(não pode ser menor que 2),
       doorsQty: quantidade de portas(não pode ser menor que 2)
     }
```
>Em caso de sucesso
retorna os dados inseridos junto do id da inserção e ``HTTP status code 200``.<br>
</details>

##

`get/cars`
<details>
  <summary>Consulta por todos os veículos</summary>
  <br>
  retorna array de veículos
  
```
    [
     {
       model: "Nome do modelo do veículo",
       year: "Ano de fabricação",
       color: "cord",
       buyValue: "valor de venda",
       seatsQty: quantidade de assentos,
       doorsQty: quantidade de portas
     },
     {
       model: "Nome do modelo do veículo",
       year: "Ano de fabricação",
       color: "cord",
       buyValue: "valor de venda",
       seatsQty: quantidade de assentos,
       doorsQty: quantidade de portas
     }
    ]
```
>Em caso de sucesso
retorna ``HTTP status code 200``.<br>
</details>

##

`get/cars/:id`
<details>
  <summary>Consulta por veículo pelo ID</summary>
  <br>
  retorna informações do veículo
  
```
    [
     {
       model: "Nome do modelo do veículo",
       year: "Ano de fabricação",
       color: "cord",
       buyValue: "valor de venda",
       seatsQty: quantidade de assentos,
       doorsQty: quantidade de portas
     }
    ]
```
>Em caso de com sucesso
retorna ``HTTP status code 200``.<br>
>Em caso de não houver veículo com o Id informado
retorna ``HTTP status code 404``.<br>
</details>

##

`put/cars/:id`
<details>
  <summary>Atualiza informações de um veículo pelo ID</summary>
  <br>
  o corpo da requisição deve conter um objeto JSON com a informação válida a ser atualizada
  
```
     {
       campo_a_ser_atualizado: "valor"
     }
```
>Se atualizado com sucesso
retorna ``HTTP status code 200``.<br>
>Em caso de não houver veículo com o Id informado
retorna ``HTTP status code 404``.<br>
>Em caso de erro
retorna ``HTTP status code 400``.
</details>

##

`delete/cars/:id`
<details>
  <summary>Deleta um veículo pelo ID</summary>
  <br>
  Um Id válido deve ser passado por parametro na URL

>Se deletado com sucesso
retorna ``HTTP status code 204``.<br>
>Em caso de erro
retorna ``HTTP status code 404``.
</details>

##

## Como rodar o projeto

  <summary>
    <strong>🐳 Rodando no Docker vs Localmente</strong>
  </summary><br>

  ## Docker

  > Rode os serviços `node` e `mongodb` com o comando `docker-compose up -d`.
  - Lembre-se de parar o serviço local `mongo`, caso você possua e estiver usando na porta padrão (`27017`), ou troque a porta do `mongo`no arquivo `docker-compose`, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it car_shop bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`
  > 
  
  ⚠ Atenção ⚠ **TODOS** os comandos de scripts disponíveis no `package.json` devem ser executados dentro do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 



  ## Localmente

  - Instale as dependências com `npm install`
 
  
