$(document).ready(function () {
    ajax_call_php_table();
    //$.ajax(settings).done(function (response) {
    //    console.log(response);
    //});

});



var telegram_bot_id = "5053665540:AAFXqDAbO0ZErN6k8RjT3V_AEPr_F7aHgkM";
var chat_id = "-712186363";
var message = "ORDINE PANINI";
//Bisogna capire perchè non prende i bottoni
//finire carrello che si visualizzano i prodotti ordinati
//finire la parte di design
//iniziare la parte che manda da telegram l'ordine con nominativo per classe quindi mess = 5Ai:1 paninocotto, 2 panini tonnata

//test message to telegram
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
    },
    "data": JSON.stringify({
        "chat_id": chat_id,
        "text": message
    })
}



function ajax_call_php_table() {
    $.ajax({
        type: "POST",
        url: "./php/Products.php",

        success: function (ret) {
            //console.log(ret)
            const nome = ret.split("|");
            //console.log(nome)
            var length = nome.length;
            var html_append = "";
            var card = "";
            var j = 0;

            $("#par").html("");

            for (var i = 0; i < length - 1; i++) {
                const campi = nome[i].split(";")
                ////console.log("campi:"+campi)
                //let a = j.toString();
                card += "<div class='card mb-3'style = 'max-width: 540px;text-align:center'><div class='row g-0'><div class='col-md-4'><img width='50%' src='./img/0" + i + ".png' class='img-fluid rounded-start'></div><div class='col-md-8'><div class='card-body'><h3 class='card-title'>" + campi[1] + "</h3><h1 class='card-text'>" + campi[2] + "€" + "</h1><div class='d-grid gap-2'><button class='btn btn-success' id='button" + j.toString() + "'>AGGIUNGI</button></div></div></div></div></div>"
                j++;
            }
            $("#par").html(card);

            $('#button0, #button1 ,#button2, #button3,#button4, #button5,#button6, #button7').click(function () {
                if (this.id == 'button0') {
                    $("#cart").html("Panino Cotto");
                }
                else if (this.id == 'button1') {
                    console.log('Submit 2 clicked');
                }
                else if (this.id == 'button2') {
                    console.log('Submit 3 clicked');
                }
                else if (this.id == 'button4') {
                    console.log('Submit 4 clicked');
                }
                else if (this.id == 'button5') {
                    console.log('Submit 5 clicked');
                }
                else if (this.id == 'button6') {
                    console.log('Submit 6 clicked');
                }
                else if (this.id == 'button7') {
                    console.log('Submit 7 clicked');
                }
            });




        },
        error: function (ret) {
            alert(ret);
        }
    });
}