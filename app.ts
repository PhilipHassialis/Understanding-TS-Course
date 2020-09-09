console.log("test with tsc");

enum EngineerGrade { JUNIOR, INTERMEDIATE, SENIOR, PRINCIPAL }

const button = document.querySelector('button');

function clickHandler(message: string) {
    console.log(`${message}`);
}

// button?.addEventListener('click', () => {
//     console.log("Clicked!")
// })

button?.addEventListener('click', clickHandler.bind(null, "my data"))