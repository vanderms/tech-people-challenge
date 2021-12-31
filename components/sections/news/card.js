import Image from "next/image";


export default function Card({ image, title, date }){
  
  return(
    <article className="card">
      <div className="image-container">
        <Image src={'/news' + image } layout='fill' alt='thumbnail da publicação'/>
      </div>
      <div className="content">
        <div className="date-row">
          <img className='icon-svg' src="/icons/calendar.svg" alt="icone calendário" />
          <span>{ date }</span>
        </div>
        <header className="heading-3">
          <h3>{ title }</h3>
        </header>
      </div>     
    </article>
  )
}