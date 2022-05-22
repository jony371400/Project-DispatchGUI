from flask import Flask
from flask import redirect
from flask import request
from flask_cors import CORS
import rabbitmq

app = Flask(__name__)
CORS(app)
print('App Run!')

@app.route("/")
def hello():
    return "Flask on port 3000."

@app.route('/amr/transfer', methods=['POST'])
def transfer():
    print('API Success!')
    jsonData = request.get_json()
    rabbitmq.Sending(jsonData)
    return jsonData

@app.route('/amr/moveto', methods=['POST'])
def moveto():
    print('API Success!')
    # jsonData = request.get_json()
    # rabbitmq.Sending(jsonData)
    # return jsonData

@app.route('/amr/gocharge', methods=['POST'])
def moveto():
    print('API Success!')
    # jsonData = request.get_json()
    # rabbitmq.Sending(jsonData)
    # return jsonData

@app.route('/amr/stopcharge', methods=['POST'])
def moveto():
    print('API Success!')
    # jsonData = request.get_json()
    # rabbitmq.Sending(jsonData)
    # return jsonData

@app.route('/amr/notice', methods=['GET'])
def notice():
    print('API Success!')
    
    rabbitmq.Reciving()
    rabbitmq.jsonDataRecive
    return rabbitmq.jsonDataRecive

if __name__ == "__main__":
    
    app.run(host="localhost", port=3000)
    # rabbitmq.Reciving()