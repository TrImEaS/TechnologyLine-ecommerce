import Nav from './Components/App-Components/Nav.jsx'
import Footer from "./Components/App-Components/Footer.jsx"
import { useState, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Home, Error, Search, Products, Others } from './Pages/Routes.jsx'
import { About_Us, Garantia, Sucursales, Centro_de_ayuda, Trabaja_con_nosotros, Politicas_de_devolucion, Mayoristas } from './Components/Others-Components/Components.jsx'
import { FaWhatsapp } from "react-icons/fa"

function App() {
  const [demoBtn, setDemoBtn] = useState(false)
  const handleclick = () => setDemoBtn(!demoBtn)

  return (
    <>
    {demoBtn ?
      <main className={`relative flex flex-col items-center font-body justify-between bg-white text-black min-h-screen min-w-[390px] h-full p-0 m-0`}>
        <ScrollToTopOnLocationChange />
        <Nav/>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          ></Route>
          
          <Route
            path="/products"
            element={<Products/>}
          >
            <Route 
              path=":product"
              element={<Products/>}
            ></Route>
          </Route>

          <Route path="/search" element={<Search />}>
            <Route path=":category/*" element={<Search />} />
            <Route path=":category/:subcategory/*" element={<Search />} />
            <Route path=":category/:subcategory/:brand" element={<Search />} />
          </Route>

          <Route 
            path="/others" 
            element={<Others/>}>

            <Route 
              path="about_us"
              element={<About_Us/>}/>

            <Route 
              path="mayoristas"
              element={<Mayoristas/>}/>

            <Route 
              path="garantia"
              element={<Garantia/>}/>
            
            <Route 
              path="sucursales"
              element={<Sucursales/>}/>       
            
            <Route 
              path="politicas_de_devolucion"
              element={<Politicas_de_devolucion/>}/>        
            
            <Route 
              path="trabaja_con_nosotros"
              element={<Trabaja_con_nosotros/>}/>

            <Route 
              path="centro_de_ayuda"
              element={<Centro_de_ayuda/>}/>
         </Route>
         

          <Route
            path="*"
            element={<Error/>}
          ></Route>
        </Routes>
        <a 
          href="https://wa.me/" 
          className="fixed flex justify-center items-center bottom-[125px] right-5 cursor-pointer w-12 h-12 bg-[#25d366] rounded-2xl duration-300 hover:w-14 hover:h-14
          max-sm:absolute max-sm:bottom-[293px] max-sm:right-[26%] max-sm:bg-transparent z-[999999]"
          target="_blank">
          <FaWhatsapp className="text-white text-[40px]"/>
        </a>
        <Footer/>
      </main>
    : 
      <div className="h-screen w-screen flex flex-col gap-10 justify-center items-center bg-[#333] text-white">
        <span className="text-3xl text-center w-4/5 font-bold">
          Esto es una demo, la pagina esta en progreso...
        </span>
        <button
          id="btn"
          className="bg-white text-black font-bold p-5 rounded-3xl duration-500"
          onClick={handleclick}>
          Ver demo
        </button>
      </div>
    }
  </>
  )
}
function ScrollToTopOnLocationChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

export default App