import { BtnChangeLanguage } from "./btnChangeLanguage";
import { BtnChangeTheme } from "./btnChangeTheme";

export const BtnsContainer = () => {
  return (
    <div className="flex gap-8 fixed top-6 right-8">
      <BtnChangeLanguage />
      <BtnChangeTheme />
    </div>
  );
};
