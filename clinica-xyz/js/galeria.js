//função para trocas as fotos da galeria
const galeriaDeFotos = () => {
    const miniaturas = document.querySelectorAll('.galeria-miniaturas img')
    miniaturas.forEach(function (fotoAtual) {
        console.log(fotoAtual.src)
        fotoAtual.addEventListener("click",
            function () {
                document.getElementById('foto-grande').src = this.src
            }
        )
    })
}
galeriaDeFotos()

//função para o carrossel chamada pelo HTML - refatoração
// const generica = (indice) =>{
//         document.getElementById('foto-grande').src = `./imagens-ia/foto${indice}.jpg`
// }

//função para a foto - sem refatoração
/*function foto1() {
    const imagem1 = './imagens-ia/foto1.jpg'
    document.getElementById('foto-grande').src = imagem1
}
const foto2 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto2.jpg'
}
const foto3 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto3.jpg'
}
const foto4 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto4.jpg'
}
const foto5 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto5.jpg'
}
const foto6 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto6.jpg'
}
const foto7 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto7.jpg'
}
const foto8 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto8.jpg'
}
const foto9 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto9.jpg'
}
const foto10 = () => {
    document.getElementById('foto-grande').src = './imagens-ia/foto10.jpg'
}*/

