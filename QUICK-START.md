# 🚀 Quick Start Guide - Gerador de Orçamentos

## Início Rápido

### 1. O sistema já está rodando!
Acesse: **http://localhost:3000**

### 2. Exemplo de Preenchimento

**Cliente:**
- Nome: João Silva
- Email: joao@example.com
- Telefone: (11) 98765-4321

**Projeto:**
- Título: Site WordPress com Doações
- Tipo: Site WordPress

**Serviços:** (selecione os desejados)
- ✅ Páginas de campanhas e doações
- ✅ Cadastro simples de usuários
- ✅ Política de Privacidade
- ✅ Termos de Uso
- ✅ Estrutura para alto tráfego
- ✅ Otimização de performance
- ✅ Monetização via Google AdSense

**Detalhes:**
- Foco Principal: "Páginas de campanhas e doações, Cadastro simples de usuários"
- Informações Adicionais: "Projeto sem funcionalidades complexas, priorizando simplicidade, estabilidade e performance"

**Investimento:**
- Valor: R$ 497
- Prazo: 7 dias úteis

### 3. Gerar PDF
Clique em "Gerar Orçamento PDF" e o arquivo será baixado automaticamente!

---

## Comandos Úteis

```bash
# Iniciar desenvolvimento
npm run dev

# Parar o servidor
Ctrl + C

# Build para produção
npm run build

# Iniciar produção
npm start

# Instalar dependências (se necessário)
npm install
```

---

## Estrutura de Pastas Principais

```
📦 generate-budget-dev
├── 📁 app/                    # Next.js App Router
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Página inicial
│   └── globals.css            # Estilos globais
├── 📁 components/
│   ├── budget-form.tsx        # 🎯 Formulário principal
│   └── 📁 ui/                 # Componentes Shadcn
├── 📁 lib/
│   ├── form-schema.ts         # 🎯 Validação e opções
│   └── pdf-generator.tsx      # 🎯 Gerador de PDF
└── 📄 README.md               # Documentação completa
```

🎯 = Arquivos principais para customização

---

## Customização Rápida

### Mudar Cor Principal

**Opção 1: Gradiente (Recomendado)**
Edite `app/page.tsx` na linha do gradiente:
```tsx
from-blue-600 to-purple-600
// Para outro gradiente, ex:
from-emerald-600 to-teal-600
```

**Opção 2: Cor Sólida**
Edite `app/globals.css` nas variáveis `:root`

### Adicionar Serviço

Edite `lib/form-schema.ts`:
```typescript
export const serviceOptions = [
  // Cole abaixo dos existentes:
  {
    id: "meu-servico",
    label: "Meu Novo Serviço",
  },
];
```

### Modificar Campos do Formulário

Edite `components/budget-form.tsx` - adicione novos `<FormField>` seguindo o padrão existente.

---

## Troubleshooting

### ❌ Porta 3000 já está em uso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [número_do_processo] /F

# Linux/Mac
lsof -i :3000
kill -9 [PID]
```

### ❌ Erro ao gerar PDF
- Verifique se todos os campos obrigatórios (*) estão preenchidos
- Selecione ao menos 1 serviço

### ❌ Módulo não encontrado
```bash
npm install
```

---

## Próximos Passos (Opcional)

### Deploy em Produção

**Vercel (Recomendado - Grátis)**
1. Crie conta em vercel.com
2. `npm install -g vercel`
3. `vercel`
4. Siga as instruções

**Build Manual**
```bash
npm run build
npm start
```

### Adicionar Features

- [ ] Salvar orçamentos no banco de dados
- [ ] Enviar orçamento por email
- [ ] Dashboard de orçamentos gerados
- [ ] Templates personalizados
- [ ] Logo da empresa no PDF
- [ ] Múltiplos idiomas

---

## Suporte

**Documentação Completa**: Veja `README.md`

**Resumo do Projeto**: Veja `PROJECT-SUMMARY.md`

**Workflow**: Veja `.agent/workflows/run-system.md`

---

✨ **Pronto para usar! Divirta-se gerando orçamentos profissionais!** ✨
