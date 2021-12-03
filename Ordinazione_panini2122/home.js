let message;
$(document).ready(function () {
    ajax_call_php_table();
    $("#sendBut").click(function(){
        console.log(message);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});


var telegram_bot_id = "5053665540:AAFXqDAbO0ZErN6k8RjT3V_AEPr_F7aHgkM";
var chat_id = "-712186363";


//Bisogna capire perchè non prende i bottoni
//finire carrello che si visualizzano i prodotti ordinati
//finire la parte di design
//iniziare la parte che manda da telegram l'ordine con nominativo per classe quindi mess = 5Ai:1 paninocotto, 2 panini tonnata

//test message to telegram


function ajax_call_php_table() {
    var products = [];
    var price = [];
    $.ajax({
        type: "POST",
        url: "./php/Products.php",

        success: function(ret) {
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
                card += "<div class='card mb-3'style = 'max-width: 540px;text-align:center'><div class='row g-0'><div class='col-md-4'><img width='50%' src='./img/0" + i + ".png' class='img-fluid rounded-start'></div><div class='col-md-8'><div class='card-body'><h3 class='card-title'>" + campi[1] + "</h3><h1 class='card-text'>" + campi[2] + "€" + "</h1><div class='d-grid gap-2'><button class='btn btn-success' id='button" + j.toString() + "'>AGGIUNGI</button></div></div></div></div></div>"
                j++;

                products.push(campi[1]);
                price.push(campi[2])

            }
            $("#par").html(card);
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var e = 0;
            var f = 0;
            var g = 0;
            var h = 0;
            $('#button0, #button1 ,#button2, #button3,#button4, #button5,#button6, #button7').click(function() {
                if (this.id == 'button0') {
                    a++;
                    $("#selection0").text(products[0] + "    x    " + a);
                    message += String(products[0]) + "    x    " + String(a) + " , ";
                   
                } else if (this.id == 'button1') {
                    b++;
                    $("#selection1").text(products[1] + "    x    " + b);

                    message += products[1] + "    x    " + b + " , ";

                } else if (this.id == 'button2') {
                    c++;
                    $("#selection2").text(products[2] + "    x    " + c);
                    message += products[2] + "    x    " + c + " , ";

                } else if (this.id == 'button3') {
                    d++;
                    $("#selection3").text(products[3] + "    x    " + d);
                    message += products[3] + "    x    " + d + " , ";

                } else if (this.id == 'button4') {
                    e++;
                    $("#selection4").text(products[4] + "    x    " + e);
                    message += products[4] + "    x    " + e + " , ";

                } else if (this.id == 'button5') {
                    f++;
                    $("#selection5").text(products[5] + "    x    " + f);
                    message += products[5] + "    x    " + f + " , ";

                } else if (this.id == 'button6') {
                    g++;
                    $("#selection6").text(products[6] + "    x    " + g);
                    message += products[6] + "    x    " + g + " , ";

                } else if (this.id == 'button7') {
                    h++;
                    $("#selection7").text(products[7] + "    x    " + h);
                    message += products[7] + "    x    " + h + " , ";
                }
                console.log(message);
            });
        },
        error: function(ret) {
            alert(ret);
        }
    });
}

const test = String(message);

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
        "text": test

    })
}