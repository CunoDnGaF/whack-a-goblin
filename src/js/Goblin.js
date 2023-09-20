export default class Goblin {
    constructor(elem) {
      this.cell = elem.querySelectorAll(".board-cell");
      this.icon = elem.querySelector(".icon");
      this.position = Math.floor(Math.random() * (this.cell.length - 1));
    }
  
    initPosition() {
        this.cell[this.position].appendChild(this.icon);
    }
    
    getRandomPosition() {
      let position = Math.floor(Math.random() * (this.cell.length - 1));
  
      setInterval(() => {
        while (this.position === position) {
            this.position = Math.floor(Math.random() * (this.cell.length - 1));
        }
  
        position = this.position;
        this.cell[this.position].appendChild(this.icon);
      }, 1000);
    }
  }