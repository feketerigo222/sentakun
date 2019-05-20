import json
import requests
from flask import Flask, jsonify, make_response
from flask_cors import CORS
apikey = '15f84a85eafc4d84daef224a808ff0e4'
cityName = "Yokohama"
apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q={city}&units=metric&APPID={key}'
apiUrl2 = "http://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={key}"

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
    "unko":data
    }
    return make_response(jsonify(result))






@api.errorhandler(404)
def not_found(error):
    return make_response(jsonify(['error: Not found']), 404)

#ファイルをスクリプトとして実行した際に
#ホスト0,0,0,0,ポート3001番でサーバーを起動
if __name__ == '__main__':
    api.run(host='0.0.0.0', port=3001)






