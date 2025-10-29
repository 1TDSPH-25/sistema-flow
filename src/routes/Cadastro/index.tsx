import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
export default function PaginaCadastro() {
   const { register, handleSubmit, formState: { errors } } = useForm()