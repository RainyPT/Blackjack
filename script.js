function apostar100() {
    if (PlayerMoney <= 0) {
        alert("Não pode apostar mais");
    } else {
        playerbet += 100;
        PlayerMoney -= 100;
        document.getElementById("playermoney").innerHTML =
            "Créditos:" + PlayerMoney + "€";
        document.getElementById("playerbetText").innerHTML =
            "Aposta:" + playerbet + "€";
    }
}

function AllIn() {
    if (PlayerMoney <= 0) {
        alert("Não pode apostar mais");
    } else {
        playerbet = playerbet + PlayerMoney;
        PlayerMoney = 0;
        document.getElementById("playermoney").innerHTML =
            "Créditos:" + PlayerMoney + "€";
        document.getElementById("playerbetText").innerHTML =
            "Aposta:" + playerbet + "€";
    }
}

function Inicio() {
    //Distribuição inicial das cartas
    document.getElementById("playermoney").innerHTML =
        "Créditos:" + PlayerMoney + "€";
    document.getElementById("playerbetText").innerHTML =
        "Aposta:" + playerbet + "€";
    document.getElementById("apostaAllIn").style.display = "none";
    document.getElementById("aposta100").style.display = "none";

    for (var x = 1; x < 4; x++) {
        var carta = Math.floor(Math.random() * 11) + 1;
        var carta_Sub = Math.floor(Math.random() * 4) + 1;
        var id;
        switch (x) {
            case 1:
                id = "cartacasa1";
                break;
            case 2:
                id = "cartaplayer1";
                break;
            case 3:
                id = "cartaplayer2";
                break;
        }
        if (carta == 11 || carta == 1) {
            document.getElementById(id).src =
                "cartas/A" + "_" + carta_Sub + ".png";
            if (x == 1) {
                if (Casa_Total + 11 < 21) {
                    carta = 11;
                } else {
                    if (Casa_Total + 11 > 21) carta = 1;
                }
                Casa_Total += carta;
            } else {
                if (Player_Total + 11 < 21) {
                    carta = 11;
                } else {
                    if (Player_Total + 11 > 21) carta = 1;
                }
                Player_Total += carta;
            }
        } else {
            if (carta == 10) {
                var cartadez = Math.floor(Math.random() * 16) + 1;
                document.getElementById(id).src =
                    "cartas/10_" + cartadez + ".png";
                if (x == 1) Casa_Total += carta;
                else Player_Total += carta;
            } else {
                document.getElementById(id).src =
                    "cartas/" + carta + "_" + carta_Sub + ".png";
                if (x == 1) Casa_Total += carta;
                else Player_Total += carta;
            }
        }
    }
    //Manipular os controlos HTML
    document.getElementById("totalcasatext").innerHTML = Casa_Total;
    document.getElementById("totalplayertext").innerHTML = Player_Total;
    document.getElementById("inicio").style.display = "none";
    document.getElementById("parar").style.display = "inline";
    document.getElementById("mais1carta").style.display = "inline";
}

function show_buttons() {
    document.getElementById("parar").style.display = "none";
    document.getElementById("resetbt").style.display = "inline";
}

function mais1carta() {
    var carta = Math.floor(Math.random() * 11) + 1;
    var carta_Sub = Math.floor(Math.random() * 4) + 1;
    var id;
    switch (count) {
        case 1:
            id = "cartaplayer3";
            break;
        case 2:
            id = "cartaplayer4";
            break;
    }
    if (carta == 11 || carta == 1) {
        if (Player_Total + 11 > 21) {
            carta = 1;
            Player_Total += carta;
        } else {
            if (Player_Total + 11 < 21) carta = 11;
            Player_Total += carta;
        }
        document.getElementById(id).src = "cartas/A" + "_" + carta_Sub + ".png";
        document.getElementById(id).style.display = "inline";
    } else {
        if (carta == 10) {
            var cartadez = Math.floor(Math.random() * 16) + 1;
            document.getElementById(id).src = "cartas/10_" + cartadez + ".png";
            Player_Total += carta;
        } else {
            document.getElementById(id).src =
                "cartas/" + carta + "_" + carta_Sub + ".png";
            Player_Total += carta;
        }
    }
    document.getElementById(id).style.display = "inline";
    document.getElementById("totalplayertext").innerHTML = Player_Total;
    count++;
    if (Player_Total > 21) {
        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").innerHTML = "Perdeste!";
        document.getElementById("FuncionalidadesDiv").style.backgroundColor =
            "red";
        document.getElementById("mais1carta").style.display = "none";
        show_buttons();
    }
    if (count == 3) {
        document.getElementById("mais1carta").style.display = "none";
        document.getElementById("parar").style.width = "100%";
    }
}

function AcabarTurno() {
    var count_casa = 1;
    document.getElementById("mais1carta").style.display = "none";
    while (Casa_Total < Player_Total) {
        var carta = Math.floor(Math.random() * 11) + 1;
        var carta_Sub = Math.floor(Math.random() * 4) + 1;
        var id;
        switch (count_casa) {
            case 1:
                id = "cartacasa2";
                break;
            case 2:
                id = "cartacasa3";
                break;
            case 3:
                id = "cartacasa4";
                break;
        }
        if (carta == 11 || carta == 1) {
            if (Casa_Total + 11 > 21) {
                carta = 1;
                Casa_Total += carta;
            } else {
                if (Casa_Total + 11 < 21) carta = 11;
                Casa_Total += carta;
            }
            document.getElementById(id).src =
                "cartas/A" + "_" + carta_Sub + ".png";
            document.getElementById(id).style.display = "inline";
        } else {
            if (carta == 10) {
                var cartadez = Math.floor(Math.random() * 16) + 1;
                document.getElementById(id).src =
                    "cartas/10_" + cartadez + ".png";
                Casa_Total += carta;
            } else {
                document.getElementById(id).src =
                    "cartas/" + carta + "_" + carta_Sub + ".png";
                Casa_Total += carta;
            }
        }
        document.getElementById(id).style.display = "inline";
        document.getElementById("totalcasatext").innerHTML = Casa_Total;
        count_casa++;
    }
    document.getElementById("resultado").style.display = "block";
    if (Casa_Total > 21) {
        document.getElementById("resultado").innerHTML = "Ganhaste!";
        PlayerMoney += playerbet * 2;
        document.getElementById("playermoney").innerHTML =
            "Créditos:" + PlayerMoney + "€";
        document.getElementById("playerbetText").innerHTML =
            "Aposta:" + playerbet + "€";
        document.getElementById("FuncionalidadesDiv").style.backgroundColor =
            "green";
    } else {
        if (Casa_Total <= 21 && Casa_Total > Player_Total) {
            document.getElementById("resultado").innerHTML = "Perdeste!";
            document.getElementById("playermoney").innerHTML =
                "Créditos:" + PlayerMoney + "€";
            document.getElementById("playerbetText").innerHTML =
                "Aposta:" + playerbet + "€";
            document.getElementById(
                "FuncionalidadesDiv"
            ).style.backgroundColor = "red";
        } else {
            document.getElementById("resultado").innerHTML = "Empate!";
            PlayerMoney += playerbet;
            document.getElementById("playermoney").innerHTML =
                "Créditos:" + PlayerMoney + "€";
            document.getElementById("playerbetText").innerHTML =
                "Aposta:" + playerbet + "€";
        }
    }
    document.getElementById("parar").style.display = "none";
    document.getElementById("resetbt").style.display = "inline";
}

function Reset() {
    Casa_Total = 0;
    Player_Total = 0;
    count = 1;
    playerbet = 0;
    document.getElementById("playerbetText").innerHTML =
        "Aposta:" + playerbet + "€";
    document.getElementById("inicio").style.display = "inline";
    document.getElementById("totalcasatext").innerHTML = Casa_Total;
    document.getElementById("totalplayertext").innerHTML = Player_Total;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("resetbt").style.display = "none";
    document.getElementById("FuncionalidadesDiv").style.backgroundColor =
        "white";
    document.getElementById("aposta100").style.display = "inline";
    document.getElementById("apostaAllIn").style.display = "inline";
    for (var x = 1; x < 5; x++) {
        document.getElementById("cartacasa" + x).src = "cartas/gray_back.png";
        document.getElementById("cartaplayer" + x).src = "cartas/gray_back.png";
        if (x > 2) {
            document.getElementById("cartacasa" + x).style.display = "none";
            document.getElementById("cartaplayer" + x).style.display = "none";
        }
    }
}
