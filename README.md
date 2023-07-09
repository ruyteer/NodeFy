# NodeFy

Esta API consiste no upload de arquivos, onde os mesmos são enviado através do Multer e ficam salvos no FirebaseStorage.

## Como usar?

Para utilizar NodeFy, você deve se registrar na firebase e criar um novo projeto, além de fazer o pull do repositório na sua máquina.
Pra isso, siga os passos a seguir:

- Acesse o site da FireBase: https://firebase.google.com/
- Crie uma conta;
- Vá até o console e selecione a opção "Adicionar projeto";
- Após criar um novo projeto, no menu lateral esquerdo, clique em "Storage";
- Crie um novo storage com as configurações padrão;
- Na barra lateral, clique na engrenagem que se encontra ao lado de "Visão geral do projeto";
- Selecione "Configurações do projeto";
- Vá até contas de serviço;
- Clique em gerar nova chave privada;
- Salve o arquivo .json em um local seguro;
- Após fazer o pull do repositório na sua máquina, salve o arquivo .json no diretório: ./src/main/database

Você deve criar um arquivo .env na raíz do diretório com as seguintes informações:

```js
MONGO_URI="<url do mongodb aqui>"
SECRET="<seu secret aqui>"
```

Após ter efetuado todos os passos anteriores, execute o comando "npm start" no terminal.

## O que esta API pode fazer?

O NodeFy recebe arquivos do body através do Multer e salva os mesmos no storage da firebase. 

## Contato

- Email: ruyteraraujo992@gmail.com
- Discord: ruyter#0001 ou .ruyter

##

Fique a vontade para contribuir! 

