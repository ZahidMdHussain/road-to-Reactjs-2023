import home from "../assets/img/home.png";
import shorts from "../assets/img/shorts.png";
import subscribe from "../assets/img/subscribe.png";
import library from "../assets/img/video-library.png";
import history from "../assets/img/history.png";
import myvideo from "../assets/img/play.png";
import watch from "../assets/img/clock.png";
import liked from "../assets/img/like.png";
import trend from "../assets/img/trending-topic.png";
import shop from "../assets/img/bag.png";
import music from "../assets/img/music-note.png";
import movie from "../assets/img/clapperboard.png";
import game from "../assets/img/console.png";
import news from "../assets/img/newspaper-folded.png";
import learn from "../assets/img/knowledge.png";
import sport from "../assets/img/trophy.png";

import archaeo from "../assets/img/archaeologist.png";
import woman from "../assets/img/woman.png";
import adult from "../assets/img/adult.png";
import client from "../assets/img/client.png";
import indwoman from "../assets/img/indian-woman.png";
import lady from "../assets/img/lady.png";

export const sidemenuSectionOne = [
  {
    menuId: 1,
    img: home,
    text: "Home",
  },
  {
    menuId: 2,
    img: shorts,
    text: "Shorts",
  },
  {
    menuId: 3,
    img: subscribe,
    text: "Subscriptions",
  },
];

export const sidemenuSectionTwo = [
  {
    menuId: 4,
    img: library,
    text: "Library",
  },
  {
    menuId: 5,
    img: history,
    text: "History",
  },
  {
    menuId: 6,
    img: myvideo,
    text: "Your videos",
  },
  {
    menuId: 7,
    img: watch,
    text: "Watch later",
  },
  {
    menuId: 8,
    img: liked,
    text: "Liked videos",
  },
];

export const sidemenuSectionThree = [
  {
    menuId: 9,
    img: trend,
    text: "Trending",
  },
  {
    menuId: 10,
    img: shop,
    text: "Shopping",
  },
  {
    menuId: 11,
    img: music,
    text: "Music",
  },
  {
    menuId: 12,
    img: movie,
    text: "Movies",
  },
  {
    menuId: 13,
    img: game,
    text: "Gaming",
  },
  {
    menuId: 14,
    img: news,
    text: "News",
  },
  {
    menuId: 15,
    img: learn,
    text: "Learning",
  },
  {
    menuId: 16,
    img: sport,
    text: "Sports",
  },
];

export const commentsData = [
  {
    id: "001",
    userAvatar: lady,
    name: "Lavanya Kannan",
    text: "I truly love your channel. Keep doing the best work. ",
    replies: [],
  },
  {
    id: "002",
    userAvatar: woman,
    name: "Diksha Sama",
    text: "Officially the first viewer of any video on this channel.",
    replies: [
      {
        id: "003",
        userAvatar: indwoman,
        name: "Apurva Deo",
        text: "You’re working so hard, may all your wishes come true. ",
        replies: [],
      },
    ],
  },
  {
    id: "004",
    userAvatar: woman,
    name: "Nisha Pall",
    text: "When watching your videos, I accidentally hit ‘like’ and never knew when. ",
    replies: [
      {
        id: "005",
        userAvatar: lady,
        name: "Sneha Garg",
        text: "Glad that finally, I got to watch the original video.",
        replies: [
          {
            id: "006",
            userAvatar: archaeo,
            name: "Amar Oza",
            text: "I simply love your video style, truly refreshing and creative.  ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "006",
    userAvatar: client,
    name: "Ajit Nagy",
    text: "So happy that your videos are now coming regularly, I was missing them. ",
    replies: [],
  },
  {
    id: "007",
    userAvatar: lady,
    name: "Arushi Chakrabarti",
    text: "I pray whoever reads this right now, may you get everything you wish. ",
    replies: [
      {
        id: "008",
        userAvatar: adult,
        name: "Harsh Merchant",
        text: "I was feeling lost in life, glad that your comment came at right time now, i know what i wish for ♥️.",
        replies: [],
      },
    ],
  },
];
