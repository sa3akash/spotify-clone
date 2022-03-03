import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";
import { BiPulse } from "react-icons/bi";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
    url: 'home'
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Discover",
    url: 'discover'
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
    url: 'radio'
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
    url: 'artist'
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
    url: 'albums'
  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcast",
    url: 'podcast'
  },
];
export { MenuList };
