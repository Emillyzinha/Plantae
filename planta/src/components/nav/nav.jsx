import React from "react";
import logo from "../../assets/logo.png"

function Nav() {
    return (
        <>
            <div className="flex h-24 border-b-2 border-slate-800">
                <img className="max-h-8 ml-24 mt-8" src={logo} />
                <h1 className="font-titulo-nav text-3xl text-verde-nav p-7">Loja</h1>
                <h1 className="font-titulo-nav text-3xl text-verde-nav p-7">Artigos</h1>
                <h1 className="font-titulo-nav text-3xl text-verde-nav p-7">Suporte</h1>
            </div>
            <div>
                <h1 className="font-titulo-nav text-3xl text-verde-nav p-7">Minha conta</h1>
            </div>
        </>
    )
}

export default Nav