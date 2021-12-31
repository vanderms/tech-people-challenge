import Head from 'next/head';
import CommitmentSection from '../components/sections/commitment/commitment';
import HeroSection from '../components/sections/hero/hero';
import NewsSection from '../components/sections/news/news';
import ScheduleSection from '../components/sections/schedule/schedule';
import FormSection from '../components/sections/form/form';


export async function getStaticProps(){
  const data = await import('../public/data.json'); 

  return {
    props: { 
      commitments: data.commitments,
      news: data.news,
      events: data.events
    }
  }  
}


export default function Home({ commitments, news, events }) {  
  
  return (
    <>
      <Head>
        <title>Tech People</title>
        <meta name="description" content="Tech People: um servidor focado em transição de carreira" />
  
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta property="og:site_name" content="Tech People"/>
        <meta property="og:title" content="Tech People"/>
        <meta property="og:description" content="Tech People: um servidor focado em transição de carreira"/>

        {/* <!-- Image to display -->  */}
        {/* <!-- Replace   «example.com/image01.jpg» with your own -->  */}
        <meta property="og:image" content="https://tech-people-challenge.vercel.app/thumbnail.jpg"/>

        {/* <!-- No need to change anything here -->  */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg"/>

         {/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp -->  */}
        <meta property="og:image:width" content="300"/>
        <meta property="og:image:height" content="300"/>

         {/* <!-- Website to visit when clicked in fb or WhatsApp-->  */}
        <meta property="og:url" content="https://tech-people-challenge.vercel.app/"></meta>


        <link rel="icon" type="image/png" href="/ico.png" />
      </Head>     
      <HeroSection/>
      <CommitmentSection data={ commitments }/>
      <NewsSection data={ news }/>
      <ScheduleSection data={ events }/>
      <FormSection/>
    </>
  )
}
