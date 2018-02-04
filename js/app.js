
//*Splash*//
    setTimeout(function() {
        $(".content").fadeIn(1500).fadeOut(1500);
    },1000);
  	setTimeout(function() {
        $(".content2").fadeIn(1500);
    },3000);

//*Modal*//
$(document).ready(function() {

    $(".modal").modal();

    paintPlaces()
    $("#input").keyup(filterPlaces);

     $("a").click(modalPlaces)


});

function paintPlaces() {
    for (var i = 0; i < data.length; i++) {

    var $row = $("<div />").addClass("row");
        var $col = $("<div />").addClass("col s12 m6");
            var $card = $("<div />").addClass("card");
                var $cardImage = $("<div />").addClass("card-image"); 
                    var $imgCard = $("<img />").attr("src", data[i]["photo"]);
                    var $btn = $ ("<a />").addClass("btn-floating halfway-fab waves-effect waves-light red modal-trigger");
                    $btn.attr("href", "#modal1");
                    var $cardIcon = $("<i />").addClass("material-icons");
    
                var $cardContent = $("<div />").addClass("card-content");
                    var $cardTitle = $("<span />").text(data[i]["name"]).addClass("card-title");
                    var $cardMap = $("<p />").addClass("");
                    var $cardDescription = $("<p />").text(data[i]["description"]);
                    var $cardMap = $("<p />").addClass("");

    $cardContent.append($cardTitle);
    $cardContent.append($cardMap);
    $cardContent.append($cardDescription);
    $cardContent.append($cardMap);
    $cardContent.append($cardContent);

    $cardImage.append($cardIcon);
    $cardImage.append($btn);
    $cardImage.append($imgCard);
    $cardImage.append($cardImage);

    
    $card.append($cardImage);
    $card.append($cardContent);
    
    $col.append($card);
    $row.append($col);
    
  $("#after").append($row);
    }
}

/*filtrado*/

function filterPlaces() {
    var search = $('#input').val().trim().toLowerCase();
        var cardTitle = $(".card-title").text();
        $(".card-title").each(function() {
        if ($(this).text().toLowerCase().indexOf(search) === -1) {
            $(this).parents(".card").hide()
        } else {
            $(this).parents(".card").show()
        }
    })
}

/*modal*/

function modalPlaces() {
    var name = $(this).find("nameM").text()
    var parent = $(this).parent();
    var grandParent = parent.parent();

    $("#nameM").text(grandParent.find(".card-content").find(".card-title").text());

    console.log();

}

