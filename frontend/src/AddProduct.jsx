import { useState } from "react";

export default function AddProduct() {
  const [nome, setNome] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Produto "${nome}" adicionado com tags: ${tags}`);
    setNome("");
    setTags("");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">➕ Adicionar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <div>
          <label className="block mb-1 font-semibold">Nome do Produto</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} className="w-full border p-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Tags (separadas por vírgula)</label>
          <input value={tags} onChange={(e) => setTags(e.target.value)} className="w-full border p-2 rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Adicionar
        </button>
      </form>
    </div>
  );
}
