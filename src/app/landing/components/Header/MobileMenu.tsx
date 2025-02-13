import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { VscCallIncoming, VscClose, VscFeedback, VscGear, VscMenu } from "react-icons/vsc";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);

      if (!element) {
        console.warn(`Elemento com ID '${id}' não encontrado.`);
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:bg-gray-200 rounded-md transition"
      >
        {isOpen ? <VscClose size={24} /> : <VscMenu size={24} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 left-0 w-[10rem] bg-white border-[1px] border-gray-100 shadow-md p-4 rounded-lg "
        >
          <ul className="flex flex-col gap-4 text-gray-600">
            <li>
              <Link
                href="#benefits"
                onClick={(e) => handleClick(e, "benefits")}
                className=" hover:text-blue-600 flex gap-2 items-center"
              >
                <VscGear size={20} />
                Recursos
              </Link>
            </li>
            <li>
              <Link
                href="#feedback"
                onClick={(e) => handleClick(e, "feedback")}
                className=" hover:text-blue-600 flex gap-2 items-center"
              >
                <VscFeedback size={20} />
                Feedback
              </Link>
            </li>
            <li>
              <Link
                href="/landing/suport/"
                className=" hover:text-blue-600 flex gap-2 items-center"
              >
                <VscCallIncoming size={20} />
                Suporte
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
