import { useEffect, useState } from "react";
import { TranslationContext } from "./TranslationContext";
import { ContentLanding } from "../translations/LandingTranslation/contentLanding";
import { ContentNavbar } from "../translations/NavbarTranslation/contentNavbar";
import { ContentFooter } from "../translations/FooterTranslation/contentFooter";
import {
  LanguageType,
  ChildrenPropsType,
  TranslationContextType,
} from "../types/interfaceContext";
import { ContentAboutMe } from "../translations/AboutMeTranslation/contentAboutMe";
import { ContentProjects } from "../translations/ProjectsTranslation/contentProjects";
import { ContentContact } from "../translations/ContactTranslation/contentContact";
import { ContentNotFound } from "../translations/NotFoundTranslation/contentNavbar";
import { ContentSecretGame } from "../translations/SecretGame/contentSecretGame";
import { ThemeProvider } from "./ThemeContext";

export const ContextProvider = ({ children }: ChildrenPropsType) => {
  const [language, setLanguage] = useState<LanguageType>("es");
  const [content, setContent] = useState<
    TranslationContextType["content"] | undefined
  >();

  useEffect(() => {
    const LandingModule = ContentLanding;
    const NavbarModule = ContentNavbar;
    const FooterModule = ContentFooter;
    const AboutMeModule = ContentAboutMe;
    const ProjectsModule = ContentProjects;
    const ContactModule = ContentContact;
    const NotFoundModule = ContentNotFound;
    const SecretGameModule = ContentSecretGame;

    setContent({
      landing: LandingModule,
      navbar: NavbarModule,
      footer: FooterModule,
      aboutMe: AboutMeModule,
      projects: ProjectsModule,
      contact: ContactModule,
      notFound: NotFoundModule,
      secretGame: SecretGameModule,
    });
  }, [language]);

  const handleLanguageChange = (newLanguage: LanguageType) => {
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider
      value={{ language, setLanguage: handleLanguageChange, content }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </TranslationContext.Provider>
  );
};
