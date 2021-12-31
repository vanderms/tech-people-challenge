import Image from "next/image";


export default function Card({ image, title, date }){
  
  return(
    <article className="card">
      <div className="image-container">
        <Image src={'/news' + image } layout='fill'/>
      </div>
      <div className="content">
        <div className="date-row">
          <svg className='icon-calendar' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33">
            <g id="Icon_feather-calendar" data-name="Icon feather-calendar" transform="translate(-3 -1.5)">
              <path id="Path_1" data-name="Path 1" d="M7.5,6h21a3,3,0,0,1,3,3V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3V9a3,3,0,0,1,3-3Z" fill="none" stroke="#656465" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
              <path id="Path_2" data-name="Path 2" d="M24,3V9" fill="none" stroke="#656465" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
              <path id="Path_3" data-name="Path 3" d="M12,3V9" fill="none" stroke="#656465" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
              <path id="Path_4" data-name="Path 4" d="M4.5,15h27" fill="none" stroke="#656465" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </g>
          </svg>
          <span>{ date }</span>
        </div>
        <header className="heading-3">
          <h3>{ title }</h3>
        </header>
      </div>     
    </article>
  )
}