'use client'
import Image from 'next/image';
import cv_test from "../../../public/images/final-cv-img.jpg"


function AboutMe() {
    return (
        <section id='sect_2_about_bottom' className="p-4 mb-12 mt-8 sm:p-0 sm:px-4 md:px-12"> {/** @todo: padding/margin size**/}

            <div className='flex flex-col-reverse xl:flex-row'>
                <div className='2xl:ml-8 xl:ml-16 xxl:ml-20 xxl2:ml-32 lg:mr-0 lg:pl-0'>
                    <div className='flex flex-col overflow-hidden break-words gap-y-6 rounded-2xl bg-stone-800 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 xl:pr-32 lg:pt-6'> {/** @todo: pr-size **/}
                        <div className='flex flex-wrap mb-1 items-center'>
                            <h1 className="text-3xl font-black text-white items-center">Andi Csaba</h1>
                            <p className='mt-1 ml-0 xs:ml-1 xxs:ml-0.5 sm:ml-2 text-green-600 font-bold text-sm sm:text-lg' id="colored-text">&lt;Mérnökinformatikus hallgató&gt;</p>
                        </div>
                        <p className='prose text-stone-400 font-bold'>
                            <br />
                            <br />
                            A Szegedi Tudományegyetem Természettudományi és Informatikai Karának{" "}
                            <strong className='text-stone-300'>utolsó éves, mérnökinformatikus</strong>
                            {" "}hallgatója vagyok.<br /><br />
                            {/*
                                Jelenleg{" "}
                                <strong className='text-stone-300'>szakmai gyakorlat</strong>
                                {" "}céljából keresek munkahelyet egyetem mellett, akár{" "}
                                <strong className='text-stone-300'>teljes munkaidős állásban,</strong>{"  heti 40 órában."} 
                                */}
                        </p>
                        <div className='grid grid-cols-2 gap-x-2 mt-1 sm:mt-0 sm:gap-x-0 md:gap-x-10 lg:gap-x-0 lg:grid-cols-4'>
                            <div className='grid col-start-1 lg:col-span-2 sm:items-end'>
                                <ul className='flex-row items-end sm:gap-y-0'> {/** @todo: space beetween **/}
                                    <li className='gap-x-2'>
                                        <span className='text-xs font-bold text-white sm:text-sm'>Tartozkodási hely: </span>
                                        <span className='text-xs text-gray-300 sm:text-sm'>Szeged</span>
                                    </li>
                                    <li className='gap-x-2 flex-none sm:flex'>
                                        <span className='text-xs font-bold text-white sm:text-sm'>Tanulmányok: </span>
                                        <span className='sm:flex text-xs text-gray-300 sm:text-sm'>Mérnökinformatikus bsc hallgató</span>
                                    </li>
                                    <li className='gap-x-2'>
                                        <span className='text-xs font-bold text-white sm:text-sm'>Életkor: </span>
                                        <span className='text-xs text-gray-300 sm:text-sm'>23</span>
                                    </li>
                                    <li className='flex mt-4 h-10'> {/** @todo: cant force open file in static page instead of downloading , maybe try google share link */}
                                        <a className="flex rounded-lg -ml-0.5 border-2  bg-stone-900 px-2 py-2 text-sm font-medium text-white hover:bg-stone-800
                                                        border-green-900" id="colored-border" href="./resume/Andi-Csaba-oneletrajz.pdf" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="mr-2 h-5 w-5 stroke-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                                            </svg>Önéletrajz</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-start-2 rounded-xl border-2 border-green-900 bg-stone-900 text-xs sm:text-sm text-white overflow-hidden break-words p-2 sm:p-3 lg:ml-10 lg:mr-10 xl:ml-16 xl:mr-0 2xl:mr-0 lg:col-start-3 lg:col-span-2' id="colored-border">
                                <p className="text-xs font-bold text-white sm:text-sm mb-1 decoration-green-900 decoration-1 sm:decoration-2 underline underline-offset-4">Hobbik</p>
                                <ul className='grid grid-cols-1 gap-4 px-4'>
                                    <li className='col-span-1 flex gap-x-2'>
                                        <span className='font-bold'>Főzés: </span>
                                        <p className="italic">Szeretek főzni és sütni.
                                        </p>
                                    </li>
                                    <li className='col-span-1 flex gap-x-2'>
                                        <span className='font-bold'>Sport: </span>
                                        <p className="italic">Szokásom futni.
                                        </p>
                                    </li>
                                    <li className='col-span-1 flex gap-x-2'>
                                        <span className='font-bold '>Olvasás: </span>
                                        <p className="italic">Krimi & Fantasy rajongó vagyok.
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex 2xl:basis-1/12'>
                    <div className='-my-8 flex w-full justify-center self-center xl:-ml-24 xl:block'>
                        <div className='z-20 aspect-square w-28 lg:w-36 xl:w-40 overflow-hidden rounded-full shadow-xl shadow-black/40'>
                            <Image className="mt-0.5 rounded-full " src={cv_test} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
