import {
  MenuPathEight,
  MenuPathFive,
  MenuPathFour,
  MenuPathOne,
  MenuPathSeven,
  MenuPathSix,
  MenuPathThree,
  MenuPathTwo,
} from "../Svg/Svg";
import s from "./header.module.scss";
const MenuElements = () => {
  return (
    <>
      {/* <div className="hover-path-menu-1"> */}
      <div className={`path-menu-1 ${s.pathMenuOne}`}>
        <MenuPathOne />
      </div>
      {/* </div> */}
      <div className={`path-menu-2 ${s.pathMenuTwo}`}>
        <MenuPathTwo />
      </div>
      <div className={`path-menu-3 ${s.pathMenuThree}`}>
        <MenuPathThree />
      </div>
      <div className={`path-menu-4 ${s.pathMenuFour}`}>
        <MenuPathFour />
      </div>
      <div className={`path-menu-5 ${s.pathMenuFive}`}>
        <MenuPathFive />
      </div>
      <div className={`path-menu-6 ${s.pathMenuSix}`}>
        <MenuPathSix />
      </div>
      <div className={`path-menu-7 ${s.pathMenuSeven}`}>
        <MenuPathSeven />
      </div>
      <div className={`path-menu-8 ${s.pathMenuEight}`}>
        <MenuPathEight />
      </div>
    </>
  );
};

export default MenuElements;
