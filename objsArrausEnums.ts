const inferedPerson = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const enumPerson = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

const typedPerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Creating a tuple typ
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(inferedPerson);

inferedPerson.hobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
});
