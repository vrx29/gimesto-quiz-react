import { v4 as uuid } from "uuid";
import godofwar from "assets/posters/godofwar.jpeg";
import batman from "assets/posters/batman.jpeg";
import mario from "assets/posters/mario.jpeg";

export const quizzes = [
  {
    _id: uuid(),
    name: "Batman",
    difficulty: "easy",
    genres: ["action", "Adventure"],
    poster: batman,
    questions: [
      {
        id: uuid(),
        question: "What were the names of Bruce Wayne's parents?",
        options: [
          "george & elaine",
          "james & elizabeth",
          "wayne & alice",
          "thomas & martha",
        ],
        answer: "thomas & martha",
      },
      {
        id: uuid(),
        question: "Who is credited with creating Batman?",
        options: ["bob kane", "joe shuster", "jerry siegel", "jack kirby"],
        answer: "bob kane",
      },
      {
        id: uuid(),
        question: "What Batman villain formerly worked as a zoologist?",
        options: ["manbat", "killer croc", "the penguin", "poison ivy"],
        answer: "manbat",
      },
      {
        id: uuid(),
        question: "What year was the character of Robin first introduced?",
        options: ["1960", "1950", "1940", "1970"],
        answer: "1940",
      },
      {
        id: uuid(),
        question:
          "The original Batgirl was related to what familiar Batman character?",
        options: ["the joker", "batwoman", "alfred", "commissioner gordon"],
        answer: "batwoman",
      },
      // {
      //   id: uuid(),
      //   question: "Which of these Bat-villains was introduced first?",
      //   options: ["catwoman", "the riddler", "mr. freeze", "the penguin"],
      //   answer: "catwoman",
      // },
      // {
      //   id: uuid(),
      //   question: "What was Alfred the butler's original family name?",
      //   options: ["pennyworth", "windham", "chatsworth", "beagle"],
      //   answer: "beagle",
      // },
      // {
      //   id: uuid(),
      //   question: "What was Bat-hound's name?",
      //   options: ["ace", "champ", "burt", "lucky"],
      //   answer: "ace",
      // },
      // {
      //   id: uuid(),
      //   question: "Who first replaced Batman when he was paralyzed by Bane?",
      //   options: ["nightwing", "azrael", "robin", "redhood"],
      //   answer: "azrael",
      // },
    ],
  },
  {
    _id: uuid(),
    name: "God of War",
    difficulty: "medium",
    genres: ["action"],
    poster: godofwar,
    questions: [
      {
        id: uuid(),
        question: "Why is Kratos so pale?",
        options: [
          "He was locked away for a long time",
          "He's allergic to sunlight",
          "He's covered head to toe in the ashes of his dead family",
          "He's a Real Gamer",
        ],
        answer: "He's covered head to toe in the ashes of his dead family",
      },
      {
        id: uuid(),
        question: "What is the name of Kratos' first wife?",
        options: ["Calliope", "Faye", "Selene", "Lysandra"],
        answer: "Lysandra",
      },
      {
        id: uuid(),
        question: "The Greek God of War games are narrated by which character?",
        options: ["Lysandra", "Calliope", "Athena", "Gaia"],
        answer: "Gaia",
      },
      {
        id: uuid(),
        question: "Why does Kratos have that red body tattoo?",
        options: [
          "It's symbolic of his younger brother, Deimos",
          "It was bound to him at the same time as the ashes",
          "It's a tradition in his family",
          "He just thought it would look cool",
        ],
      },
      {
        id: uuid(),
        question: "In God of War 2, Kratos' father is revealed. Who is it?",
        options: ["Apollo", "Ares", "Zeus", "Cronos"],
        answer: "Zeus",
      },
      // {
      //   id: uuid(),
      //   question: "Who was game director on God of War 3?",
      //   options: [
      //     "Ru Weerasuriya",
      //     "Stig Asmussen",
      //     "Cory Barlog",
      //     "David Jaffe",
      //   ],
      //   answer: "Stig Asmussen",
      // },
      // {
      //   id: uuid(),
      //   question: "Who is the first Greek god to die in God of War 3?",
      //   options: ["Hades", "Helios", "Poseidon", "Hercules"],
      //   answer: "Poseidon",
      // },
      // {
      //   id: uuid(),
      //   question:
      //     "Kratos' signature weapon goes by various names in the different games. What are his chain blades called in God of War: Ghost of Sparta?",
      //   options: [
      //     "Blades of Athena",
      //     "Blades of Olympus",
      //     "Blades of Exile",
      //     "Blades of Chaos",
      //   ],
      //   answer: "Blades of Athena",
      // },
      // {
      //   id: uuid(),
      //   question: "Which is the only God of War game to feature multiplayer?",
      //   options: [
      //     "God of War: Ghost of Sparta",
      //     "God of War (2018)",
      //     "God of War: Ascension",
      //     "God of War 3",
      //   ],
      //   answer: "God of War: Ascension",
      // },
      // {
      //   id: uuid(),
      //   question:
      //     "In God of War (2018), Kratos wields an entirely different weapon. What is it called?",
      //   options: [
      //     "Axe of Chaos",
      //     "Leviathan Axe",
      //     "Axe of the Ghost",
      //     "Spartan Axe",
      //   ],
      //   answer: "Leviathan Axe",
      // },
    ],
  },
  {
    _id: uuid(),
    name: "Mario Bros",
    difficulty: "hard",
    genres: ["action", "Adventure"],
    poster: mario,
    questions: [
      {
        id: uuid(),
        question: "Which country is Mario supposedly from?",
        options: ["France", "Spain", "Italy", "Portugal"],
        answer: "Italy",
      },
      {
        id: uuid(),
        question: "In what game did Mario make his first appearance?",
        options: [
          "Super Mario Bros",
          "Donkey Kong",
          "Mario Bros",
          "Game and Watch",
        ],
        answer: "Donkey Kong",
      },
      {
        id: uuid(),
        question: "Which of these roles has Mario NOT appeared as in a game?",
        options: ["Golfer", "Chef", "Carpenter", "Librarian"],
        answer: "Librarian",
      },
      {
        id: uuid(),
        question: "What is the best-selling Mario game ever?",
        options: [
          "Super Mario Bros",
          "Mario World",
          " Mario Kart",
          "Super Mario World",
        ],
        answer: "Mario Kart",
      },
      {
        id: uuid(),
        question: "What was Princess Peach’s original name?",
        options: [
          "Princess Plum",
          "Princess Rainbow Princess",
          "Princess Toadstool",
          "Princess Apple",
        ],
        answer: "Princess Toadstool",
      },
      // {
      //   id: uuid(),
      //   question:
      //     " In ‘Mario Kart Wii’, which character has the highest speed stat?",
      //   options: ["Dry Bones", "Funky Kong", "Donkey Kong", "Baby Mario"],
      //   answer: "Baby Mario",
      // },
      // {
      //   id: uuid(),
      //   question: "What color is Toadette’s hat?",
      //   options: [
      //     "Pink and white",
      //     "Red and white",
      //     "Blue and white",
      //     "Yellow and white",
      //   ],
      //   answer: "Pink and white",
      // },
      // {
      //   id: uuid(),
      //   question:
      //     "How many different Yoshi colors are there in ‘Super Mario Sunshine’?",
      //   options: ["3", "4", "5", "6"],
      //   answer: "3",
      // },
      // {
      //   id: uuid(),
      //   question:
      //     "Which common enemy grows out of pipes and tries to eat Mario?",
      //   options: ["Goomba", "Hammer Bro", "Piranha Plant", "Bowser"],
      //   answer: "Piranha Plant",
      // },
      // {
      //   id: uuid(),
      //   question: "Who is consider Mario's biggest enemy?",
      //   options: ["Wario", "Waluigi", "Kamek", "Bowser"],
      //   answer: "Bowser",
      // },
    ],
  },
];
