import Nav from "../components/nav/nav";
import imagem1 from '../../src/assets/image 26.png'
import Rodape from "../components/rodape/rodape";
import { Input } from "postcss";
import Botao from "../components/botao/botao";
import InputC from "../components/input/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoPlanta from "../components/infoPlanta/infoPlanta";
import Personalize from "../components/personalize/personalize";

function ProdutoEscolhido() {
    const [login, setLogin] = useState('')
    const navigate = useNavigate()


    const logar = () => {
        // requisição POST enviando login e senha
        // caso o login seja efetuado, retornará 2 tokens
        // access token (letras e números aleatórios que mudam. criptografia do cliente. senha provisória para acessar o local) - 5min
        // refresh token - 24h

        // redirecionar o usuário para a tela de login e fazer o login novamente

        navigate('/inicio')

        localStorage.setItem("dados", JSON.stringify({ login: login })) // esse string transforma o login em um json
        console.log('logando...')
    }

    const esqueci = () => {
        console.log('esqueci minha senha...')
    }

    return (
        <div className="h-screen">
            <Nav />
            <div className="flex justify-center">
                <div className="max-w-screen-2xl w-3/5 p-6">
                    <div className="flex w-full justify-between">
                        <div className="bg-verde-nav h-[40rem] w-[31rem] flex items-center justify-around">
                            <div className="border-2 w-[37rem] h-[35rem] flex justify-center items-center m-[2rem]">
                                <img src={imagem1} className="w-[24rem]" />
                            </div>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <h1 className="font-titulos text-7xl border-b">Alocasia Piccolini</h1>
                            {/* <div className="border"></div> */}
                            <h1 className="font-gafata text-3xl text-[#6B665F] pt-8">Entregas para todo o Brasil</h1>
                            <h1 className="font-gafata text-6xl pt-8">R$ 129</h1>
                            <h1 className="font-gafata text-[1.3rem] w-96 pt-8 text-right">ou em até 3 vezes de R$ 43,00 sem juros. Compre com um lindo vaso ou encomende de acordo com a sua preferência</h1>
                            <h1 className="font-gafata text-3xl py-8">plantae.contato@plantae.com</h1>
                            <Botao altura={'h-14'} larg={'w-80'} fonte={'font-bold font-normal text-[1.7rem]'} texto={"Comprar agora"} />
                            <div className="w-full flex justify-between pt-8">
                                <InputC onChange={(e) => setLogin(e.target.value)} cor={'bg-[#e9e9e9]'} altura={'h-14'} larg={'w-80'} fonte={'font-bold font-normal'} textoPlace={"Seu CEP"} /> {/* para guardar o valor do input */}
                                <Botao onClick={logar} altura={'h-14'} larg={'w-48'} fonte={'font-bold font-normal text-[1.3rem]'} texto={"Calcular frete"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col mt-10">
                        <div className="flex w-full justify-between mb-10">
                            <InfoPlanta weight={'w-[33rem]'} height={'h-[20rem]'} titulo={'ORIGEM'} texto={'A Alocasia Piccolini é uma planta popularmente conhecida como Orelha-de-Elefante ou Caladium-bicolor. Ela é originária de regiões tropicais da Ásia, e vem ganhando cada vez mais popularidade como planta ornamental em todo o mundo.'} />
                            <InfoPlanta weight={'w-[33rem]'} height={'h-[20rem]'} titulo={'FACILIDADE'} texto={'A Alocasia Piccolini é uma planta de fácil cultivo, o que faz dela uma excelente opção para quem está começando a cultivar plantas em casa. Com um pouco de água e adubo regularmente, é possível manter a Alocasia Piccolini saudável e bonita.'} />
                        </div>
                        <InfoPlanta weight={'w-full'} height={'h-[20rem]'} titulo={'BEM-ESTAR'} direcao={'flex justify-center'} texto={'A Alocasia é capaz de purificar o ar, removendo toxinas e poluentes do ar, como formaldeído, benzeno, xileno e amônia, que são substâncias comuns em ambientes fechados, e que podem causar problemas de saúde como dores de cabeça, irritações na pele, problemas respiratórios, entre outros.Além disso, a Alocasia Piccolini é uma planta que ajuda a reduzir os níveis de estresse e ansiedade. Estudos mostram que a presença de plantas em ambientes internos pode ajudar a diminuir os níveis de cortisol, o hormônio do estresse, e a aumentar a sensação de bem-estar e relaxamento.'} />
                        <div className="mb-10" />
                        <InfoPlanta weight={'w-full'} height={'h-[20rem]'} titulo={'PORQUE COMPRAR CONOSCO?'} direcao={'flex justify-center'} texto={'Comprar conosco é escolher uma experiência de compra sustentável e saudável, onde prezamos pelo bem-estar dos nossos clientes e da natureza. Nós oferecemos produtos selecionados que seguem práticas sustentáveis desde a produção até o transporte, proporcionando alegria e bem-estar para você.'} texto2={'Para saber mais a respeito de nossas práticas sustentáveis clique aqui.'}/>
                    </div>
                    <Personalize />
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default ProdutoEscolhido
