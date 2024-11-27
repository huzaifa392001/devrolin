import { proxy } from "valtio";

type Store = {
  workHeadingPointerEnter: () => void;
  workHeadingPointerLeave: () => void;
};

export const store = proxy<Store>({
  workHeadingPointerEnter: () => {},
  workHeadingPointerLeave: () => {},
});
