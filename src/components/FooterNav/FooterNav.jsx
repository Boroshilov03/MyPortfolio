import { VscAccount } from "react-icons/vsc";
import { VscGist } from "react-icons/vsc";
import { VscSend } from "react-icons/vsc";

const FooterNav = () => {
  return (
    <ul className=" navbar fixed bottom-0 glassCard w-fit flex gap-3 px-3 py-2 rounded-full mb-5 animate-fade-up z-50">
      <li className="relative rounded-full p-2 transform transition-transform hover:scale-110">
        <VscAccount />
      </li>
      <li className="relative rounded-full p-2 transform transition-transform hover:scale-110">
        <VscGist />
      </li>
      <li className="relative rounded-full p-2 transform transition-transform hover:scale-110">
        <VscSend />
      </li>
    </ul>
  );
};

export default FooterNav;
