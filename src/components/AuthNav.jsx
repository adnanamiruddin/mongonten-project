import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    display: "beranda",
    route: "/dashboard",
  },
  {
    id: 2,
    display: "profil saya",
    route: "/dashboard/myprofile",
  },
  {
    id: 3,
    display: "konten saya",
    route: "/dashboard/mycontents",
  },
];

const AuthNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(!showNav);
  };

  return (
    // DESKTOP VIEW
    <div className="flex justify-between items-center w-full h-20 text-black fixed bg-gray-200 px-2 font-semibold z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">MoNgonten</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.route}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            {link.display}
          </Link>
        ))}
      </ul>

      {/* MOBILE VIEW */}
      <div
        onClick={handleNavClick}
        className="cursor-pointer pr-4 z-10 text-gray-600 md:hidden"
      >
        {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {showNav ? (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 text-white w-full h-screen bg-gradient-to-b from-white to-gray-600">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.route}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link.display}
            </Link>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default AuthNav;
