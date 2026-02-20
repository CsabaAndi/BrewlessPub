'use client'
import { GithubIcon, LinkedinIcon } from './Icons/SocialIcons';


function Header() {

    const scrollToSection = (section: string) => {
        const section_projects = document.getElementById(section)
        if (section_projects != null) {
            // 
            section_projects.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className='flex w-full items-center justify-between border border-stone-900 mt-2 mb-6 px-4 sm:mt-2 sm:px-4 sm:mb-12 md:mt-4 md:px-8 md:mb-12 lg:mt-4 xl:mt-6 2xl:mt-8'>
            <p id="header_text_name" className='flex items-center text-sm text-white sm:text-xl md:text-2xl lg:text-3xl'>
                <span className='mr-0.5 sm:mr-1'>Andi</span>
                <span className='font-bold text-green-600' id="colored-text">Csaba</span>
            </p>
            <div id="header_section_links" className='flex gap-x-2 text-stone-200 text-xs sm:gap-x-4 sm:text-lg lg:text-2xl'> {/** @todo: better implementation pls **/}
                <button onClick={() => scrollToSection("sect_xy_thesis")}>
                    <span className='italic'>Szakdolgozat</span>
                </button>
                <button onClick={() => scrollToSection("sect_3_stacknew")}>
                    <span className='italic'>Ismeretek</span>
                </button>
            </div>
            <div id="header_icons" className='flex gap-x-2 sm:gap-x-3 text-stone-200'>
                <GithubIcon size_min={16} size_standard={26} link='https://github.com/CsabaAndi' />
                <LinkedinIcon size_min={16} size_standard={26} />
            </div>
        </div>
    )
}

export default Header;