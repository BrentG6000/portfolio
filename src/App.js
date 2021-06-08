import { useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DarkModeProvider from './contexts/DarkModeContext'
import './App.scss';

function App() {
  return (
    <Router>
        <DarkModeProvider>
          <Route path='/' exact component={Home}/>
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Contact' exact component={Contact}/>
        </DarkModeProvider>
    </Router>
  )
}

export default App;