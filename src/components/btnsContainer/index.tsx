import { BtnChangeLanguage } from "./btnChangeLanguage";
import { BtnChangeTheme } from "./btnChangeTheme";

export const BtnsContainer = () => {
  return (
    <div className="flex items-center justify-center gap-[20px] ml-10 sm:ml-0 md:ml-0  z-50">
      <BtnChangeTheme />
      <BtnChangeLanguage />
    </div>
  );
};
