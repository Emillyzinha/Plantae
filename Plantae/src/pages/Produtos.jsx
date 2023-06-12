import Nav from "../componentes/Nav/Nav";
import Footer from "../componentes/Footer";
import BlocoProdutos from "../componentes/BlocoProdutos";
import { useEffect, useState } from "react";
import axios from "axios";

function Produtos() {

    const [header, setHeader] = useState({})

    useEffect(() => {
        const tokenStringCompleto = localStorage.getItem('token')
        const tokenJSONCompleto = JSON.parse(tokenStringCompleto)

        const requisicao = {
            headers: {
                Authorization: `JWT ${tokenJSONCompleto.access}`
            }
        }

        axios.get('http://127.0.0.1:8000/auth/users/me/', requisicao)
                .then((res) => {
                    console.log('deu certo', res);
                })
                .catch((erro) => {
                    axios.post('http://127.0.0.1:8000/auth/jwt/refresh/', {
                        refresh: tokenJSONCompleto.refresh
                    }).then((res) => {
                        const requisicao = {
                            headers: {
                                Authorization: `JWT ${res.data.access}`
                            }
                        }
                        axios.get('http://127.0.0.1:8000/auth/users/me/', requisicao)
                            .then((res) => {
                                console.log('deu certo', res);
                            })
                            .catch((erro) => {
                                console.log('deu erradoooo', erro);
                            })
                    })
                        .catch((erro) => {
                            console.log(erro);
                        })
                })


    }, [])

    // {
    //     "nome": "",
    //     "imagem": null,
    //     "valor": null,
    //     "origem": "",
    //     "facilidade": "",
    //     "bem_estar": "",
    //     "texto_base": ""
    // }

    return (
        <div className="h-screen w-full ">
            <Nav />
            <div className="flex flex-col bg-fundo-tela p-5">
                <p className="text-5xl text-verde-padrao font-extralight">ACERVO</p>
                <h3 className="font-extralight mt-5"> Aqui você encontra todas as nossas plantas naturais e com cachepô ou vaso confeccionados em cerâmica. Fácil para iniciar sua própria coleção de plantas. Compre sua planta favorita online aqui. Se você procura plantas de baixa manutenção o você está no site certo!</h3>
                <BlocoProdutos />
                <BlocoProdutos />
                <BlocoProdutos />
            </div>
            <Footer />
        </div>
    )
}

export default Produtos
