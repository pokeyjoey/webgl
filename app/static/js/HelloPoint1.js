// HelloPoint1.js
// Vertex shader program
var VSHADER_SOURCE =
    'void main() {\n' +
    ' gl_Position = vec4(0.5, 0.5, 0.0, 1.0);\n' + // Coordinates
    ' gl_PointSize = 10.0;\n' + // set the point size
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

    // set the color for the clearing canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    // draw a point
    gl.drawArrays(gl.POINTS, 0, 1
    );
}

