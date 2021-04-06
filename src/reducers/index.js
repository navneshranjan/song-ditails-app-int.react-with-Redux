import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "mitwa", duraton: "4:09" },
    { title: "kola", duraton: "3:09" },
    { title: "tum ko paya", duraton: "5:09" },
    { title: "maula", duraton: "4:39" },
    { title: "kal ho na ho", duraton: "2:29" },
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
