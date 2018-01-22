
//-----Data-----//
//var data = [
//  {'name': 'The Capital Grille',
//   'adress':'Paseo de la Reforma 250, Juárez. Dentro del Edificio Capital Reforma, esq. con Niza.',
//   'photo':,
//   'food': 'China'
//    }
//  {'name': 'Buena Barra',
//   'adress':'Paseo2 de la Reforma 250, Juárez. Dentro del Edificio Capital Reforma, esq. con Niza.',
//   'photo':,
//   'food': 'Italiana'}
//  {
//    'name': 'The Palm Santa Fe',
//     'adress':'Paseo3 de la Reforma 250, Juárez. Dentro del Edificio Capital Reforma, esq. con Niza.',
//     'photo':,
//     'food': 'Argentina'
//  }
//  {
//    'name': 'Bellini',
//     'adress':'Paseo4 de la Reforma 250, Juárez. Dentro del Edificio Capital Reforma, esq. con Niza.',
//     'photo':,
//     'food': 'Italiana'
//  }
//  {
//    'name': 'Restaurante Loma Linda',
//     'adress':'Paseo5 de la Reforma 250, Juárez. Dentro del Edificio Capital Reforma, esq. con Niza.',
//     'photo':,
//     'food': 'Mexicana'
//  }
//  {
//    'name': 'Miralto',
//     'adress':'Paseo6 de la Reforma 250, Juárez. Dentro del Edificio Capital Reforma, esq. con Niza.',
//     'photo':,
//     'food': 'Portuguesa'
//  }
//  {
//    'name': 'Mexicanito',
//     'adress':'Paseo7 de la Reforma 250, Juárez. Dentro del Edificio Capital Reforma, esq. con Niza.',
//     'photo':,
//     'food': 'Mexicana'
//  }
//]


//-----Funciones-----//


//*Splash*//
$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeIn(1500).fadeOut(1500);
    },1000);
  
  setTimeout(function() {
        $(".content2").fadeIn(1500);
    },3000);
});

//-----Modal-----//

$(document).ready(function(){
    $('.modal').modal();        //activates all the modals
  });
