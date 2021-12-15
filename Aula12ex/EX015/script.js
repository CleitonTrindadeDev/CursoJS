function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//pegar 4 digitos , ex: 2019//
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO, verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano  - Number(fano.value)
        var gênero = '' //variavel vazia
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src','homem-crianca.png')
            }else if(idade < 21) {
                //jovem
                img.setAttribute('src','homem-jovem.png')
            }else if (idade<50){
                //adulto
                img.setAttribute('src','homem-adulto.png')
            }else{
                //idoso
                img.setAttribute('src','homem-idoso.png')
            }

        }else if (fsex[1].checked){
            gênero= 'Mulher'
        }if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade>=0 && idade <10){
                //criança
            }else if(idade < 21) {
                //jovem
            }else if (idade<50){
                //adulto
            }else{
                //idoso
            }
        res.style.textAlign= 'center'
        res.innerHTML = `Gênero = ${gênero} e Idade = ${idade} anos.`
        Res.appendChild(img)
        }
    }
}