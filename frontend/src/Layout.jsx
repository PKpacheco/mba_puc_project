import { NavLink, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>
          Início
        </NavLink>
        <NavLink to="/insights" className={({ isActive }) => isActive ? "font-bold underline" : ""}>
          Insights
        </NavLink>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
