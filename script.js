const wordBanks = {
  hereford: {
    verbs: ["keeps", "steals", "cups", "turns"],
    nouns: ["time", "light", "the city", "the palm of hills"],
    endings: ["under the heat", "at the centre of the map", "in its old hand"]
  },

  mordiford: {
    verbs: ["sleeps", "curls", "guards", "dreams"],
    nouns: ["the dragon", "the tail", "the road", "the shell"],
    endings: ["beneath the village", "like a snail shell", "under the road"]
  },

  lugwardine: {
    verbs: ["lifts", "carries", "summons", "darkens"],
    nouns: ["rain", "Wales", "the small hill", "the road"],
    endings: ["over the brow of the hill", "from the west", "into strangeness"]
  },

  radnorshire: {
    verbs: ["rises", "freezes", "waits", "withdraws"],
    nouns: ["the ridge", "the frost", "the distance", "the high ground"],
    endings: ["beyond the city", "higher than spires", "in hard weather"]
  }
};

let currentPlace = "hereford";

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function gatherLine() {
  const bank = wordBanks[currentPlace];

  if (!bank) return "The road gathers itself into weather.";

  return `${pick(bank.verbs)} ${pick(bank.nouns)} ${pick(bank.endings)}.`;
}

document.addEventListener("DOMContentLoaded", () => {
  const gatherButton = document.querySelector("#gather");
  const currentLine = document.querySelector("#current-line");

  gatherButton.addEventListener("click", () => {
    currentLine.textContent = gatherLine();
  });
});
