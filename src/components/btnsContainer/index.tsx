import { BtnChangeLanguage } from "./btnChangeLanguage";
import { BtnChangeTheme } from "./btnChangeTheme";

export const BtnsContainer = () => {
  return (
    <div className="flex items-center justify-center gap-[20px] z-50">
      <BtnChangeTheme />
      <BtnChangeLanguage />
    </div>
  );
};
