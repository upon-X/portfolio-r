import { BtnChangeLanguage } from "./btnChangeLanguage";
import { BtnChangeTheme } from "./btnChangeTheme";

export const BtnsContainer = () => {
  return (
    <div className="flex gap-8 fixed top-4 right-6">
      <BtnChangeLanguage />
      <BtnChangeTheme />
    </div>
  );
};
