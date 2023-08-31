import { dados } from "../data/dados.js";

let numTriangulo = 0;

document.getElementById("triangulo").style.cssText = `
    cursor: move;
    width: 32px;

    border-left: 32px solid transparent;
    border-right: 32px solid transparent;
    border-bottom: 64px solid orange;
    `
;

export const criatriangulo = (x, y) =>{
    let canvas = document.getElementById("map");
    let triangulo = document.createElement('div');
    let color = "orange";

    numTriangulo++;

    let width = 75;
    let height = 75;

    triangulo.id = "T" + numTriangulo;

    triangulo.style.cssText = `
        position: absolute;
        left: ${x - 128}px;
        top: ${y}px;

        cursor: move;
        width: ${width}px;
        height: ${height}px;

        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid orange;
        `
    ;

    canvas.appendChild(triangulo);
    dados.triangulo.push(
        ["T" + numTriangulo, x - 128 + "px", y + "px", color, `"${width}"`, `"${height}"`]
    );
}