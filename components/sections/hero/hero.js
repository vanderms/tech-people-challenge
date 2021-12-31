import Link from "next/link";
import Image from "next/image";


export default function HeroSection(){
  return(
    <section className="root-hero">
      <div className="content">
        <header>
          <h1 className='title'>Somos um servidor <strong>focado em transição de</strong> carreira</h1>
          <p className='subtitle'>Temos desafios, lives, eventos, tiramos dúvidas e até achamos uma colocação para você. Quer fazer parte? Clique no botão abaixo:</p>
        </header>
        <div className="cta-container">
          <Link href='#compromisso'>
            <a className="cta">Participar
              <img className='icon-svg' src="/icons/arrow-down.svg" alt="icone seta para baixo" />
            </a>
          </Link>
        </div>      
      </div>
      <div className="illustration">
        <div className="img-container">
        <Image src="/cover.png" alt="uma jovem com roupa de formatura" layout='fill'/>
        </div>
        
        <div className="shape"></div>
               
      </div>
    </section>
  )
}