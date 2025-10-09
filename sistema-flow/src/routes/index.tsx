export default function PaginaCadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  function onSubmit(data: any) {
    console.log(data)
    alert('Cadastro realizado com sucesso!')
  }

  return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-emerald-400 to-green-600 p-4">
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all hover:shadow-green-300/50">
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
                placeholder="Ex: João Silva"
                />
                {errors.nome && <p className="text-red-500 text-sm mt-1">{String(errors.nome.message)}</p>}
          </div>


        </form>

        

        </div>
    </div>
  )

