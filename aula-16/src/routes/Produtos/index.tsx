import { useEffect, useRef, useState } from "react";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";
import { CiEdit as Editar} from "react-icons/ci";
import { MdDeleteOutline as Excluir } from "react-icons/md";
const URL_API = import.meta.env.VITE_API_URL_BASE;

export default function Produtos(){

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(()=>{
        
        const fetchData = async ()=>{
            const response = await fetch(URL_API);
            const data:TipoProduto[] = await response.json();
            setProdutos(data); 
        } 
        fetchData();
    },[]);

        const modalRef = useRef<HTMLDialogElement>(null);

        const handleDelete = async (id:string)=>{
            try {
                
                if(id && (id != "0") && (id != "")){
                    await fetch(`${URL_API}/${id}`,{
                        method:"DELETE"
                    });

                    setProdutos(produtos.filter((p)=>p.id != Number(id)));
                    modalRef.current?.close();
                }

            } catch (error) {
                console.error(error);
            }
        }


 
    return(
        <main> 
            <h1>Produtos</h1>
           
          <dialog ref={modalRef}>
            
          </dialog>

            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                        <th>EDITAR</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td> <Link to={`/editar/produtos/${p.id}`}> <Editar/> </Link> | <Link to={`/editar/produtos/${p.id}`}> <Excluir/> </Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>Total de produtos : {produtos.length}</td>
                    </tr>
                </tfoot>
            </table>

        </main>
    );
}