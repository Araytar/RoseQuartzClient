import { useTranslation } from "react-i18next";
import { DesktopHeader } from "./DesktopHeader";
import "./styles/Screen.css";

//avoid the use of static text, use i18n instead, each language has its own text, and the text is stored in the
//locales folder in the project root
const Screen = () => {
  const { t } = useTranslation();

  return (
      <div className='desktop'>
        <DesktopHeader />
          <div className={"desktop__container"}>
                <div className={"match_history_container"}>

                </div>
          </div>
      </div>

  );
};

export default Screen;

/*<div className='desktop'>
  <DesktopHeader />
  <div className={"desktop__container"}>
    <header className={"desktop__header desktop__fit"}>
      <Title color='white'>
        Current Locale: <b>{t("common.language")} 🌐</b>
        <br />
        {t("components.desktop.header")}
      </Title>
    </header>
    <main className={"desktop__main"}>
      <Title color='white'>{t("components.desktop.main")}</Title>
      <Overview />
    </main>
    <aside className={"desktop__aside"}>
      <Title color='white'>{t("components.desktop.aside")}</Title>
      {isSubscribed || isLoading ? <PremiumContent /> : <FreeContent />}
    </aside>
    <footer className={"desktop__footer desktop__fit"}>
      <Title color='white'>{t("components.desktop.footer")}</Title>
    </footer>
  </div>
</div>*/