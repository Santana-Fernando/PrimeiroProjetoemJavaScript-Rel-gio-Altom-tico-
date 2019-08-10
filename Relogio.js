function Atualizar()
{
    var data = new Date()
    var hora = data.getHours()
    var Mensagem = document.getElementById('msg')
    var resultado = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    var periodo = ''

    if(hora >= 6 && hora < 12)
    {
        periodo = 'Dia'
        img.setAttribute('src','img/manha.png.png')
    }
    else if(hora >= 12 && hora < 18)
    {
        periodo = 'Tarde'
        img.setAttribute('src','img/tarde.png.png')
    }
    else
    {
        periodo = 'Noite'
        img.setAttribute('src','img/noite.png.png')
    }
    Mensagem.innerHTML = `<h1> Bom/Boa ${periodo} caro amigo ou amiga </h1>`
    resultado.appendChild(img)
    resultado.innerHTML += `<p> Agora são ${hora} Horas </P>`
}