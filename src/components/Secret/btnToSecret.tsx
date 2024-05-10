import { Link } from "react-router-dom";

export const Secret = () => {
  return (
    <>
      <Link
        to="/secret-game"
        className="sm:hidden md:hidden absolute bottom-20 left-20 opacity-0 hover:opacity-100 px-3 py-2 rounded-full bg-purple text-white"
        onClick={() => sessionStorage.setItem("token-to-secret-game", "true")}
      >
        SECRET
      </Link>
    </>
  );
};
