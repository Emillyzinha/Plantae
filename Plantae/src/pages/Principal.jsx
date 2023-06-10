import Footer from "../componentes/Footer"
import Nav from "../componentes/Nav/Nav"
import imgTopo from '../assets/topo-mobile.webp'
import './CssBackground.css'

function Principal() {

  return (
    <div className="h-screen w-full">
      <Nav />
      <div className="flex flex-col ">
        <div className="bg-topo">
          <p className="text-2xl text-verde-padrao">Seu bem-estar em primiero lugar!</p>
        </div>
        {/* <img className="" src={imgTopo} alt='Image de uma planta' /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Principal
