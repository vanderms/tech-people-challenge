

export default function Message({ close, active }){
  return(
    <div className={`message ${ active ? 'active' : ''}`}>
      <div className="status">Sucesso!</div>
      <p className="answer">Logo iremos responder o seu contato</p>
      <button className="close" onClick={ close }>fechar</button>
    </div>
  )
}