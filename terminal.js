class Terminal {
  constructor(container, lineCount) {
    this.container = container;
    this.lineCount = lineCount;
    this.lines = [];
    this.chars = "qwertyuiop[]{}asdfghjkl;:'|zxcvbnm?/1234567890-=+";
    this.iterCount = 150;
    this.chance = 0.8;
  }

  start() {
    this.container.classList.add("terminal-wrapper");
    for (let i = 0; i < this.lineCount; i++) {
      this.appendLine();
    }
    setInterval(() => this.drawChars(), 500);
  }

  drawChars() {
    for (let line of this.lines) {
      line.innerHTML = this.iterChars();
    }
  }

  appendLine() {
    const div = document.createElement("div");
    div.classList.add("terminal-col");
    this.lines.push(div);
    this.container.appendChild(div);
  }

  iterChars() {
    let str = "";
    for (let i = 0; i < this.iterCount; i++) {
      const r = Math.random();
      const char = this.chars[Math.randInt(0, this.chars.length - 1)];
      if (r > this.chance) str += `<span class='${char}'>`;
      str += char;
      if (r > this.chance) str += "</span>";
    }
    return str;
  }
}
