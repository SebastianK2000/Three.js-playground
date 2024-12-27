// first step is write in terminal "npm install parcel -g"
// second step is write in terminal "npm install"
// third step is write in terminal "npm install three"


//importy 
import * as THREE from 'three'; // importuje wszystko z three.js
   
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'; // importuje kontrolki do poruszania kamerą (orbitalnie)

//scena
const render = new THREE.WebGLRenderer();  // ustawiamy renderowanie na WebGL dzięki temu możemy renderować 3D

render.setSize(window.innerWidth, window.innerHeight); // ustawiamy rozmiar renderu na całe okno przeglądarki

document.body.appendChild(render.domElement); // wstrzykujemy (renderujemy) element który utworzyliśmy czyli scene (okno które będzie wyświetlać zawartość na całym oknie przeglądarki)

 // in terminal write "parcel src/... (dependency for file)" to build and run the project

const scene = new THREE.Scene(); // tworzymy nową scene

//kamera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // tworzymy nową kamerę

const orbit = new OrbitControls(camera, render.domElement); // tworzymy nowe kontrolki do kamery orbitalnej

const axesHelper = new THREE.AxesHelper(5); // tworzymy osie pomocnicze
scene.add(axesHelper); // dodajemy osie do sceny 

camera.position.set(-10, 30, 30); // ustawiamy pozycję kamery
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(30, 30); // tworzymy płaszczyznę 
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x00FFFF, side: THREE.DoubleSide }); // tworzymy materiał dla płaszczyzny
const plane = new THREE.Mesh(planeGeometry, planeMaterial); // wstawiamy płaszczyznę do sceny
scene.add(plane);

const gridHelper = new THREE.GridHelper(30); // tworzymy siatkę pomocniczą
scene.add(gridHelper); // dodajemy siatkę do sceny

function animate() {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    render.render(scene, camera);
} // funkcja która będzie wykonywała się w pętli jako animacja 

render.setAnimationLoop(animate); // ustawiamy pętlę animacji