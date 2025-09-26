import { useForm } from "react-hook-form"
import type { TipoProduto } from "../../types/tipoProduto";
import { useNavigate } from "react-router-dom";
const URL_API = import.meta.env.VITE_API_URL_BASE;

export default function CadProduto() {

    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm<TipoProduto>({
        mode:"onChange"
    });

    const onSubmit = (data:TipoProduto) => {

        try {
           ( async () => { 
            await fetch(URL_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            alert("Produto cadastrado com sucesso!");
            navigate("/produtos");
              })();
        } catch (error) {
            alert("Erro ao cadastrar o produto!");
            console.error("Erro ao cadastrar o produto:", error);
        }
    }

  return (
    <main className="classePrincipal">
            <h1>Cadastro de Produtos</h1>

            <div>
                <form className="frmEditar" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nome Produto:</label>
                        <input type="text" {...register("nome", { required: true, maxLength: 100 })}
                            aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} />
                        {errors.nome && <p id="nome-error" className="mt-1 text-sm text-red-500">{errors.nome.message}</p>}
                    </div>
                    <div>
                        <label>Preço:</label>
                        <input type="number" step="0.01" {...register("preco", { valueAsNumber: true, required: true })}
                            aria-invalid={!!errors.preco} aria-describedby={errors.preco ? "preco-error" : undefined} />
                        {errors.preco && <p id="preco-error" className="mt-1 text-sm text-red-500">{errors.preco.message}</p>}
                    </div>
                    <div>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>

        </main>
  )
}
