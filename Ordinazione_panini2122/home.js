var test = "";
var stringafinale = "";
var paroladalevare = '-';
var paroladalevare2 = '+';
var classescelta = "";
var telegram_bot_id = "5053665540:AAFXqDAbO0ZErN6k8RjT3V_AEPr_F7aHgkM";
var chat_id = "-712186363";

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
        var password = $("#password").val();
        ajax_call_verify_pass(password);
    });
});

function removealert() {
    window.setTimeout(function () {
        $("#tempalert").fadeTo(1000, 0).slideUp(1000, function () {
            $(this).remove();
        });
    }, 700);

}

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

function ajax_call_verify_pass(password) {
    var classiAll = [
        "1Ai",
        "2Ai",
        "3Ai",
        "4Ai",
        "5Ai"
    ];
    var data = {};
    data.passwd = password;
    $.ajax
        ({
            type: "POST",
            url: "./php/checkpass.php",
            data: data,
            success: function (ret) {
                classescelta = ret;
                var check = classiAll.indexOf(String(ret))
                if (check >= 0) {
                    execute();
                }
                if (ret == "err") {
                    alert("Password Sbagliata")
                }

            },
            error: function (ret) {
                //console.log(ret);
            }
        });
}



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
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    a++;
                    $("#selection0").html(products[0] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + a + "   <button id='removeA' class='btn btn-danger'>-</button>");
                    cart.nome0 = products[0];
                    cart.quantity0 = a;
                    cart.price0 = price[0] * a;

                } else if (this.id == 'button1') {
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    b++;
                    $("#selection1").html(products[1] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + b + "   <button id='removeA' class='btn btn-danger'>-</button>");
                    cart.nome1 = products[1];
                    cart.quantity1 = b;
                    cart.price1 = price[1] * b;

                } else if (this.id == 'button2') {
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    c++;
                    $("#selection2").html(products[2] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + c + "   <button id='removeA' class='btn btn-danger'>-</button>");
                    cart.nome2 = products[2];
                    cart.quantity2 = c;
                    cart.price2 = price[2] * c;

                } else if (this.id == 'button3') {
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    d++;
                    $("#selection3").html(products[3] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + d + "   <button id='removeA' class='btn btn-danger'>-</button>");
                    cart.nome3 = products[3];
                    cart.quantity3 = d;
                    cart.price3 = price[3] * d;

                } else if (this.id == 'button4') {
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    e++;
                    $("#selection4").html(products[4] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + e + "   <button id='removeA' class='btn btn-danger'>-</button>");
                    cart.nome4 = products[4];
                    cart.quantity4 = e;
                    cart.price4 = price[4] * e;

                } else if (this.id == 'button5') {
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    f++;
                    $("#selection5").html(products[5] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + f + "   <button id='removeA' class='btn btn-danger'>-</button>");
                    cart.nome5 = products[5];
                    cart.quantity5 = f;
                    cart.price5 = price[5] * f;

                } else if (this.id == 'button6') {
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    g++;
                    $("#selection6").html(products[6] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + g + "   <button id='removeA' class='btn btn-danger'>-</button>");
                    cart.nome6 = products[6];
                    cart.quantity6 = g;
                    cart.price6 = price[6] * g;

                } else if (this.id == 'button7') {
                    $("#boxalert").html("<div id='tempalert' class='alert alert-success'>Aggiunto al carrello</div>");
                    removealert();
                    h++;
                    $("#selection7").html(products[7] + "    x    " + "<button class='btn btn-success' id='add'>+</button>   " + h + "   <button id='removeA' class='btn btn-danger'>-</button>");
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
    var classe = classescelta;
    stringafinale = test.replaceAll(paroladalevare, "");
    stringafinale = stringafinale.replaceAll(paroladalevare2, "");
    stringafinale = stringafinale.trim();
    console.log(stringafinale)
    if (stringafinale === "") {
        if (!alert("aggiungi qualcosa al carrello!")) { window.location.reload(); }
    } else {


        const message = `Classe: ${classe}\n${stringafinale}`;
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
                var test = "";
                var stringafinale = "";
                var classescelta = "";
                if (!alert('Ordine Confermato!')) { window.location.reload(); }
            },
            error: function (error) {
                console.error(error);
                alert("error failed");
            }
        });
    }
}



