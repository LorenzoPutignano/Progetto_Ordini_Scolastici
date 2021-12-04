var test = "";
$(document).ready(function () {
    ajax_call_php_table();
    $("#sendBut").click(function () {
        test += document.getElementById('selection0').textContent + "\n";
        test += document.getElementById('selection1').textContent + "\n";
        test += document.getElementById('selection2').textContent + "\n";
        test += document.getElementById('selection3').textContent + "\n";
        test += document.getElementById('selection4').textContent + "\n";
        test += document.getElementById('selection5').textContent + "\n";
        test += document.getElementById('selection6').textContent + "\n";
        test += document.getElementById('selection7').textContent + "\n";
        execute();
    });
});


var telegram_bot_id = "5053665540:AAFXqDAbO0ZErN6k8RjT3V_AEPr_F7aHgkM";
var chat_id = "-712186363";
var cart = {
    nome0: "",
    quantity0: "",
    price0: "",

    nome1: "",
    quantity1: "",
    price1: "",

    nome2: "",
    quantity2: "",
    price2: "",

    nome3: "",
    quantity3: "",
    price3: "",

    nome4: "",
    quantity4: "",
    price4: "",

    nome5: "",
    quantity5: "",
    price5: "",

    nome6: "",
    quantity6: "",
    price6: "",

    nome7: "",
    quantity7: "",
    price7: "",
}
//finire carrello che si visualizzano i prodotti ordinati
//finire la parte di design
//iniziare la parte che manda da telegram l'ordine con nominativo per classe quindi mess = 5Ai:1 paninocotto, 2 panini tonnata

function ajax_call_php_table() {
    var products = [];
    var price = [];
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
                card += "<div class='card mb-3'style = 'max-width: 540px;text-align:center'><div class='row g-0'><div class='col-md-4'><img width='90%' src='./img/0" + i + ".png' class='img-fluid rounded-start'></div><div class='col-md-8'><div class='card-body'><h3 class='card-title'>" + campi[1] + "</h3><h1 class='card-text'>" + campi[2] + "€" + "</h1><div class='d-grid gap-2'><button class='btn btn-success' id='button" + j.toString() + "'>AGGIUNGI</button></div></div></div></div></div>"
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
            $('#button0,#button1,#button2,#button3,#button4,#button5,#button6,#button7').click(function () {
                if (this.id == 'button0') {
                    a++;
                    $("#selection0").html(products[0] + "    x    " + "<button class='btn btn-success'>" + a + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome0 = products[0];
                    cart.quantity0 = a;
                    cart.price0 = price[0] * a;

                } else if (this.id == 'button1') {
                    b++;
                    $("#selection1").html(products[1] + "    x    " + "<button class='btn btn-success'>" + b + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome1 = products[1];
                    cart.quantity1 = b;
                    cart.price1 = price[1] * b;

                } else if (this.id == 'button2') {
                    c++;
                    $("#selection2").html(products[2] + "    x    " + "<button class='btn btn-success'>" + c + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome2 = products[2];
                    cart.quantity2 = c;
                    cart.price2 = price[2] * c;

                } else if (this.id == 'button3') {
                    d++;
                    $("#selection3").html(products[3] + "    x    " + "<button class='btn btn-success'>" + d + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome3 = products[3];
                    cart.quantity3 = d;
                    cart.price3 = price[3] * d;

                } else if (this.id == 'button4') {
                    e++;
                    $("#selection4").html(products[4] + "    x    " + "<button class='btn btn-success'>" + e + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome4 = products[4];
                    cart.quantity4 = e;
                    cart.price4 = price[4] * e;

                } else if (this.id == 'button5') {
                    f++;
                    $("#selection5").html(products[5] + "    x    " + "<button class='btn btn-success'>" + f + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome5 = products[5];
                    cart.quantity5 = f;
                    cart.price5 = price[5] * f;

                } else if (this.id == 'button6') {
                    g++;
                    $("#selection6").html(products[6] + "    x    " + "<button class='btn btn-success'>" + g + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome6 = products[6];
                    cart.quantity6 = g;
                    cart.price6 = price[6] * g;

                } else if (this.id == 'button7') {
                    h++;
                    $("#selection7").html(products[7] + "    x    " + "<button class='btn btn-success'>" + h + "</button>  " + "  <button id='removeA' class='btn btn-danger'>Elimina</button>");
                    cart.nome7 = products[7];
                    cart.quantity7 = h;
                    cart.price7 = price[7] * h;
                }
            });
        },
        error: function (ret) {
            alert(ret);
        }
    });
}


function execute() {
    var classe = $("#classe").val()

    const message = `Classe: ${classe}\n${test}`;
    $.ajax({
        type: 'POST',
        url: 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
        data: {
            chat_id: chat_id,
            text: message,
            parse_mode: 'html',
        },
        success: function (res) {
            console.debug(res);
            if(!alert('Ordine Confermato!')){window.location.reload();}
        },
        error: function (error) {
            console.error(error);
            alert("error failed");
        }
    });
}


$('#removeA').click(function () {
    cart.quantity = cart.quantity - 1;
    console.log(cart.quantity);
});

