import { z } from "zod";

export const budgetFormSchema = z.object({
  // Client Information
  clientName: z.string().min(2, {
    message: "Nome do cliente deve ter pelo menos 2 caracteres.",
  }),
  clientEmail: z.string().email({
    message: "Email inválido.",
  }),
  clientPhone: z.string().min(10, {
    message: "Telefone inválido.",
  }),

  // Project Type
  projectType: z.enum(
    [
      "wordpress",
      "landing-page",
      "ecommerce",
      "institutional",
      "custom-system",
    ],
    {
      message: "Selecione um tipo de projeto.",
    }
  ),

  // Project Title/Name
  projectTitle: z.string().min(3, {
    message: "Título do projeto deve ter pelo menos 3 caracteres.",
  }),

  // Services (Multi-select)
  services: z.array(z.string()).min(1, {
    message: "Selecione pelo menos um serviço.",
  }),

  // Project Details
  projectValue: z.string().min(1, {
    message: "Informe o valor do projeto.",
  }),

  deliveryDeadline: z.string().min(1, {
    message: "Informe o prazo de entrega.",
  }),

  // Additional Information
  additionalDetails: z.string().optional(),

  // Main Focus (Optional textarea for custom focus areas)
  mainFocus: z.string().optional(),
});

export type BudgetFormValues = z.infer<typeof budgetFormSchema>;

// Service options based on the example
export const serviceOptions = [
  {
    id: "campaign-donation-pages",
    label: "Páginas de campanhas e doações",
  },
  {
    id: "user-registration",
    label: "Cadastro simples de usuários",
  },
  {
    id: "privacy-policy",
    label: "Política de Privacidade",
  },
  {
    id: "terms-of-use",
    label: "Termos de Uso",
  },
  {
    id: "institutional-pages",
    label: "Páginas institucionais (Sobre, Contato)",
  },
  {
    id: "high-traffic-structure",
    label: "Estrutura para alto tráfego",
  },
  {
    id: "performance-optimization",
    label: "Otimização de performance (Cache, otimização de carregamento)",
  },
  {
    id: "adsense-monetization",
    label: "Monetização via Google AdSense",
  },
  {
    id: "responsive-design",
    label: "Design responsivo",
  },
  {
    id: "seo-optimization",
    label: "Otimização para SEO",
  },
];

// Project type options
export const projectTypeOptions = [
  { value: "wordpress", label: "Site WordPress" },
  { value: "landing-page", label: "Landing Page" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "institutional", label: "Site Institucional" },
  { value: "custom-system", label: "Sistema Web Personalizado" },
];
