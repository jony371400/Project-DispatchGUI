from flask import Flask
from flask import redirect
from flask import request
from flask_cors import CORS
import rabbitmq

app = Flask(__name__)

CORS(app)

@app.route("/")
def hello():
    return "Flask on port 3000."

@app.route('/amr/transfer', methods=['POST'])
def transfer():
    if request.method == 'POST':
        print('API Success!')
        jsonData = request.get_json()
        rabbitmq.Sending(jsonData)
        return jsonData
    else:
        return 'Fail!'

if __name__ == "__main__":
    
    app.run(host="localhost", port=3000)
    rabbitmq.Reciving()