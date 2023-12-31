import { ImportQuadrado, Importtriangulo, ImportCirculo } from "./loadFiles.js";

document.getElementById("myfile").addEventListener("click", () => {
    const fileInput = document.getElementById("meujson");
    fileInput.click();
});

const fileInput = document.getElementById("meujson");
fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonData = e.target.result;
            try {
                const resposta = JSON.parse(jsonData);

                for (let i = 0; i < resposta.quadrado.length; i++) {
                    ImportQuadrado(resposta.quadrado[i][1], resposta.quadrado[i][2], resposta.quadrado[i][3], resposta.quadrado[i][4], resposta.quadrado[i][5], resposta.quadrado[i][6], resposta.quadrado[i][7]);
                }

                for (let i = 0; i < resposta.circulo.length; i++) {
                    ImportCirculo(resposta.circulo[i][1], resposta.circulo[i][2], resposta.circulo[i][3], resposta.circulo[i][4], resposta.circulo[i][5]);
                }

                for (let i = 0; i < resposta.triangulo.length; i++) {
                    Importtriangulo(resposta.triangulo[i][1], resposta.triangulo[i][2], resposta.triangulo[i][3], resposta.triangulo[i][4], resposta.triangulo[i][5], resposta.quadrado[i][7]);
                }
            } catch (error) {
                console.error("Erro ao analisar o JSON:", error);
            }
        };
        reader.readAsText(file);
    } else {
        console.log("Nenhum arquivo selecionado.");
    }
});