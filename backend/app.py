from flask import Flask
import json
import requests
from flask import request
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def getMarsPhotoList():
    sol = request.args.get('sol', None)
    camera = request.args.get('camera', None)
    api_key = request.args.get('api_key', None)
    # api_key = '05j9DJaFf8M61khBmJiekqLnHkgInaoo2HIHgWX8'
    r = 'something'
    if not sol and not camera:
        r = requests.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key={}'.format(api_key))
    elif not sol:
        r = requests.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?camera={}&api_key={}'.format(camera, api_key))        
    elif not camera:
        r = requests.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol={}&api_key={}'.format(sol, api_key))
    else:
        r = requests.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol={}&camera={}&api_key={}'.format(sol, camera, api_key))        
    if r.status_code != 200:
        return 'nope nope nope!'
    return jsonify(r.json())
