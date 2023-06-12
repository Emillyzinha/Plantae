import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import logo_rodape from '../../assets/logo-rodape.png'

function Rodape() {
    return (
        <div className=''>
            <div className="border mt-10" />
            <div className='flex justify-around items-center h-40'>
                <div className='flex w-64 justify-between'>
                    <img src={facebook} className='w-[3rem] h-[3rem]' />
                    <img src={instagram} className='w-[3rem] h-[3rem] mr-[20px]' />
                    <img src={twitter} className='w-[3.5rem] h-[3.5rem] mr-[20px]' />
                    <img src={youtube} className='w-[3.5rem] h-[3.5rem]' />
                </div>
                <div>
                    <h1 className='font-gafata text-3xl'>plantae.contato@plantae.com</h1>
                </div>
                <div className='w-48'>
                    <img src={logo_rodape} />
                </div>
            </div>
        </div>
    )
}

export default Rodape