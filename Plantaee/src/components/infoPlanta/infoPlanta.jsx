function InfoPlanta({weight, height, titulo, texto, texto2, direcao}) {
    return ( 
        <div>
            <div className={`border-2 ${weight} ${height} p-8`}>
                <h1 className={`font-titulos text-verde-nav text-5xl mb-5 ${direcao}`}>{titulo}</h1>
                <h1 className="font-gafata text-2xl">{texto}</h1>
                <br></br>
                <h1 className="font-gafata text-2xl">{texto2}</h1>
            </div>
        </div>
    )
}

export default InfoPlanta