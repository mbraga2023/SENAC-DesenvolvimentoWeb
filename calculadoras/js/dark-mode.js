export default function darkMode() {
    const darkModeToggle = document.getElementById('toggle')
    //ler localStorage
    let modoSelecionado = localStorage.getItem('modo')

    if(modoSelecionado == 'dark'){
    document.body.classList.add('dark-mode')
    toggle.checked = 'true'
    } 

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle('dark-mode')
        // console.log('clicou toggle')
        // let modoSelecionado = 'light'
        // body.className = ''
        // if(darkModeToggle.checked){
        //     modoSelecionado = 'dark'
        //     body.classList.add('dark-mode')

        // }
        const modoSelecionado = darkModeToggle.checked ? "dark" : "light" //operador ternário
        console.log('modo selecionado: ' + modoSelecionado)

        localStorage.removeItem('modo')
        localStorage.setItem('modo', modoSelecionado)
    })
}