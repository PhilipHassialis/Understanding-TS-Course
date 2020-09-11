console.log("test with tsc");

enum EngineerGrade { JUNIOR, INTERMEDIATE, SENIOR, PRINCIPAL }

const button = document.querySelector('button');

function clickHandler(message: string) {
    console.log(`${message}`);
}

// button?.addEventListener('click', () => {
//     console.log("Clicked!")
// })

const addArrow = (a: number, b: number) => a + b;

const sqrArrow = (a: number) => a * a;

const printOutput: (a: number | string) => void = output => console.log(output);

if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}

const addArrowDefaultValue = (a: number, b: number = 1) => a + b;

addArrowDefaultValue(13);


button?.addEventListener('click', clickHandler.bind(null, "my data"))

const hobbies = ['coding', 'wanking'];
const activities = ['youtubing'];

activities.push(...hobbies);

const empUser = {
    userName: 'chasialisp',
    firstName: 'Philip Alexander',
    lastName: 'Hassialis'
};

const copiedEmpUser = { ...empUser };



