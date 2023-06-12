function InputC ({cor, altura, larg, fonte, textoPlace, onChange}) {
    return (
        <input onChange={onChange} className={`${cor} ${altura} ${larg} ${fonte} pl-4 text-[1.3rem] border border-verde-nav`} placeholder={textoPlace}></input>
    )
}

export default InputC
