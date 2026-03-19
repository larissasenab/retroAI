import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-8"
        >
          <Sparkles size={16} />
          <span>Viana & Moura Excellence</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Lidere a Mudança, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight pb-2 inline-block">
            Cuide das Pessoas.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          O hub definitivo para o Scrum Master Viana & Moura transformar times em potências de entrega através do cuidado e da agilidade estratégica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#retro"
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 group glow-primary"
          >
            Gerar Retrospectiva
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#curso"
            className="w-full sm:w-auto px-8 py-4 glass-card hover:bg-white/5 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2"
          >
            Conhecer o Curso
          </a>
        </motion.div>
      </div>

      {/* Floating element demo */}
      <motion.div 
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 opacity-50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll para o Manifesto</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero
