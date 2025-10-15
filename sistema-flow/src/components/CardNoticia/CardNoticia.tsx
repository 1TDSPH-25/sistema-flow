import type { TipoNoticia } from "../../types/tipoNoticia";
import { Link } from "react-router-dom";

export default function CardNoticias(props:{noticia: TipoNoticia}){
    return(
        <div className="cardNoticia">
            <h1>{props.noticia.title}</h1>
            <p>{props.noticia.description}</p>
            <Link to={props.noticia.url}>Saiba mais</Link>
            <img src={props.noticia.urlToImage} alt={props.noticia.title} />
        </div>
    );
}