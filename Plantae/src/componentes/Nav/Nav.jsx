import './NavCss.css'
import logo from '../../assets/logo.png'
import reciclagem from '../../assets/reciclagem.png'

const Nav = () => {
    return (
        <nav className="w-full border-b bg-navBar border-[#5B665F]">
            <div className="flex flex-row justify-around items-center pt-4">
                <div className=" flex flex-col">
                    <div className="w-14 bg-black h-0.5 m-1"></div>
                    <div className="w-14 bg-black h-0.5 m-1"></div>
                    <div className="w-14 bg-black h-0.5 m-1"></div>
                </div>
                <img src={logo} className='w-28 h-10' alt='Logo do Plantae com o nome PLANTAE em capslock e embaixo uma frase: Prezando pelo seu bem-estar' />
                <img src={reciclagem} className='w-14' alt='Imgem de três folhaas rodando simbolizando reciclagem' />
            </div>
        </nav>
    )
}

export default Nav
