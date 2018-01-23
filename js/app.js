


var data = data;
//*Modal*//
$(document).ready(function() {
   $('.modal').modal();  

//*Splash*//
    setTimeout(function() {
        $(".content").fadeIn(1500).fadeOut(1500);
    },1000);
  	setTimeout(function() {
        $(".content2").fadeIn(1500);
    },3000);

//*Pintar-Info*//
	//pintarInfo()
    //$('#input').keyup(filterRestaurants)
    //$('.modal').modal();
    //$('a').click(paintModal)

paintModal()
$(".modal1").keyup();

//-----Funciones para pintar info-----//
function paintModal() {
    var name = $(this).find('h4').text()
    console.log(this);

    var adress = $(this).find('.adress').text()
    var food = $(this).find('.food').text()
    var time = $(this).find('.time').text()
    var pic = $(this).find('.pic').attr('src')
    console.log(pic)
    $('#name-modal').text(name)
    $('#adress-modal').text(adress)
    $('#food-modal').text(food)
    $('#time-modal').text(time)
    $('#pic-modal').attr('src', pic)
}

//function pintarInfo() {
//    for (var i = 0; i < data.length; i++) {
//        var $gralInfo = $('<div />', { 'class': 'square' });	
//        var $infoCard = $('<a />', { 'class': 'waves-effect waves-light modal-trigger' });
//        $infoCard.text('<p />', 'test!');
//        $infoCard.attr('href', '#modal1');
//        var $infoName = $('<h4 />');
//        var $infoAdress = $('<p />', { 'class': 'adress' });
//        var $infoImages = $('<img />', { 'class': 'images' });
//        $infoImages.attr('src', data[i]['photo']);


        //var $infoFood = $('<p />', { 'class': 'food' });
        //var $infoTime = $('<p />', { 'class': 'time' });
        //$infoName.append(data[i]['name']);
        //$infoAdress.append(data[i]['adress']);
        //$infoFood.append('Comida: ' + data[i]['food']);
        //$rinfoTime.append('Horario: ' + data[i]['horarios']);
        //$('.content2').append($gralInfo);
//    }
//}


});