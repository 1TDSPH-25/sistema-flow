import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./LoginForm.module.css";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter ao menos 6 caracteres"),
});

type LoginFormInputs = z.infer<typeof schema>;

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    alert(Login realizado!\nEmail: ${data.email});
    // Adicione aqui sua lógica de autenticação
  };