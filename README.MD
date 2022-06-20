Requisitos instalados de forma global:
nodemon
typescript
ts-node

---------------------

Passos para a inicialização:

1 - npm install
2 - npm run start-dev


----------------------

Para utilizar este modelo, é necessário possuir um servidor smtp. O servidor utilizado foi o "mailtrap", que disponibiliza um serviços para testes.
Após configurar os acessos no arquivo de variáveis de ambiente (.env), basta iniciar o servidor com o comando no terminal "npm run start-dev", e enviar uma requisição post com os seguintes campos:

from: email-de-quem-esta-enviando@dominio.com.br
subject: assunto do email a ser enviado
email: texto conteudo do e-mail