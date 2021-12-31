

export default function Card({ title, color, content, icon }){
  
  const style = { backgroundColor: color };
  
  return(
    <article className="card ">
      <div style={ style } className="circle ">
        <img src={"commitments" + icon} alt="icon" />
      </div>     
      <header className="heading-3">
        <h3>{ title }</h3>
      </header>
      <p className="content">{ content }</p>
    </article>
  )
}