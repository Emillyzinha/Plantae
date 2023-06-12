function Botao ({onClick, altura, larg, fonte, texto}) {
    return (
        <button onClick={onClick} className={`border drop-shadow ${altura} ${larg} ${fonte}`} >{texto}</button>
    )
}

export default Botao