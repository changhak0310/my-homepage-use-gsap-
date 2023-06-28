import { gsap } from "gsap";
import { lerp, getMousePos, getSiblings } from "@/utils/mouseUtil";

let mouse = { x: 0, y: 0};

if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (ev) => {
      mouse = getMousePos(ev);
    });
}

export default class CursorClass {
  private cursor: HTMLElement;
  private item: NodeListOf<HTMLElement>;
  private hero: HTMLElement;
  private cursorConfigs: {
      x: { previous: number; current: number; amt: number };
      y: { previous: number; current: number; amt: number };
  };
  private onMouseMoveEv: (ev: MouseEvent) => void;

  constructor(el: HTMLElement) {
    this.cursor = el;
    this.cursor.style.opacity = "0";
    this.item = document.querySelectorAll(".mouse");
    this.hero = document.querySelector(".inner")!;
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.7},
      y: { previous: 0, current: 0, amt: 0.7},
    };
    this.onMouseMoveEv = (ev: MouseEvent) => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x;
      this.cursorConfigs.y.previous = this.cursorConfigs.y.previous = mouse.y;
      gsap.to(this.cursor, {
          duration: 1,
          ease: "Power3.easeOut",
          opacity: 1,
      });
      this.onScaleMouse();
      requestAnimationFrame(() => this.render());
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    window.addEventListener("mousemove", this.onMouseMoveEv);
  }

  onScaleMouse() {
    this.item.forEach((link) => {
      if(link.matches(":hover")){
        this.setVideo(link);
        this.scaleAnimation(this.cursor.children[0], 0.8);
      }
      if(link.children[1]){
        link.addEventListener("mouseenter", () => {
          this.setVideo(link);
          this.scaleAnimation(this.cursor.children[0], 0.8);
        });

        link.addEventListener("mouseleave", () => {
          this.scaleAnimation(this.cursor.children[0], 0);
        });

        link.children[1].addEventListener("mouseenter", () => {
          this.cursor.classList.add("media-blend");
          this.scaleAnimation(this.cursor.children[0], 1.2);
        });

        link.children[1].addEventListener("mouseleave", () => {
          this.cursor.classList.remove("media-blend");
          this.scaleAnimation(this.cursor.children[0], 0.8);
        });
      }
    });
  }

  scaleAnimation(el: Element, amt: number) {
    gsap.to(el, {
      duration: 0.6,
      scale: amt,
      ease: "Power3.easeOut",
    });
  }

  setVideo(el: Element) {
    let src = el.getAttribute("data-video-src");
    let video = document.querySelector(`#${src}`) as HTMLElement;
    
    if(video) {
      let siblings = getSiblings(video);

      if(video.id == src) {
        gsap.set(video, { zIndex : 4, opacity: 1});
        siblings.forEach((i) => {
          gsap.set(i, {zIndex: 1, opacity: 0});
        })
      }
    }
  }

  render() {
    this.cursorConfigs.x.current = mouse.x;
    this.cursorConfigs.y.current = mouse.y;
    for(const key in this.cursorConfigs) {
        if (Object.prototype.hasOwnProperty.call(this.cursorConfigs, key)) {
            this.cursorConfigs[key as keyof typeof this.cursorConfigs].previous = lerp(
              this.cursorConfigs[key as keyof typeof this.cursorConfigs].previous,
              this.cursorConfigs[key as keyof typeof this.cursorConfigs].current,
              this.cursorConfigs[key as keyof typeof this.cursorConfigs].amt
            );
        }
    }
    this.cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;

    requestAnimationFrame(() => this.render());
  } 
}

