// FooterNav.jsx
import React from "react";
import { VscAccount, VscGist, VscSend } from "react-icons/vsc";

const FooterNav = ({ scrollToAccount, scrollToGist, scrollToSend }) => {
  const iconSize = "2rem";

  return (
    <ul className="text-gray-500 navbar fixed bottom-0 glassCard w-fit flex gap-3 px-3 py-2 rounded-full mb-5 animate-fade-up z-50">
      <a
        href={"#aboutSection"}
        className="relative rounded-full p-2 transform transition-transform hover:scale-110"
      >
        <VscAccount style={{ fontSize: iconSize }} />
      </a>
      <a
        href={"#workSection"}
        className="relative rounded-full p-2 transform transition-transform hover:scale-110"
      >
        <VscGist style={{ fontSize: iconSize }} />
      </a>
      <a
        href={"#contactSection"}
        className="relative rounded-full p-2 transform transition-transform hover:scale-110"
      >
        <VscSend style={{ fontSize: iconSize }} />
      </a>
    </ul>
  );
};

export default FooterNav;
