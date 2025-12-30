# Gerador de Orçamentos - Sistema Web

Sistema completo para geração de propostas comerciais e orçamentos para projetos de desenvolvimento web, landing pages, e-commerces e sites institucionais.

## 🚀 Tecnologias Utilizadas

- **Next.js 14+** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna e responsiva
- **Shadcn UI** - Componentes de UI profissionais
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **@react-pdf/renderer** - Geração de PDFs

## 📋 Funcionalidades

- ✅ Formulário completo com validação
- ✅ Múltiplos tipos de projeto (WordPress, Landing Page, E-commerce, etc.)
- ✅ Seleção de serviços customizáveis
- ✅ Geração de PDF profissional
- ✅ Download automático do orçamento
- ✅ Interface moderna e responsiva
- ✅ Animações suaves e micro-interações
- ✅ Design premium com gradientes

## 🛠️ Como Usar

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

O sistema estará disponível em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Rodar versão de produção
npm start
```

## 📝 Como Gerar um Orçamento

1. **Informações do Cliente**
   - Nome do cliente
   - Email
   - Telefone

2. **Informações do Projeto**
   - Título do projeto
   - Tipo de projeto (WordPress, Landing Page, E-commerce, Site Institucional, Sistema Web)

3. **Serviços Inclusos**
   - Selecione todos os serviços que farão parte do projeto:
     - Páginas de campanhas e doações
     - Cadastro simples de usuários
     - Política de Privacidade
     - Termos de Uso
     - Páginas institucionais (Sobre, Contato)
     - Estrutura para alto tráfego
     - Otimização de performance
     - Monetização via Google AdSense
     - Design responsivo
     - Otimização para SEO

4. **Detalhes do Projeto** (Opcional)
   - Foco principal
   - Informações adicionais

5. **Investimento e Prazo**
   - Valor do projeto (ex: R$ 497,00)
   - Prazo de entrega (ex: 7 dias úteis)

6. **Gerar PDF**
   - Clique no botão "Gerar Orçamento PDF"
   - O PDF será baixado automaticamente

## 🎨 Customização

### Adicionar Novos Serviços

Edite o arquivo `lib/form-schema.ts` e adicione novos itens ao array `serviceOptions`:

```typescript
export const serviceOptions = [
  {
    id: "novo-servico",
    label: "Descrição do Novo Serviço",
  },
  // ... outros serviços
];
```

### Personalizar o PDF

Edite o arquivo `lib/pdf-generator.tsx` para customizar o layout e estilo do PDF gerado.

### Alterar Tipos de Projeto

Edite o array `projectTypeOptions` em `lib/form-schema.ts`:

```typescript
export const projectTypeOptions = [
  { value: "novo-tipo", label: "Novo Tipo de Projeto" },
  // ... outros tipos
];
```

## 📂 Estrutura do Projeto

```
generate-budget-dev/
├── app/
│   ├── globals.css          # Estilos globais e animações
│   ├── layout.tsx            # Layout raiz com metadados
│   └── page.tsx              # Página principal
├── components/
│   ├── ui/                   # Componentes Shadcn UI
│   └── budget-form.tsx       # Formulário principal
├── lib/
│   ├── form-schema.ts        # Schema de validação Zod
│   ├── pdf-generator.tsx     # Gerador de PDF
│   └── utils.ts              # Utilitários
└── public/                   # Arquivos estáticos
```

## 🎯 Exemplo de Uso

O sistema gera um PDF estruturado com:

- **Cabeçalho** - Título do projeto e tipo
- **Informações do Cliente** - Dados de contato
- **Escopo do Projeto** - Foco principal e serviços inclusos
- **Detalhes Adicionais** - Observações importantes
- **Investimento** - Valor destacado
- **Prazo de Entrega** - Timeline do projeto
- **Rodapé** - Data de geração

## 🔧 Solução de Problemas

### Erro ao gerar PDF

- Verifique se todos os campos obrigatórios estão preenchidos
- Certifique-se de que pelo menos um serviço foi selecionado

### Formulário não valida

- Confira se o email está no formato correto
- O telefone deve ter pelo menos 10 caracteres
- Selecione um tipo de projeto

## 📄 Licença

Este projeto foi criado para fins de demonstração e uso comercial.

## 🤝 Contribuições

Sinta-se livre para customizar e adaptar este sistema para suas necessidades específicas.

---

Desenvolvido com ❤️ usando Next.js e React
