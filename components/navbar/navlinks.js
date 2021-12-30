import Link from "next/link";


export default function Navlinks({ onClick }){
  return(
    <ul className="navlinks" onClick={ onClick }>
      <li><Link href='#'><a>Home</a></Link></li>
      <li><Link href='#compromisso'><a>Compromisso</a></Link></li>
      <li><Link href='#noticias'><a>Notícias</a></Link></li>
      <li><Link href='#agenda'><a>Agenda</a></Link></li>
    </ul>
  )
}