/* eslint-disable no-unsafe-optional-chaining */
import { useTranslation } from "../../context/TranslationContext";

interface Company {
  name: string;
  url: string;
}

interface Job {
  title: string;
  company: Company;
  started: string;
  finished: string;
  responsibilities: Array<string>;
}

export const Experience = () => {
  const { content, language } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-start text-xl leading-8">
      <h4 className="font-semibold text-2xl">
        {content?.aboutMe[language].experience.title}
      </h4>
      <ul className=" list-disc text-purple ">
        {content?.aboutMe[language].experience.jobs
          .slice()
          .reverse()
          .map((job: Job, index: number) => (
            <li key={index} className="list-none text-lg leading-7">
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
              <ul className={`pl-10 text-white`}>
                {job.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="text-base list-['+'] my-3 leading-6 font-medium"
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
