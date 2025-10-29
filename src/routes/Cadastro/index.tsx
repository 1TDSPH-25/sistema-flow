import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function PaginaCadastro() {
  // O tipo 'any' para 'data' é usado para simplificar, mas
  // em um projeto real, você deve definir uma interface TypeScript para o formulário.
  const { register, handleSubmit, formState: { errors } } = useForm()

  function onSubmit(data: any) {
    console.log(data)
    alert('Cadastro realizado com sucesso!')
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h1 className="cadastro-title">
          Cadastre-se 💙
        </h1>
        <p className="cadastro-subtitle">
          Preencha os campos abaixo para se cadastrar.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="cadastro-form">
          {/* Nome */}
          <div className="form-group">
            <label className="form-label">Nome</label>
            <input
              type="text"
              {...register("nome", {
                required: "Nome é obrigatório",
                minLength: { value: 3, message: "O nome deve ter pelo menos 3 caracteres." }
              })}
              className="form-input"
              placeholder="Ex: João Silva"
            />
            {errors.nome && <p className="form-error">{String(errors.nome.message)}</p>}
          </div>

          {/* Nome de usuário */}
          <div className="form-group">
            <label className="form-label">Nome de usuário</label>
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
              className="form-input"
              placeholder="Ex: joaosilva"
            />
            {errors.nomeUsuario && <p className="form-error">{String(errors.nomeUsuario.message)}</p>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  // Regex para validação básica de email
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Insira um email válido."
                }
              })}
              className="form-input"
              placeholder="exemplo@email.com"
            />
            {errors.email && <p className="form-error">{String(errors.email.message)}</p>}
          </div>

          {/* Telefone */}
          <div className="form-group">
            <label className="form-label">Telefone</label>
            <input
              type="tel"
              {...register("telefone", {
                required: "Telefone é obrigatório",
                pattern: {
                  // Regex para o formato (99) 99999-9999 ou (99) 9999-9999
                  value: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
                  message: "Formato: (11) 99999-9999"
                }
              })}
              className="form-input"
              placeholder="(11) 99999-9999"
            />
            {errors.telefone && <p className="form-error">{String(errors.telefone.message)}</p>}
          </div>

          {/* Senha */}
          <div className="form-group">
            <label className="form-label">Senha</label>
            <input
              type="password"
              {...register("senha", {
                required: "Senha é obrigatória",
                minLength: { value: 8, message: "A senha deve ter pelo menos 8 caracteres" },
                pattern: {
                  // Deve conter pelo menos uma letra minúscula, uma maiúscula e um número
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: "A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número"
                }
              })}
              className="form-input"
              placeholder="Digite sua senha"
            />
            {errors.senha && <p className="form-error">{String(errors.senha.message)}</p>}
          </div>

          {/* Data de Nascimento */}
          <div className="form-group">
            <label className="form-label">Data de Nascimento</label>
            <input
              type="date"
              {...register("dataNascimento", {
                required: "Data de nascimento é obrigatória",
                validate: (value) => {
                  const today = new Date()
                  const birthDate = new Date(value)
                  const age = today.getFullYear() - birthDate.getFullYear()
                  
                  // Verifica se já fez aniversário no ano
                  const monthDiff = today.getMonth() - birthDate.getMonth()
                  const dayDiff = today.getDate() - birthDate.getDate()
                  
                  // Se a idade for 18, verifica se o aniversário já passou ou é hoje
                  const is18OrOlder = age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))

                  return is18OrOlder || "Você deve ter pelo menos 18 anos"
                }
              })}
              className="form-input"
            />
            {/* O erro da Data de Nascimento pode precisar de mais espaço, por isso ajustei a classe form-error */}
            {errors.dataNascimento && <p className="form-error">{String(errors.dataNascimento.message)}</p>}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="submit-button"
          >
            Cadastrar
          </button>
        </form>

        <p className="login-link">
          Já tem conta?
          <Link
            to="/login"
          >
            Faça login aqui
          </Link>
        </p>
      </div>
    </div>
  )
}