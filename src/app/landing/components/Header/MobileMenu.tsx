import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

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
        className="p-2 text-gray-800 hover:bg-gray-200 rounded-md transition"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 left-0 w-[8rem] bg-white shadow-md p-4"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#home"
                onClick={(e) => handleClick(e, "home")}
                className="text-gray-800 hover:text-blue-600"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="#benefits"
                onClick={(e) => handleClick(e, "benefits")}
                className="text-gray-800 hover:text-blue-600"
              >
                Recursos
              </Link>
            </li>
            <li>
              <Link
                href="#feedback"
                onClick={(e) => handleClick(e, "feedback")}
                className="text-gray-800 hover:text-blue-600"
              >
                Feedback
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
