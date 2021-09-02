import { data } from 'autoprefixer'
import Head from 'next/head'
import { useEffect } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import LargeCard from '../components/LargeCard'
import { MediumCards } from '../components/MediumCards'
import SmallCard from '../components/SmallCard'

export default function index({exploreData,liveNearbyData}) {

  return (
    <div>
      <Head>
        <title>Air Bnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">

          {/* Nearby Section */}
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({img,location,distance}) => (
              <SmallCard key={img} img={img} location={location} distance={distance}/>
            ))}
          </div>

          {/* Live Anywhere */}
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
              {liveNearbyData.map(({img,title}) => (
                <MediumCards key={img} img={img} title={title}/>
              ))}
            </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
          />
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json());
  const liveNearbyData = await fetch("https://links.papareact.com/zp1")
    .then((res) => res.json());

  return {
    props:{
      exploreData,
      liveNearbyData
    }
  }
}
