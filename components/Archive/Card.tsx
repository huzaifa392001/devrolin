import s from "./archive.module.scss";
import type { Data } from "./data";
import { useState, useEffect } from "react";

type Props = Data & { id: number };

const Card: React.FC<Props> = ({
  imgVarient,
  heading,
  para,
  position,
  id,
  video,
  lessPad,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const img = new Image();
    const pngUrl = `/archive/${id}.png`;
    const webpUrl = `/archive/${id}.webp`;

    // First try loading the PNG
    img.src = pngUrl;
    img.onload = () => setBackgroundImage(pngUrl); // If PNG exists, use it
    img.onerror = () => {
      // If PNG fails, try the WebP version
      const webpImg = new Image();
      webpImg.src = webpUrl;
      webpImg.onload = () => setBackgroundImage(webpUrl); // Fallback to WebP
    };
  }, [id]);

  return (
    <div data-varient={position} className={`archive-card-${id} ${s.card} ${id === 17 ? s.lastCard : ''} ${id === 1 ? s.Id1 : ''} ${id === 2 ? s.Id2 : ''} ${id === 4 ? s.Id4 : ''} ${id === 5 ? s.Id5 : ''} ${id === 7 ? s.Id7 : ''} ${id === 8 ? s.Id8 : ''} ${id === 12 ? s.Id12 : ''} ${id === 15 ? s.Id15 : ''}`}>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        data-varient={imgVarient}
        className={s.card_img}
      >
        {video && (
          <iframe
            src={video}
            className={s.card_video}
            frameBorder={0}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        )}
      </div>

      <div data-varient={imgVarient} data-less={lessPad} className={s.card_box}>
        <div>
          {heading.map((e, i) => (
            <h2 key={i} >{e}</h2>
          ))}
        </div>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Card;
