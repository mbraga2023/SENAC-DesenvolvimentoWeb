$(document).ready(function () {
    $("#btnMostrar").click(function () {
        console.log('clicou Mostrar')
        $('#box').show()
    });
    $("#btnEsconder").click(function () {
        console.log('clicou Esconder')
        $('#box').hide()
    });
    $("#btnAlternar").click(function () {
        console.log('clicou Alternar')
        $('#box').toggle()
    })
    $("#btnFade").click(function () {
        console.log('clicou Fade')
        $('#box').fadeToggle(1000)
    })
    $("#btnSlide").click(function () {
        console.log('clicou Slide')
        $('#box').slideToggle(1000)
    })
    $("#btnAnimar").click(function () {
        console.log('clicou Animar')
        $('#box').show().animate({
            width: '300px',
            height: '300px',
            opacity: 0.5,
            borderRadius: '50%'
        }, 2000).animate({
            width: '150px',
            height: '150px',
            opacity: 1,
            borderRadius: '10%'
        })

    })
     $("#btnAnimar2").click(function () {
        console.log('clicou Animar');
        const box = $('#box');
        box.show();

        let loops = 30;
        let angle = 0;
        let i = 0;

        function goCrazy() {
            if (i >= loops) return;

            angle += 45;

            const newWidth = Math.floor(Math.random() * 200 + 50);
            const newHeight = Math.floor(Math.random() * 200 + 50);
            const newBorderRadius = Math.floor(Math.random() * 50) + "%";
            const newOpacity = Math.random();
            const rotateDeg = angle;

            box.animate({
                width: newWidth + "px",
                height: newHeight + "px",
                opacity: newOpacity,
                borderRadius: newBorderRadius
            }, 500, function () {
                box.css({
                    transform: `rotate(${rotateDeg}deg) scale(${Math.random() * 1.5 + 0.5})`,
                    backgroundColor: getRandomColor()
                });

                i++;
                goCrazy();
            });
        }

        goCrazy();
    });

    // Utility function moved OUTSIDE the click handler
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }


})