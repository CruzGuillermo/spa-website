import './App.scss'
import Header from './container/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './container/About/About'
import Contact from './container/Contact/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App
