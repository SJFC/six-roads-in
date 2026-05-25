const sixRoadsWordBanks = {
  dormington: {
    subjects: ["crow", "the fingerpost", "a black wing", "the road-sign", "morning"],
    verbs: ["points", "turns", "misdirects", "breaks open", "leans"],
    objects: ["the journey", "six possible roads", "a choice of weather", "the bright verge", "a field of distances"],
    endings: ["before work begins", "under a hot white sky", "at the edge of the parish", "where the lane hesitates"]
  },

  mordiford: {
    subjects: ["the dragon", "Mordiford", "the river", "a curled tail", "legend"],
    verbs: ["sleeps", "keeps", "guards", "dreams", "folds"],
    objects: ["the road", "the old heat", "a snail-shell silence", "orchard light", "the village under its tongue"],
    endings: ["beside the Wye", "under green shade", "while the car passes", "inside a summer hush"]
  },

  tarrington: {
    subjects: ["a pheasant", "the vast car", "the lady with vole-eyes", "the lane", "Tarrington"],
    verbs: ["flashes", "strikes", "startles", "vanishes", "throws"],
    objects: ["a hard little omen", "feathers into sunlight", "death across the tarmac", "a theatre of heat", "the body of the road"],
    endings: ["too quickly to name", "in the glare", "between hedge and engine", "where looking becomes witness"]
  },

  hereford: {
    subjects: ["Hereford", "the light-fingered city", "time", "the cathedral air", "the palm of hills"],
    verbs: ["steals", "cups", "keeps", "turns", "counts"],
    objects: ["light", "old minutes", "the hot centre", "a small bell of distance", "the road back out"],
    endings: ["in its stone hand", "under the heat", "where all roads briefly agree", "before the map opens again"]
  },

  lugwardine: {
    subjects: ["Lugwardine", "the small hill", "rain", "the brow of the road", "the west"],
    verbs: ["lifts", "summons", "darkens", "carries", "unfolds"],
    objects: ["Wales", "strangeness", "a wet horizon", "weather from memory", "the first thought of distance"],
    endings: ["over the brow", "from the west", "before the office day", "where the familiar road tilts"]
  },

  radnorshire: {
    subjects: ["Radnorshire", "Hergest ridge", "the seen hill", "frost", "the far high ground"],
    verbs: ["rises", "waits", "glimmers", "withdraws", "holds"],
    objects: ["thought-memory", "hard weather", "a white line of distance", "the journey without being travelled", "the horizon still speaking"],
    endings: ["beyond the city", "higher than spires", "in the mind's weather", "where seeing becomes return"]
  }
};

function sixRoadsKey(place) {
  return String(place || "").toLowerCase().replace(/[^a-z]/g, "");
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generatedSixRoadsLine(place) {
  const bank = sixRoadsWordBanks[sixRoadsKey(place)] || sixRoadsWordBanks.hereford;
  const line = `${pick(bank.subjects)} ${pick(bank.verbs)} ${pick(bank.objects)} ${pick(bank.endings)}`;
  return line.replace(/\s+/g, " ").trim() + ".";
}

function generatedSixRoadsConstellation(places) {
  return places.map((place) => `${place}: ${generatedSixRoadsLine(place)}`).join("\n");
}

window.SixRoadsGenerator = {
  line: generatedSixRoadsLine,
  constellation: generatedSixRoadsConstellation
};
