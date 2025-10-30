import lupa from "../../assets/lupa.png";
import desconto from "../../assets/etiqueta-de-desconto.png";
import pilulas from "../../assets/pilulas.png";
import estrela from "../../assets/estrela.png";
import cupom from "../../assets/cupom.png"
import almofariz from "../../assets/almofariz-e-pilao.png";
import acetil from "../../assets/acetilcisteina.png";
import fralda from "../../assets/pampers.png";
import sensor from "../../assets/sensor.png";
import suplemento from "../../assets/suplemento.png";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-banner">
        <div className="home-banner-content">
          <h2>Promoções dos Dia!</h2>
          <p>Com até 30% de desconto. Aproveite!</p>
          <a href="#" className="cta-button">
            Confira
          </a>
        </div>
      </section>

      <section className="category-section">
        <h3 className="category-title">Navegue por categorias</h3>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-card-icon">
            <img 
                src= {lupa}
                alt="Ícone de Lupa - Mais Buscados" 
                className="w-full h-full object-contain" 
              />
            </div>
            <p>Mais Buscados</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon">
              <img 
                src= {desconto}
                alt="Ícone de Desconto - Mais Buscados" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            <p>Nossas ofertas</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"><img 
                src= {pilulas}
                alt="Ícone de Desconto - Mais Buscados" 
                className="w-full h-full object-contain" 
              /></div>
            <p>Dose Certa</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"><img 
                src= {estrela}
                alt="Ícone de Desconto - Mais Buscados" 
                className="w-full h-full object-contain" 
              /></div>
            <p>As melhores opções para você</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"><img 
                src= {cupom}
                alt="Ícone de Desconto - Mais Buscados" 
                className="w-full h-full object-contain" 
              /></div>
            <p>Cupons</p>
          </div>
          <div className="category-card">
            <div className="category-card-icon"><img 
                src= {almofariz}
                alt="Ícone de Desconto - Mais Buscados" 
                className="w-full h-full object-contain" 
              /></div>
            <p>Manipulação</p>
          </div>
        </div>
      </section>

      <section className="featured-products-section">
        <h3 className="category-title">Produtos em Destaque</h3>
        
        <div className="remedios-grid">
          <div className="remedio-card">
            <div className="remedio-card-image-container">
              <img
                src={sensor} 
                alt="Imagem do Sensor de Monitoramento de Glicose"
                className="remedio-card-image"
              />
            </div>
            
            <div className="remedio-card-body">
              <h2 className="remedio-card-title">Sensor de Monitoramento de Glicose FreeStyle Libre</h2>
              <span className="remedio-card-quantity">23 unidades</span>
              <p className="remedio-card-price">R$ 329,90</p>
            </div>
          </div>

        
          <div className="remedio-card">
            <div className="remedio-card-image-container">
              <img
                src={fralda} 
                alt="Imagem da Fralda Pampers Confort Sec"
                className="remedio-card-image"
              />
            </div>
            
            <div className="remedio-card-body">
              <h2 className="remedio-card-title">Fralda Pampers Confort Sec XG</h2>
              <span className="remedio-card-quantity">92 unidades</span>
              <p className="remedio-card-price">R$ 129,90</p>
            </div>
          </div>
     
          <div className="remedio-card">
            <div className="remedio-card-image-container">
              <img
                src={acetil} 
                alt="Imagem do Acetilcisteína 600mg"
                className="remedio-card-image"
              />
            </div>
            
            <div className="remedio-card-body">
              <h2 className="remedio-card-title">Acetilcisteína 600mg Laranja bwell</h2>
              <span className="remedio-card-quantity">Restam 6 unidades</span>
              <p className="remedio-card-price">R$ 26,59</p>
            </div>
          </div>

          <div className="remedio-card">
            <div className="remedio-card-image-container">
              <img
                src={suplemento} 
                alt="Imagem do Suplemento Probiótico Infantil Colidis"
                className="remedio-card-image"
              />
            </div>
            
            <div className="remedio-card-body">
              <h2 className="remedio-card-title">Suplemento Probiótico Infantil Colidis Gotas 10ml</h2>
              <span className="remedio-card-quantity">48 unidades</span>
              <p className="remedio-card-price">R$ 165,99</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}