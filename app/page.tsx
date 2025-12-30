import BudgetForm from "@/components/budget-form";
import { FileText, Zap, Download, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient" />

        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fadeIn">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold">
                <Zap className="w-5 h-5" />
                Geração Instantânea de Orçamentos
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Crie Orçamentos
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Profissionais em Minutos
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Sistema completo para geração de propostas comerciais para
              projetos de desenvolvimento web, landing pages, e-commerces e
              sites institucionais.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-gray-700">
                  PDF Profissional
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-gray-700">
                  100% Customizável
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <Download className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-gray-700">
                  Download Imediato
                </span>
              </div>
            </div>
          </div>

          {/* Budget Form */}
          <div className="animate-slideUp">
            <BudgetForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">
              Gerador de Orçamentos
            </h3>
            <p className="text-gray-400">
              Sua ferramenta profissional para criar propostas comerciais
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}

