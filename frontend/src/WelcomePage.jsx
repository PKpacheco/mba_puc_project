
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router-dom";
import { Rocket } from "lucide-react";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 text-white px-4 text-center">
      <div className="flex items-center gap-3 mb-6">
        <Rocket className="w-10 h-10 text-white animate-bounce" />
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Insight4You 🚀
        </h1>
      </div>

      <p className="text-lg md:text-xl max-w-2xl font-medium mb-10">
        Transforme dados em decisões estratégicas. 
        <br/>Antecipe tendências, monitore o mercado e domine sua concorrência com nossa plataforma de inteligência competitiva.
      </p>

      <Button
        onClick={() => navigate("/produtos")}
        className="bg-white text-pink-600 hover:bg-pink-100 font-bold px-6 py-3 rounded-lg shadow-lg text-lg transition duration-200"
        >
        Comece Agora
      </Button>
    </div>
  );
}
