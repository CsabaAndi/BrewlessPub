'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import en from "../../i18/en.json";
import hu from "../../i18/hu.json";

type Lang = "en" | "hu";

const translations = { en, hu };

interface LangContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    translate: (key: string) => string;
    td: <T>(key: string) => T;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        if (typeof window === "undefined") return "en";
        return navigator.language.startsWith("hu") ? "hu" : "en";
    });

    const translate = (key: string): string => {
        return key.split('.').reduce((obj: any, k) => obj?.[k], translations[lang]) ?? key;
    }

    const td = <T,>(key: string): T => {
        return key.split('.').reduce((obj: any, k) => obj?.[k], translations[lang]) as T;
    }

    return (
        <LangContext.Provider value={{ lang, setLang, translate, td }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used within LangProvider");
    return ctx;
}