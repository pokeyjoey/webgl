// RotatedTriangle_Matrix.js
// Vertex shader program
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'uniform mat4 u_xformMatrix;\n' +
    'void main() {\n' +
    ' gl_Position = u_xformMatrix * a_Position;\n'
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'void main() {\n' +
    '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

// Rotation Angle
var ANGLE = 90.0;

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

    //Set the positions of vertices
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
    }

    // Create a rotation matrix
    var radian = Math.PI * ANGLE / 180.0; // Convert to radians
    var cosB = Math.cos(radian), sinB = Math.sin(radian);
    
    // Note WebGL is column major order
    var xformMatrix = new Float32Array([
        cosB, sinB, 0.0, 0.0,
       -sinB, cosB, 0.0, 0.0,
        0.0,  0.0,  1.0, 0.0,
        0.0,  0.0,  0.0, 1.0
    ]);

    // Pass the rotation matrix to the vertex shader
    var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
	if (!u_xformMatrix) {
		console.log('Failed to get the storage location of u_xformMatrix');
		return;
	}
	gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);

    // set the color for the clearing canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw a triangle
    gl.drawArrays(gl.TRIANGLES, 0, n); // n is 3
}


function initVertexBuffers(gl) {
    var vertices = new Float32Array([
        0.0, 0.5,  -0.5, -0.5,  0.5, -0.5
    ]);
    var n = 3; // the number of vertices

    // Create a buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }

    // Bind the buffer object to the target
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    // Write date into the buffer object
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

	var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
	if (a_Position < 0) {
		console.log('Failed to get the storage location of a_Position');
		return -1;
	}

	// Assign the buffer object to a_Position variable
	gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

	// Enablethe assignment to a_Position variable
	gl.enableVertexAttribArray(a_Position);

	return n;
}

