'use client'
import { GithubIcon, LinkedinIcon } from './Icons/SocialIcons'
import { NavLink, HeaderProps } from './components.interface'
import { useLang } from './contexts/LangContext';

function Header({ name = { first: 'Andi', last: 'Csaba' } }: HeaderProps) {
    const { translate } = useLang();

    const NAV_LINKS: NavLink[] = [
        { label: translate('header.thesis'), sectionId: 'sect_xy_thesis' },
        { label: translate('header.skills'), sectionId: 'sect_3_stacknew' },
    ]
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className="flex w-full items-center justify-between border border-stone-900 mt-2 mb-6 px-4 py-2 sm:mt-2 sm:px-6 sm:mb-12 md:mt-4 md:px-8 md:mb-12 lg:mt-4 xl:mt-6 2xl:mt-8 rounded-sm">
            <p className="flex items-center gap-x-1 text-sm text-white sm:text-xl md:text-2xl lg:text-3xl tracking-tight select-none">
                <span>{name.first}</span>
                <span className="font-bold text-color-main">{name.last}</span>
            </p>

            <nav aria-label="Page sections">
                <ul className="flex gap-x-2 sm:gap-x-4 list-none p-0 m-0">
                    {NAV_LINKS.map(({ label, sectionId }) => (
                        <li key={sectionId}>
                            <button
                                onClick={() => scrollToSection(sectionId)}
                                className="text-stone-300 hover:text-white text-xs sm:text-base lg:text-xl italic transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-main rounded-sm px-1"
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center gap-x-2 sm:gap-x-3 text-stone-300">
                <GithubIcon size_min={16} size_standard={26} link="https://github.com/CsabaAndi" />
                <LinkedinIcon size_min={16} size_standard={26} />
            </div>
        </header>
    )
}

export default Header