import Nav from './Components/App-Components/Nav.jsx'
import Footer from "./Components/App-Components/Footer.jsx"
import { FaWhatsapp } from "react-icons/fa"
import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Home, Error, Search, Products, Others } from './Pages/Routes.jsx'
import { About_Us, Garantia, Sucursales, Centro_de_ayuda, Trabaja_con_nosotros, Politicas_de_devolucion, Mayoristas } from './Components/Others-Components/Components.jsx'

function App() {
  const mesagge = "Hola me comunico desde Technology-Line"

  return (
    <main className='relative flex flex-col items-center font-body justify-between bg-white text-black min-h-screen min-w-[390px] h-full p-0 m-0'>
      <ScrollToTopOnLocationChange />
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/products" element={<Products/>}>
          <Route path=":product/*" element={<Products/>}/>
        </Route>

        <Route path="/search" element={<Search />}>
          <Route path=":category/*" element={<Search />} />
          <Route path=":category/:subcategory/*" element={<Search />} />
          <Route path=":category/:subcategory/:brand" element={<Search />} />
        </Route>

        <Route path="/others" element={<Others/>}>
          <Route path="about_us" element={<About_Us/>}/>
          <Route path="mayoristas" element={<Mayoristas/>}/>
          <Route path="garantia" element={<Garantia/>}/>
          <Route path="sucursales" element={<Sucursales/>}/>       
          <Route path="politicas_de_devolucion" element={<Politicas_de_devolucion/>}/>        
          <Route path="trabaja_con_nosotros" element={<Trabaja_con_nosotros/>}/>
          <Route path="centro_de_ayuda" element={<Centro_de_ayuda/>}/>
        </Route>

        <Route path="*" element={<Error/>}/>
      </Routes>
      {/* <a 
        href="https://wa.me/541133690584" 
        id='wpp-icon'
        target={'_blank'}
        className={`flex fixed justify-center items-center bottom-[145px] right-10 cursor-pointer w-12 h-12 bg-[#25d366] rounded-2xl duration-300 hover:w-14 hover:h-14 max-sm:hidden`}>
        <FaWhatsapp className="text-white text-[40px]"/>
      </a> */}
      <a 
        className='flex fixed justify-center items-center bottom-[145px] right-10 cursor-pointer w-12 h-12 bg-[#25d366] rounded-2xl duration-300 hover:w-14 hover:h-14 max-sm:hidden' 
        id='wpp-icon'
        target={'_blank'}
        href={`https://wa.me/541133690584?text=Hola me comunico desde la pagina Technology-Line.`}>
        <FaWhatsapp className="text-white text-[40px]"/>
      </a>
      <Footer/>
    </main>
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

  // useEffect(() => {
  //   Swal.fire({
  //     title: '¡Esto es una demo!',
  //     text: 'Aun seguimos en desarrollo, pero sientete libre de echarle un vistazo!',
  //     icon: 'info',
  //     confirmButtonText: 'Entendido'
  //   })
  // }, [])