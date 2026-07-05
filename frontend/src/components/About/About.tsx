'use client'

import Image from 'next/image'
import cvImage from '../../../public/images/final-cv-img.jpg'
import { InfoItem, HobbyItem } from "./about.interface"

// ─── Data ────────────────────────────────────────────────────────────────────

const INFO_ITEMS: InfoItem[] = [
    { label: 'Tartózkodási hely', value: 'Szeged' },
    { label: 'Végzettség', value: 'Mérnökinformatikus BSc' },
    { label: 'Életkor', value: '25' },
]

const HOBBIES: HobbyItem[] = [
    { label: 'Főzés', description: 'Szeretek főzni és sütni.' },
    { label: 'Sport', description: 'Szokásom futni.' },
    { label: 'Olvasás', description: 'Krimi & Fantasy rajongó vagyok.' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

const ProfileImage = () => (
    <div className="flex 2xl:basis-1/12">
        <div className="-my-8 flex w-full justify-center self-center xl:-ml-24 xl:block">
            <div className="z-20 aspect-square w-28 lg:w-36 xl:w-40 overflow-hidden rounded-full shadow-xl shadow-black/40">
                <Image
                    className="mt-0.5 rounded-full"
                    src={cvImage}
                    alt="Andi Csaba profilkép"
                    priority
                />
            </div>
        </div>
    </div>
)

const ResumeDownloadButton = () => (
    <a
        href="./resume/Andi-Csaba-oneletrajz.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-x-2 rounded-lg border-2 border-color-main bg-stone-900 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-stone-800"
        aria-label="Önéletrajz letöltése"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5 stroke-2 shrink-0"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
        </svg>
        Önéletrajz
    </a>
)

// ─── Section ─────────────────────────────────────────────────────────────────

function AboutMe() {
    return (
        <section
            id="sect_2_about_bottom"
            aria-labelledby="about-heading"
            className="p-4 mb-12 mt-8 sm:px-4 md:px-12"
        >
            <div className="flex flex-col-reverse xl:flex-row">
                {/* Card */}
                <div className="2xl:ml-8 xl:ml-16">
                    <div className="flex flex-col gap-y-6 overflow-hidden break-words rounded-2xl bg-stone-800 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 xl:pr-32 lg:pt-6">
                        {/* Name & Title */}
                        <div className="flex flex-wrap items-center gap-x-2">
                            <h1 id="about-heading" className="text-3xl font-black text-white">
                                Andi Csaba
                            </h1>
                            <p className="mt-1 text-sm sm:text-lg font-bold text-color-main">
                                &lt;Software Engineer Intern&gt;
                            </p>
                        </div>

                        {/* Bio */}
                        <p className="text-stone-400 font-bold leading-relaxed">
                            2024 óta dolgozom teljes munkaidőben szoftverfejlesztő gyakornokként a <strong className="text-stone-300">GE HealthCare</strong> szegedi irodájában. 
                            Az első két hónapot töltöttem gyakornoki feladatokkal, azóta viszont junior és medior szintű feladatokat látok el, hivatalosan továbbra is gyakornoki pozícióban.

                            Legmagasabb végzettségem Mérnökinformatikus BSc, amelyet 2025-ben szereztem a Szegedi Tudományegyetem Természettudományi és Informatikai Karán.
                        </p>

                        {/* Info grid */}
                        <div className="grid grid-cols-2 gap-4 md:gap-x-10 lg:grid-cols-4">
                            {/* Left: personal info + CV button */}
                            <div className="col-span-1 lg:col-span-2">
                                <ul className="space-y-1">
                                    {INFO_ITEMS.map(({ label, value }) => (
                                        <li key={label} className="flex flex-wrap gap-x-1.5">
                                            <span className="text-xs font-bold text-white sm:text-sm">
                                                {label}:
                                            </span>
                                            <span className="text-xs text-stone-300 sm:text-sm">
                                                {value}
                                            </span>
                                        </li>
                                    ))}
                                    <li className="pt-3">
                                        <ResumeDownloadButton />
                                    </li>
                                </ul>
                            </div>

                            {/* Right: hobbies */}
                            <div className="col-span-1 lg:col-span-2 lg:col-start-3 rounded-xl border-2 border-color-main bg-stone-900 p-3 sm:p-4 lg:mx-10 xl:ml-16">
                                <p className="mb-2 text-xs font-bold text-white sm:text-sm underline underline-offset-4 decoration-color-main">
                                    Hobbik
                                </p>
                                <ul className="space-y-2 px-2">
                                    {HOBBIES.map(({ label, description }) => (
                                        <li key={label} className="flex gap-x-2 text-xs sm:text-sm">
                                            <span className="font-bold text-white shrink-0">
                                                {label}:
                                            </span>
                                            <span className="italic text-stone-300">{description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile image */}
                <ProfileImage />
            </div>
        </section>
    )
}

export default AboutMe