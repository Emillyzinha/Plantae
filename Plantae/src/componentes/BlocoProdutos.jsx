import { Link } from "react-router-dom"

const BlocoProdutos = ({img, nome, texto, valor}) => {
    return (
        <div className="bg-cinzaD9 w-full h-[70vh] rounded-sm mt-6 flex flex-col items-center p-8">
            <Link to='produto'> <img src={img} alt="Imagem da planta" className='w-full h-80 flex justify-centerx'/> </Link>
            <Link to='produto'> <p className='text-4xl font-extralight p-1'>{nome}</p> </Link>
            <div className="border-t border-black w-full"/>
            <Link to='produto'> <h3 className='font-gafata mt-2 text-[16px]'>{texto}</h3> </Link>
            <Link to='produto'> <h3 className='text-[15px] mt-1 font-gafata'>Abra a página para sabe se ela é a mais indicada para você </h3> </Link>
            <Link to='produto'> <h4 className='text-3xl font-gafata w-full mt-1'>R$ {valor}</h4> </Link>
        </div>
    )
}

export default BlocoProdutos
