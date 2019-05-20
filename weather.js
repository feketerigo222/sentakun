var ken = "";
var sunimg = "img/weather/sun.png";
var cloudimg = "img/weather/cloud.png";
var shower_rainimg = "img/weather/shower_rain.png";
var rainimg = "img/weather/rain.png";
var thunderimg = "img/weather/thunderstorm.png";
var snowimg = "img/weather/snow.png";

judge = (weather_path) => {
    switch (weather_path) {
        // 晴れ処理
        case ("Clear"):
        case ("Clear sky"):
        case ("Few clouds"):
            weather_path = sunimg;
            break;

            // 曇り処理
        case ("Scattered clouds"):
        case ("Broken clouds"):
        case ("Clouds"):
            weather_path = cloudimg;
            break;

            // 小雨処理
        case ("Shower rain"):
        case ("Mist"):
        case ("Drizzle"):
            weather_path = shower_rainimg;
            break;

            // 雨処理
        case ("Rain"):
            weather_path = rainimg;
            break;

            // 雷雨処理
        case ("Thunderstorm"):
            weather_path = thunderimg;
            break;

            // 雪処理
        case ("Snow"):
            weather_path = snowimg;
            break;
    }
    return weather_path;
};


$('[name=cityName]').change(function () {
    ken = $('[name=cityName] option:selected').val();
    console.log(`ken: ${ken}`);
    var txt = $('[name=cityName] option:selected').text();
    $('p').text(txt);

    $.ajax({
        // url: `http://10.17.3.228:3001/${ken}`,
        // url: `http://10.17.5.125:3001/${ken}`,
        // url: `http://10.17.3.190:3001/${ken}`,
        // url:"http://192.168.0.5:3001/yokohama",
        // url: `http://35.221.68.16:3001/${ken}`,
        // url: `http://192.168.43.118:3001/${ken}`,
        url: `http://192.168.235.1:3001/${ken}`,
        type: "get",
        success: function (data) {
            console.log(`data:${data}`);
            console.log(data);

            //今日の変数
            var humi = data.humidity;
            var max2 = Math.floor(data.temp_max);
            var main = Math.floor(data.main);
            var min2 = Math.floor(data.temp_min);
            var tdy_temp_max0_js = Math.floor(data.tdy_temp_max0);
            var tdy_temp_max1_js = Math.floor(data.tdy_temp_max1);
            var tdy_temp_max2_js = Math.floor(data.tdy_temp_max2);
            var tdy_temp_max3_js = Math.floor(data.tdy_temp_max3);
            var tdy_temp_max4_js = Math.floor(data.tdy_temp_max4);
            var tdy_temp_max5_js = Math.floor(data.tdy_temp_max5);
            var tdy_temp_max6_js = Math.floor(data.tdy_temp_max6);
            var tdy_temp_max7_js = Math.floor(data.tdy_temp_max7);
            $(document).ready(function () {
                //今日の変数の挿入
                $(".humidity").html("湿度" + humi + "%");
                $(".max").html("最高" + "<br/>" + max2 + "°");
                $(".now").html("現在" + "<br/>" + main + "°");
                $(".min").html("最低" + "<br/>" + min2 + "°");
                $(".tdy_0oc_max").html(tdy_temp_max0_js + "°");
                $(".tdy_3oc_max").html(tdy_temp_max1_js + "°");
                $(".tdy_6oc_max").html(tdy_temp_max2_js + "°");
                $(".tdy_9oc_max").html(tdy_temp_max3_js + "°");
                $(".tdy_12oc_max").html(tdy_temp_max4_js + "°");
                $(".tdy_15oc_max").html(tdy_temp_max5_js + "°");
                $(".tdy_18oc_max").html(tdy_temp_max6_js + "°");
                $(".tdy_21oc_max").html(tdy_temp_max7_js + "°");
            });
            // データ受け取り

            var weather_judge = data.weather;
            var weather_judge2 = "";

            switch (weather_judge) {
                // 晴れ処理
                case ("Clear"):
                case ("Clear sky"):
                case ("Few clouds"):
                    weather_judge = sunimg;
                    weather_judge2 = "img/bgimage/hare.jpg";
                    break;

                    // 曇り処理
                case ("Scattered clouds"):
                case ("Broken clouds"):
                case ("Clouds"):
                    weather_judge = cloudimg;
                    weather_judge2 = "img/bgimage/hare.jpg";
                    break;

                    // 小雨処理
                case ("Shower rain"):
                case ("Mist"):
                case ("Drizzle"):
                    weather_judge = shower_rainimg;
                    weather_judge2 = "img/bgimage/ame.jpg";
                    break;

                    // 雨処理
                case ("Rain"):
                    weather_judge = rainimg;
                    weather_judge2 = "img/bgimage/ame.jpg";
                    break;

                    // 雷雨処理
                case ("Thunderstorm"):
                    weather_judge = thunderimg;
                    weather_judge2 = "img/bgimage/kaminari.jpg";
                    break;

                    // 雪処理
                case ("Snow"):
                    weather_judge = snowimg;
                    weather_judge2 = "img/bgimage/yuki.jpg";
                    break;
            }

            // tab-1-contentの<img>srcを書き換え
            $('.tab-1-content').children('img').attr('src', weather_judge);
            $('#main_frame').css("background-image", `url(${weather_judge2})`);

            //今日の天気判定処理
            //今日の0時
            var tdy_weather0_js = data.tdy_weather0;
            console.log(judge (tdy_weather0_js));
            $('.tdy_weat_0').children('img').attr('src', judge(tdy_weather0_js));

            //今日の3時
            var tdy_weather1_js = data.tdy_weather1;
            $('.tdy_weat_1').children('img').attr('src', judge(tdy_weather1_js));

            //今日の6時
            var tdy_weather2_js = data.tdy_weather2;
            $('.tdy_weat_2').children('img').attr('src', judge(tdy_weather2_js));

            //今日の9時
            var tdy_weather3_js = data.tdy_weather3;
            $('.tdy_weat_3').children('img').attr('src', judge(tdy_weather3_js));

            //今日の12時
            var tdy_weather4_js = data.tdy_weather4;
            $('.tdy_weat_4').children('img').attr('src', judge(tdy_weather4_js));

            //今日の15時
            var tdy_weather5_js = data.tdy_weather5;
            $('.tdy_weat_5').children('img').attr('src', judge(tdy_weather5_js));

            //今日の18時
            var tdy_weather6_js = data.tdy_weather6;
            $('.tdy_weat_6').children('img').attr('src', judge(tdy_weather6_js));

            //今日の21時
            var tdy_weather7_js = data.tdy_weather7;
            $('.tdy_weat_7').children('img').attr('src', judge(tdy_weather7_js));

            //明日の気温
            var tmr_temp_max0_js = Math.floor(data.tmr_temp_max0);
            var tmr_temp_max1_js = Math.floor(data.tmr_temp_max1);
            var tmr_temp_max2_js = Math.floor(data.tmr_temp_max2);
            var tmr_temp_max3_js = Math.floor(data.tmr_temp_max3);
            var tmr_temp_max4_js = Math.floor(data.tmr_temp_max4);
            var tmr_temp_max5_js = Math.floor(data.tmr_temp_max5);
            var tmr_temp_max6_js = Math.floor(data.tmr_temp_max6);
            var tmr_temp_max7_js = Math.floor(data.tmr_temp_max7);
            $(document).ready(function () {
                //明日の変数の挿入

                $(".tmr_weat_0oc_max").html(tmr_temp_max0_js + "°");
                $(".tmr_weat_3oc_max").html(tmr_temp_max1_js + "°");
                $(".tmr_weat_6oc_max").html(tmr_temp_max2_js + "°");
                $(".tmr_weat_9oc_max").html(tmr_temp_max3_js + "°");
                $(".tmr_weat_12oc_max").html(tmr_temp_max4_js + "°");
                $(".tmr_weat_15oc_max").html(tmr_temp_max5_js + "°");
                $(".tmr_weat_18oc_max").html(tmr_temp_max6_js + "°");
                $(".tmr_weat_21oc_max").html(tmr_temp_max7_js + "°");
            });


            // var result = {
            //     tmr_weather:["cloud" , "rain", "cloud","cloud" , "rain", "cloud","cloud" , "rain"]
            // };
            
            // result.tmr_weather.forEach(function(weather, index){
            //     $('.tmr_weat_img').eq(index).children('img').attr('src',judge(weather));
            // });





            //明日の天気判定
            //明日の0時
            var tmr_weather0_js = data.tmr_weather0;
            $('.tmr_weat_0oc_img').children('img').attr('src',judge(tmr_weather0_js));

            //明日の3時
            var tmr_weather1_js = data.tmr_weather1;
            $('.tmr_weat_3oc_img').children('img').attr('src',judge(tmr_weather1_js));

            //明日の6時
            var tmr_weather2_js = data.tmr_weather2;
            $('.tmr_weat_6oc_img').children('img').attr('src',judge(tmr_weather2_js));

            //明日の9時
            var tmr_weather3_js = data.tmr_weather3;
            $('.tmr_weat_9oc_img').children('img').attr('src',judge(tmr_weather3_js));

            //明日の12時
            var tmr_weather4_js = data.tmr_weather4;
            $('.tmr_weat_12oc_img').children('img').attr('src',judge(tmr_weather4_js));

            //明日の15時
            var tmr_weather5_js = data.tmr_weather5;
            $('.tmr_weat_15oc_img').children('img').attr('src',judge(tmr_weather5_js));

            //明日の18時
            var tmr_weather6_js = data.tmr_weather6;
            $('.tmr_weat_18oc_img').children('img').attr('src',judge(tmr_weather6_js));

            //明日の21時
            var tmr_weather7_js = data.tmr_weather7;
            $('.tmr_weat_21oc_img').children('img').attr('src',judge(tmr_weather7_js));

            //明後日の気温
            var dat_temp_max0_js = Math.floor(data.dat_temp_max0);
            var dat_temp_max1_js = Math.floor(data.dat_temp_max1);
            var dat_temp_max2_js = Math.floor(data.dat_temp_max2);
            var dat_temp_max3_js = Math.floor(data.dat_temp_max3);
            var dat_temp_max4_js = Math.floor(data.dat_temp_max4);
            var dat_temp_max5_js = Math.floor(data.dat_temp_max5);
            var dat_temp_max6_js = Math.floor(data.dat_temp_max6);
            var dat_temp_max7_js = Math.floor(data.dat_temp_max7);
            $(document).ready(function () {
                //明日の変数の挿入

                $(".dat_weat_0oc_max").html(dat_temp_max0_js + "°");
                $(".dat_weat_3oc_max").html(dat_temp_max1_js + "°");
                $(".dat_weat_6oc_max").html(dat_temp_max2_js + "°");
                $(".dat_weat_9oc_max").html(dat_temp_max3_js + "°");
                $(".dat_weat_12oc_max").html(dat_temp_max4_js + "°");
                $(".dat_weat_15oc_max").html(dat_temp_max5_js + "°");
                $(".dat_weat_18oc_max").html(dat_temp_max6_js + "°");
                $(".dat_weat_21oc_max").html(dat_temp_max7_js + "°");
            });

            //明後日の天気判定
            //明後日の0時
            var dat_weather0_js = data.dat_weather0;
            $('.dat_weat_0oc_img').children('img').attr('src',judge(dat_weather0_js));

            //明後日の3時
            var dat_weather1_js = data.dat_weather1;
            $('.dat_weat_3oc_img').children('img').attr('src',judge(dat_weather1_js));

            //明後日の6時
            var dat_weather2_js = data.dat_weather2;
            $('.dat_weat_6oc_img').children('img').attr('src',judge(dat_weather2_js));

            //明後日の9時
            var dat_weather3_js = data.dat_weather3;
            $('.dat_weat_9oc_img').children('img').attr('src',judge(dat_weather3_js));

            //明後日の12時
            var dat_weather4_js = data.dat_weather4;
            $('.dat_weat_12oc_img').children('img').attr('src',judge(dat_weather4_js));

            //明後日の15時
            var dat_weather5_js = data.dat_weather5;
            $('.dat_weat_15oc_img').children('img').attr('src',judge(dat_weather5_js));

            //明後日の18時
            var dat_weather6_js = data.dat_weather6;
            $('.dat_weat_18oc_img').children('img').attr('src',judge(dat_weather6_js));

            //明後日の21時
            var dat_weather7_js = data.dat_weather7;
            $('.dat_weat_21oc_img').children('img').attr('src',judge(dat_weather7_js));
            

        },
        error: function (err) {
            console.error(err);
        }
    });
});