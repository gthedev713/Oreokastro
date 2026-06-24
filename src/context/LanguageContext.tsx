import { createContext, useContext, useState } from "react";

export type Lang = "en" | "gr";

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "gr" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}