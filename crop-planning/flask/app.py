from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

@app.route('/')

def home_page():
    example_embed='SoilLab is better than FarmBot.'
    return render_template('index.html', embed=example_embed)

@app.route('/test', methods=['GET', 'POST'])
def testfn():
    # GET request
    if request.method == 'GET':
        message = {'response':'I totally agree that SoilLab > FarmBot!'}
        return jsonify(message)
    # POST request
    if request.method == 'POST':
        print(request.get_json())
        return 'Sucesss', 200   

app.run(debug=True)