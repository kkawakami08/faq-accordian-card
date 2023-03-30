import Head from "next/head"
import Question from "@/components/Question"
import Image from "next/image"
import headerImage from '../public/images/illustration-woman-online-mobile.svg'
import headerImageShadow from '../public/images/bg-pattern-mobile.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>FAQ Accordian Card</title>
      </Head>
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-12 relative grid-rows-2">
          <div className="col-start-3 col-span-8 row-span-2 row-start-1 ">
            <Image 
              src={headerImage}
              alt="Header Image"
              width={500}
              height={500}
            />
          </div>
          <div className="col-start-3 col-span-8 row-start-2 -z-10 ">
            <Image 
              src={headerImageShadow}
              alt="Header Image Shadow"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div>
          <h1>FAQ</h1>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </main>
    </>
  )
}
