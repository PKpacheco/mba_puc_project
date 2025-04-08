// import { useEffect, useState } from "react";
// import { Card, CardContent } from "./components/ui/card";
// import {
//   TrendingUp,
//   TrendingDown,
//   Smile,
//   DollarSign,
//   Tag
// } from "lucide-react";

// export default function InsightsSection() {
//   const [insights, setInsights] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/insights")
//       .then((res) => res.json())
//       .then((data) => setInsights(data));
//   }, []);

//   if (!insights) return null;

//   return (
//     <section className="py-16 px-6 max-w-5xl mx-auto">
//       <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-10 drop-shadow">
//         🔍 Análises de Mercado
//       </h2>

//       <div className="grid gap-6 md:grid-cols-2">
//         <Card className="shadow-md hover:shadow-lg transition-all">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-2 mb-2 text-sky-700">
//               <Smile className="w-5 h-5" />
//               <h3 className="font-bold text-lg">Sentimento Geral</h3>
//             </div>
//             <p className="text-slate-700 capitalize">{insights.sentimento_geral}</p>
//           </CardContent>
//         </Card>

//         <Card className="shadow-md hover:shadow-lg transition-all">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-2 mb-2 text-green-700">
//               <DollarSign className="w-5 h-5" />
//               <h3 className="font-bold text-lg">Média de Preços</h3>
//             </div>
//             <p className="text-green-600 font-semibold text-xl">R$ {insights.media_precos}</p>
//           </CardContent>
//         </Card>

//         <Card className="shadow-md hover:shadow-lg transition-all">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-2 mb-2 text-indigo-700">
//               <Tag className="w-5 h-5" />
//               <h3 className="font-bold text-lg">Produto Mais Caro</h3>
//             </div>
//             <p className="text-slate-700">{insights.produto_mais_caro}</p>
//           </CardContent>
//         </Card>

//         <Card className="shadow-md hover:shadow-lg transition-all">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-2 mb-2 text-blue-700">
//               {insights.tendencia.includes("queda") ? (
//                 <TrendingDown className="w-5 h-5" />
//               ) : (
//                 <TrendingUp className="w-5 h-5" />
//               )}
//               <h3 className="font-bold text-lg">Tendência de Mercado</h3>
//             </div>
//             <p className="text-blue-600">{insights.tendencia}</p>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function InsightsSection() {
  const { produtoId } = useParams();
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/insights/${produtoId}`)
      .then((res) => res.json())
      .then((data) => setInsights(data));
  }, [produtoId]);

  if (!insights) return null;

  const labels = [...Array(10)].map((_, i) => `Dia ${i + 1}`);
  const tendenciaData = {
    labels,
    datasets: [
      {
        label: "Tendência de Preço",
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 5000 + 1000)),
        borderColor: "#3b82f6",
        fill: false
      }
    ]
  };

  const devolucoesData = {
    labels,
    datasets: [
      {
        label: "Devoluções por Dia",
        data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)),
        borderColor: "#ef4444",
        fill: false
      }
    ]
  };

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">🔍 Análises de Mercado</h2>
      <h3 className="text-xl font-semibold text-center text-gray-600 mb-10">Produto: {insights.nome_produto}</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">Sentimento Geral</h3>
            <p className="text-gray-700">{insights.sentimento_geral}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">Média de Preços</h3>
            <p className="text-green-600 font-bold">R$ {insights.media_precos}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">Produto Similar</h3>
            <p className="text-gray-700">{insights.produto_mais_caro}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">Tendência de Mercado</h3>
            <p className="text-blue-600 mb-4">{insights.tendencia}</p>
            <Line data={tendenciaData} />
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-1">Devoluções nos últimos 10 dias</h3>
            <Line data={devolucoesData} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
