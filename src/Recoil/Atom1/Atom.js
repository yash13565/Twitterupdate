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


export const isTweet = atom({
  key: "isTweet",
  default: 0,
});

export const userTweet = atom({
  key: "userTweet",
  default: {},
});

export const userTweetProfile = atom({
  key: "userTweetProfile",
  default: {},
});

export const Personaltweet = atom({
  key: "Personaltweet",
  default: [],
});

export const isTweetreply = atom({
  key: "isTweetreply",
  default: 0,
});

export const Tweetreply = atom({
  key: "Tweetreply",
  default: {},
});


export const forPassingId = atom({
  key: "Passid",
  default:1,
});

export const forLocalStorageIndex = atom({
  key: "forLocalStorageIndex",
  default:0,
});

