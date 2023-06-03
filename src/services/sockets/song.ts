// song.ts

import { socketManager } from './main';

socketManager.getSocket().on('song', (song: any) => {
  console.log(song);
});
