

export default function Footer(){
  return (
    <footer className="root-footer">
      <img className='logo' src="/vertical-logo.svg" alt="logo" />
      <div className="copyright">Iniciativa Pessoas de Tech Todos os direitos reservados</div>
      <div className="spacing"></div>
      <div className="social-links">
        <a href="https://www.facebook.com/" aria-label='link para o facebook' target="_blank" rel="noopener noreferrer">
         <img src="/icons/facebook.svg" alt="icone facebook" />
        </a>
        <a href="https://twitter.com/" aria-label='link para o twitter' target="_blank" rel="noopener noreferrer">
         <img src="/icons/twitter.svg" alt="icone twitter" />
        </a>
        <a href="https://www.instagram.com/" aria-label='link para o instagram' target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="icone instagram" />
        </a>
      </div>
    </footer>
  )
}