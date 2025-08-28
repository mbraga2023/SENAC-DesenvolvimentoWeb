function chamarApi(){
const btnChamarApi = document.getElementById('chamar-api')
const displayImage = document.getElementById('resultado')

btnChamarApi.addEventListener('click', async ()=>{

    try{
        const req = (await fetch('https://dog.ceo/api/breeds/image/random'))
        const data = await req.json()
        console.log(req)
            displayImage.innerHTML = `<img src="${data.message}" alt="Dog Image" style="max-width: 100%; height: auto;">`;
        } catch (error) {
            console.error('Error fetching the image:', error);
            displayImage.innerHTML = 'Error loading image.';
        }

})
}
chamarApi()