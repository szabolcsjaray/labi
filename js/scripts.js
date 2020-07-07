var grid;
function el(id) {
    return document.getElementById(id);
}

function init() {
    grid = new Grid( 100,100,10,el("baseDiv"));
    grid.draw(10,10, "black");
    grid.draw(12,11, "white");
    grid.draw(10,10, "orange");

    for(let i=0;i<2*Math.PI;i+=0.01) {
        grid.draw(Math.floor(50+Math.cos(i)*40.0), Math.floor(50+Math.sin(i)*40.0), "#"+(Math.floor(i*5)%10)+"00000");
    }
}