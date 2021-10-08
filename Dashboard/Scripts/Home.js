$(document).ready(function () {

    $(".DataClass").mask("00/0000");
   
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
        legend: {
            data: ['Recurso', 'Requisito','Balanço']
        },
        series:

            [
                {
                    data: lsttotal,
                    type: 'line',
                    name:'Balanço',
                    areaStyle: {
                        yAxisIndex: 1,
                    }

                },
                {
                    data: LstRecurso,
                    name:'Recurso',
                    type: 'bar'
                },
                {
                    data: lstRequisito,
                    name:'Requisito',
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
    var Calculo = $("#TipoBalanco").val()
    debugger

    for (var i = 0; i < $('.Recurso').length; i++) {
        var Recurso = $(".Recurso")[i].value;
        var Requisito = $(".Requisito")[i].value;
        Listarecurso.push({ Mes: i, Recurso: Recurso, Requisito: Requisito })
    }


    $.ajax({
        url: '/Home/Calc',
        data: { Listarecurso, Calculo },
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

$("#btnGerar").click(function () {

    var DataInicio = $("#DataInicio").val();
    var DataFim = $("#DataFinal").val();

    $.ajax({
        url: '/Home/Data',
        data: { DataI: DataInicio, DataF: DataFim },
        type: 'POST',
        success: function (data) {
            var html = '';
            for (var i = 0; i < data.list.length; i++) {
                var item = data.list[i];
                html += '<div class="col-md-2">' + item + '<input type="text" id="' + item + '" class="form-group-sm maskClass Recurso" style="margin-right:5px;" placeholder="Recurso" /><input type="text" id="' + item + '" class="form-group-sm maskClass Requisito" style="margin-right:5px; margin-top: 5px;" placeholder="Requisito" /></div>';
            }

            $('#meses').html(html)

            $(".maskClass").maskMoney({ thousands: '.', decimal: ',', allowZero: true, precision: 3 })

        }
    });




});