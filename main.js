translation = (data,i) => {
    $(document).ready(function () {
        $("#phototext").text(data.language[i].photo);
        $("#librarytext").text(data.language[i].library);
        $("#weathertext").text(data.language[i].weather);
        $("#how_totext").text(data.language[i].how_to_use);
        $("#how_to_phototext").text(data.language[i].how_to_photo);
        $("#how_to_phonetext").text(data.language[i].how_to_phone);
        $("#how_to_weathertext").text(data.language[i].how_to_weather);
        $("result_text").text(data.language[i].result);
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
        url: 'main.json',
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
        url: 'main.json',
        dataType: 'json',
        data: {
            name: 'language'
        },
        success:function (data){
            translation(data,i);
        }
    });
})