export interface Parish {
  slug: string;
  name: string;
  label: string;
  officialUrl: string;
  summary: string;
  body: string[];
}

export const parishes: Parish[] = [
  {
    slug: "andorra-la-vella",
    name: "Andorra la Vella",
    label: "The capital",
    officialUrl: "https://www.andorralavella.ad/",
    summary:
      "The capital parish: ministries, shops, and the everyday centre of the valley.",
    body: [
      "Andorra la Vella sits at the meeting of the Valira rivers. It is the smallest capital in Europe by area, and it holds the ministries, the main shopping streets and much of the professional life of the country.",
      "Days here are urban without being metropolitan. Offices, banks and restaurants sit a short walk from older streets and the river. For many new residents it is the practical first address: close to immigration, notaries and the daily errands of a small capital.",
      "Those who want more quiet usually look a few minutes up-valley. The capital remains where paperwork, appointments and evening tables tend to gather.",
    ],
  },
  {
    slug: "escaldes-engordany",
    name: "Escaldes-Engordany",
    label: "Thermal valley",
    officialUrl: "https://www.e-e.ad/",
    summary:
      "Next to the capital: thermal water, the public hospital, and a more residential stretch of the central valley.",
    body: [
      "Escaldes-Engordany joins Andorra la Vella so closely that visitors often treat them as one town. The parish has its own character: thermal springs, a broader residential grain, and the country’s public hospital.",
      "Avinguda Carlemany is the commercial spine. Above it, quieter streets climb towards Engordany and the Madriu-Perafita-Claror valley, a UNESCO cultural landscape that begins almost at the edge of the built town.",
      "It is a sensible parish if you want valley convenience without living on the capital’s busiest corners.",
    ],
  },
  {
    slug: "encamp",
    name: "Encamp",
    label: "Towards the ski valleys",
    officialUrl: "https://www.comuencamp.ad/",
    summary:
      "A working parish on the road to Grandvalira, with Pas de la Casa on the French frontier.",
    body: [
      "Encamp sits on the eastern valley road. The village itself is practical and lived-in. From here the Funicamp and the CG-2 lead towards Grandvalira and the high frontier.",
      "Pas de la Casa, in the same parish, is a different proposition: a ski and shopping settlement on the French border, busier in winter and less typical of everyday Andorran life.",
      "Families who want ski access without a resort street often look at Encamp village or the quieter hamlets rather than the frontier.",
    ],
  },
  {
    slug: "canillo",
    name: "Canillo",
    label: "High eastern valley",
    officialUrl: "https://canillo.ad/",
    summary:
      "The high eastern parish: Soldeu, El Tarter and a quieter stretch of the Grandvalira valley.",
    body: [
      "Canillo is the high parish of the eastern valley. Soldeu and El Tarter are well known to skiers. The village of Canillo itself is smaller and more local.",
      "Winter brings the ski economy. Summer opens the high meadows, lakes and the long valley road towards Incles. It is a clearer choice for a mountain-first life, if you are content to be further from the ministries of the capital.",
      "Confirm current access, school options and winter driving with the Comú and with anyone you instruct on housing. Conditions change with the season.",
    ],
  },
  {
    slug: "ordino",
    name: "Ordino",
    label: "The northern valley",
    officialUrl: "https://www.ordino.ad/",
    summary:
      "A northern parish of villages and woodland, with a quieter residential tone and the Sorteny nature park.",
    body: [
      "Ordino is often described as one of the more preserved northern parishes. The official commune site speaks of woodland, a string of villages (Ordino, Sornàs, La Cortinada, Llorts and others) and a landscape that still feels rural.",
      "The Sorteny Valley Nature Park and the road towards Arcalís give the parish a clear outdoor identity. The village street is small. The daily rhythm is slower than the central valley.",
      "It suits people who came for the mountain rather than the shopping street, and who can accept a short drive for larger errands.",
    ],
  },
  {
    slug: "la-massana",
    name: "La Massana",
    label: "Western valleys",
    officialUrl: "https://www.lamassana.ad/",
    summary:
      "The western parish of Pal, Arinsal and the Comapedrosa massif. Ski in winter, high trails in summer.",
    body: [
      "La Massana opens the western valleys. Pal and Arinsal are the ski settlements. The village of La Massana sits lower, with shops and a more year-round street.",
      "The Comapedrosa Nature Park, including the Principality’s highest summit, lies in this parish. That gives the area a summer life that is more than a ski off-season.",
      "It is a common choice for people who want ski access in winter and a village that does not empty entirely in May.",
    ],
  },
  {
    slug: "sant-julia-de-loria",
    name: "Sant Julià de Lòria",
    label: "The southern gate",
    officialUrl: "https://www.santjulia.ad/",
    summary:
      "The southern parish on the Spanish road: a gateway town, the University of Andorra, and a less alpine daily life.",
    body: [
      "Sant Julià de Lòria is the first parish on the road up from Spain. It feels less like a ski resort and more like a small southern town, with the University of Andorra nearby and a gentler altitude than the northern valleys.",
      "Naturland and the surrounding woodland give the parish a weekend landscape of its own. Daily life is practical: schools, local shops, and a shorter run to the Spanish border.",
      "It can suit households that travel often towards Catalonia, or that prefer a lower, quieter street to a ski village.",
    ],
  },
];

export function parishBySlug(slug: string) {
  return parishes.find((item) => item.slug === slug);
}
