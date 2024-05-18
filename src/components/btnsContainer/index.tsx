import { BtnChangeLanguage } from "./btnChangeLanguage";
import { BtnChangeTheme } from "./btnChangeTheme";

export const BtnsContainer = () => {
  return (
    <div className="flex items-center justify-center gap-[20px] fixed top-4 right-8 z-50">
      <BtnChangeTheme />
      <BtnChangeLanguage />
    </div>
  );
};
