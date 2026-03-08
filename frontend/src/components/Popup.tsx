'use client';

import { useState, useEffect } from 'react';
import { useLang } from './contexts/LangContext';

export default function Popup() {
    const { translate } = useLang();
    const [mounted, setMounted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setMounted(true);
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => setMounted(false), 300);
    };

    if (!mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center px-4
                        bg-black/60 backdrop-blur-sm
                        transition-opacity duration-300
                        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={handleClose}
        >
            <div
                className={`relative w-full max-w-md rounded-2xl border-2 border-color-main bg-stone-900
                            p-6 shadow-2xl shadow-black/60
                            transition-all duration-300
                            ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className='flex items-start justify-between gap-x-4 mb-4'>
                    <div className='flex items-center gap-x-3'>
                        <span className='flex shrink-0 items-center justify-center w-9 h-9 rounded-full border border-green-800 bg-stone-800'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor"
                                className="w-5 h-5 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                        </span>
                        <h2 className='text-base sm:text-lg font-extrabold tracking-tight text-stone-200'>
                            <span className='text-color-main'>Fon</span>
                            tos
                        </h2>
                    </div>

                    <button
                        onClick={handleClose}
                        aria-label="Close"
                        className='flex shrink-0 items-center justify-center w-8 h-8 rounded-lg
                                   border border-stone-700 bg-stone-800 text-stone-400
                                   hover:border-green-800 hover:text-stone-200
                                   transition-colors duration-150'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p className='text-sm sm:text-base text-stone-400 leading-relaxed mb-6'>
                    {translate('popup.important')}
                </p>
                <div className='flex justify-end'>
                    <button
                        onClick={handleClose}
                        className='flex items-center gap-x-2 rounded-lg border-2 border-color-main
                                   bg-stone-800 px-4 py-2 text-sm font-medium text-white
                                   hover:bg-stone-700 transition-colors duration-150'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Értettem
                    </button>
                </div>
            </div>
        </div>
    );
}