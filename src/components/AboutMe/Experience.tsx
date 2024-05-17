/* eslint-disable no-unsafe-optional-chaining */
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "../../context/TranslationContext";
import { useTheme } from "../../context/ThemeContext";

interface Company {
  name: string;
  url: string;
}

interface Job {
  title: string;
  company: Company;
  started: string;
  finished: string;
  responsabilities: Array<string>;
}

export const Experience = () => {
  const { content, language } = useTranslation();
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col gap-6 items-start text-xl leading-8"
    >
      <h5 className="font-semibold text-2xl">
        {content?.aboutMe[language].experience.title}
      </h5>
      <ul className=" list-disc text-purple ">
        {content?.aboutMe[language].experience.jobs
          .slice()
          .reverse()
          .map((job: Job, index: number) => (
            <li key={index} className="list-none">
              <p className="font-bold">
                {job.title} |{" "}
                <a
                  href={job.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {job.company.name}
                </a>{" "}
                | {job.started} - {job.finished}
              </p>
              <ul
                className={`pl-10 ${
                  theme === "light" ? "text-darkTheme" : "text-white"
                }`}
              >
                {job.responsabilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="text-lg list-['+'] my-3 leading-6 font-medium"
                  >
                    <span className=" ml-2">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};
