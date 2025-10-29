import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
export default function PaginaCadastro() {
   const { register, handleSubmit, formState: { errors } } = useForm()

   function onSubmit(data: any) {
  console.log(data)
  alert('Cadastro realizado com sucesso!')
}
return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-300 via-emerald-400 to-green-600 p-4"></div>
   <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md transition-all hover:shadow-green-300/50"></div>