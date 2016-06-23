// HelloCanvas.js

function main() {
	// retrieve canvas element
	var canvas = document.getElementById('webgl');
       
	// get the rendering context for webgl
	var gl = getWebGLContext(canvas);
	if (!gl) {
		console.log('failed to get the rtendering context for WebGL');
		return
    }

    // specfigy the color for clearing the canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

}

