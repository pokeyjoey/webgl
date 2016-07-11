// HelloPoint1.js
// Vertex shader program
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'void main() {\n' +
    ' gl_Position = a_Position;\n' + // Coordinates
    ' gl_PointSize = 10.0;\n' + // set the point size
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'precision mediump float;\n' +
    'uniform vec4 u_FragColor;\n' + // uniform variable
    'void main() {\n' +
    ' gl_FragColor = u_FragColor;\n' + // Set the color
    '}\n';

function main() {
    // retrieve the cangvas element
    var canvas = document.getElementById('webgl');

    // get the rendering context for the WebGL
    var gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('failied to get rendering context');
        return;
    }

    // initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('Failed to initialize shaders.');
        return;
    }

    // get the storage location of attribute variable
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('failed to get the storage position of a_Position');
        return;
    }

    // get the storage location of the u_FragColor variable
    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
    if (!u_FragColor) {
        console.log('failed to get the storage position of u_FragColor');
        return;
    }

    // Register function to be called on a mouse press
    canvas.onmousedown = function(ev) { click(ev, gl, canvas, a_Position, u_FragColor) };

    // set the color for the clearing canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT);
}

var g_points = []; // The array for a mouse press
var g_colors = []; // The array to store the colors of a point 
function click(ev, gl, canvas, a_Position, u_FragColor) {
    console.log('click');
    console.log('g_points:' + g_points);

    var x = ev.clientX; // x coordinate of a mouse pointer
    var y = ev.clientY; // y coordinate of a mouse pointer
    var rect = ev.target.getBoundingClientRect();

    x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
    y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

    // store the coordinates to g_points array
    g_points.push([x,y]);
    console.log('g_points:' + g_points);

    // store the colors to a g_cplors array
    if (x >= 0.0 && y >= 0.0) {
        g_colors.push([1.0, 0.0, 0.0, 1.0]); // Red
    } else if (x < 0.0 && y < 0.0) {
        g_colors.push([0.0, 1.0, 0.0, 1.0]); // Green
    } else {
        g_colors.push([1.0, 1.0, 1.0, 1.0]); // White
    }

    // clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    var len = g_points.length;
    for (var i = 0; i < len; i+=2) {
        var xy = g_points[i];
        var rgba = g_colors[i];
        console.log(xy);

        // Pass the position of a point to the a_Position varible
        gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);

        // Pass the color of a point to u_FragColor variable
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        //draw a point
        gl.drawArrays(gl.POINTS, 0, 1);
    }
}
