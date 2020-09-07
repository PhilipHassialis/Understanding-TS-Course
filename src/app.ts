// const person: {
//     name: string;
//     age: number;
// } 

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];

// } = {
//     name: 'Philip',
//     age: 45,
//     hobbies: ['coding', 'wanking'],
//     role: [2, 'coder']
// };
// person.role = [0, 'admin'];

enum Role { ADMIN = 1000, READ_ONLY = 'READ_ONLY', AUTHOR = 2000 };

const person = {
    name: 'Philip',
    age: 45,
    hobbies: ['coding', 'wanking'],
    role: Role.READ_ONLY
};

let favoriteActivities: string[];
// favoriteActivities = ['Sports',1]  -- error



console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
