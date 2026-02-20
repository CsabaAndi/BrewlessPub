'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import en from "../../i18/en.json";
import hu from "../../i18/hu.json";

type Lang = "en" | "hu";

const translations = { en, hu };

interface LangContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: keyof typeof en) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        if (typeof window === "undefined") return "en";
        return navigator.language.startsWith("hu") ? "hu" : "en";
    });

    const t = (key: keyof typeof en) => translations[lang][key] ?? key;

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used within LangProvider");
    return ctx;
}