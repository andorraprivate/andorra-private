export type DirectoryCategory =
  | "residency"
  | "tax-law"
  | "property"
  | "banks"
  | "insurance"
  | "clinics"
  | "schools"
  | "utilities";

export interface DirectoryListing {
  slug: string;
  name: string;
  category: DirectoryCategory;
  officialUrl: string;
  summary: string;
  parish?: string;
  parishSlug?: string;
  sourcedFrom: string;
  detail?: string[];
  furtherLinks?: { href: string; label: string }[];
}

export const categoryLabels: Record<DirectoryCategory, string> = {
  residency: "Residency & gestoria",
  "tax-law": "Tax & law",
  property: "Property",
  banks: "Banks",
  insurance: "Insurance",
  clinics: "Health & social security",
  schools: "Schools",
  utilities: "Phone & internet",
};

export const categoryOrder: DirectoryCategory[] = [
  "residency",
  "tax-law",
  "property",
  "banks",
  "insurance",
  "clinics",
  "schools",
  "utilities",
];

/**
 * First set of listings. Only firms with an official public site.
 * No invented telephone numbers, addresses, or performance claims.
 */
export const listings: DirectoryListing[] = [
  {
    slug: "auge-legal-fiscal",
    name: "Augé Legal & Fiscal",
    category: "tax-law",
    officialUrl: "https://www.augelegalfiscal.com/en/",
    summary:
      "Andorra la Vella firm. Its own site lists legal, tax, immigration and company work for individuals and companies.",
    parish: "Andorra la Vella",
    parishSlug: "andorra-la-vella",
    sourcedFrom: "augelegalfiscal.com",
  },
  {
    slug: "advantia-assessors",
    name: "Advantia Assessors",
    category: "residency",
    officialUrl: "https://www.advantia.ad/en/",
    summary:
      "Andorran consultancy. Its site lists company formation, tax, payroll, and immigration and residency procedures.",
    sourcedFrom: "advantia.ad",
  },
  {
    slug: "jane-whittaker",
    name: "Jane Whittaker — J W Serveis",
    category: "residency",
    officialUrl: "https://www.livinginandorra.com/index.html",
    summary:
      "English practitioner at J W Serveis. Her site, livinginandorra.com, is an English guide to residency and daily life. Official letter codes and BOPA amounts remain the law.",
    sourcedFrom: "livinginandorra.com",
    detail: [
      "She describes herself as English-born and resident in Andorra for about thirty-nine years. The index is dated 19 August 2026. Official figures on this site come from Govern.ad and the BOPA, not from her pages.",
      "Services she lists include meeting arrivals, bank introductions, tax and lawyer meetings, the Immigration pack, viewings through partnered agents (she names Roc Properties), insurance papers, schools, removals, car import, utilities and renewals. Those are her offers. We do not invent her fees.",
      "Cost-of-living PDFs on her site are her estimates, not official prices.",
    ],
    furtherLinks: [
      {
        href: "https://www.livinginandorra.com/residency_options.html",
        label: "Residency options 2026 — Living in Andorra",
      },
      {
        href: "https://www.livinginandorra.com/residency_renewals.html",
        label: "Renewals — Living in Andorra",
      },
      {
        href: "http://www.livinginandorra.com/files/COST_2025.pdf",
        label: "COST_2025.pdf — her cost estimates",
      },
      {
        href: "/practitioner-map",
        label: "Official codes beside that map",
      },
    ],
  },
  {
    slug: "cases-lacambra",
    name: "Cases Lacambra",
    category: "tax-law",
    officialUrl: "https://www.caseslacambra.com/office/andorra/",
    summary:
      "Independent law firm with a published Andorra office. Its site describes business law, financial services and private wealth.",
    sourcedFrom: "caseslacambra.com",
  },
  {
    slug: "andbank",
    name: "Andbank",
    category: "banks",
    officialUrl: "https://www.andbank.com/andorra/en/",
    summary:
      "Andorra Banc Agrícol Reig, listed by the Association of Andorran Banks. Private banking group; Andorra site at andbank.com.",
    sourcedFrom: "andbank.com and andorranbanking.ad",
  },
  {
    slug: "morabanc",
    name: "MoraBanc",
    category: "banks",
    officialUrl: "https://www.morabanc.ad/en/individuals",
    summary:
      "Independent Andorran bank, listed by the Association of Andorran Banks. Retail and private banking on morabanc.ad.",
    sourcedFrom: "morabanc.ad and andorranbanking.ad",
  },
  {
    slug: "creand",
    name: "Creand (Crèdit Andorrà)",
    category: "banks",
    officialUrl: "https://creand.ad/",
    summary:
      "Andorran banking group, formerly Crèdit Andorrà, listed by the Association of Andorran Banks. Personal and business banking on creand.ad.",
    sourcedFrom: "creand.ad and andorranbanking.ad",
  },
  {
    slug: "saas-hospital-meritxell",
    name: "Hospital Nostra Senyora de Meritxell (SAAS)",
    category: "clinics",
    officialUrl:
      "https://saas.ad/unitats-assistencials/hospital-nostra-senyora-meritxell",
    summary:
      "The public hospital, run by SAAS. SAAS describes it as the country’s only hospital.",
    parish: "Escaldes-Engordany",
    parishSlug: "escaldes-engordany",
    sourcedFrom: "saas.ad",
  },
  {
    slug: "centre-medic-carlemany",
    name: "Centre Mèdic Carlemany",
    category: "clinics",
    officialUrl: "https://www.cmcarlemany.com/",
    summary:
      "Private medical centre in Escaldes-Engordany. Its site lists consulting rooms and how to book.",
    parish: "Escaldes-Engordany",
    parishSlug: "escaldes-engordany",
    sourcedFrom: "cmcarlemany.com",
  },
  {
    slug: "engel-volkers-andorra",
    name: "Engel & Völkers Andorra",
    category: "property",
    officialUrl: "https://www.engelvoelkers.com/ad/en",
    summary:
      "Residential and investment property consultancy, listed on the official AGIA register.",
    parish: "Andorra la Vella",
    parishSlug: "andorra-la-vella",
    sourcedFrom: "engelvoelkers.com and agia.ad",
  },
  {
    slug: "andorra-sothebys",
    name: "Andorra Sotheby’s International Realty",
    category: "property",
    officialUrl: "https://www.andorra-sothebysrealty.com/",
    summary:
      "Estate agency on the official AGIA register, with a published Escaldes-Engordany office.",
    parish: "Escaldes-Engordany",
    parishSlug: "escaldes-engordany",
    sourcedFrom: "andorra-sothebysrealty.com and agia.ad",
  },
  {
    slug: "roc-propietats",
    name: "Roc Propietats",
    category: "property",
    officialUrl: "https://rocpropietats.com/en/",
    summary:
      "Sales and rentals agency on the official AGIA register. Its site covers the seven parishes.",
    sourcedFrom: "rocpropietats.com and agia.ad",
  },
  {
    slug: "cisa",
    name: "CISA",
    category: "property",
    officialUrl: "https://www.inmobiliariacisa.com/",
    summary:
      "La Massana estate agency on the official AGIA register. Sales, rentals and developments on its own site.",
    parish: "La Massana",
    parishSlug: "la-massana",
    sourcedFrom: "inmobiliariacisa.com and agia.ad",
  },
  {
    slug: "british-college-andorra",
    name: "The British College of Andorra",
    category: "schools",
    officialUrl: "https://www.britishcollegeandorra.com/en",
    summary:
      "International school in Andorra la Vella. Its site describes British and IB programmes, taught in English.",
    parish: "Andorra la Vella",
    parishSlug: "andorra-la-vella",
    sourcedFrom: "britishcollegeandorra.com",
  },
  {
    slug: "universitat-d-andorra",
    name: "Universitat d’Andorra",
    category: "schools",
    officialUrl: "https://www.uda.ad/en/",
    summary:
      "The public university. Its site places the campus in Sant Julià de Lòria and lists bachelor, master’s and doctoral programmes.",
    parish: "Sant Julià de Lòria",
    parishSlug: "sant-julia-de-loria",
    sourcedFrom: "uda.ad",
  },
  {
    slug: "hanson",
    name: "Hanson",
    category: "property",
    officialUrl: "https://www.hanson.ad/",
    summary:
      "Encamp estate agency on the official AGIA register. Sales, rentals and development from Avinguda Joan Martí, on its own site.",
    parish: "Encamp",
    parishSlug: "encamp",
    sourcedFrom: "hanson.ad and agia.ad",
  },
  {
    slug: "geiser",
    name: "Geiser",
    category: "property",
    officialUrl: "https://immogeiser.com/",
    summary:
      "Ordino estate agency on the official AGIA register. Its site describes sales, rentals and valuations in the parish.",
    parish: "Ordino",
    parishSlug: "ordino",
    sourcedFrom: "immogeiser.com and agia.ad",
  },
  {
    slug: "alt-serveis",
    name: "Alt Serveis",
    category: "property",
    officialUrl: "https://www.serveisandorra.com/",
    summary:
      "Canillo estate agency on the official AGIA register. The live site is serveisandorra.com; AGIA still lists altserveis.com, which redirects there.",
    parish: "Canillo",
    parishSlug: "canillo",
    sourcedFrom: "serveisandorra.com and agia.ad",
  },
  {
    slug: "andorgest",
    name: "Andorgest",
    category: "property",
    officialUrl: "https://www.andorgest.com/",
    summary:
      "Sant Julià de Lòria estate agency on the official AGIA register. Sales, rentals and property administration on its own site.",
    parish: "Sant Julià de Lòria",
    parishSlug: "sant-julia-de-loria",
    sourcedFrom: "andorgest.com and agia.ad",
  },
  {
    slug: "notaria-bartumeu",
    name: "Notaria Bartumeu",
    category: "tax-law",
    officialUrl: "https://www.notariabartumeu.com/",
    summary:
      "A notary office in Andorra la Vella. Its site covers civil and company documents, powers of attorney, and foreign-investment formalities.",
    parish: "Andorra la Vella",
    parishSlug: "andorra-la-vella",
    sourcedFrom: "notariabartumeu.com",
    detail: [
      "Notarial fees in Andorra are set by Government decree and published in the BOPA. They are the same for every notary. We do not copy the tariff here.",
    ],
  },
  {
    slug: "cass",
    name: "CASS — Caixa Andorrana de Seguretat Social",
    category: "clinics",
    officialUrl: "https://www.cass.ad/",
    summary:
      "The public social-security fund. Affiliation, medical vouchers and emergency cover when you travel to Spain, France or Portugal are on cass.ad.",
    sourcedFrom: "cass.ad",
  },
  {
    slug: "lycee-comte-de-foix",
    name: "Lycée Comte de Foix",
    category: "schools",
    officialUrl: "https://www.lcf-andorre.fr/",
    summary:
      "French-system collège and lycée in Andorra la Vella. The school’s own site lists programmes for the current year.",
    parish: "Andorra la Vella",
    parishSlug: "andorra-la-vella",
    sourcedFrom: "lcf-andorre.fr",
  },
  {
    slug: "creand-vida",
    name: "Creand Vida",
    category: "insurance",
    officialUrl: "https://creandvida.ad/",
    summary:
      "Andorran life and health insurer. Its site publishes medical cover aimed at people applying for residence without work.",
    sourcedFrom: "creandvida.ad",
    detail: [
      "The Assistència Mundial page says the product is for foreigners seeking residència passiva, and cites article 3 of the 1997 passive-residence regulation in the BOPA. Current Immigration letter codes and amounts are on Govern.ad, not on that product page.",
      "We do not copy premiums or reimbursement tables. Those belong on the insurer’s site.",
    ],
    furtherLinks: [
      {
        href: "https://creandvida.ad/assistencia-sanitaria-mundial/",
        label: "Assistència Mundial — Creand Vida",
      },
      {
        href: "https://www.afa.ad/en/entitats-supervisades/assegurances/reassegurances/registre-dentitats-autoritzades/copy_of_companyies-andorranes",
        label: "AFA — authorised Andorran insurers",
      },
    ],
  },
  {
    slug: "andorra-telecom",
    name: "Andorra Telecom",
    category: "utilities",
    officialUrl: "https://www.andorratelecom.ad/",
    summary:
      "The national telephone, internet and television operator. Current offers and shop locations sit on its own site.",
    sourcedFrom: "andorratelecom.ad",
  },
];

export const officialRegisters = [
  {
    name: "Govern d’Andorra — Immigration",
    url: "https://www.govern.ad/ca/tematiques/immigracio/residencia-i-treball",
    note: "Official residence and work authorisations.",
  },
  {
    name: "Govern d’Andorra — Residence",
    url: "https://www.govern.ad/ca/tematiques/immigracio/residencia",
    note: "Residence without work, family reunification, digital nomad and related permits.",
  },
  {
    name: "Ministeri de Finances",
    url: "https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-finances",
    note: "Official tax and finance ministry.",
  },
  {
    name: "Andorran Financial Authority (AFA)",
    url: "https://www.afa.ad/en",
    note: "Supervisor of the Andorran financial system.",
  },
  {
    name: "Andorran Banking",
    url: "https://www.andorranbanking.ad/en/",
    note: "Association of Andorran banks.",
  },
  {
    name: "AGIA — estate agents’ college",
    url: "https://www.agia.ad/collegiats",
    note: "Official register of licensed estate agents.",
  },
  {
    name: "Col·legi d’Advocats d’Andorra",
    url: "https://www.cada.ad/",
    note: "Official bar association.",
  },
  {
    name: "AFA — Andorran insurers",
    url: "https://www.afa.ad/en/entitats-supervisades/assegurances/reassegurances/registre-dentitats-autoritzades/copy_of_companyies-andorranes",
    note: "Authorised Andorran insurance companies.",
  },
  {
    name: "CASS — social security",
    url: "https://www.cass.ad/",
    note: "Caixa Andorrana de Seguretat Social.",
  },
  {
    name: "SAAS — public healthcare",
    url: "https://saas.ad/",
    note: "Servei Andorrà d’Atenció Sanitària.",
  },
  {
    name: "Govern d’Andorra — Education",
    url: "https://www.govern.ad/ca/tematiques/educacio-formacio-investigacio-i-divulgacio-del-coneixement/estudiar-a-andorra/sistemes-educatius-a-andorra",
    note: "The three education systems in Andorra.",
  },
  {
    name: "Govern d’Andorra — Health",
    url: "https://www.govern.ad/ca/tematiques/salut",
    note: "Official health theme on Govern.ad.",
  },
];

export function listingsByCategory(category: DirectoryCategory) {
  return listings.filter((item) => item.category === category);
}

export function listingsByParish(parishSlug: string) {
  return listings.filter((item) => item.parishSlug === parishSlug);
}

export function listingBySlug(slug: string) {
  return listings.find((item) => item.slug === slug);
}
