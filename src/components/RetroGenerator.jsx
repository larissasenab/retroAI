import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clipboard, Check, Wand2 } from 'lucide-react'

const RetroGenerator = () => {
  const [formData, setFormData] = useState({
    teamSize: '',
    timeTogether: '',
    model: '',
    lastSprintResult: '',
    energy: 5,
    challenges: '',
    context: ''
  })
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)

  const generateRetro = (e) => {
    e.preventDefault()
    
    // Check if basic fields are selected
    if (!formData.teamSize || !formData.model || !formData.lastSprintResult) {
       alert("Por favor, preencha os campos principais (Tamanho, Modelo e Resultado).")
       return
    }

    const scenario = (formData.challenges + ' ' + formData.context).toLowerCase()

    // Expanded Database of Retrospective Dynamics
    const dynamics = [
      {
        id: 'psico-safety',
        title: "A Ilha da Segurança",
        theory: "Foca em segurança psicológica e confiança, baseado no trabalho de Amy Edmondson e Patrick Lencioni.",
        visual: "Quadro dividido em 'O que me dá medo', 'O que me dá esperança' e 'Acordos de Paz'.",
        guide: "Priorize a escuta ativa. Garanta anonimato se necessário e use comunicação não-violenta.",
        score: (scenario.includes('conflito') || scenario.includes('crise') || formData.energy <= 4 || formData.lastSprintResult === 'ruim') ? 10 : 0
      },
      {
        id: 'sailboat',
        title: "O Veleiro (Sailboat)",
        theory: "Excelente para identificar objetivos, riscos e o que está 'atrasando' o time.",
        visual: "Desenho de um veleiro com Vento (impulsores), Âncora (atrasos) e Rochas (riscos).",
        guide: "Peça ao time para focar primeiro nas âncoras. Depois, discuta como as rochas podem ser evitadas.",
        score: (scenario.includes('objetivo') || scenario.includes('risco') || scenario.includes('meta')) ? 8 : 2
      },
      {
        id: '4ls',
        title: "Os 4 Ls",
        theory: "Uma abordagem equilibrada: Loved (Amou), Learned (Aprendeu), Lacked (Faltou), Longed For (Desejou).",
        visual: "Quadro dividido em 4 áreas correspondentes aos 4 Ls.",
        guide: "Cada pessoa preenche os 4 quadrantes. Foque a discussão no 'Lacked' e no 'Longed For' para ações.",
        score: (formData.timeTogether.includes('3') || formData.model === 'Híbrido') ? 7 : 3
      },
      {
        id: 'starfish',
        title: "Estrela do Mar (Starfish)",
        theory: "Foca na melhoria contínua através de ajustes incrementais nas atividades do time.",
        visual: "Círculo com 5 divisões: Começar, Parar, Manter, Fazer Mais, Fazer Menos.",
        guide: "Ideal para times médios. Ajuda a refinar processos que já existem mas precisam de ajuste fino.",
        score: (formData.teamSize === 'Médio' && formData.energy >= 5) ? 8 : 2
      },
      {
        id: '3-pigs',
        title: "Os 3 Porquinhos",
        theory: "Avalia a robustez dos processos. O que é palha (frágil), madeira (razoável) ou tijolo (sólido)?",
        visual: "Três colunas com as casas de palha, madeira e tijolo.",
        guide: "Discuta o que em nossa 'casa' (processo) pode cair com o primeiro sopro do lobo (problema).",
        score: (scenario.includes('qualidade') || scenario.includes('retrabalho') || scenario.includes('processo')) ? 9 : 1
      },
      {
        id: 'cruise-speed',
        title: "Velocidade de Cruzeiro",
        theory: "Foca no Lean e na remoção de desperdícios para times de alta performance.",
        visual: "Quadro 'Start, Stop, Continue' turbinado com análise de Lead Time.",
        guide: "Desafie o time a encontrar 1% de melhoria. Use métricas reais e foque em automação.",
        score: (formData.energy >= 8 && formData.lastSprintResult === 'excelente') ? 9 : 0
      },
      {
        id: 'agility-radar',
        title: "Radar de Agilidade",
        theory: "Avaliação multidimensional do Scrum Guide para alinhamento geral.",
        visual: "Gráfico de teia com eixos: Qualidade, Comunicação, Processo e Diversão.",
        guide: "Facilite a discussão sobre os pontos mais baixos do radar e defina um único plano de ação.",
        score: 4 // Baseline score
      }
    ]

    // Select the best dynamic (highest score)
    // If scores are equal, sort randomly to increase variety
    const selected = dynamics.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return Math.random() - 0.5
    })[0]

    setResult(selected)
  }

  const copyToClipboard = () => {
    const text = `
Dinamica: ${result.title}
Fundamentação: ${result.theory}
Quadro: ${result.visual}
Guia: ${result.guide}
    `
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="retro" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Gerador Inteligente</h2>
            <p className="text-slate-400">Personalize a dinâmica de acordo com a vibe e o contexto do seu time.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <form onSubmit={generateRetro} className="glass-card p-8 md:p-10 rounded-[40px] space-y-8 border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Tamanho do Time</label>
                  <select 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  >
                    <option value="" disabled>Selecione...</option>
                    <option>Pequeno (3-5 pessoas)</option>
                    <option>Médio (6-10 pessoas)</option>
                    <option>Grande (11+ pessoas)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Tempo juntos como time</label>
                  <select 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
                    value={formData.timeTogether}
                    onChange={(e) => setFormData({...formData, timeTogether: e.target.value})}
                  >
                    <option value="" disabled>Selecione...</option>
                    <option>&lt; 3 meses</option>
                    <option>3 - 6 meses</option>
                    <option>6 - 12 meses</option>
                    <option>&gt; 1 ano</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Modalidade de Trabalho</label>
                  <select 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                  >
                    <option value="" disabled>Selecione...</option>
                    <option>Totalmente Remoto</option>
                    <option>Híbrido</option>
                    <option>Presencial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Resultado da última sprint</label>
                  <select 
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
                    value={formData.lastSprintResult}
                    onChange={(e) => setFormData({...formData, lastSprintResult: e.target.value})}
                  >
                    <option value="" disabled>Selecione...</option>
                    <option value="excelente">🟢 Excelente — entregamos tudo</option>
                    <option value="bom">🟡 Bom — com alguns pontos abertos</option>
                    <option value="parcial">🟠 Parcial — tivemos imprevistos</option>
                    <option value="ruim">🔴 Ruim — não entregamos o combinado</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
                  Nível de energia/humor do time (1 = Esgotado | 10 = Energizado)
                </label>
                <div className="relative pt-2 pb-8">
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="1"
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                    value={formData.energy}
                    onChange={(e) => setFormData({...formData, energy: parseInt(e.target.value)})}
                  />
                  <div className="flex justify-between mt-4 text-xs font-medium text-slate-500 px-1">
                    <span className="flex items-center gap-1">😫 Esgotado</span>
                    <span className="flex items-center gap-1">😐 Neutro</span>
                    <span className="flex items-center gap-1">🚀 Energizado</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 font-black text-2xl text-primary tracking-tighter">
                    {formData.energy}/10
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Principais desafios do time agora</label>
                  <textarea 
                    placeholder="Ex: dificuldade de comunicação entre membros, retrabalho frequente, falta de clareza nos requisitos, conflitos internos, burnout, dependências externas..."
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all h-28 resize-none text-sm leading-relaxed"
                    value={formData.challenges}
                    onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Situação específica ou contexto importante</label>
                  <textarea 
                    placeholder="Ex: estamos em fase de entrega crítica, acabamos de receber um novo integrante, tivemos uma discussão difícil, o cliente está insatisfeito, estamos desmotivados com mudanças recentes..."
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all h-28 resize-none text-sm leading-relaxed"
                    value={formData.context}
                    onChange={(e) => setFormData({...formData, context: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all text-lg"
              >
                <Wand2 size={24} />
                Gerar Dinâmica Personalizada
              </button>
            </form>

            <div className="min-h-[500px] sticky top-24">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 md:p-10 rounded-[40px] bg-gradient-to-br from-indigo-900/40 to-slate-950 border border-primary/20 relative overflow-hidden shadow-2xl"
                  >
                    {/* Background decoration */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="flex justify-between items-start mb-8 relative z-10">
                      <div>
                        <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary mb-3">Dinâmica Sugerida</div>
                        <h3 className="text-3xl font-black tracking-tight">{result.title}</h3>
                      </div>
                      <button 
                        onClick={copyToClipboard}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 group"
                        title="Copiar Plano"
                      >
                        {copied ? <Check size={22} className="text-green-400" /> : <Clipboard size={22} className="group-hover:text-primary transition-colors" />}
                      </button>
                    </div>

                    <div className="space-y-8 relative z-10">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Fundamentação</h4>
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                          "{result.theory}"
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Modelo Visual</h4>
                        <p className="text-slate-200 text-sm leading-relaxed font-medium">{result.visual}</p>
                      </div>

                      <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">Guia de Facilitação</h4>
                        <p className="text-slate-200 text-sm leading-relaxed">{result.guide}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 glass-card rounded-[40px] border-dashed border-2 border-white/10">
                    <motion.div 
                      animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6"
                    >
                      <Wand2 className="text-slate-600" size={48} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">Pronto para a Mágica?</h3>
                    <p className="text-slate-500 text-sm max-w-[200px]">Preencha os dados do time ao lado para gerar sua dinâmica estratégica.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetroGenerator
