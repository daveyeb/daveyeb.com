import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const greetings = [
  'hola',
  'hello',
  'bonjour',
  'hallo',
  'yo',
  'salām',
  'ciao',
  'Привет'
]

const warInUkraine = () => {
  const w = window.open('https://www.google.com/search?q=war%20in%20ukraine#ip=1', '_blank')
  if (w) w.focus()
}

const githubPage = () => {
  const w = window.open('https://github.com/daveyeb', '_blank')
  if (w) w.focus()
}

const linkedInPage = () => {
  const w = window.open('https://linkedin.com/in/daveyeb', '_blank')
  if (w) w.focus()
}

const hikiki = () => {
  const w = window.open('spotify://playlist/6fe0TqRULovt3RySqvXh1w')
  if (w) w.focus()
}

const delulu = () => {
  const w = window.open('spotify://playlist/7iXMp4T8XJdR2juqf60qi2')
  if (w) w.focus()
}
export default function Home() {

  useEffect(() => {
    if (window != undefined) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-691EMM8GS8');

      if (window.location.search.includes("code")) {
        // console.log(window.location.pathname + "api/hello/" + window.location.search)
        fetch(window.location.pathname + "api/hello" + window.location.search).then(res => {
          // console.log(res.json())
        });
      }

    }

  }, [])

  const [hidden, setHidden] = useState("hidden");
  const [list, setList] = useState("");
  const onMouseLeave = () => setHidden("hidden");

  return (
    <div className={styles.container}>
      <Head>
        <title>david yebōah , swe | playlist</title>
        <meta name="description" content="personal website of david.yeboah" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <meta name="msapplication-config" content="favicon/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="flex">
        <div className="sm:w-6/6 md:w-6/12">
          <div className="flex-1 salu bold-text w-6/6 text-4xl mt-20 md:mt-60 md:ml-24" onClick={warInUkraine}>
            <h1 style={{ color: "#FFD500" }}><span>playlist </span><span>🥁</span></h1>
          </div>
          <p className='sm:w-6/6 md:w-4/6 mt-5 md:ml-24 opacity-90 pg-text text-l'>

            Here are some playlists my friends made that I like to listen to when I&apos;m working or just hanging out. Feel free to save or like them. (:
          </p>
          <ul className="sm:w-6/6 md:w-4/6 mt-5 md:ml-24 opacity-90 pg-text ">
            <li className="project-list" onMouseEnter={() => {
              setList("https://i.scdn.co/image/ab67706c0000da8497383c1f6a57b60b6230c9df")
              setHidden("")
            }} onMouseLeave={onMouseLeave} onClick={delulu}>
              <h3 className="text-2xl">Désillusion <span >🔗</span></h3>
            </li>
            <li className="mt-2 project-list" onMouseEnter={() => {
              setList("https://i.scdn.co/image/ab67706c0000da84663367b29fef5185ca6bd979")
              setHidden("")
            }} onMouseLeave={onMouseLeave} onClick={hikiki}>
              <h3 className="text-2xl">KHIKHII <span>🔗</span></h3>
            </li>
          </ul>

          {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6fe0TqRULovt3RySqvXh1w?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

          <div className="mt-5 md:ml-24 text-lg">
            <Link href="/projects" className=' mt-6 uppercase pr-1' style={{ color: "#005BBB" }}>projects</Link><span>|</span>
            <a className='pl-1 mt-6 uppercase pr-1' onClick={githubPage} style={{ color: "#005BBB" }}>github</a><span>|</span>
            <a className='pl-1 mt-6 uppercase pr-1' onClick={linkedInPage} style={{ color: "#005BBB" }}>linkedin</a><span>|</span>
            <Link href="/" className='pl-1 mt-6 uppercase pr-1' style={{ color: "#005BBB" }}>home</Link>
          </div>

          <a className='hidden mt-5 w-32 block md:ml-24 button text-center rounded-lg left-1.5 absolute'>Randomize</a>
        </div>

        <div className={` w-6/12 mt-20 md:mt-60 grid place-content-center ${hidden}`}>
          <Image
            src={list}
            width={500}
            height={500}
            sizes='100vw'
            loading="lazy"
          />
        </div>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-691EMM8GS8"></Script>
      </main>
      <footer className='fixed bottom-2 uppercase'>

      </footer>
      <style jsx>{`
        .button {
          // border: 1px solid coral;
          transition: all 0.15s ease 0s;
          color: #8d0125;
          cursor: pointer;
        }

        .button:hover {
          color: rgba(141, 1, 37, 0.8);
          background-color: rgba(221, 221, 221, 0.2);
        }

        .bold-text {
          // color: #586c72!important;
        }

        .pg-text {
          // color: #6e9197!important;
        }

        h1 > span {
          cursor: pointer;
        }

        .button:active {
          transform: scale(0.9);
        }
    `}</style>
    </div>
  )
}
