import React from "react";
import logo from "../../assets/logo.png"

function Nav() {
    return (
        <>
            <div className="hidden lg:flex place-content-between border-b-2 border-slate-800">
                <div className="flex h-24">
                    <img className="max-h-8 ml-24 mt-8" src={logo} />
                    <h1 className="font-titulo-nav text-3xl text-verde-nav p-7">Loja</h1>
                    <h1 className="font-titulo-nav text-3xl text-verde-nav p-7">Artigos</h1>
                    <h1 className="font-titulo-nav text-3xl text-verde-nav p-7">Suporte</h1>
                </div>
                <div>
                    <h1 className="font-titulo-nav text-3xl p-7 mr-8">Minha conta</h1>
                </div>
            </div>
        </>
    )
}

export default Nav
