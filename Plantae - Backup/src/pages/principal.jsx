import Nav from '../components/nav/nav.jsx'
import sofa from '../../src/assets/sofa.jpg'
import seta from '../../src/assets/seta-direita.png'
import mulher_com_planta from '../../src/assets/mulher_planta.png'
import imagem1 from '../../src/assets/image 26.png'
import imagem2 from '../../src/assets/image 27.png'
import imagem3 from '../../src/assets/image 28.png'
import imagem4 from '../../src/assets/image 29.png'
import imagem5 from '../../src/assets/image 30.png'
import imagem6 from '../../src/assets/image 31.png'
import Personalize from '../components/personalize/personalize.jsx'
import equipe from '../../src/assets/image 38.png'
import simboloFlor from '../../src/assets/image 36.png'
import Rodape from '../components/rodape/rodape.jsx'

function Principal() {

    const dados = JSON.parse(localStorage.getItem("dados"))


    return (
        <div className='h-screen'>
            {/* <h1>Página Home -
                {dados !== undefined ?
                    <>
                        {dados.login} - {dados.login}
                    </>
                    : null
                }
            </h1> */}
            <Nav />
            <div className="flex justify-center"> {/*de lg pra cima aparece, pra baixo não*/}
                <div className="max-w-screen-2xl w-3/5">
                    <div className="flex h-[12%]">
                        <img src={sofa} className="w-2/5" />
                        <div className="2xl:w-3/5 bg-verde-sofa p-6">
                            <p className="font-encode-expanded text-[2.4rem] mt-8 font-bold">Seu bem-estar em primeiro lugar!</p>
                            <h1 className="font-gafata text-3xl pt-10">Leia mais sobre as plantas que contribuem para o seu bem-estar diminuindo o estresse e ansiedade!</h1>
                            <div className="flex justify-end pt-6">
                                <img src={seta} className="w-24" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-verde-nav w-full h-[54rem] mt-10 flex">
                        <div className="w-3/5 p-14">
                            <p className="font-encode-expanded text-[48px] leading-[4.5rem]">Veja o nosso acervo e escolha a sua planta:</p>
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
                    <div className='flex mt-10 w-full bg-para-sobre-nos'>
                        <div className='w-4/6 p-20'>
                            <p className='text-6xl font-encode-expanded'>SOBRE NÓS</p>
                            <h1 className='text-[1.4rem] leading-[1.9rem] font-gafata'>
                                <br></br>
                                Somos uma equipe apaixonada por plantas e meio ambiente, e estamos comprometidos em oferecer uma grande variedade de plantas de qualidade, sempre pensando na sustentabilidade.
                                <br></br><br></br>
                                Trabalhamos com fornecedores que seguem práticas sustentáveis de produção, e estamos constantemente buscando maneiras de reduzir a nossa pegada de carbono.
                                <br></br><br></br>
                                Nossos vasos são feitos de materiais recicláveis ou biodegradáveis, e sempre encorajamos a reciclagem e compostagem, inclusive em nosso site você pode encontrar mais informações sobre pasos de sustentabilidade para você realizar em sua casa.
                                <br></br><br></br>
                                Temos uma equipe especializada em plantas e estamos sempre dispostos a compartilhar nossos conhecimentos para ajudá-lo a cuidar das suas plantas da melhor forma possível.
                                <br></br><br></br>
                                Nosso objetivo é ajudá-lo a criar um ambiente verde e saudável em casa, sem agredir o meio ambiente e por isso, a cada 10 compras feitas em nosso site, plantamos uma árvore. No final do pedido é possível escolher o lugar para plantá-la, entre eles estão: São Paulo, Bahia, Rio de Janeiro, Minas Gerais e Santa Catarina.
                            </h1>
                        </div>
                        <div className='bg-verde-sobre-nos w-2/6 mr-20 h-[45rem]'>
                            <div className='flex justify-center'>
                                <img src={equipe} className='mt-20 w-10/12' />
                            </div>
                            <div className='flex justify-center pt-14'>
                                <div className='border-[0.5px] w-10/12' />
                            </div>
                            <div className='flex justify-center pt-6'>
                                <div className='text-xl w-10/12 text-titulo-sobre-nos font-galdeano'>
                                    <h1 className=''>
                                        Maria Silva - Ana Santos
                                    </h1>
                                    <h1>
                                        Beatriz Oliveira - Juliana Pereira
                                    </h1>
                                    <br></br>
                                    <h1>
                                        João Souza - Pedro Costa
                                    </h1>
                                    <h1>
                                        Lucas Rocha - André Almeida
                                    </h1>
                                    <img src={simboloFlor} className='float-right' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Rodape />
                </div>
            </div>
        </div>
    )
}

export default Principal