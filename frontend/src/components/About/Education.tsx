type experience = {
    start_year: string | number
    end_year: number | string
    location: string
    description: string
  }


const ExperienceRowBlock: React.FC<experience> = (data: experience) => (
    <li className='border-b border-l border-stone-700  last:border-b-0'>
        <div className='-ml-2 pt-3 flex items-center gap-x-2'>
            <span className='whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs sm:text-sm font-bold text-white shadow-xl shadow-black/30' id="colored-border">
                {data.start_year} {data.end_year !== "" ? "-" : ""} {data.end_year}
            </span>
            <span className='text-sm sm:text-md font-medium text-stone-400'>{data.location}</span>
        </div>
        <h2 className='p-3 text-md sm:text-xl font-bold text-stone-200'>{data.description}</h2>
    </li>   
)
        
{/** @todo: space beetween edu/lang **/}
function Education() {
    return (
        <section id='sect_4_edu' className='px-4 mb-12 sm:p-0 sm:px-4 md:px-8'> {/** @todo: padding/margin size  px-4 mb-12 sm:p-0 sm:px-4 md:px-8**/}
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <div className='col-span-1'>
                    <h2 className='pb-4 sm:pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700' id="colored-text">Tan</span>
                        ulmányok
                    </h2>
                    <ul className="md:ml-4 md:mr-4 lg:ml-0 lg:px-6 xl:px-12">
                        <ExperienceRowBlock start_year={2019} end_year="present" location="Szegedi Tudományegyetem" description="Mérnökinformatikus BSc"></ExperienceRowBlock>  
                        <ExperienceRowBlock start_year={2015} end_year={2019} location="Szekszárdi I. Béla Gimnázium, Kollégium és Általános Iskola" description="Érettségi"></ExperienceRowBlock>                    
                    </ul>
                </div>
                <div className='col-span-1 lg:px-12 lg:justify-self-end'>
                    <h2 className='pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700' id="colored-text">Nye</span>
                        lv
                    </h2>
                    <ul className="md:ml-4 md:mr-4 lg:ml-0 lg:px-6 xl:px-12">                       
                        <ExperienceRowBlock start_year={2019} end_year="" location="Szekszárd" description="Angol középfokú „C” típusú nyelvvizsga"></ExperienceRowBlock>               
                    </ul>
                </div>
                {/* for future work experience */}
                <div className='col-span-1 hidden'>
                    <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700'>Work </span>
                        Experience
                    </h2>
                    <ul>
                        <ExperienceRowBlock start_year={2005} end_year="" location="Mustafar" description="I Have The High Ground"></ExperienceRowBlock>                   
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Education
