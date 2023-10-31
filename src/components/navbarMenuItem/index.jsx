import { NavLink } from "react-router-dom";

export const NavbarItem = ({ children, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        [
          "block py-2 pl-3 pr-4 font-bold md:bg-transparent hover:border-b-2 border-theme-red",
          isActive ? "border-b-2 border-theme-red" : null,
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      {children}
    </NavLink>
  );
};
