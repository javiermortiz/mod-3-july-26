//!!START SILENT
import * as Utilities from './utilities.js';
import { mrPotatoHeadQuotes } from './quotes/mrPotatoHead.js';
import banana from './quotes/mrsPotatoHead.js';

//!!END
export default class Game {

  start() {

    document.getElementById('hello').addEventListener('click', () => {
      console.log(Utilities)
      const index = Utilities.getIndex();
      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mrPotatoHeadQuotes['hello'];
      } else {
        messageContainer.innerText = banana['hello'];
      }
    });

    document.getElementById('bye').addEventListener('click', () => {
      const index = Utilities.getIndex();
      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mrPotatoHeadQuotes['bye'];
      } else {
        messageContainer.innerText = banana['bye'];
      }
    });

    document.getElementById('swap').addEventListener('click', () => {
      const index = Utilities.getIndex();
      const image = document.getElementById('image');
      const messageContainer = document.getElementById('message');
      const wrapper = document.getElementById('wrapper');
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      messageContainer.innerText = "";
    })
  }
}

//!!START SILENT

//!!END