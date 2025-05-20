
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Header from './components/Header'
import Projects from './components/Projects'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='w-full scroll-auto overflow-hidden'>
      <ToastContainer/>
      <Header/> 
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
   

  )
}

export default App