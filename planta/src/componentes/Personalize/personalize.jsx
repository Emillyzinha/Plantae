import mulher_vaso from '../../assets/image 19.png'
import vaso1 from '../../assets/image 21.png'
import vaso2 from '../../assets/image 22.png'
import vaso3 from '../../assets/image 23.png'

function Personalize() {
    return (
        <div className='flex mt-10'>
            <div className='flex'>
                <div className='flex bg-white border-2 border-para-borda w-2/4'>
                    <img src={mulher_vaso} className='' />
                    <div>
                        <p className='font-titulo-nav font-bold text-4xl pt-14 pl-6'>Personalize seu vaso!</p>
                        <div className='w-96 text-right'>
                            <h1 className='w-full font-normal text-2xl pt-14'>Entre em contato conosco para realizar o orçamento!</h1>
                        </div>
                        <div className='text-center pt-20 w-full ml-4'>
                            <div className='border-2 w-full'>
                                <h1 className='text-2xl text-center font-normal mt-2'>plantae.contato@plantae.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <img src={vaso1} className=' mr-4' />
                    <img src={vaso2} className='mr-4' />
                    <img src={vaso3} className='mr-4' />
                </div>
            </div>
        </div>
    )
}

export default Personalize