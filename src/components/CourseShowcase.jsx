import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, Rocket, CheckCircle2, Users, X } from 'lucide-react'

const CourseShowcase = () => {
  const [showModal, setShowModal] = useState(false)
  const benefits = [
    "Fundamentos do Scrum e mentalidade ágil",
    "O papel do Scrum Master: liderança servidora",
    "Cerimônias na prática: como facilitar de verdade",
    "Gestão de conflitos e dinâmicas de time",
    "Retrospectivas que geram ação real",
    "Cases reais: resolva como um SM experiente",
    "Scrum em contextos complexos e desafiadores"
  ]

  return (
    <section id="curso" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <GraduationCap size={16} />
                <span>Formação Interna</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Aprenda na Prática: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  De Agilista a Especialista
                </span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Nossa formação interna foca no mundo real. Sem teorias vazias: aplicamos cases reais da Viana & Moura e ensinamos as estratégias para resolvê-los com a maestria de um SM de alto impacto.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-200 font-medium"
                  >
                    <CheckCircle2 size={20} className="text-primary" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <button 
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-10 py-5 bg-white text-dark font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-200 transition-all glow-primary"
              >
                <Rocket size={20} />
                Quero me Inscrever
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex flex-col items-center justify-center relative group">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full p-4 flex items-center justify-center relative z-10"
                  >
                    <img 
                      src="/training-hero.png" 
                      alt="Mentoria Ágil" 
                      className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                    />
                  </motion.div>
                  
                  {/* Floating badges */}
                  <div className="absolute top-10 right-10 p-4 glass-card rounded-2xl animate-float">
                    <Award className="text-yellow-400" />
                  </div>
                  <div className="absolute bottom-10 left-10 p-4 glass-card rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <Users className="text-blue-400" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg glass-card p-8 md:p-12 rounded-[40px] text-center border-primary/30 shadow-2xl"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="w-20 h-20 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto mb-8">
                <Users size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quase lá!</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Entre em contato com a equipe de **G&G da VMC** para informações sobre inscrições!
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary/20"
              >
                Entendi
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CourseShowcase
