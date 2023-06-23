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
            opacity:1,
        });
        requestAnimationFrame(() => this.render());
        window.removeEventListener("mousemove", this.onMouseMoveEv);
      };
      window.addEventListener("mousemove", this.onMouseMoveEv);
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

