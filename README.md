# Projeto: app88taxi
Exemplo de projeto de uma API de taxi utilizando o framework Node.js e o banco de dados MySQL.
## Tecnologias Utilizadas
- Node.js
- Prisma
- MySQL (XAMPP)
- Insomnia
## Estrutura do Projeto
- ![Diagrama de Classes](./docs/dc.png)

## Passo a passo para executar o projeto
- 1 Clone o repositório
- 2 Abra o XAMPP e inicie o Apache e o MySQL.
- 3 Abra com o VsCode ou qualquer editor de sua preferência
    - Crie o arquivo .env na pasta ./api e adicione as seguintes variáveis de ambiente:
```bash
DATABASE_URL="mysql://root@localhost:3306/app88taxi"
```
- 4 Abra um terminal cmd ou bash, navegue até a pasta ./api e execute os seguintes comandos:
```bash
cd api
npm install
npm install prisma -g
npm install nodemon -g
npx prisma migrate dev --name init
npx nodemon
```
- 5 Abra o Insomnia e importe o arquivo ./testes/Insomnia.json e execute os testes.
