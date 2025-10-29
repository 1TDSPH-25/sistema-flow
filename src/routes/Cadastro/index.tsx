import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
export default function PaginaCadastro() {
   const { register, handleSubmit, formState: { errors } } = useForm()

   function onSubmit(data: any) {
  console.log(data)
  alert('Cadastro realizado com sucesso!')
}