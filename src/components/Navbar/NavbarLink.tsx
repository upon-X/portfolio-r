import { Link } from "react-scroll";

interface NavbarLinkProps {
  link: string;
  navlink_id: string;
  is_smooth?: boolean;
  navlink_text: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  link,
  is_smooth,
  navlink_id,
  navlink_text,
}) => {
  return (
    <Link
      id={`navlink-${navlink_id}`}
      to={link}
      smooth={true || is_smooth}
      className={`px-3 py-1 transition-all cursor-pointer hover:text-purple
          text-white
          sm:hover:text-darkTheme
          md:hover:text-darkTheme
          `}
    >
      {navlink_text}
    </Link>
  );
};
