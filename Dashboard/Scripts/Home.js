$(document).ready(function () {
    $(".maskClass").maskMoney({ thousands: '.', decimal: ',', allowZero: true, precision: 3 })

});
function generate(data) {
    debugger
    var chartDom = document.getElementById('testt');
    var myChart = echarts.init(chartDom);

    var lstmes = [];
    var LstRecurso = [];
    var lstRequisito = [];
    var lsttotal = [];


    for (var i = 0; i < data.result.length; i++) {
        var item = data.result[i];
        LstRecurso.push(item.Recurso);
        lstRequisito.push(item.Requisito);
        lsttotal.push(item.Total);
        lstmes.push(item.Mes);
    }


    var option = {
        xAxis: {
            type: 'category',
            data: lstmes
        },
        yAxis: {
            type: 'value'
        },
        serie:

            [
                {
                    data: LstRecurso,
                    type: 'bar'
                },
                {
                    data: lstRequisito,
                    type: 'bar'
                },
                {
                    data: lsttotal,
                    type: 'bar'
                }
            ]
    };

    option && myChart.setOption(option);

}
$("#PulodoGato").keyup(function () {
    var valor = $("#PulodoGato").val();
    $(".Recurso").val(valor);
});

$("#PulodoGatinho").keyup(function () {
    var valor = $("#PulodoGatinho").val();
    $(".Requisito").val(valor);
});

$("#btnCalcular").click(function () {


    var Listarecurso = [];

    for (var i = 1; i < 13; i++) {
        var count = i - 1;
        var Recurso = $(".Recurso")[count].value;
        var Requisito = $(".Requisito")[count].value;

        Listarecurso.push({ Mes: i, Recurso: Recurso, Requisito: Requisito })
    }


    $.ajax({
        url: '/Home/Calc',
        data: { Listarecurso },
        type: 'POST',
        success: function (data) {

            if (data) {

                generate(data);
            }
            else {

            }
        }
    });
});