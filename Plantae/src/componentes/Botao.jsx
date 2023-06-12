import redes from '../assets/rede-social.png'

const Botao = ({textoBotao, onClick}) => {
    return (
        <button onClick={onClick} className='w-2/4 h-10 bg-white border-verde-padrao border text-[20px]'>{textoBotao}</button>
    )
}

export default Botao
