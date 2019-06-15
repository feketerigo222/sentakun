translation = (data,i) => {
    $(document).ready(function () {
        for(let j = 0; j < 5; j++){
            $(`#tabcontrol > a:eq(${j})`).text(data.tab[i][j]);
        }

        for(let j = 0; j < 12; j++){
            $(`#how_to_wash > .description > p:eq(${j})`).text(data.how_to_wash[i][j]);
        }

        for(let j = 0; j < 3; j++){
            $(`#bleaching > .description > p:eq(${j})`).text(data.bleaching[i][j]);
        }

        for(let j = 0; j < 11; j++){
            $(`#drying > .description > p:eq(${j})`).text(data.drying[i][j]);
        }

        for(let j = 0; j < 4; j++){
            $(`#iron > .description > p:eq(${j})`).text(data.iron[i][j]);
        }

        for(let j = 0; j < 9; j++){
            $(`#cleaning > .description > p:eq(${j})`).text(data.cleaning[i][j]);
        }
    });
}

$(document).ready(function () {
    var i = window.sessionStorage.getItem("current");
    if (i == null) {
        i = 0;
    } else {
        $("#language").val(i);
    }
    $.ajax({
        url: '../json/library.json',
        dataType: 'json',
        data: {
            name: 'language'
        },
        success:function (data){
            translation(data,i);
        }
    });
})


$('[name = language]').change(function () {
    var i = $('[name = language] option:selected').val();
    window.sessionStorage.setItem("current", i);
    $.ajax({
        url: '../json/library.json',
        dataType: 'json',
        data: {
            name: 'language'
        },
        success:function (data){
            translation(data,i);
        }
    });
})