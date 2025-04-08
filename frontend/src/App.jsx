import { Routes, Route, NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import InsightsSection from "./InsightsSection";
import AddProduct from "./AddProduct";
import MyProducts from "./MyProducts";
import Profile from "./Profile";

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Menu lateral */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Insight4You 🚀</h1>
        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            🏠 Início
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            💼 Meus Produtos
          </NavLink>
          <NavLink
            to="/adicionar"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            ➕ Adicionar Produto
          </NavLink>
          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            👤 Perfil
          </NavLink>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/insights/:produtoId" element={<InsightsSection />} />
          <Route path="/produtos" element={<MyProducts />} />
          <Route path="/adicionar" element={<AddProduct />} />
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
