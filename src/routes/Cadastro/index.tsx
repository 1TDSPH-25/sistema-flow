import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
export default function PaginaCadastro() {
   const { register, handleSubmit, formState: { errors } } = useForm()

   function onSubmit(data: any) {
  console.log(data)
  alert('Cadastro realizado com sucesso!')
}
 return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 p-4">
      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all hover:shadow-blue-300/50">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Crie sua conta 🌿
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Preencha os campos abaixo para se cadastrar.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Nome</label>
            <input
              type="text"
              {...register("nome", {
                required: "Nome é obrigatório",
                minLength: { value: 3, message: "O nome deve ter pelo menos 3 caracteres." }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="Ex: João Silva"
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{String(errors.nome.message)}</p>}
          </div>

          {/* Nome de usuário */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Nome de usuário</label>
            <input
              type="text"
              {...register("nomeUsuario", {
                required: "Nome de usuário é obrigatório",
                pattern: {
                  value: /^[a-z]+$/,
                  message: "Use apenas letras minúsculas (a-z)."
                },
                minLength: { value: 3, message: "Mínimo de 3 caracteres." }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="Ex: joaosilva"
            />
            {errors.nomeUsuario && <p className="text-red-500 text-sm mt-1">{String(errors.nomeUsuario.message)}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Insira um email válido."
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="exemplo@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>}
          </div>
          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-200"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Já tem conta?
          <Link
            to="/login"
            className="text-emerald-600 hover:text-emerald-700 font-medium ml-1 transition-colors"
          >
            Faça login aqui
          </Link>
        </p>
      </div>
    </div>
  )
}
