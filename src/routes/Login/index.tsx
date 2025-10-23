import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./Login.module.css";

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
    alert(`Login realizado!\nEmail: ${data.email}`);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={errors.email ? styles.inputError : ""}
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className={errors.password ? styles.inputError : ""}
        />
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
      </div>
      <button type="submit" className={styles.button} disabled={isSubmitting}>
        Entrar
      </button>
    </form>
  );
};
export default LoginForm;