import React from "react";
import videoSrc from "./videos/video.mp4";

const Aula012 = () => {
  const [playing, setPlaying] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);

  function forward() {
    if (video.current) {
      video.current.currentTime += 2;
    }
  }
  function changePlayBackRate(speed: number) {
    if (video.current) {
      video.current.playbackRate = speed;
    }
  }
  function mute() {
    if (!video.current) return; //sintaxe alternativa - se isso não existir retorna e tudo que vem a seguir é porque existe.
    video.current.muted = !video.current.muted;
  }

  async function pictureInPicture() {
    if (!video.current) return;
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.current.requestPictureInPicture();
    }
  }

  return (
    <div>
      <div className="flex">
        {playing ? (
          <button onClick={() => video.current?.pause()}>Pause</button>
        ) : (
          <button onClick={() => video.current?.play()}>PLay</button>
        )}
        <button onClick={forward}>+ 2s</button>
        <button onClick={() => changePlayBackRate(1)}>1x</button>
        <button onClick={() => changePlayBackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={() => mute()}>Mute</button>
      </div>
      <video
        controls
        muted
        ref={video}
        src={videoSrc}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      ></video>
    </div>
  );
};

export default Aula012;

//----------------------------

// - essa foi a sua solução, porém o react tem event nativo que ve se o video esta tocando ou nao com o onPlay.

// import React from "react";
// import videoSrc from "./videos/video.mp4";

// // Adicione funcionalidades ao player de vídeo:

// // 1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
// // 2 - Função para avançar o vídeo em +2s.
// // 3 - Função para alterar o playbackRate do vídeo.
// // 4 - Função para entrar/sair do modo pictureInPicture.
// // 5 - Função para alternar o som (mudo/não mudo) do vídeo.

// const Aula012 = () => {
//   const [playing, setPLaying] = React.useState(false);

//   const video = React.useRef<HTMLVideoElement>(null);

//   console.dir(video.current);

//   React.useEffect(() => {
//     const videoCurrent = video?.current;

//     if (!videoCurrent) return;

//     const updatePlaying = () => {
//       const isPlaying =
//         videoCurrent.currentTime > 0 &&
//         !videoCurrent.paused &&
//         !videoCurrent.ended &&
//         videoCurrent.readyState >= 2;
//       setPLaying(isPlaying);
//     };

//     videoCurrent.addEventListener("play", updatePlaying);
//     videoCurrent.addEventListener("pause", updatePlaying);
//     videoCurrent.addEventListener("ended", updatePlaying);

//     updatePlaying();

//     return () => {
//       videoCurrent.removeEventListener("play", updatePlaying);
//       videoCurrent.removeEventListener("pause", updatePlaying);
//       videoCurrent.removeEventListener("ended", updatePlaying);
//     };
//   }, [video]);

//   function veloReprod(value: number) {
//     if (video.current) {
//       video.current.playbackRate = value;
//     }
//   }

//   function adiantarVideo(value: number) {
//     if (video.current) {
//       video.current.currentTime += value;
//     }
//   }
//   function toggleMuted() {
//     if (video.current) {
//       if (video.current.hasAttribute("muted")) {
//         video.current.removeAttribute("muted");
//         video.current.muted = false;
//       } else {
//         video.current.setAttribute("muted", "");
//         video.current.muted = true;
//       }
//     }
//   }
//   return (
//     <div>
//       <div className="flex">
//         <button
//           onClick={
//             playing === false
//               ? () => video.current?.play()
//               : () => video.current?.pause()
//           }
//         >
//           {playing === false ? "Play" : "Pause"}
//         </button>
//         <button onClick={() => adiantarVideo(2)}>+ 2s</button>
//         <button onClick={() => veloReprod(1.0)}>1x</button>
//         <button onClick={() => veloReprod(2.0)}>2x</button>
//         <button>PiP</button>
//         <button onClick={toggleMuted}>M</button>
//       </div>
//       <video controls muted ref={video} src={videoSrc}></video>
//     </div>
//   );
// };

// export default Aula012;
