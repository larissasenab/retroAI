import { motion } from 'framer-motion'
import { Heart, Shield, Zap, Users } from 'lucide-react'

const Manifesto = () => {
  const cards = [
    {
      icon: <Users className="text-blue-400" />,
      title: "Servant Leadership",
      description: "O SM não comanda; ele serve. Sua prioridade é remover barreiras para que o time brilhe."
    },
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Remoção de Impedimentos",
      description: "Identificar gargalos proativamente e agir como um facilitador de fluxo contínuo."
    },
    {
      icon: <Shield className="text-purple-400" />,
      title: "Segurança Psicológica",
      description: "Criar um ambiente onde o erro é aprendizado e a vulnerabilidade é força."
    },
    {
      icon: <Heart className="text-rose-400" />,
      title: "O Cuidado com o Time",
      description: "Pessoas felizes e seguras entregam resultados extraordinários por propósito, não por pressão."
    }
  ]

  return (
    <section id="manifesto" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Manifesto do SM</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mais que um processo, a agilidade na Viana & Moura é sobre cultura e conexão humana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-card hover:border-primary/50 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Manifesto
