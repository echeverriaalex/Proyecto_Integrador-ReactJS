//import './App.css'
import { useSelector } from 'react-redux'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import { Navbar } from './components/Navbar/Navbar'

function App(){

  const state = useSelector((state) => state.pokemon)

  {
    /* links de api 
    const UrlAllProducts = "https://dummyjson.com/products?limit=0";
    const UrlAllCategories = "https://dummyjson.com/products/categories"; 
    */
  }

  return (
    <Layout>
      { console.log(state.data) }
      { state.isloading && <p>Loading...</p> }
      { state.error && <p>{state.error}</p> }
      <Navbar />
      <Hero />
      { /* <Footer /> */ }
    </Layout>
  )
}

export default App
