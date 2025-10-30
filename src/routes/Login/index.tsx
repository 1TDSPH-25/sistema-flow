import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleEntrar = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-white shadow rounded-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2 flex items-center justify-center gap-3">
            <img src="/sistema-flow/favicon.svg" alt="Sistema Flow" className="w-8 h-8" />
            <span>Sistema Flow</span>
          </h1>
          <p className="text-gray-600">Entre na sua conta</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-1">Nome de usuário</label>
            <input
              type="text"
              name="username"
              className="w-full p-3 border rounded"
              placeholder="Digite seu usuário"
            />
          </div>

          <div>
            <label className="block mb-1">Senha</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 border rounded"
              placeholder="Digite sua senha"
            />
          </div>

          <button 
            onClick={handleEntrar}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm">
            Não tem uma conta?{" "}
            <button 
              onClick={() => navigate("/cadastro")} 
              className="text-blue-600 hover:underline"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}