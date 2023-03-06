// import SoundPlayer from "react-native-sound-player";

export const SPECIFIC_CARD = "SPECIFIC_CARD";
export const PLAY_ALBUM = "PLAY_ALBUM";

export const converter = (sec) => {
  return Math.round(sec / 60) + ":" + (sec % 60);
};

export const converter2 = (sec) => {
  if (Math.round(sec / 60 / 60) < 1) {
    return `${Math.round(sec / 60)} min`;
  } else if (Math.round(sec / 60 / 60) >= 1) {
    return `${Math.round(sec / 60 / 60)} hr ${Math.round((sec / 60) % 60)} min`;
  } else {
    return "something wrong";
  }
};

// mi da errore a livello dei node... è il terzo player che scarico o_O

// export const playSong = (song) => {
//   try {
//     SoundPlayer.playSoundFile("tone", "mp3");
//     SoundPlayer.playUrl(song);
//   } catch (error) {
//     console.log(`cannot play the sound file`, error);
//   }
// };
