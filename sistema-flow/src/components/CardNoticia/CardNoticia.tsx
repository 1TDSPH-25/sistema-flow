import type { TipoNoticia } from "../../types/tipoNoticia";
import { Link } from "react-router-dom";

export default function CardNoticias(props:{noticia: TipoNoticia}){
    return(
        <div className="cardNoticia p-7 m-5 gap-4 sm:p-8 md:p-10 md:w-[40vw] lg:p-10 lg:w-[35vw] lg:m-10 xl:w-[25vw] xl:m-5">

            {/* Descrição */}
            <p className="text-gray-700 sm:text-lg md:text-[1rem] lg:text-2x1 font-bold xl:text-[1.3rem] ">{props.noticia.description}</p>

            {/* Imagem */}
            <img className="w-[80vw] rounded-lg sm:w-[75vw] md:w-[30vw] lg:w-[25vw]    xl:w-[18vw]" src={props.noticia.urlToImage} alt={props.noticia.title} />

            {/* Link */}
            <Link className="w-[40vw] h-[5vh] mt-4 text-base sm:text-lg md:text-xl md:w-[30vw] lg:text-2xl lg:w-[15vw] xl:w-[10vw]" to={props.noticia.url}>Saiba mais</Link>

        </div>
    );
}