type SkillCategory = {
  [category: string]: string[];
};

export const myTechAndSoftSkills: SkillCategory[] = [
  {
    Frontend: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "TailwindCSS",
      "React",
      "Angular",
      "Next.js",
      "Redux",
      "Zustand",
      "Vite",
    ],
  },
  {
    Backend: [
      "Python",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "Docker",
    ],
  },
  {
    DevOps: [
      "GIT",
      "Github",
      "Vercel",
      "Netlify",
      "Railway",
      "Cloudinary",
      "Trello",
      "Jira",
    ],
  },
  { Design: ["Figma", "Webflow", "Bubble"] },
];

function mapSkills(
  skills: SkillCategory[]
): { category: string; skills: string[] }[] {
  return skills.map((skillObj) => {
    const category = Object.keys(skillObj)[0];
    const skillsArray = skillObj[category];
    return { category, skills: skillsArray };
  });
}

export const mappedSkills = mapSkills(myTechAndSoftSkills);
