translation = (data,i) => {
    $(document).ready(function () {
        for(let j = 0; j < 48; j++){
            $(`#address > option:eq(${j})`).text(data.cityname[i][j]);
        }

        for(let j = 0; j < 3; j++){
            $(`.tab-label:eq(${j})`).text(data.day[i][j]);
        }

        $(`.location > p`).text(data.location[i]);

        for(let j = 0; j < 2; j++){
            $(`.max > p:eq(${j})`).text(data.max[i][j]);
        }

        for(let j = 0; j < 2; j++){
            $(`.now > p:eq(${j})`).text(data.now[i][j]);
        }

        for(let j = 0; j < 2; j++){
            $(`.min > p:eq(${j})`).text(data.min[i][j]);
        }

        $(`.humidity`).text(data.humidity[i]);

        let hour = 0;
        for(let j = 0; j < 8; j++){
            $(`.tdy_hour:eq(${j})`).text(hour + data.time1[i]);
            $(`.hour:eq(${j})`).text(hour + data.time2[i]);
            let k = j + 8;
            $(`.hour:eq(${k})`).text(hour + data.time2[i]);
            hour = hour + 3;
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
        url: '../json/weather.json',
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
        url: 'weather.json',
        dataType: 'json',
        data: {
            name: 'language'
        },
        success:function (data){
            translation(data,i);
        }
    });
})