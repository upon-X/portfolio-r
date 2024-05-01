import { FaCode, FaRegAddressCard, FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const BtnsLinks = () => {
  return (
    <div className="flex gap-10 text-purple">
      <Link
        to={"/aboutme"}
        className="flex items-center justify-center p-1 bg-white rounded-md border-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple hover:border-purple hover:rounded-lg
          transition-all
          "
      >
        <FaRegAddressCard className="w-[2.5rem] h-[2.5rem]" />
      </Link>

      <Link
        to={"/projects"}
        className="flex items-center justify-center p-1 bg-white rounded-md border-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple hover:border-purple hover:rounded-lg
          transition-all
          "
      >
        <FaCode className="w-[2.5rem] h-[2.5rem]" />
      </Link>

      <Link
        to={"/contact"}
        className="flex items-center justify-center p-1 bg-white rounded-md border-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple hover:border-purple hover:rounded-lg
          transition-all
          "
      >
        <FaRegMessage className="w-[2.5rem] h-[2.5rem]" />
      </Link>
    </div>
  );
};
