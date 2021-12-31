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
              <svg xmlns="http://www.w3.org/2000/svg" width="17.544" height="18" viewBox="0 0 17.544 18">
                <path id="Icon_awesome-arrow-down" data-name="Icon awesome-arrow-down" d="M16.766,9.9l.892.892a.96.96,0,0,1,0,1.362l-7.806,7.81a.96.96,0,0,1-1.362,0L.68,12.157a.96.96,0,0,1,0-1.362L1.572,9.9a.965.965,0,0,1,1.378.016L7.562,14.76V3.214a.962.962,0,0,1,.964-.964H9.812a.962.962,0,0,1,.964.964V14.76l4.612-4.841A.958.958,0,0,1,16.766,9.9Z" transform="translate(-0.397 -2.25)" fill="#37474f"/>
              </svg> 
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