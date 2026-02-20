import { GithubIcon } from '../Icons/SocialIcons'
import * as Icons from '../Icons/ProjectIcons'


{/** @todo: whole block shenanigans */ }
const Testt: React.FC<{ name: string }> = ({ name }) => (
    <div className='grid grid-cols-2  sm:visible col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                    justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                    shadow-xl shadow-black/30 sm:p-6 gap-4  sm:gap-10'>
        <h3 className='text-tiny sm:text-xs text-center font-extrabold tracking-tight break-normal text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'> {name}</h3>
        <div className='bg-stone-800'>
            <Icons.PythonIcon size_min={16} size_standard={32}></Icons.PythonIcon>
        </div>
    </div>
)


function Thesis() {
    return (
        <section id='sect_xy_thesis' className='px-4 mb-12 sm:p-0 sm:px-4 md:px-8'> {/** @todo: padding/margin size**/}
            <h2 className='pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className="text-green-700" id="colored-text">Szak</span>
                dolgozat
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-8 sm:grid-cols-6 rounded-xl'>
                <div className='grid lg:col-span-4 lg:col-start-2 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-1'>

                    <div className='space-y-2 p-4  rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:pt-4 sm:px-6 md:p-4 lg:p-4' id="colored-border">
                        <div className='flex justify-end'>

                            <h3 className='text-md text-center mb-2 font-extrabold tracking-tight text-stone-200 sm:text-lg'>
                                "Gépi tanulás és mély tanulás alkalmazása a labdarúgásban"
                            </h3>
                            <div className='p-1 ml-3 xl:ml-24 lg:ml-12 md:ml-10 sm:ml-10 sm:pr-1 md:p-1 border-none border-green-900'>
                                <GithubIcon size_min={24} size_standard={32} link='https://github.com/CsabaAndi/Szakdolgozat-Thesis'></GithubIcon>`
                            </div>

                        </div>
                        <div className='grid grid-cols-4 gap-x-2'>
                            <div className='flex flex-col col-start-1 place-content-evenly gap-y-2'> {/** @todo: whole block shenanigans */}


                                <div className='grid grid-cols-2  sm:visible col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                        justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                        shadow-xl shadow-black/30 sm:p-6 gap-4  sm:gap-10'>
                                    <h3 className='text-tiny sm:text-xs text-center font-extrabold tracking-tight break-normal text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Python</h3>
                                    <div className='bg-stone-800'>
                                        <Icons.PythonIcon size_min={16} size_standard={32}></Icons.PythonIcon>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2  sm:visible col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                        justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                        shadow-xl shadow-black/30 sm:p-6 gap-4  sm:gap-10'>
                                    <h3 className='text-tiny sm:text-xs text-center font-extrabold tracking-tight break-normal text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Numpy</h3>
                                    <div className='bg-stone-800'>
                                        <Icons.NumpyIcon size_min={16} size_standard={32}></Icons.NumpyIcon>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2  sm:visible col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                        justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                        shadow-xl shadow-black/30 sm:p-6 gap-4  sm:gap-10'>
                                    <h3 className='text-tiny sm:text-xs text-center font-extrabold tracking-tight break-normal text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Tensorflow</h3>
                                    <div className='bg-stone-800'>
                                        <Icons.TensorFlowIcon size_min={16} size_standard={32}></Icons.TensorFlowIcon>
                                    </div>
                                </div>

                                <div className='grid grid-cols-2 sm:visible col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                        justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                        shadow-xl shadow-black/30 sm:p-6 gap-4  sm:gap-10'>
                                    <h3 className='text-tiny sm:text-xs text-center font-extrabold tracking-tight break-normal text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Pandas</h3>
                                    <div className='bg-stone-800'>
                                        <Icons.PandasIcon size_min={16} size_standard={32}></Icons.PandasIcon>
                                    </div>
                                </div>


                            </div>
                            <div className='grid grid-rows-5 col-start-2 col-span-3 overflow-hidden sm:border-2 border-green-900 bg-stone-900 rounded-xl' id="colored-border">  {/** @todo: cols/rows--> size sm-md-lg **/}
                                <div className='row-span-5 break-words text-md text-left tracking-tight text-stone-200 py-4 sm:py-6 md:py-4 lg:py-6 sm:text-lg sm:px-6 sm:py- shadow-xl shadow-black/30'> {/** @todo: word break: break-all for now **/}
                                    <h3 className='text-center mb-3 sm:mb-3 md:mb-4' >Folyamatban <span className='text-yellow-500'>!</span></h3>
                                    <h4 className='pl-6 sm:pl-0 md:pl-6 lg:pl-6 xl:pl-8 mb-4'>Cél: minél pontosabb modellek alkotása labdarúgás meccsek eredményének predikciójára.</h4>
                                    <h4 className='pl-6 sm:pl-0 md:pl-6 lg:pl-6 xl:pl-8 mb-4'>Adatok gyűjtése, feldolgozása, elemzése és vizualizációja,</h4>
                                    <h4 className='pl-6 sm:pl-0 md:pl-6 lg:pl-6 xl:pl-8 mb-1'>majd predikciós modellek alkotása gépi tanulás és mély tanulás alkalmazásával.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Thesis 