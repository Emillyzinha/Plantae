import Nav from "../../componentes/nav/nav";
import sofa from '../../assets/sofa.webp'
import seta from '../../assets/seta-direita.png'
import mulher_com_planta from '../../assets/mulher_planta.png'
import imagem1 from '../../assets/image 26.png'
import imagem2 from '../../assets/image 27.png'
import imagem3 from '../../assets/image 28.png'
import imagem4 from '../../assets/image 29.png'
import imagem5 from '../../assets/image 30.png'
import imagem6 from '../../assets/image 31.png'
import Personalize from "../../componentes/Personalize/personalize";
import equipe from '../../assets/image 38.png'

function Principal() {
    return (
        <div>
            <Nav />
            <div className="flex justify-center h-screen">
                <div className="max-w-screen-2xl">
                    <div className="flex h-2/4">
                        <img src={sofa} className="w-2/5" />
                        <div className="w-3/5 bg-no-sofa">
                            <p className="font-titulo-nav p-9 text-5xl mt-8">Seu bem-estar em primeiro lugar!</p>
                            <h1 className="font-light text-4xl p-9 pb-0">Leia mais sobre as plantas que contribuem para o seu bem-estar diminuindo o estresse e ansiedade!</h1>
                            <div className="flex justify-end mr-20">
                                <img src={seta} className="w-28 pt-11" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-titulo-verde-nav w-full h-[54rem] mt-10 flex">
                        <div className="w-3/5 p-14">
                            <p className="font-titulo-nav text-[68px] leading-[4.5rem]">Veja o nosso acervo e escolha a sua planta:</p>
                            <div className="">
                                <div className="flex mt-16 justify-around">
                                    <img src={imagem1} className="h-60" />
                                    <img src={imagem2} className="h-60" />
                                    <img src={imagem3} className="h-60" />
                                </div>
                                <div className="flex mt-16 justify-around">
                                    <img src={imagem4} className="h-60" />
                                    <img src={imagem5} className="h-60" />
                                    <img src={imagem6} className="h-60" />
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4 p-14">
                            <img src={mulher_com_planta} className="w-full h-[47rem]" />
                        </div>
                    </div>
                    {/* <div className="bg-no-sofa w-full h-72"/> */}
                    <Personalize />
                    <div className='flex w-full h-full bg-marrom-sobre-nos mt-10'>
                        <div className="w-3/5 p-16">
                            <p className="text-6xl">SOBRE NÓS</p>
                            <h1 className="pt-10">
                                Somos uma equipe apaixonada por plantas e meio ambiente, e estamos comprometidos em oferecer uma grande variedade de plantas de qualidade, sempre pensando na sustentabilidade.

                                Trabalhamos com fornecedores que seguem práticas sustentáveis de produção, e estamos constantemente buscando maneiras de reduzir a nossa pegada de carbono.

                                Nossos vasos são feitos de materiais recicláveis ou biodegradáveis, e sempre encorajamos a reciclagem e compostagem, inclusive em nosso site você pode encontrar mais informações sobre pasos de sustentabilidade para você realizar em sua casa.

                                Temos uma equipe especializada em plantas e estamos sempre dispostos a compartilhar nossos conhecimentos para ajudá-lo a cuidar das suas plantas da melhor forma possível.

                                Nosso objetivo é ajudá-lo a criar um ambiente verde e saudável em casa, sem agredir o meio ambiente e por isso, a cada 10 compras feitas em nosso site, plantamos uma árvore. No final do pedido é possível escolher o lugar para plantá-la, entre eles estão São Paulo, Bahia, Rio de Janeiro, Minas Gerais e Santa Catarina.
                            </h1>
                        </div>
                        <div>
                            <img src={equipe} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal