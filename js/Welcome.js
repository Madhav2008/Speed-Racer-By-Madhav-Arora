class Welcome {
  constructor() {
    this.logoImage = "./assets/title.png";
    this.logo = createImg(this.logoImage, "gameTitle");

    this.hostButton = createButton("Host The Game");
    this.joinButton = createButton("Join The Game");
  }

  hideElements() {
    this.hostButton.hide();
    this.joinButton.hide();
  }

  setElementPosition() {
    this.logo.position(210, 100);
    this.hostButton.position(width / 2.3, height / 2 - 100);
    this.joinButton.position(width / 2.3, height / 2);
  }

  setElementStyle() {
    this.logo.class("gameTitle");
    this.hostButton.class("customButton");
    this.joinButton.class("customButton");
  }

  handleOnpress() {
    this.hostButton.mousePressed(() => {
      this.hideElements();
      host.display();
    });

    this.joinButton.mousePressed(() => {
      this.hideElements();
      join.display();
    });
  }

  display() {
    this.setElementStyle();
    this.setElementPosition();
    this.handleOnpress();
  }
}