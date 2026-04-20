export default function Words() {
  const words1 = [
    "Xylophone",
    "Sunshine",
    "Mystery",
    "Banana",
    "Freedom",
    "Quest",
    "Courage",
    "Victory",
    "Lemon",
    "Puzzle",
  ];
  const words2 = [
    "Apple",
    "Bridge",
    "Cloud",
    "Dream",
    "Forest",
    "Garden",
    "Happy",
    "Island",
    "Market",
    "River",
  ];
  const words3 = [
    "Chair",
    "Clock",
    "Glass",
    "Hammer",
    "Knife",
    "Laptop",
    "Pencil",
    "Phone",
    "Spoon",
    "Wallet",
  ];
  const words4 = [
    "Desert",
    "Flower",
    "Grass",
    "Ocean",
    "Rain",
    "Snow",
    "Storm",
    "Valley",
    "Wind",
    "Winter",
  ];
  const words5 = [
    "Dance",
    "Drink",
    "Laugh",
    "Learn",
    "Listen",
    "Read",
    "Sleep",
    "Smile",
    "Write",
    "Watch",
  ];
  
  const words = [words1, words2, words3, words4, words5];

  return words[Math.floor(Math.random() * words.length)];
}
