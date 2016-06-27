// HelloPoint1.js
// Vertex shader program
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute float a_PointSize;\n' +
    'void main() {\n' +
    ' gl_Position = a_Position;\n' + // Coordinates
    ' gl_PointSize = a_PointSize;\n' + // set the point size
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'void main() {\n' +
    ' gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);\n' + // Set the color
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
    // get the storage location of attribute variable
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    if (a_PointSize < 0) {
        console.log('failed to get the storage position of a_PointSize');
        return;
    }

    // Pass vertex position to attribute variable
    gl.vertexAttrib3f(a_Position, 0.5, 0.0, 0.0);
    gl.vertexAttrib1f(a_PointSize, 5.0);

    // set the color for the clearing canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    // draw a point
    gl.drawArrays(gl.POINTS, 0, 1
    );
}

