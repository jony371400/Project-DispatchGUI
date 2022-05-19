from flask import Flask
from flask import redirect
from flask import request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

jsonData = {
    "spec": "MCS Communication Message Spec",
    "version": " 1.0",
    "head": {
        "date": "2020-01-01 23:59:59.999",
        "uuid": "b6b11e0c-1764-11eb-adc1-0242ac120002",
        "priority": 2,
        "agent": "MES"
    },
    "data": {
        "command": "transfer",
        "params": {
            "operator": "someone",
            "fromPort": "v1",
            "toPort": "v3",
            "carrierID": "CARRIER1",
            "carrierType": "MAGAZINE"
        }
    }
}

@app.route("/")
def hello():
    return "Flask on port 3000."

@app.route("/goto/<path:url>", methods=['GET'])
def _goto(url):
    return redirect(url)

@app.route('/amr/transfer', methods=['POST'])
def transfer():
    if request.method == 'POST':
        print('Success!')
        return jsonData
    else:
        return 'Fail!'

if __name__ == "__main__":
    app.run(host="localhost", port=3000)