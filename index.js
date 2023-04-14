const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

// redLight.style.backgroundColor = "red";

function Semaforo() {
    setTimeout(() => {
        redLight.style.backgroundColor = "red"
        yellowLight.style.backgroundColor = "white"
        greenLight.style.backgroundColor = "white"
        setTimeout(() => {
            redLight.style.backgroundColor = "red"
            yellowLight.style.backgroundColor = "yellow"
            greenLight.style.backgroundColor = "white"
            setTimeout(() => {
                redLight.style.backgroundColor = "white"
                yellowLight.style.backgroundColor = "white"
                greenLight.style.backgroundColor = "green"
                setTimeout(()=>{
                    Semaforo();
                },1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

Semaforo();

















// function changeLights() {
// 	setTimeout(() => {
// 		redLight.style.backgroundColor = 'red';
// 		yellowLight.style.backgroundColor = 'white';
// 		greenLight.style.backgroundColor = 'white';
// 		setTimeout(() => {
// 			yellowLight.style.backgroundColor = 'yellow';
// 			setTimeout(() => {
// 				redLight.style.backgroundColor = 'white';
// 				yellowLight.style.backgroundColor = 'white';
// 				greenLight.style.backgroundColor = 'green';
// 				setTimeout(() => {
// 					changeLights();
// 				}, 2000);
// 			}, 2000);
// 		}, 2000);
// 	}, 2000);
// }

// changeLights();
