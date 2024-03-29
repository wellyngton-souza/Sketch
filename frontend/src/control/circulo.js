import { dados } from "../data/dados.js";
import { updateDados } from "../../../backend/updateProject.js";

export const criaCirculo = (x, y) =>{
    let numCirculo = dados.circulo.length;
    let canvas = document.getElementById("map");
    let circulo = document.createElement('div');

    let width = 60;
    let height = 60;
    let color = "#f472b6";

    numCirculo++;

    circulo.id = "C" + numCirculo;

    circulo.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        
        width: ${width}px;
        height: ${height}px;

        border-radius: 500px;

        cursor: move;
        color: white;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;

        /* box-shadow: 10px 10px 18px 0px rgba(0,0,0,0.75); */
        background-color: ${color};
        `
    ;
    
    canvas.appendChild(circulo);
    dados.circulo.push(
        ["C" + numCirculo, x + "px", y + "px", color, width, height]
    );

    updateDados();
}