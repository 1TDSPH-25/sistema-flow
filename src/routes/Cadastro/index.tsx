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
          Cadastre-se 💙
        </h1>
        <p className="text-center text-gray-600 mb-8 text-sm">
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

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Telefone</label>
            <input
              type="tel"
              {...register("telefone", {
                required: "Telefone é obrigatório",
                pattern: {
                  value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
                  message: "Formato: (11) 99999-9999"
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="(11) 99999-9999"
            />
            {errors.telefone && <p className="text-red-500 text-sm mt-1">{String(errors.telefone.message)}</p>}
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Senha</label>
            <input
              type="password"
              {...register("senha", {
                required: "Senha é obrigatória",
                minLength: { value: 8, message: "A senha deve ter pelo menos 8 caracteres" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: "A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número"
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="Digite sua senha"
            />
            {errors.senha && <p className="text-red-500 text-sm mt-1">{String(errors.senha.message)}</p>}
          </div>

          {/* Confirmar Senha */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Confirmar Senha</label>
            <input
              type="password"
              {...register("confirmarSenha", {
                required: "Confirmação de senha é obrigatória",
                validate: (value, formValues) => value === formValues.senha || "As senhas não coincidem"
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="Confirme sua senha"
            />
            {errors.confirmarSenha && <p className="text-red-500 text-sm mt-1">{String(errors.confirmarSenha.message)}</p>}
          </div>

          {/* Data de Nascimento */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Data de Nascimento</label>
            <input
              type="date"
              {...register("dataNascimento", {
                required: "Data de nascimento é obrigatória",
                validate: (value) => {
                  const today = new Date()
                  const birthDate = new Date(value)
                  const age = today.getFullYear() - birthDate.getFullYear()
                  return age >= 18 || "Você deve ter pelo menos 18 anos"
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            />
            {errors.dataNascimento && <p className="text-red-500 text-sm mt-1">{String(errors.dataNascimento.message)}</p>}
          </div>

          {/* CEP */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">CEP</label>
            <input
              type="text"
              {...register("cep", {
                required: "CEP é obrigatório",
                pattern: {
                  value: /^\d{5}-?\d{3}$/,
                  message: "Formato: 12345-678"
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="12345-678"
            />
            {errors.cep && <p className="text-red-500 text-sm mt-1">{String(errors.cep.message)}</p>}
          </div>

          {/* Cidade */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Cidade</label>
            <input
              type="text"
              {...register("cidade", {
                required: "Cidade é obrigatória",
                minLength: { value: 2, message: "Nome da cidade deve ter pelo menos 2 caracteres" }
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              placeholder="São Paulo"
            />
            {errors.cidade && <p className="text-red-500 text-sm mt-1">{String(errors.cidade.message)}</p>}
          </div>

          {/* Estado */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Estado</label>
            <select
              {...register("estado", {
                required: "Estado é obrigatório"
              })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            >
              <option value="">Selecione seu estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            {errors.estado && <p className="text-red-500 text-sm mt-1">{String(errors.estado.message)}</p>}
          </div>
          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Já tem conta?
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-medium ml-1 transition-colors"
          >
            Faça login aqui
          </Link>
        </p>
      </div>
    </div>
  )
}
