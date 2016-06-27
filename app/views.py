from flask import render_template
from app import app

@app.route('/draw_rectangle')
def draw_rectangle():
    return render_template('DrawRectangle.html', title='DrawRectangle')

@app.route('/hello_canvas')
def hello_canvas():
    return render_template('HelloCanvas.html', title='HelloCanvas')

@app.route('/hello_point1')
def hello_point1():
    return render_template('HelloPoint1.html', title='HelloPoint1')

@app.route('/hello_point2')
def hello_point2():
    return render_template('HelloPoint2.html', title='HelloPoint2')

@app.route('/clicked_points')
def clicked_points():
    return render_template('ClickedPoints.html', title='ClickedPoints')

@app.route('/colored_points')
def colored_points():
    return render_template('ColoredPoints.html', title='ColoredPoints')


