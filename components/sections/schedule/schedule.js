import { useState } from "react";
import Card from "./card";

export default function ScheduleSection({ data }){
  
  const [page, setPage] = useState(0);
  const first = data[page * 2];
  const second = data[page * 2 + 1];

  return(
    <section className="root-schedule" id='agenda'>
      <header className="root-heading-2">
        <h2 className="title">Anota aí na nossa agenda</h2>
        <p className="subtitle">Temos um monte de eventos que estamos criando no nosso servidor. Fique de olho que sempre tem coisa boa!</p>
      </header>
      <div id="eventos"></div>
      <div className="cards">
        <Card { ...first }/>
        <Card { ... second }/>
      </div>
      <div className="pagination">
        <a
          className={ page == 0 ? 'active' : null }
          aria-label='exibir eventos 1 e 2' 
          href="#eventos" 
          onClick={ () => setPage(0) }
        ></a>
        <a 
          className={ page == 1 ? 'active' : null }
          aria-label='exibir eventos 3 e 4' 
          href="#eventos" 
          onClick={ () => setPage(1) }
        ></a>
        <a
          className={ page == 2 ? 'active' : null } 
          aria-label='exibir eventos 5 e 6' 
          href="#eventos" 
          onClick={ () => setPage(2) }
        ></a>
        <a 
          className={ page == 3 ? 'active' : null }
          aria-label='exibir eventos 7 e 8' 
          href="#eventos" 
          onClick={ () => setPage(3) }
        ></a>
      </div>
    </section>
  )
}