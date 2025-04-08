export default function Profile() {
    const user = {
      nome: "Ana maria",
      email: "ana_maria@insight4you.com",
      empresa: "Insight4You",
      plano: "Plano Básico - Freemium (10-Agosto-2025)",
    };
  
    return (
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">👤 Meu Perfil</h2>
        <div className="bg-white shadow p-6 rounded space-y-3">
          <p><strong>Nome:</strong> {user.nome}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Empresa:</strong> {user.empresa}</p>
          <p><strong>Plano:</strong> {user.plano}</p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Sair
          </button>
        </div>
      </div>
    );
  }
  