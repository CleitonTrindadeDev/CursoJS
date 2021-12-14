function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() //data atual//
    var hora = data.getHours()//chamar a hora atual
    //var hora=18
    msg.innerHTML=`Agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        //carregar imagem da manhã//
        img.src='imagens/manha.png'
        document.body.style.background="#af8651"
    }else if (hora >=12 && hora <18) {
        img.src='imagens/tarde.png'
        document.body.style.background="#775a39"
    }else {
        img.src='imagens/noite.png'
        document.body.style.background="#182d4c"
    }
}
