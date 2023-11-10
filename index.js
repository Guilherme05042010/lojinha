//definindo os valores minimos e máximos
let min1 = 0
let max1 = 19

let min2 = 0
let max2 = 19

let min3 = 0
let max3 = 19

function atualizarLoja() {

    //sorteando os itens

    let item1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    console.log(item1);
    let item2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    console.log(item2);
    let item3 = Math.floor(Math.random() * (max3 - min3 + 1)) + min3;
    console.log(item3);

    //item 1

    if (item1 == 0)
        item1 = "armadura básica"

        else if (item1 == 1)
            item1 = "armadura básica"

        else if (item1 == 2)
            item1 = "armadura básica"

        else if (item1 == 18)
            item1 = "armadura básica"

        else if (item1 == 3)
            item1 = "armadura avançada"

        else if (item1 == 4)
            item1 = "armadura avançada"

        else if (item1 == 19)
            item1 = "armadura avançada"

        else if (item1 == 5)
            item1 = "armadura de mestre"

        else if (item1 == 6)
            item1 = "armadura da calvície"

        else if (item1 == 7)
            item1 = "armadura do link bombado"

        else if (item1 == 8)
            item1 = "armadura de anão azul bombado"

        else if (item1 == 9)
            item1 = "armadura de nilfhein"

        else if (item1 == 10)
            item1 = "armadura de baldur"

        else if (item1 == 11)
            item1 = "braceletes de dio over heaven"

        else if (item1 == 12)
            item1 = "melhoria de vida da armadura da federação"

        else if (item1 == 13)
            item1 = "melhoria de força da armadura da federação"

        else if (item1 == 14)
            item1 = "melhoria de velocidade da armadura da federação"

        else if (item1 == 15)
            item1 = "melhoria de mana da armadura da federação"

        else if (item1 == 16)
            item1 = "melhoria lendária da armadura da federação"

        else if (item1 == 17)
            item1 = "armadura de uru"



    //item 2

    if (item2 == 0)
        item2 = "espada básica"

        else if (item2 == 1)
            item2 = "espada básica"

        else if (item2 == 2)
            item2 = "espada básica"

        else if (item2 == 18)
            item2 = "espada de básica"

        else if (item2 == 3)
            item2 = "espada avançada"

        else if (item2 == 4)
            item2 = "espada avançada"

        else if (item2 == 19)
            item2 = "espada avançada"

        else if (item2 == 5)
            item2 = "espada de mestre"

        else if (item2 == 6)
            item2 = "espada de mestre"

        else if (item2 == 7)
            item2 = "espada do meliodas"

        else if (item2 == 8)
            item2 = "katana ninja"

        else if (item2 == 9)
            item2 = "katana ninja"

        else if (item2 == 10)
            item2 = "adaga furtiva do trovão"

        else if (item2 == 11)
            item2 = "arco do hanzo"

        else if (item2 == 12)
            item2 = "arco da calvicie"

        else if (item2 == 13)
            item2 = "varinha do voldemort"

        else if (item2 == 14)
            item2 = "martelo da batata"

        else if (item2 == 15)
            item2 = "martelo da federação"

        else if (item2 == 16)
            item2 = "martelo do thor"

        else if (item2 == 17)
            item2 = "bastão do goku"



    //item 3

    if (item3 == 0)
        item3 = "flecha mágica"

        else if (item3 == 1)
            item3 = "flecha mágica"

        else if (item3 == 2)
            item3 = "flecha mágica"

        else if (item3 == 18)
            item3 = "flecha mágica"

        else if (item3 == 3)
            item3 = "flecha mágica"

        else if (item3 == 4)
            item3 = "חץ רקוויאם"

        else if (item3 == 19)
            item3 = "38tao"

        else if (item3 == 5)
            item3 = "38tao"

        else if (item3 == 6)
            item3 = "38tao"

        else if (item3 == 7)
            item3 = "metal de uru"

        else if (item3 == 8)
            item3 = "metal de uru"

        else if (item3 == 9)
            item3 = "metal de uru"

        else if (item3 == 10)
            item3 = "lddtwohr"

        else if (item3 == 11)
            item3 = "braceletes de dio over heaven"

        else if (item3 == 12)
            item3 = "melhoria de vida da armadura da federação"

        else if (item3 == 13)
            item3 = "melhoria de força da armadura da federação"

        else if (item3 == 14)
            item3 = "melhoria de velocidade da armadura da federação"

        else if (item3 == 15)
            item3 = "melhoria de mana da armadura da federação"

        else if (item3 == 16)
            item3 = "melhoria lendária da armadura da federação"

        else if (item3 == 17)
            item3 = "braceletes de dio over heaven"



    var loja_item1 = document.getElementById("loja_item1");
    loja_item1.innerHTML = item1;

    var loja_item2 = document.getElementById("loja_item2");
    loja_item2.innerHTML = item2;

    var loja_item3 = document.getElementById("loja_item3");
    loja_item3.innerHTML = item3;

}


document.addEventListener("DOMContentLoaded", function () {
    atualizarLoja();

    setInterval(atualizarLoja, 2000);
});

