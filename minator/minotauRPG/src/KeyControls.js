class KeyControls {
    constructor() {
      this.keys = {};
      // Bind event handlers
      document.addEventListener(
        "keydown",
        (e) => {
          if (
            ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "1", "2","3","4"].indexOf(e.key) >=
            0
          ) {
            e.preventDefault();
          }
          this.keys[e.key] = true;
        },
        false
      );
      document.addEventListener(
        "keyup",
        (e) => {
          this.keys[e.key] = false;
        },
        false
      );
    }
    // Handle key actions
    get action() {
      return this.keys[" "];
    }
    get x() {
      // left arrow or A key
      if (this.keys["ArrowLeft"] || this.keys["a"]) {
        return -1;
      }
      // right arrow or D key
      if (this.keys["ArrowRight"] || this.keys["d"]) {
        return 1;
      }
      return 0;
    }
    get y() {
      // up arrow or W key
      if (this.keys["ArrowUp"] || this.keys["w"]) {
        return -1;
      }
      // down arrow or S key
      if (this.keys["ArrowDown"] || this.keys["s"]) {
        return 1;
      }
      return 0;
    }
    get inventory(){
      if(this.keys["1"]){
        return 0;
      }
      else if(this.keys["2"]){
        return 1;
      }
      else if(this.keys["3"]){
        return 2;
      }
      else if(this.keys["4"]){
        return 3;
      }
  }
      
  }
  export default KeyControls;
  