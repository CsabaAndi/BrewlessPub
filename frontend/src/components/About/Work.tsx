type WorkRoleProps = {
    title: string
    bullets: string[]
}

const RoleBullet: React.FC<{ text: string }> = ({ text }) => (
    <li className='flex items-start gap-x-2'>
        <span className='mt-[3px] shrink-0 text-color-main text-xs'>▸</span>
        <span className='text-stone-400 text-sm sm:text-base'>{text}</span>
    </li>
)

const WorkRoleBlock: React.FC<WorkRoleProps> = ({ title, bullets }) => (
    <div>
        <h4 className='mb-2 text-sm sm:text-md font-bold text-stone-300 tracking-wide'>{title}</h4>
        <ul className='space-y-1.5 pl-1'>
            {bullets.map((b, i) => <RoleBullet key={i} text={b} />)}
        </ul>
    </div>
)

function Work() {
    return (
        <section id='sect_xxx_work' className='px-4 mb-12 sm:p-0 sm:px-4 md:px-8'>
            <h2 className='pb-4 sm:pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className='text-color-main'>Szak</span>
                mai tapasztalat
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-8 sm:grid-cols-6'>
                <div className='lg:col-span-4 lg:col-start-2 md:col-span-6 md:col-start-2 sm:col-span-6 sm:col-start-1'>
                    <div className='space-y-5 p-4 rounded-xl border-2 sm:border-none border-color-main sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-6 lg:p-6'>

                        {/* Company header */}
                        <div className='flex items-center gap-x-3'>
                            <span className='whitespace-nowrap rounded-full border border-color-main bg-stone-900 px-2 py-1 text-xs sm:text-sm font-bold text-white shadow-xl shadow-black/30'>
                                2024 –
                            </span>
                            <div>
                                <h3 className='text-md sm:text-xl font-bold text-stone-200'>GE Healthcare</h3>
                                <p className='text-xs sm:text-sm font-semibold text-color-main'>Software Engineer Intern</p>
                            </div>
                        </div>

                        <hr className='border-stone-700' />

                        <WorkRoleBlock
                            title="Workflow Manager"
                            bullets={[
                                "Collaborating with international teams on a healthcare platform",
                                "Full-stack development, database management",
                                "Linux server and CPACS systems installation, configuration and integration",
                                "Development environment setup",
                                "Manual and automated testing, test requirements and documentation preparation",
                                "Validation and verification testing",
                            ]}
                        />

                        <hr className='border-stone-700' />

                        <WorkRoleBlock
                            title="Edison Datalogue Connect"
                            bullets={[
                                "Full-stack development on a healthcare software in Szeged",
                                "Manual and automated testing",
                            ]}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
