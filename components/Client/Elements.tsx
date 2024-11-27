import { ClientPathOne, ClientPathTwo } from "../Svg/Svg";
import s from "./client.module.scss";

const Elements = () => {
  return (
    <>
      <div className={`client-path-1 ${s.pathOne}`}>
        <ClientPathOne />
      </div>
      <div className={`client-path-2 ${s.pathTwo}`}>
        <ClientPathTwo />
      </div>
    </>
  );
};

export default Elements;
