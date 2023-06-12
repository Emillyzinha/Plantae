import mulher_vaso from '../../assets/image 19.png'
import vaso1 from '../../assets/image 21.png'
import vaso2 from '../../assets/image 22.png'
import vaso3 from '../../assets/image 23.png'

function Personalize() {
    return (
        <div className='flex mt-10'>
            <div className='flex'>
                <div className='flex bg-white border-2 border-para-borda w-[48%]'>
                    <img src={mulher_vaso} className='' />
                    <div className='p-8'>
                        <p className='font-encode-expanded font-bold text-[2.2rem]'>Personalize seu vaso!</p>
                        <div className='text-right'>
                            <h1 className='font-gafata text-2xl pt-8'>Entre em contato conosco para realizar o orçamento!</h1>
                        </div>
                        <div className='text-center pt-14'>
                            <div className='border-2 h-12'>
                                <h1 className='text-[1.6rem] text-center font-gafata flex items-center justify-center h-full'>plantae.contato@plantae.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex ml-[31px]'>
                    <img src={vaso1} className='mr-4' />
                    <img src={vaso2} className='mr-4' />
                    <img src={vaso3} className='mr-4' />
                </div>
            </div>
        </div>
    )
}

export default Personalize