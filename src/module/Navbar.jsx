import { CheckSquare } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Menu } from "lucide-react";
import { Heart } from "lucide-react";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navbarItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/todolist", label: "Todo List", icon: CheckSquare },
    { path: "/expense-tracker", label: "Expense Tracker", icon: DollarSign },
    { path: "/health-tracker", label: "Health Tracker", icon: Heart },
  ];

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 ${
                      location.pathname === item.path
                        ? "active bg-primary text-primary-content"
                        : ""
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          <CheckSquare className="h-6 w-6 mr-2" />
          Tools App
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navbarItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-context"
                      : "hover:bg-base-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="badge badge-primary badge-sm">Oti Acad</div>
      </div>
    </div>
  );
}

export default Navbar;
