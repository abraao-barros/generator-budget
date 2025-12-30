---
description: Como executar o sistema de geração de orçamentos
---

# Executar Sistema de Geração de Orçamentos

Este workflow descreve como iniciar e usar o sistema de geração de orçamentos.

## Passos

### 1. Instalar Dependências (primeira vez apenas)

```bash
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

// turbo
```bash
npm run dev
```

O sistema estará disponível em http://localhost:3000

### 3. Build para Produção

```bash
npm run build
npm start
```

## Estrutura de Arquivos Importantes

- `app/page.tsx` - Página principal com hero e formulário
- `components/budget-form.tsx` - Componente do formulário
- `lib/form-schema.ts` - Schema de validação e opções
- `lib/pdf-generator.tsx` - Gerador de PDF
- `app/globals.css` - Estilos globais e animações

## Customização

### Adicionar Novo Serviço

1. Abra `lib/form-schema.ts`
2. Adicione o serviço ao array `serviceOptions`:
   ```typescript
   {
     id: "novo-servico",
     label: "Descrição do Serviço",
   }
   ```

### Modificar Layout do PDF

1. Abra `lib/pdf-generator.tsx`
2. Edite o componente `BudgetPDFDocument`
3. Customize os estilos no objeto `styles`

### Alterar Cores e Design

1. Abra `app/globals.css`
2. Modifique as variáveis CSS em `:root`
3. Ou edite diretamente as classes Tailwind nos componentes
