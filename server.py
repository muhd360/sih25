'''
image hash,sign hash,app id,public key
'''
from flask import Flask, jsonify, request

app= Flask(__name__)
@app.route('/ambience', methods=['GET'])
def get_data():
    # Create the blob of data
    data = {
        'a': 10,
        'b': 20,
        'c': 30,
        'd': 40
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
