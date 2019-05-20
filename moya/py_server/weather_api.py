import json
import requests
from flask import Flask, jsonify, make_response
from flask_cors import CORS
apikey = '15f84a85eafc4d84daef224a808ff0e4'
cityName = "Yokohama"
apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q={city}&units=metric&APPID={key}'
apiUrl2 = "http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&lang=ja&appid={key}"

# Flaskクラスのインスタンスを生成
#__name__は現在のファイルのモジュール名
api = Flask(__name__)
CORS(api)

@api.route('/<cityName>',methods=['GET'])
def get(cityName):
    url = apiUrl.format(city=cityName, key=apikey)
    r = requests.get(url)
    data = json.loads(r.text)

    result = {
            "tdy_weather0": data["list"][0]["weather"][0]["main"],
            "tdy_temp_max0": data["list"][0]["main"]["temp_max"],
            "tdy_weather1": data["list"][1]["weather"][0]["main"],
            "tdy_temp_max1": data["list"][1]["main"]["temp_max"],
            "tdy_weather2": data["list"][2]["weather"][0]["main"],
            "tdy_temp_max2": data["list"][2]["main"]["temp_max"],
            "tdy_weather3": data["list"][3]["weather"][0]["main"],
            "tdy_temp_max3": data["list"][3]["main"]["temp_max"],
            "tdy_weather4": data["list"][4]["weather"][0]["main"],
            "tdy_temp_max4": data["list"][4]["main"]["temp_max"],
            "tdy_weather5": data["list"][5]["weather"][0]["main"],
            "tdy_temp_max5": data["list"][5]["main"]["temp_max"],
            "tdy_weather6": data["list"][6]["weather"][0]["main"],
            "tdy_temp_max6": data["list"][6]["main"]["temp_max"],
            "tdy_weather7": data["list"][7]["weather"][0]["main"],
            "tdy_temp_max7": data["list"][7]["main"]["temp_max"],
            "tmr_weather0": data["list"][8]["weather"][0]["main"],
            "tmr_temp_max0": data["list"][8]["main"]["temp_max"],
            "tmr_weather1": data["list"][9]["weather"][0]["main"],
            "tmr_temp_max1": data["list"][9]["main"]["temp_max"],
            "tmr_weather2": data["list"][10]["weather"][0]["main"],
            "tmr_temp_max2": data["list"][10]["main"]["temp_max"],
            "tmr_weather3": data["list"][11]["weather"][0]["main"],
            "tmr_temp_max3": data["list"][11]["main"]["temp_max"],
            "tmr_weather4": data["list"][12]["weather"][0]["main"],
            "tmr_temp_max4": data["list"][12]["main"]["temp_max"],
            "tmr_weather5": data["list"][13]["weather"][0]["main"],
            "tmr_temp_max5": data["list"][13]["main"]["temp_max"],
            "tmr_weather6": data["list"][14]["weather"][0]["main"],
            "tmr_temp_max6": data["list"][14]["main"]["temp_max"],
            "tmr_weather7": data["list"][15]["weather"][0]["main"],
            "tmr_temp_max7": data["list"][15]["main"]["temp_max"],
            "dat_weather0": data["list"][16]["weather"][0]["main"],
            "dat_temp_max0": data["list"][16]["main"]["temp_max"],
            "dat_weather1": data["list"][17]["weather"][0]["main"],
            "dat_temp_max1": data["list"][17]["main"]["temp_max"],
            "dat_weather2": data["list"][18]["weather"][0]["main"],
            "dat_temp_max2": data["list"][18]["main"]["temp_max"],
            "dat_weather3": data["list"][19]["weather"][0]["main"],
            "dat_temp_max3": data["list"][19]["main"]["temp_max"],
            "dat_weather4": data["list"][20]["weather"][0]["main"],
            "dat_temp_max4": data["list"][20]["main"]["temp_max"],
            "dat_weather5": data["list"][21]["weather"][0]["main"],
            "dat_temp_max5": data["list"][21]["main"]["temp_max"],
            "dat_weather6": data["list"][22]["weather"][0]["main"],
            "dat_temp_max6": data["list"][22]["main"]["temp_max"],
            "dat_weather7": data["list"][23]["weather"][0]["main"],
            "dat_temp_max7": data["list"][23]["main"]["temp_max"],
    }
    url2 = apiUrl2.format(city=cityName, key=apikey)
    r2 = requests.get(url2)
    data2 = json.loads(r2.text)
    result.update({

        "cityName": data2["name"],
        "weather": data2["weather"][0]["main"],
        "temp_min": data2["main"]["temp_min"],
        "main": data2["main"]["temp"],
        "temp_max": data2["main"]["temp_max"],
        "humidity": data2["main"]["humidity"]
    })
    return make_response(jsonify(result))






@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify(['error: Not found']), 404)

#ファイルをスクリプトとして実行した際に
#ホスト0,0,0,0,ポート3001番でサーバーを起動
if __name__ == '__main__':
    api.run(host='0.0.0.0', port=3001)