const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm">SM</div>
            <span className="font-bold text-lg tracking-tight">Hub Viana & Moura</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © 2026 Viana & Moura Construções. Todos os direitos reservados.
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-700 uppercase tracking-[0.2em] font-bold">
            Feito com ❤️ por G&G para Scrum Masters de Elite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
