import Player from './videoConfig'

const Index = () => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    sources: [
      {
        src: '/trailer/f9-trailer.mp4',
      },
    ],
  }

  return (
    <>
      <Player {...videoJsOptions} />
    </>
  )
}

export default Index
