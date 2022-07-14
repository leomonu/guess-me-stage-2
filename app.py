from flask import Flask, request,jsonify,render_template
import random




app=Flask(__name__)

templates = [
  {
    "inputs": 8,
    "category": "sports",
    "word": "Football",
  },
  {
    "inputs": 6,
    "category": " Indian State Name",
    "word": "Kerela",
  },
  {
    "inputs": 5,
    "category": " Indian State Name",
    "word": "Assam",
  },
  {
    "inputs": 7,
    "category": "sports",
    "word": "Cricket",
  },
]

@app.route("/")

def display():
    return render_template("index.html")

@app.route("/get_templates")
def getTemplates():
    return jsonify({
        "status":"success",
        "word":random.choice(templates)
    })

if __name__=="__main__":
    app.run(debug=True)