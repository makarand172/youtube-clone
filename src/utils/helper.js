export function formatNumber(num = 0) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const adjectives = [
  "quick",
  "lazy",
  "bright",
  "calm",
  "vivid",
  "gentle",
  "sharp",
  "bold",
  "fierce",
  "quiet",
];
const nouns = [
  "fox",
  "dog",
  "cat",
  "tree",
  "river",
  "mountain",
  "cloud",
  "star",
  "bird",
  "stone",
];
const verbs = [
  "runs",
  "jumps",
  "flies",
  "sings",
  "dances",
  "shines",
  "flows",
  "soars",
  "rests",
  "glows",
];
const adverbs = [
  "swiftly",
  "calmly",
  "boldly",
  "gently",
  "eagerly",
  "quietly",
  "smoothly",
  "vividly",
  "lazily",
  "freely",
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSentence() {
  const structure =
    Math.random() > 0.5
      ? `${getRandomElement(adjectives)} ${getRandomElement(
          nouns
        )} ${getRandomElement(verbs)} ${getRandomElement(adverbs)}.`
      : `${getRandomElement(nouns)} ${getRandomElement(
          verbs
        )} ${getRandomElement(adjectives)} ${getRandomElement(nouns)}.`;
  return structure.charAt(0).toUpperCase() + structure.slice(1);
}

function generateParagraph(sentenceCount = 4) {
  const sentences = [];
  for (let i = 0; i < sentenceCount; i++) {
    sentences.push(generateSentence());
  }
  return sentences.join(" ");
}

export function generateText(paragraphCount = 1, sentenceCount = 1) {
  const paragraphs = [];
  for (let i = 0; i < paragraphCount; i++) {
    paragraphs.push(generateParagraph(sentenceCount));
  }
  return paragraphs.join("\n\n");
}
