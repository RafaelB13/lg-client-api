# LG API Client

Uma SDK leve e totalmente tipada para integração com a API LG SmartThinQ / LG Developers.

## Instalação

Via npm:
```bash
npm install lg-api-client
```

Ou uso local (desenvolvimento):
```bash
npm link # dentro da pasta do projeto lg-api-client
# depois, no projeto consumidor
npm link lg-api-client
```

## Uso Básico

```typescript
import { LGApiClient } from 'lg-api-client';

const client = new LGApiClient();

async function main() {
  const devices = await client.DeviceList();
  console.log(devices);
}

main();
```

## Funcionalidades
- Listagem de dispositivos LG vinculados à conta
- Estrutura extensível para novos endpoints
- Tipagem completa com TypeScript

## Desenvolvimento

Para compilar o projeto:
```bash
npm run build
```

Para rodar os testes:
```bash
npm test
```

## Estrutura do Projeto
- `src/interface/LGClient.ts`: Classe principal de acesso à API
- `src/infrastructure/http/HttpClient.ts`: Cliente HTTP baseado em Axios
- `src/application/use-cases/`: Casos de uso da aplicação
- `src/domain/`: Entidades e repositórios de domínio

## Contribuição
Pull requests são bem-vindos! Abra uma issue para discutir mudanças.

## Licença
MIT
