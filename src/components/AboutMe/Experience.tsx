import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col gap-6 items-start text-xl leading-8"
    >
      <h5 className="font-semibold text-2xl">Experience</h5>
      <ul className=" list-disc border-l-[1px] pl-[16px]">
        <li>
          <p className="font-semibold">
            2024 / 03 - Currently | Front-end Dev | AWAQ ONGD
          </p>
          <ul className="pl-10">
            <li className=" list-['*']">,iopafkiowf fnjawoifjo l m,</li>
            <li className=" list-['*']">
              deasidfujisn sakdjnjash dib asdb ajks bdjasn
              dsdakjndshjsdianmdsiohsdi
            </li>
            <li className=" list-['*']">
              deasidfujisn sakdjnjash dib asdb ajks bdjasn ddasdssda
            </li>
            <li className=" list-['*']">
              deasidfujisn sakdjnjash dib asdb ajks bdjasn d
            </li>
          </ul>
        </li>
        <li>
          <p className="font-semibold">
            2023 / 04 - Currently | Front-end Dev | Freelancer
          </p>
          <ul className="pl-10">
            <li className=" list-['*']">
              deasidfujisn sakdjnjash dib asdb ajks bdjasn d
            </li>
            <li className=" list-['*']">
              deasidfujisn sakdjnjash dib asdb ajks bdjasn d
            </li>
            <li className=" list-['*']">
              deasidfujisn sakdjnjash dib asdb ajks bdjasn d
            </li>
            <li className=" list-['*']">
              deasidfujisn sakdjnjash dib asdb ajks bdjasn d
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
