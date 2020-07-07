function Grid( width, height, size, divEl) {
    this.width = width;
    this.height = height;
    this.size = size;
    this.el = divEl;
    this.pixels = [];
}

Grid.prototype.findPixel = function(x,y) {
    let retPix = null;
    this.pixels.forEach(element => {
        if (element.x==x && element.y==y) {
            retPix = element;
        }
    });
    return retPix;
}

Grid.prototype.draw = function(x,y,col) {
    pixel = this.findPixel(x,y);
    if (pixel!=null) {
        pixel.col = col;
        pixel.el.style.backgroundColor = col;

    } else {
        let newPixel = {'x':x, 'y':y, 'col': col};

        let pixEl = document.createElement("div");
        pixEl.style.width = this.size+"px";
        pixEl.style.height = this.size+"px";
        pixEl.style.position = "absolute";
        pixEl.style.top = y*this.size+"px";
        pixEl.style.left = x*this.size+"px";
        pixEl.style.backgroundColor = col;
        this.el.appendChild(pixEl);
        newPixel.el = pixEl;
        this.pixels.push(newPixel);
    }
}