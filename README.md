# Padrões e Boas Práticas para Projetos React

Este documento estabelece os padrões de nomenclatura e boas práticas para o projeto. Seguir essas recomendações ajuda a manter o código limpo, legível e consistente.

## 📂 Estrutura de Pastas

```bash
src/
├── assets/        # Mídia da aplicação
├── components/    # Componentes reutilizáveis
├── pages/         # Páginas principais da aplicação
├── hooks/         # Custom hooks
├── services/      # Requisições externas e funções API
├── styles/        # Estilização global ou temas
├── utils/         # Funções auxiliares
├── roustes/       # Rotas da aplicação
└── App.tsx        # Componente raiz da aplicação
```

### Regras para estrutura

- Divida components reutilizáveis em arquivos e pastas individuas
- Nomeie os arquivos de components como _NomeDoComponentes.tsx_

## 🧱 Nomeação e Padrões de Código

### **Components**

- Nomeie components em _PascalCaase_
  - Correto: _UserCard.tsx_
  - Incorreto: _usercard.tsx_
- **Funções:** Nomeie funções em _camelCase_.
- **Variáveis:** Use nomes descritivos e significativos para variáveis e evite abreviações.

```javascript
// Correto
const userName = "Cleyton";
function getUserData() {
  //...
}

// Incorreto
const usr = "Cleyton";
function gUD() {
  //...
}
```

### Hooks Personalizados

- Todos os hooks personalizados devem começar com **use**.

```javascript
function useCustomHook() {
  // Lógica do hook
}
```

### Tipos e interfaces

- utilize **PascalCase** para interfaces e tipos.

```typescript
interface user {
  id: number;
  name: string;
}

type UserList = User[];
```

### Constantes Globais
- Use **UPPER_SNAKE_CASE** para constantes globais ou configurações

```js
const API_BASE_URL = "https://api.example.com";
```

## 🔄 Versionamento de Código

- Use Git para controle de versão.
- Crie branches descritivas para cada funcionalidade ou bug:
  - nome-da-funcionalidade
  - corrigir-erro-x
- Siga a convenção de commits Conventional Commits:
  - feat: adicionar nova funcionalidade
  - fix: corrigir bug
  - chore: atualizar dependências

## 🧹 Linters e Formatação

- Utilize ESLint para análise estática do código.
- Use Prettier para formatação automática, garantindo consistência no código.
- Scripts recomendados no package.json:

```json
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write ."
  }
```
