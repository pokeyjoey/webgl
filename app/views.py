from flask import render_template
from app import app

# Chapter 2
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

# Chapter 3
@app.route('/multi_point')
def multi_point():
    return render_template('MultiPoint.html', title='MultiPoint')

@app.route('/hello_triangle')
def hello_triangle():
    return render_template('HelloTriangle.html', title='HelloTriangle')

@app.route('/hello_triangle_lines')
def hello_triangle_lines():
    return render_template('HelloTriangle_LINES.html', title='HelloTriangle_LINES')

@app.route('/hello_triangle_line_strip')
def hello_triangle_line_strip():
    return render_template('HelloTriangle_LINE_STRIP.html', title='HelloTriangle_LINE_STRIP')

@app.route('/hello_triangle_line_loop')
def hello_triangle_line_loop():
    return render_template('HelloTriangle_LINE_LOOP.html', title='HelloTriangle_LINE_LOOP')

@app.route('/hello_quad')
def hello_quad():
    return render_template('HelloQuad.html', title='HelloQuad')

@app.route('/hello_quad_fan')
def hello_quad_fan():
    return render_template('HelloQuad_FAN.html', title='HelloQuad_FAN')

@app.route('/translated_triangle')
def translated_triangle():
    return render_template('TranslatedTriangle.html', title='TranslatedTriangle')

@app.route('/rotated_triangle')
def rotated_triangle():
    return render_template('RotatedTriangle.html', title='RotatedTriangle')

@app.route('/rotated_triangle_matrix')
def rotated_triangle_matrix():
    return render_template('RotatedTriangle_Matrix.html', title='RotatedTriangle_Matrix')

# Chapter 4
@app.route('/rotated_triangle_matrix4')
def rotated_triangle_matrix4():
    return render_template('RotatedTriangle_Matrix4.html', title='RotatedTriangle_Matrix4')

@app.route('/rotating_translated_triangle')
def rotating_translated_triangle():
    return render_template('RotatingTranslatedTriangle.html', title='RotatingTranslatedTriangle')

@app.route('/rotating_triangle')
def rotating_triangle():
    return render_template('RotatingTriangle.html', title='RotatingTriangle')

# chapter 5
@app.route('/multi_attibute_size')
def multi_attibute_size():
    return render_template('MultiAttributeSize.html', title='MultiAttributeSize')

@app.route('/multi_attibute_size_interleaved')
def multi_attibute_size_interleaved():
    return render_template('MultiAttributeSize_Interleaved.html', title='MultiAttributeSize_Interleaved')

@app.route('/multi_attibute_color')
def multi_attibute_color():
    return render_template('MultiAttributeColor.html', title='MultiAttributeColor')

@app.route('/colored_triangle')
def colored_triangle():
    return render_template('ColoredTriangle.html', title='ColoredTriangle')

@app.route('/hello_triangle_fragcoord')
def hello_triangle_fragcoord():
    return render_template('HelloTriangle_FragCoord.html', title='HelloTriangle_FragCoord')

@app.route('/textured_quad')
def textured_quad():
    return render_template('TexturedQuad.html', title='TexturedQuad')
