var i = 0;
var xsx, xsy, ysx, ysy, ws;
var txt = new Array;
var x = 0,
    y = 0,
    z = 0;
var w = 1;
var ccx, ccy;
var axis1, axis2, ho, lo;
//Navigate prev
function prev() {
    i--;
    if (i < 0) {
        i++;
    }
    txt[0] = " Introduction to the interface : This experiment is designed to teach how points and co-ordinate systems are represented in computer graphics. The display on your left shows the world with each shape and co-ordinate system that you create. The absolute co-ordinate system and XY grid is displayed for reference.These instructions are in a series of steps. Use the Next and Previous buttons to navigate.";
    txt[1] = " The Set-up : This experiment starts with a single point and a co-ordinate system. The absolute co-ordinates of this point are displayed below.Left click around the canvas and see how the co-ordinates are updated.You can also edit the co-ordinates manually and see how the point moves to the correct place.";
    txt[2] = "Non-orthogonal co-ordinate systems : Until now, we have been using a co-ordinate system with axes that are perpendicular to each other. Such a co-ordinate system is called an Orthogonal Co-ordinate System.";
    txt[3] = "To make this co-ordinate system Non-orthogonal,  click on New. The nodes X, Y and Z are the direction vectors of the axes of this co-ordinate system in a Global reference frame. Edit them to make the angles between them other than 90 degrees.";
    txt[4] = "Homogeneous co-ordinates : Each co-ordinate shown between [ and ] has an extra component which acts as a scaling factor. These co-ordinates are called Homogeneous Co-ordinates. E.g. [4,3,-1,2] represents the location (2,1.5,-0.5) in Cartesian space. This factor, usually represented by w, is a useful tool for applying certain transformations, which will be introduced in later experiments.Edit the fourth component of the co-ordinates of the current point to see its effect. The Homogeneous and Cartesian co-ordinates of this point are always shown at the bottom.";
    txt[5] = "Loading Shapes  :  Instead of working with a single point, you can load new shapes. Click on New and choose a shape from the drop-down. It has been pre-loaded with a few shapes.";
    txt[6] = "Extra Features of the interface : Click on the Display tab to change how the display is drawn. You can acces grid line.Click on Reset View at any time to reset the camera to default position";
    document.getElementById("demo").innerHTML = txt[i];
}
//Navigate next
function nxt() {
    i++;
    if (i > 6) {
        i--;
    }
    txt[0] = " Introduction to the interface : This experiment is designed to teach how points and co-ordinate systems are represented in computer graphics. The display on your left shows the world with each shape and co-ordinate system that you create. The absolute co-ordinate system and XY grid is displayed for reference.These instructions are in a series of steps. Use the Next and Previous buttons to navigate.";
    txt[1] = " The Set-up : This experiment starts with a single point and a co-ordinate system. The absolute co-ordinates of this point are displayed below.Left click around the canvas and see how the co-ordinates are updated.You can also edit the co-ordinates manually and see how the point moves to the correct place.";
    txt[2] = "Non-orthogonal co-ordinate systems : Until now, we have been using a co-ordinate system with axes that are perpendicular to each other. Such a co-ordinate system is called an Orthogonal Co-ordinate System.";
    txt[3] = "To make this co-ordinate system Non-orthogonal,  click on New. The nodes X, Y and Z are the direction vectors of the axes of this co-ordinate system in a Global reference frame. Edit them to make the angles between them other than 90 degrees.";
    txt[4] = "Homogeneous co-ordinates : Each co-ordinate shown between [ and ] has an extra component which acts as a scaling factor. These co-ordinates are called Homogeneous Co-ordinates. E.g. [4,3,-1,2] represents the location (2,1.5,-0.5) in Cartesian space. This factor, usually represented by w, is a useful tool for applying certain transformations, which will be introduced in later experiments.Edit the fourth component of the co-ordinates of the current point to see its effect. The Homogeneous and Cartesian co-ordinates of this point are always shown at the bottom.";
    txt[5] = "Loading Shapes  :  Instead of working with a single point, you can load new shapes. Click on New and choose a shape from the drop-down. It has been pre-loaded with a few shapes.";
    txt[6] = "Extra Features of the interface : Click on the Display tab to change how the display is drawn. You can acces grid line.Click on Reset View at any time to reset the camera to default position";
    document.getElementById("demo").innerHTML = txt[i];
}
//Input function
function io() {
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    z = document.getElementById("z").value;
    w = document.getElementById("w").value;
    if (w <= 0) {
        alert("w cannot be 0 or -ve")
    } else {
        if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(w)) {
            alert("ERROR:input is invalid.Enter an integer Co-ordinate");
        } else {
            if (x > 50 || x < -50 || y > 50 || y < -50 || z > 50 || z < -50) {
                alert("ERROR: Enter values with in -50 and +50");
            }
        }
    }
    x = x / w;
    y = y / w;
    z = z / w;
    d3();
}
//Create scene and renderer and stuff
var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('myCanvas5'),
    antialias: true
});
var canvas = document.getElementById("myCanvas5");
var ctx5 = canvas.getContext("2d");
var innerWidth = window.innerWidth / 1.5,
    innerHeight = window.innerHeight;
var scene = new THREE.Scene();
scene.background = new THREE.Color("#303030");
var camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', function() {
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
});
controls = new THREE.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.BoxGeometry(x, y, z);
var render = function() {
    renderer.render(scene, camera);
};
// run game loop (update, render, repeat)
var GameLoop = function() {
    requestAnimationFrame(GameLoop);
    render();
};
GameLoop();
camera.position.set(0, 0, 75);
camera.lookAt(0, 0, 0);
var i = 0;
var sphere;
canvas.width = innerWidth;
canvas.height = innerHeight;
ccy = canvas.height / 2;
ccx = canvas.width / 2;
//Get clicked Co-Ordinates
function init() {
    d3rsv();
    canvas.addEventListener("contextmenu", getPosition, false);
}
function getPosition(event) {
    x = event.x;
    y = event.y;
    z = 0;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    y = ccy - y;
    x = -ccx - (-x);
    x = x / 10;
    y = y / 10;
    z = z / 10;
    x = Math.round(x);
    y = Math.round(y);
    ho = ("[" + x + "," + y + "," + z + "," + "1" + "]");
    lo = (x + "," + y + "," + z);
    document.getElementById("disp1").innerHTML = ho;
    document.getElementById("disp2").innerHTML = lo;
    scene.remove(sphere);
    var geometry = new THREE.SphereGeometry(.3, .3, .3);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
    canvas.removeEventListener("contextmenu", getPosition);
}
//Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
//Reload Tab
function rd() {
    window.location.reload();
}
//locate point
function d3() {
    scene.remove(sphere);
    var geometry = new THREE.SphereGeometry(.3, .3, .3);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
    renderer.render(scene, camera);
    axis();
    ho = ("[" + x + "," + y + "," + z + "," + "1" + "]");
    lo = (x + "," + y + "," + z);
    document.getElementById("disp1").innerHTML = ho;
    document.getElementById("disp2").innerHTML = lo;
}
//grid draw
function grid() {
    for (var i = -100; i < 100; i += 4) {
        var grid = new THREE.Geometry();
        var gridMaterial = new THREE.LineBasicMaterial({
            color: 'black',
            lineidth: .1
        });
        grid.vertices.push(new THREE.Vector3(i, -100, 0));
        grid.vertices.push(new THREE.Vector3(i, 100, 0));
        var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
        scene.add(verticalyz);
    }
    for (var i = -100; i < 100; i += 4) {
        var grid = new THREE.Geometry();
        var gridMaterial = new THREE.LineBasicMaterial({
            color: 'black',
            lineidth: .1
        });
        grid.vertices.push(new THREE.Vector3(-100, i, 0));
        grid.vertices.push(new THREE.Vector3(100, i, 0));
        var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
        scene.add(verticalyz);
    }
    for (var i = -100; i < 100; i += 4) {
        var grid = new THREE.Geometry();
        var gridMaterial = new THREE.LineBasicMaterial({
            color: 'black',
            lineidth: .1
        });
        grid.vertices.push(new THREE.Vector3(-100, 0, i));
        grid.vertices.push(new THREE.Vector3(100, 0, i));
        var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
        scene.add(verticalyz);
    }
    for (var i = -100; i < 100; i += 4) {
        var grid = new THREE.Geometry();
        var gridMaterial = new THREE.LineBasicMaterial({
            color: 'black',
            lineidth: .1
        });
        grid.vertices.push(new THREE.Vector3(i, 0, -100));
        grid.vertices.push(new THREE.Vector3(i, 0, 100));
        var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
        scene.add(verticalyz);
    }
    // Yz plane
    for (var i = -100; i < 100; i += 4) {
        var grid = new THREE.Geometry();
        var gridMaterial = new THREE.LineBasicMaterial({
            color: 'black',
            lineidth: .1
        });
        grid.vertices.push(new THREE.Vector3(0, -100, i));
        grid.vertices.push(new THREE.Vector3(0, 100, i));
        var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
        scene.add(verticalyz);
    }
    for (var i = -100; i < 100; i += 4) {
        var grid = new THREE.Geometry();
        var gridMaterial = new THREE.LineBasicMaterial({
            color: 'black',
            lineidth: .1
        });
        grid.vertices.push(new THREE.Vector3(0, i, -100));
        grid.vertices.push(new THREE.Vector3(0, i, 100));
        var verticalyz = new THREE.Line(grid, gridMaterial, THREE.LineSegments);
        scene.add(verticalyz);
    }
}
var X_direction, Y_direction, Z_direction;
// 3 axis draw
function axis() {
    //X-axis red line 
    var X = new THREE.Geometry();
    var x_material = new THREE.LineBasicMaterial({
        color: 'red',
        linewidth: 1.5
    });
    X.vertices.push(new THREE.Vector3(-60, 0, 0));
    X.vertices.push(new THREE.Vector3(60, 0, 0));
    X_direction = new THREE.Line(X, x_material, THREE.LineSegments);
    scene.add(X_direction);
    //Y-axis green line 
    var Y = new THREE.Geometry();
    var y_material = new THREE.LineBasicMaterial({
        color: 'green',
        linewidth: 1.5
    });
    Y.vertices.push(new THREE.Vector3(0, -60, 0));
    Y.vertices.push(new THREE.Vector3(0, 60, 0));
    Y_direction = new THREE.Line(Y, y_material, THREE.LineSegments);
    scene.add(Y_direction);
    //Z-axis blue line
    var Z = new THREE.Geometry();
    var z_material = new THREE.LineBasicMaterial({
        color: 0x3CEFF1,
        linewidth: 1.5
    });
    Z.vertices.push(new THREE.Vector3(0, 0, -60));
    Z.vertices.push(new THREE.Vector3(0, 0, 60));
    Z_direction = new THREE.Line(Z, z_material, THREE.LineSegments);
    scene.add(Z_direction);
}
//camera set view
function d3rsv() {
    camera.position.set(0, 0, 75);
    camera.lookAt(0, 0, 0);
}
var dec;
//shape d 1
function shaped() {
    scene.remove(meshed);
    scene.remove(sphere);
    scene.remove(cube);
    scene.remove(dec);
    var shaped = new THREE.Geometry();
    var materiald = new THREE.MeshStandardMaterial({
        color: 0x00ff00
    });
    var geometryd = new THREE.DodecahedronBufferGeometry(10, 1);
    var useless = new THREE.Mesh(geometryd, materiald);
    scene.add(useless);
    var shaped = new THREE.Geometry();
    dec = new THREE.Mesh(
        new THREE.CubeGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial({
            color: 0x00ff00
        })
    );
    scene.add(dec);
    var aLight = new THREE.AmbientLight(0x404040, 5);
    scene.add(aLight);
    //change vertex positions
    dec.geometry.vertices[1].y += y - 5;
    dec.geometry.vertices[1].x += (x - 5);
    dec.geometry.vertices[1].z += z + 5
    d3rsv();
    canvas.addEventListener("contextmenu", shaped2, false);
}
function shaped2(event) {
    x = event.x;
    y = event.y;
    z = 0;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    y = ccy - y;
    x = -ccx - (-x);
    x = x / 10;
    y = y / 10;
    z = z / 10;
    x = Math.round(x);
    y = Math.round(y);
    ho = ("[" + x + "," + y + "," + z + "," + "1" + "]");
    lo = (x + "," + y + "," + z);
    document.getElementById("disp1").innerHTML = ho;
    document.getElementById("disp2").innerHTML = lo;
    scene.remove(meshed);
    scene.remove(sphere);
    scene.remove(cube);
    scene.remove(dec);
    canvas.removeEventListener("contextmenu", shaped2);
    var geometry = new THREE.SphereGeometry(.3, .3, .3);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
    renderer.render(scene, camera);
    shapei();
}
// shape c 2
var cube;
function shapec() {
    scene.remove(meshed);
    scene.remove(sphere);
    scene.remove(cube);
    scene.remove(dec);
    var shaped = new THREE.Geometry();
    cube = new THREE.Mesh(
        new THREE.CubeGeometry(10, 10, 10),
        new THREE.MeshStandardMaterial({
            color: 0x00ff00
        })
    );
    scene.add(cube);
    var aLight = new THREE.AmbientLight(0x404040, 5);
    scene.add(aLight);
    //change vertex positions
    cube.geometry.vertices[1].y += y - 5;
    cube.geometry.vertices[1].x += (x - 5);
    cube.geometry.vertices[1].z += z + 5
    d3rsv();
    canvas.addEventListener("contextmenu", shapec2, false);
}
function shapec2(event) {
    x = event.x;
    y = event.y;
    z = 0;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    y = ccy - y;
    x = -ccx - (-x);
    x = x / 10;
    y = y / 10;
    z = z / 10;
    x = Math.round(x);
    y = Math.round(y);
    ho = ("[" + x + "," + y + "," + z + "," + "1" + "]");
    lo = (x + "," + y + "," + z);
    document.getElementById("disp1").innerHTML = ho;
    document.getElementById("disp2").innerHTML = lo;
    scene.remove(meshed);
    scene.remove(sphere);
    scene.remove(cube);
    scene.remove(dec);
    canvas.removeEventListener("contextmenu", shapec2);
    var geometry = new THREE.SphereGeometry(.3, .3, .3);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
    renderer.render(scene, camera);
    shapec();
}
// shape i 3
var meshed;
function shapei() {
    scene.remove(meshed);
    scene.remove(sphere);
    scene.remove(cube);
    scene.remove(dec);
    var shaped = new THREE.Geometry();
    var geometry = new THREE.IcosahedronGeometry(10, 1);
    var material = new THREE.MeshStandardMaterial({
        color: 0x00ff00
    });
    meshed = new THREE.Mesh(geometry, material);
    scene.add(meshed);
    var aLight = new THREE.AmbientLight(0x404040, 5);
    scene.add(aLight);
    //change vertex positions
    meshed.geometry.vertices[1].y += y - 8;
    meshed.geometry.vertices[1].x += (x + 3);
    meshed.geometry.vertices[1].z += z - 5;
    d3rsv();
    canvas.addEventListener("contextmenu", shapei2, false);
}
function shapei2(event) {
    x = event.x;
    y = event.y;
    z = 0;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    y = ccy - y;
    x = -ccx - (-x);
    x = x / 10;
    y = y / 10;
    z = z / 10;
    x = Math.round(x);
    y = Math.round(y);
    ho = ("[" + x + "," + y + "," + z + "," + "1" + "]");
    lo = (x + "," + y + "," + z);
    document.getElementById("disp1").innerHTML = ho;
    document.getElementById("disp2").innerHTML = lo;
    scene.remove(meshed);
    scene.remove(sphere);
    scene.remove(cube);
    scene.remove(dec);
    canvas.removeEventListener("contextmenu", shapei2);
    var geometry = new THREE.SphereGeometry(.3, .3, .3);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
    renderer.render(scene, camera);
    shapei();
}
//Skew coordinates
function skewcoord() {
    scene.remove(sphere);
    var xsd = 0,
        ysd = 0,
        xo, yo, u, v;
    xsx = document.getElementById("xsx").value;
    xsy = document.getElementById("xsy").value;
    ysx = document.getElementById("ysx").value;
    ysy = document.getElementById("ysy").value;
    ws = document.getElementById("ws").value;
    u = document.getElementById("u").value;
    v = document.getElementById("v").value;
    xsx = xsx / 1;
    xsy = xsy / 1;
    ysx = ysx / 1;
    ysy = ysy / 1;
    var X = new THREE.Geometry();
    var x_material = new THREE.LineBasicMaterial({
        color: 'orange',
        linewidth: 1.5
    });
    X.vertices.push(new THREE.Vector3(0, 0, 0));
    X.vertices.push(new THREE.Vector3(xsx, xsy, 0));
    var X_direction = new THREE.Line(X, x_material, THREE.LineSegments);
    scene.add(X_direction);
    //Y-axis green line 
    var Y = new THREE.Geometry();
    var y_material = new THREE.LineBasicMaterial({
        color: 'pink',
        linewidth: 1.5
    });
    Y.vertices.push(new THREE.Vector3(0, 0, 0));
    Y.vertices.push(new THREE.Vector3(ysx, ysy, 0));
    var Y_direction = new THREE.Line(Y, y_material, THREE.LineSegments);
    scene.add(Y_direction);
    var xl = Math.sqrt(Math.pow(xsx, 2) + Math.pow(xsy, 2));
    var yl = Math.sqrt(Math.pow(ysx, 2) + Math.pow(ysy, 2));
    var ll = Math.sqrt(Math.pow((xsx - ysx), 2) + Math.pow((xsy - ysy), 2));
    var cos = ((xl * xl) + (yl * yl) - (ll * ll)) / (2 * xl * yl);
    var cosa = (xsx / xl);
    var sina = (xsy / xl);
    var sin = Math.sqrt(1 - Math.pow(cos, 2));
    xsd = (v * cos) - (-xsd);
    xsd = u - (-xsd);
    ysd = (v * sin);
    yo = ((xsd * sina) + (ysd * cosa));
    xo = ((xsd * cosa) - (ysd * sina));
    x = xo;
    y = yo;
    y = y / ws;
    x = x / ws;
    var geometry = new THREE.SphereGeometry(.3, .3, .3);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00
    });
    sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
    renderer.render(scene, camera);
    axis();
}