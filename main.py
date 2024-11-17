from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow CORS from the frontend origin
CORS(app)

@app.route('/')
def home():
    return "hello"

@app.route('/update_values', methods=['POST'])
def update_values():
    data = request.json
    water = data.get('water', 0)
    oxygen = data.get('oxygen', 0)
    food = data.get('food', 0)
    
    # Perform some math with the values
    total = water + oxygen + food
    average = total / 3
    
    # Print values to console
    print(f"Water: {water}, Oxygen: {oxygen}, Food: {food}")
    print(f"Total: {total}, Average: {average}")
    
    return jsonify({
        'total': total,
        'average': average
    })

if __name__ == '__main__':
    app.run(debug=True)
