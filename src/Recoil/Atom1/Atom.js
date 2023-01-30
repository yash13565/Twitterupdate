import { atom } from "recoil";


export const isLoginAtom = atom({
  key: "isLogin",
  default: true,
});


export const isTweetPost = atom({
  key: "isPost",
  default: 0,
});


export const userProfile = atom({
  key: "userProfile",
  default: {},
});
