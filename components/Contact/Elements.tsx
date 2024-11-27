import { ContactPathThree, ContactPathTwo } from "../Svg/Svg";
import s from "./contact.module.scss";

const Elements = () => {
  return (
    <>
      <div className={`contact-path-2 ${s.pathTwo}`}>
        <ContactPathTwo />
      </div>
      <div className={`contact-path-3 ${s.pathThree}`}>
        <ContactPathThree />
      </div>
    </>
  );
};

export default Elements;
