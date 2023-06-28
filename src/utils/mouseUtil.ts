const lerp = (a: number, b: number, n: number)  => (1-n)*a+n*b;

const getMousePos = (e: MouseEvent) => {
    let posX = 0;
    let posY = 0;

    if (e.clientX !== undefined || e.clientY !== undefined) {
        posX = e.clientX;
        posY = e.clientY;
    }
    return { x: posX, y: posY};
}

const getSiblings = (e: HTMLElement): HTMLElement[] => {
    let siblings: HTMLElement[] = [];

    if (!e || !(e instanceof HTMLElement)) {
        return siblings; 
    }

    if (e.parentNode === null) {
        return siblings; 
    }

    let sibling = e.parentNode?.firstChild;

    while(sibling) {
        if(sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling as HTMLElement);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

export {lerp, getMousePos, getSiblings}