import { FaCode, FaRegAddressCard, FaRegMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const BtnsLinks = () => {
  return (
    <div className="flex justify-center gap-10 text-purple">
      <Link
        to={"/aboutme"}
        className="flex items-center justify-center p-2 bg-white rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple
          transition-all
          "
      >
        <FaRegAddressCard className="w-[2.9rem] h-[2.9rem]" />
      </Link>

      <Link
        to={"/projects"}
        className="flex items-center justify-center p-2 bg-white rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple
          transition-all
          "
      >
        <FaCode className="w-[2.9rem] h-[2.9rem]" />
      </Link>

      <Link
        to={"/contact"}
        className="flex items-center justify-center p-2 bg-white rounded-md border-x-4 border-purple
          hover:-translate-y-2 hover:text-white hover:bg-purple
          transition-all
          "
      >
        <FaRegMessage className="w-[2.9rem] h-[2.9rem]" />
      </Link>
    </div>
  );
};
