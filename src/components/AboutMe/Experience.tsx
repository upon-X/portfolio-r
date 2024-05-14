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
      <ul className=" list-disc text-purple ">
        <li>
          <p className="font-semibold ">
            Front-end Developer | AWAQ ONGD | 03/2024 - Currently
          </p>
          <ul className="pl-10 text-white">
            <li className=" list-disc">
              Desarrollar y rediseñar el sitio web de la organización
            </li>
            <li className=" list-disc">
              Organizar y delegar tareas en un equipo de desarrolladores
            </li>
            <li className=" list-disc">Implementar metodologia Scrum</li>
          </ul>
        </li>
        <li>
          <p className="font-semibold ">
            Full Stack Developer | Freelancer | 02/2023 - Currently
          </p>
          <ul className="pl-10 text-white">
            <li className=" list-disc">
              Desarrollar sitios web para establecimientos comerciales
            </li>
            <li className=" list-disc">
              Desarrollar aplicaciones para gestión de stock
            </li>
            <li className=" list-disc">Crear diseños UX/UI</li>
            <li className=" list-disc">
              Realizar proyectos open-source para la comunidad de
              desarrolladores
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
