import { Link } from "react-router-dom";

export default function MyProducts() {
  const produtos = [
    { id: 1, nome: "iPhone 13 256GB" },
    { id: 2, nome: "Samsung Galaxy S23" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📦 Meus Produtos</h2>
      <ul className="space-y-3">
        {produtos.map((p) => (
          <li key={p.id} className="p-4 bg-white shadow rounded">
            <Link to={`/insights/${p.id}`} className="text-blue-600 hover:underline">
              {p.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
