import imagem1 from '../../../src/assets/image 26.png'
import seta from '../../../src/assets/seta-direita.png'


function EscolherProduto() {
    return (
        <div className="flex h-[30rem] bg-verde-sofa p-10 w-[49%]">
            <img src={imagem1} className='' />
            <div className='pl-10'>
                <p className='font-encode-expanded text-[2.4rem]'>Alocasia Piccolini</p>
                <div className='border ' />
                <h1 className='text-[1.1rem] font-tenor-sans py-4'>Cultivar uma alocasia piccolini em casa é uma ótima maneira de trazer mais verde para o seu ambiente e melhorar a sua qualidade de vida, além de ser uma ótima opção para quem deseja começar a cultivar plantas em casa, a alocasia piccolini traz muitos benefícios para a saúde. </h1>
                <h1 className='text-[1.3rem] pb-4 font-tenor-sans font-black'>Visite a página para saber mais! </h1>
                <h1 className='text-[1.8rem] font-bold font-tenor-sans w-24'>R$ 129</h1>
                <div className='float-right mt-[-4rem]'>
                    <img src={seta} className='w-20' />
                </div>
            </div>
        </div>
    )
}

export default EscolherProduto