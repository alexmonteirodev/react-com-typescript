import React from "react";
import videoSrc from "./videos/video.mp4";

// - useRef
// Devemos definir o tipo de elemento do useRef<Elemento>, quando utilizamos o mesmo para manipularmos objetos/elementos do DOM.

const Aula011 = () => {
  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    console.log(video.current);
  });

  return (
    <div>
      <video controls ref={video} src={videoSrc}></video>
      <div className="flex">
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
    </div>
  );
};

export default Aula011;
