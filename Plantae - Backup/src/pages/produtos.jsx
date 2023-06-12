import EscolherProduto from "../components/escolherProduto/escolherProduto"
import Nav from "../components/nav/nav"
import Rodape from "../components/rodape/rodape"

function Produtos() {
    return (
        <div className="h-screen">
            <Nav />
            <div className="flex justify-center">
                <div className="max-w-screen-2xl">
                    <div>
                        <h1 className="font-encode-expanded text-7xl py-12">ACERVO</h1> {/*4.5rem*/}
                    </div>
                    <div className="flex justify-between">
                        <EscolherProduto />
                        <EscolherProduto />
                    </div>       
                    
                    <div className="flex justify-between mt-[1.8rem]">
                        <EscolherProduto />
                        <EscolherProduto />
                    </div>       
                    
                    <div className="flex justify-between mt-[1.8rem]">
                        <EscolherProduto />
                        <EscolherProduto />
                    </div>
                    
                    <div className="flex justify-between mt-[1.8rem]">
                        <EscolherProduto />
                        <EscolherProduto />
                    </div>

                    <div className="flex justify-between mt-[1.8rem]">
                        <EscolherProduto />
                        <EscolherProduto />
                    </div>
                </div>
            </div>
            <Rodape />
        </div>

    )
}

export default Produtos