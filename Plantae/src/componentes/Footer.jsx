import redes from '../assets/rede-social.png'

const Footer = () => {
    return (
        <footer className='w-full flex justify-center '>
            <div className="w-11/12 border-t border-[#5B665F] flex justify-between pt-4">
                <img src={redes} className='w-32' alt='Símbolos do Facebook, Instagram, Twitter e Youtube' />
                <h3 className='font-gafata text-[17px]'>plantae.contato@plantae.com</h3>
            </div>
        </footer>
    )
}

export default Footer
