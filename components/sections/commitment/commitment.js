import Card from './card';




export default function CommitmentSection({ data }){

 
  return(
    <section className="root-commitment" id="compromisso">
      <div className="shape"></div>
      <header className='root-heading-2'>
        <h2 className="title">Nosso compromisso</h2>
        <p className="subtitle">Temos um compromisso de fazer desafios e gerar avaliações precisas para que você saiba o quanto está evoluíndo. Acreditamos que você merece uma avaliação justa e precisa do seu processo.</p>
      </header>
      <div className="cards">
        { data.map(card => ( <Card key= { card.id } { ...card }/> ))}
      </div>
    </section>
  )
}