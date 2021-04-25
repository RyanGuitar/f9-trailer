import '../styles/global.css'
import 'video.js/dist/video-js.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

function App({ Component, pageProps }) {
  
  return (
    <>
     <Head>
      <title>F9-Trailer</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
      <Link href="/show-trailer">
        <a className="movie-icon">
        <Image
          src="/icons/movie.png"
          width={45}
          height={45}
        />
        </a>
      </Link>
      <Link href="/show-music">
        <a className="music-icon">
        <Image
          src="/icons/music.png"
          width={45}
          height={45}
        />
        </a>
      </Link>
      <Link href="/">
        <a className="back-icon">
        <Image
          src="/icons/back.png"
          width={45}
          height={45}
        />
        </a>
      </Link>
    </>
  )
}

export default App