import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <div className="flex gap-8">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-600 underline" : ""
        }
      >
        <span className="text-xl "> Home</span>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-600 underline" : ""
        }
      >
        <span className="text-xl "> About</span>
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        <span className="text-xl "> Skills</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        <span className="text-xl ">Contact</span>
      </NavLink>
    </div>
  );

  return (
    <div className="flex py-4 px-20 items-center justify-between">
      <div className="flex ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="text-3xl font-bold">Siddiqui <span className="text-cyan-700"> A. Qahhar</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
