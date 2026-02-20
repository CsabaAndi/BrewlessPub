"use client";

import { useLang } from "./contexts/LangContext";

export default function LangChooser() {
    const { lang, setLang } = useLang();

    return (
        <div className="flex items-center gap-1 font-mono text-sm tracking-widest uppercase">
            <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 transition-all duration-200 ${lang === "en"
                    ? "text-white border-b-2 border-white font-bold"
                    : "text-white/50 hover:text-white/80"
                    }`}
            >
                en
            </button>
            <span className="text-white/30">/</span>
            <button
                onClick={() => setLang("hu")}
                className={`px-2 py-1 transition-all duration-200 ${lang === "hu"
                    ? "text-white border-b-2 border-white font-bold"
                    : "text-white/50 hover:text-white/80"
                    }`}
            >
                hu
            </button>
        </div>
    );
}