function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours();
    var minuto = data.getMinutes();

    msg.innerHTML=`Agora são <strong>${hora}h</strong>.`
    if(hora > 0 && hora <12 ){
        //Bom Dia
        img.src = 'manha.png'
        document.body.style.background ='#a7b0d0'
    }else if(hora >=12 && hora <=18){
        //Boa Tarde
        img.src='tarde.png'
        document.body.style.background ='#fe9900'
    }else{
        //Boa Noite
        img.src='noite.png'
        document.body.style.background ='#021d3a'
    }
}
