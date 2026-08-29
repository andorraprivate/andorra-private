export type DirectoryCategory =
  | "residency"
  | "tax-law"
  | "property"
  | "banks"
  | "clinics"
  | "schools";

export interface DirectoryListing {
  slug: string;
  name: string;
  category: DirectoryCategory;
  officialUrl: string;
  summary: string;
  parish?: string;
  parishSlug?: string;
  sourcedFrom: string;
}

export const categoryLabels: Record<DirectoryCategory, string> = {
  residency: "Residency & gestoria",
  "tax-law": "Tax & law",
  property: "Property",
  banks: "Banks",
  clinics: "Clinics & hospitals",
  schools: "Schools",
};

export const categoryOrder: DirectoryCategory[] = [
  "residency",
  "tax-law",
  "property",
  "banks",
  "clinics",
  "schools",
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
      "Andorra la Vella firm describing legal, tax, immigration and corporate advisory for individuals and companies, published on its own site.",
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
      "Andorran consultancy whose official site lists company formation, tax advisory, payroll, and immigration and residency procedures.",
    sourcedFrom: "advantia.ad",
  },
  {
    slug: "cases-lacambra",
    name: "Cases Lacambra",
    category: "tax-law",
    officialUrl: "https://www.caseslacambra.com/office/andorra/",
    summary:
      "Independent law firm with a published Andorra office, describing work in business law, financial services and private wealth.",
    sourcedFrom: "caseslacambra.com",
  },
  {
    slug: "andbank",
    name: "Andbank",
    category: "banks",
    officialUrl: "https://www.andbank.com/andorra/en/",
    summary:
      "Andorra Banc Agrícol Reig, listed by the Association of Andorran Banks. Private banking group with its Andorra site at andbank.com.",
    sourcedFrom: "andbank.com and andorranbanking.ad",
  },
  {
    slug: "morabanc",
    name: "MoraBanc",
    category: "banks",
    officialUrl: "https://www.morabanc.ad/en/individuals",
    summary:
      "Independent Andorran bank listed by the Association of Andorran Banks. Retail and private-banking services are described on morabanc.ad.",
    sourcedFrom: "morabanc.ad and andorranbanking.ad",
  },
  {
    slug: "creand",
    name: "Creand (Crèdit Andorrà)",
    category: "banks",
    officialUrl: "https://creand.ad/",
    summary:
      "Andorran banking group, formerly Crèdit Andorrà, listed by the Association of Andorran Banks. Personal and business banking is published on creand.ad.",
    sourcedFrom: "creand.ad and andorranbanking.ad",
  },
  {
    slug: "saas-hospital-meritxell",
    name: "Hospital Nostra Senyora de Meritxell (SAAS)",
    category: "clinics",
    officialUrl:
      "https://saas.ad/unitats-assistencials/hospital-nostra-senyora-meritxell",
    summary:
      "The public hospital of the Principality, operated by the Servei Andorrà d’Atenció Sanitària. SAAS describes it as the country’s only hospital.",
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
      "Private medical centre in Escaldes-Engordany. Its official site lists consulting rooms and appointment contact details.",
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
      "Residential and investment property consultancy listed on the official AGIA register of Andorran estate agents.",
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
      "Estate agency listed on the official AGIA register, with a published Escaldes-Engordany office on andorra-sothebysrealty.com.",
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
      "Sales and rentals agency listed on the official AGIA register. Its own site covers properties across the seven parishes.",
    sourcedFrom: "rocpropietats.com and agia.ad",
  },
  {
    slug: "cisa",
    name: "CISA",
    category: "property",
    officialUrl: "https://www.inmobiliariacisa.com/",
    summary:
      "La Massana estate agency listed on the official AGIA register. Its site describes sales, rentals and developments in the Principality.",
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
      "International school in Andorra la Vella. Its official site describes British and IB programmes with English-language teaching.",
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
      "The public university of the Principality. Its official site places the campus in Sant Julià de Lòria and describes bachelor, master’s and doctoral programmes.",
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
      "Encamp estate agency listed on the official AGIA register. Its own site describes sales, rentals and development work from Avinguda Joan Martí.",
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
      "Ordino estate agency listed on the official AGIA register. Its own site describes itself as the parish’s local agency for sales, rentals and valuations.",
    parish: "Ordino",
    parishSlug: "ordino",
    sourcedFrom: "immogeiser.com and agia.ad",
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
