import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import RetroGenerator from './components/RetroGenerator'
import CourseShowcase from './components/CourseShowcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
      <nav className="fixed top-0 w-full z-50 glass-card border-x-0 border-t-0 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-lg">SM</div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 whitespace-nowrap">SM Hub</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a>
          <a href="#retro" className="hover:text-white transition-colors">Retrospectivas</a>
          <a href="#curso" className="hover:text-white transition-colors">Formação</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Manifesto />
        <RetroGenerator />
        <CourseShowcase />
      </main>

      <Footer />
    </div>
  )
}

export default App
