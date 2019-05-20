from keras.models import model_from_json
import matplotlib.pyplot as plt
import numpy as np
import os,random
from keras.preprocessing.image import img_to_array, load_img
from keras.optimizers import SGD
from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
import base64
from PIL import Image
import io as cStringIO
from keras.backend import tensorflow_backend as backend

app = Flask(__name__)
CORS(app)


#成功した時
@app.route('/fileResult', methods=['POST'])
def setdata():
    enc_data = request.form["fileResult"]
    dec_data = base64.b64decode(enc_data)
    print(dec_data)
    image = Image.open(cStringIO.BytesIO(dec_data))
    image.save('wash_images/display/pict.jpg', quality=95)

    file_name = 'vgg16_wash_fine'
    display_dir = 'wash_images/display'
    label = ['hand', 'other']

#モデル読み込みと重み付け
    json_string = open(file_name + '.json').read()
    model = model_from_json(json_string)
    model.load_weights(file_name + '.h5')

    model.compile(optimizer=SGD(lr=0.0001, momentum=0.9),
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])


    #表示
    files = os.listdir(display_dir)
    img = random.sample(files, 1)

    plt.figure(figsize=(10, 10))
    for i in range(1):
        temp_img = load_img(os.path.join(display_dir, img[i]), target_size=(224, 224))
        plt.subplot(5, 5, i + 1)
        plt.imshow(temp_img)
    #画像の正規化
        temp_img_array = img_to_array(temp_img)
        temp_img_array = temp_img_array.astype('float32') / 255.0
        temp_img_array = temp_img_array.reshape((1, 224, 224, 3))
#画像の予測
        img_pred = model.predict(temp_img_array)
        plt.title(label[np.argmax(img_pred)])
#予測の表示
        print(label[np.argmax((img_pred))])
        result = {
            "result": label[np.argmax((img_pred))]
        }
        os.remove("wash_images/display/pict.jpg")
        backend.clear_session()
        return make_response(jsonify(result))


#エラーハンドリング
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify(['error: Not found']), 404)


#3020番でポート開放
if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=3020)