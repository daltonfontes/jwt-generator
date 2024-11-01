# JWT Service

Este projeto implementa um serviço JWT (JSON Web Token) que permite gerar, verificar e decodificar tokens JWT. O serviço utiliza a biblioteca `jsonwebtoken` e contém uma interface e implementação que facilita a criação de tokens para usuários, incluindo dados como `id`, `login`, `sub`, entre outros.

## Arquitetura do Projeto

### Estrutura dos Arquivos
- **`interfaces/JWTInterface.ts`**: Contém a interface `JWTInterface` e o tipo `TokenUserData`, que define as funções principais para geração, verificação e decodificação de tokens JWT.

- **`services/JWTService.ts`**: Implementa a interface `JWTInterface` e fornece a lógica para geração e verificação de tokens JWT usando a biblioteca `jsonwebtoken`.

- **`utils/generateSecretKeys.ts`**: Contém a função `generateRandomToken`, que gera uma chave secreta aleatória para assinar os tokens.

### Funcionalidades
- **Geração de Tokens**: A função `generateUserToken` cria um token com um payload que inclui dados do usuário, `deviceId`, `sessionKey`, `userKey` e o tempo de emissão.

- **Verificação de Tokens**: A função `verify` verifica a validade de um token, utilizando uma chave secreta gerada dinamicamente.

- **Decodificação de Tokens**: A função `decode` permite decodificar um token JWT para obter seus dados sem verificar sua assinatura.

- **Geração de Chave Secreta Aleatória**: A função `generateRandomToken` gera uma chave aleatória de tamanho definido, usada para assinar os tokens.

## Requisitos

- **Node.js**: É necessário ter o Node.js instalado em sua máquina.
- **Dependências**: Certifique-se de instalar as dependências do projeto:

  ```bash
  npm install jsonwebtoken
