$(document).ready(function () {
    $("#btnIncluir").click(function () {
        const nome = $("#nome").val()
        if (nome) {
            $("#lista").append(`
                <li>${nome} 
                    <button class='remover'>X</button>
                </li>`)
            $("#nome").val("").focus()
        }
    });
    $("#lista").on("click", ".remover", function(){
        $(this).parent().remove()
    })
});
