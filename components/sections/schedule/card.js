

export default function Card({ title, description, date, time }){

  const [day, month] = date.split(' ');

  return(
    <article className="card">      
      <div className="container">
        <div className="date-and-title">
          <div className="date">
            <span className="day">{ day }</span>
            <span className="month">{ month }</span>
          </div>
          <header className="root-heading-3">
            <h3>{ title }</h3>
          </header>
        </div>
        
        <p className="description">{ description }</p>
      </div>          
      <div className="cta-and-time">
        <button className="join">
          <span>Participar</span> 
          <img className='icon-svg' src="/icons/arrow-right.svg" alt="icone seta para a direita" />
        </button>
        <div className="time">
          <img className="icon-svg" src="/icons/clock.svg" alt="icone relógio" />
          <span>{ time }</span>
        </div>
      </div>
    </article>
  )
}