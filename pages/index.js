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
        <meta name="description" content="Generated by create next app" />
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
