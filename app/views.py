from flask import render_template
from app import app

@app.route('/draw_rectangle')
def draw_rectangle():
    return render_template('DrawRectangle.html', title='DrawRectangle')

@app.route('/hello_canvas')
def hello_canvas():
    return render_template('HelloCanvas.html', title='HelloCanvas')


