import Card from './card';

export default function NewsSection({ data }){
 
  
  return(
    <section className="root-news" id='noticias'>
      <header className="root-heading-2">
        <h2 className="title">Notícias</h2>
        <p className="subtitle">Listamos abaixo algumas notícias de tecnologia que nos motivam a estar ativos diariamente neste nosso projeto.</p>
      </header>
      <div className="cards">
        { data.map(card => (<Card key={ card.id} {...card} />))}
      </div>
    </section>
  )
}