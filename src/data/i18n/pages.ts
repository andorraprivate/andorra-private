import type { I18nSlug } from "../../lib/i18n";

export type HomeCopy = {
  kind: "home";
  title: string;
  dek: string;
  meta: string;
  choosing: string;
  pillars: { h: string; p: string }[];
  year: { label: string; h: string; p: string }[];
};

export type ProseCopy = {
  kind: "prose";
  title: string;
  dek: string;
  meta: string;
  notice?: string;
  table?: { headers: string[]; rows: string[][] };
  blocks: { h?: string; p: string[] }[];
  formIntro?: string;
};

export type DirectoryCopy = {
  kind: "directory";
  title: string;
  dek: string;
  meta: string;
  intro: string;
  noStars: string;
};

export type ParishesCopy = {
  kind: "parishes";
  title: string;
  dek: string;
  meta: string;
};

export type PropertiesCopy = {
  kind: "properties";
  title: string;
  dek: string;
  meta: string;
  empty: string;
  formIntro?: string;
};

export type PageCopy =
  | HomeCopy
  | ProseCopy
  | DirectoryCopy
  | ParishesCopy
  | PropertiesCopy;

export const pages: Record<"fr" | "es" | "ca", Record<I18nSlug, PageCopy>> = {
  fr: {
    "/": {
      kind: "home",
      title: "Si vous comptez vivre ici",
      dek: "Un petit pays dans les Pyrénées. Pour rester, il faut un permis, une banque et un logement que l'Immigration accepte.",
      meta: "Vivre en Andorre: permis, banques, paroisses et cabinets nommes. Lettres officielles, pas une brochure.",
      choosing:
        "Andorre est un pays, pas une station de ski avec une rumeur fiscale. Le catalan est officiel. La capitale est a deux frontieres. On y vit sous le droit andorran de l'immigration. Les lettres qui comptent sont celles du Gouvernement: A.1, J.1, D.1, B.1, D.3, D.4.",
      pillars: [
        {
          h: "Un permis, pas une ambiance",
          p: "La carte est une décision d'immigration. Ce n'est pas une humeur et ce n'est pas une attestation fiscale.",
        },
        {
          h: "Petit, exprès",
          p: "Sept paroisses. Un hôpital public. Trois groupes bancaires. Vous verrez les mêmes rues en janvier et en aout.",
        },
        {
          h: "La montagne, puis les papiers",
          p: "Les vallées de ski et les villages hauts sont proches. Aussi Immigration, les notaires et le Comu. C'est le point du pays.",
        },
        {
          h: "Lire le texte en vigueur",
          p: "Les taxes et les quotas bougent. Commencez par govern.ad et le BOPA, puis parlez a un conseil.",
        },
      ],
      year: [
        {
          label: "Hiver",
          h: "Grandvalira et Pal-Arinsal",
          p: "Grandvalira et Pal-Arinsal sont contre les villages. Vous ne transférez pas deux heures depuis un aeroport de ville. Les routes gèlent encore.",
        },
        {
          label: "Été",
          h: "Sentiers hauts",
          p: "Sentiers hauts, Sorteny, Comapedrosa, vallée du Madriu. Les commerces restent ouverts. La capitale ne se vide pas.",
        },
        {
          label: "La semaine",
          h: "Banques, écoles et Immigration",
          p: "Banques, écoles et Immigration sont dans la vallée centrale. Si vous habitez plus haut, vous conduisez. C'est un choix, pas un défaut.",
        },
      ],
    },
    "/become-a-resident": {
      kind: "prose",
      title: "Devenir resident",
      dek: "Ceux qui cherchent « residence passive » ou « golden visa » parlent en general du D.1. Ce n'est pas un nom officiel andorran.",
      meta: "Residence en Andorre: lettres officielles A.1, J.1, D.1, B.1, D.3, D.4 et chiffres 2026.",
      notice:
        "Utilisez la procedure en vigueur sur Govern.ad et le texte 2026 de la Llei 2/2026 au BOPA avant d'agir. Les lettres ci-dessous sont celles du Gouvernement.",
      table: {
        headers: ["Lettre", ""],
        rows: [
          ["A.1", "Residence et travail pour un employeur andorran."],
          ["J.1", "Residence et travail a titre indépendant (compte propre)."],
          ["D.1", "Residence sans prendre un emploi local."],
          ["B.1", "Regroupement familial."],
          ["C.1", "Travail frontalier."],
          ["D.3", "Nomade numerique. Toujours sur Govern.ad."],
          ["D.4", "Programmes pour entrepreneurs. Toujours sur Govern.ad."],
        ],
      },
      blocks: [
        {
          p: [
            "Des conseillers anglophones utilisent parfois une carte privee A/B/C/D. Chez Jane Whittaker, A = D.1 sans travail, B = D.1.2, C = D.1.3, D = J.1. Cette carte se dit une fois. Elle n'est pas la loi. Ce site emploie les codes officiels.",
            "A.1 exige en general un contrat avec une société andorrane réelle et une place dans le quota de l'année. J.1 est la première autorisation si vous travaillez a votre compte. La première carte A.1 ou J.1 est en general d'un an. Une note du Govern decrit le Decret 75/2026: quota general de 200 autorisations indépendantes — 150 cas d'investissement étranger, 50 professions libérales. Verifiez qu'une place est effectivement délivrée avant de croire une rumeur de « voie fermee ».",
            "Llei 2/2026 du 22 janvier, publiee au BOPA le 12 fevrier 2026, en vigueur le 13 fevrier 2026. Article 96: le titulaire principal d'une residence sans activite lucrative doit investir, de facon permanente et effective, au moins 1 000 000 d'euros dans des actifs andorrans nommes. Immobilier; parts de sociétés residentes; certains titres de creance ou OPC d'emetteurs residents pour 36 mois au plus avant de basculer; dette publique; produits d'assurance-vie d'assureurs residents; ou depots AFA non remuneres. Si immobilier: plus de 800 000 euros par unite; le million reste le total. 400 000 euros Fons d'Habitatge « conformément a la règlementation applicable ». Possibilite légale, pas un guichet. AFA 50 000 + 12 000 par dépendant, définitives et non remboursables sauf refus de l'autorisation initiale. Tarifs Govern.ad: 3 000 / 1 000 / 500.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/residency-vs-tax": {
      kind: "prose",
      title: "Trois choses que l'on confond",
      dek: "Le permis autorise a rester. La residence fiscale decide qui vous impose. La maison n'est qu'un actif — sauf si le permis l'exige.",
      meta: "Permis d'immigration, residence fiscale et achat immobilier sont trois tests distincts.",
      blocks: [
        {
          p: [
            "Le permis autorise a rester. La residence fiscale decide qui vous impose. La maison n'est qu'un actif — sauf si le permis l'exige.",
            "90 vs 183. Llei 5/2014 art. 8.",
          ],
        },
      ],
    },
    "/directory": {
      kind: "directory",
      title: "Annuaire",
      dek: "Annuaire",
      meta: "Annuaire",
      intro: "",
      noStars:
        "Pas d'etoile, pas de badge « recommande », pas de telephone que le cabinet n'a pas publie.",
    },
    "/living-in-andorra": {
      kind: "prose",
      title: "Vivre en Andorre",
      dek: "Vivre en Andorre",
      meta: "Vivre en Andorre",
      blocks: [],
    },
    "/parishes": {
      kind: "parishes",
      title: "Les sept paroisses",
      dek: "Les sept paroisses",
      meta: "Les sept paroisses",
    },
    "/properties": {
      kind: "properties",
      title: "Biens immobiliers",
      dek: "Biens immobiliers",
      meta: "Biens immobiliers",
      empty: "",
      formIntro: "Laissez un email.",
    },
    "/moving-to-andorra": {
      kind: "prose",
      title: "S'installer en Andorre",
      dek: "S'installer en Andorre",
      meta: "S'installer en Andorre",
      blocks: [],
      formIntro: "Laissez un email.",
    },
    "/residence-without-work": {
      kind: "prose",
      title: "Residence sans travail — D.1",
      dek: "Residence sans travail — D.1",
      meta: "Residence sans travail — D.1",
      blocks: [
        {
          p: ["D.1.2 D.1.3 D.1.4. Art.96."],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/digital-nomad": {
      kind: "prose",
      title: "Nomade numerique — D.3",
      dek: "Nomade numerique — D.3",
      meta: "Nomade numerique — D.3",
      blocks: [],
      formIntro: "Laissez un email.",
    },
    "/family-reunification": {
      kind: "prose",
      title: "Regroupement familial — B.1",
      dek: "Regroupement familial — B.1",
      meta: "Regroupement familial — B.1",
      blocks: [],
      formIntro: "Laissez un email.",
    },
    "/tax-residence": {
      kind: "prose",
      title: "Residence fiscale",
      dek: "Residence fiscale",
      meta: "Residence fiscale",
      blocks: [{ p: ["Art. 8."] }],
      formIntro: "Laissez un email.",
    },
    "/self-employed-residence": {
      kind: "prose",
      title: "Compte propre — J.1",
      dek: "Compte propre — J.1",
      meta: "Compte propre — J.1",
      blocks: [{ p: ["34%. Decret 75/2026."] }],
      formIntro: "Laissez un email.",
    },
    "/entrepreneur-residence": {
      kind: "prose",
      title: "Programmes entrepreneurs — D.4",
      dek: "Programmes entrepreneurs — D.4",
      meta: "Programmes entrepreneurs — D.4",
      blocks: [],
      formIntro: "Laissez un email.",
    },
    "/the-file": {
      kind: "prose",
      title: "Le dossier et la banque",
      dek: "Le dossier et la banque",
      meta: "Le dossier et la banque",
      blocks: [],
      formIntro: "Laissez un email.",
    },
    "/opening-a-bank-account": {
      kind: "prose",
      title: "Ouvrir un compte",
      dek: "Ouvrir un compte",
      meta: "Ouvrir un compte",
      blocks: [{ p: ["Andbank, MoraBanc, Creand."] }],
      formIntro: "Laissez un email.",
    },
    "/buying-property": {
      kind: "prose",
      title: "Acheter en non-resident",
      dek: "Acheter en non-resident",
      meta: "Acheter en non-resident",
      blocks: [{ p: ["6% 10%. Decret 58/2026."] }],
      formIntro: "Laissez un email.",
    },
  },
  es: {
    "/": {
      kind: "home",
      title: "Si de verdad va a vivir aqui",
      dek: "Si de verdad va a vivir aqui.",
      meta: "Vivir en Andorra: permisos, bancos, parroquias y despachos con nombre. Letras oficiales, no un folleto.",
      choosing:
        "Andorra es un pais, no una estacion de esqui con un rumor fiscal. El catalan es oficial. La capital esta a dos fronteras. Se vive bajo el derécho andorraño de inmigración. Las letras que importan son las del Gobierno: A.1, J.1, D.1, B.1, D.3, D.4.",
      pillars: [
        { h: "Un permiso, no un ambiente", p: "Un permiso, no un ambiente." },
        { h: "Pequeno, a proposito", p: "Pequeno, a proposito." },
        { h: "La montana, luego el papeleo", p: "La montana, luego el papeleo." },
        { h: "Lea el texto vigente", p: "Lea el texto vigente." },
      ],
      year: [
        {
          label: "Invierno",
          h: "Grandvalira y Pal-Arinsal",
          p: "Invierno Grandvalira y Pal-Arinsal.",
        },
        {
          label: "Verano",
          h: "Sorteny Comapedrosa Madriu",
          p: "Verano Sorteny Comapedrosa Madriu.",
        },
        {
          label: "La semana",
          h: "Bancos, escuelas, Inmigración",
          p: "La semana bancos escuelas Inmigración en el valle central.",
        },
      ],
    },
    "/become-a-resident": {
      kind: "prose",
      title: "Hacerse residente",
      dek: "Hacerse residente.",
      meta: "Hacerse residente",
      notice:
        "Use el procedimiento vigente en Govern.ad y Llei 2/2026.",
      blocks: [
        {
          p: [
            "A.1 J.1 D.1 B.1 C.1 D.3 D.4.",
            "Jane Whittaker mapa A=D.1 B=D.1.2 C=D.1.3 D=J.1 se dice una vez.",
            "Decret 75/2026 cupo 200. Art.96 1.000.000; 800.000 por unidad; 400.000 Fons d'Habitatge; AFA 50.000+12.000 definitivas no reembolsables salvo denegacion; tarifas 3.000/1.000/500.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/residency-vs-tax": {
      kind: "prose",
      title: "Tres cosas que la gente confunde",
      dek: "Tres cosas que la gente confunde.",
      meta: "Tres cosas que la gente confunde",
      blocks: [
        {
          p: [
            "Permiso 90 o 183. IRPF Llei 5/2014 art.8 183 días o centro de intereses. Comprar no otorga permiso.",
          ],
        },
      ],
    },
    "/directory": {
      kind: "directory",
      title: "Directorio",
      dek: "primer juego de fichas, no ranking de pago.",
      meta: "Directorio",
      intro: "primer juego de fichas, no ranking de pago.",
      noStars: "Ni estrellas ni recomendado ni telefono no públicado.",
    },
    "/living-in-andorra": {
      kind: "prose",
      title: "Vivir en Andorra",
      dek: "Vivir en Andorra.",
      meta: "Vivir en Andorra",
      blocks: [
        {
          p: [
            "Coprincipado. Catalan oficial. Tres sistemás escolares. SAAS Meritxell único hospital. CASS.",
          ],
        },
      ],
    },
    "/parishes": {
      kind: "parishes",
      title: "Las siete parroquias",
      dek: "Las siete parroquias.",
      meta: "Las siete parroquias",
    },
    "/properties": {
      kind: "properties",
      title: "Inmuebles",
      dek: "Inmuebles",
      meta: "Inmuebles",
      empty: "",
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/moving-to-andorra": {
      kind: "prose",
      title: "Mudarse a Andorra",
      dek: "Mudarse a Andorra.",
      meta: "Mudarse a Andorra",
      blocks: [
        {
          p: [
            "Convenio 2001 Espana y Francia, Portugal posterior. Servei d'Immigració. D.3 D.1 J.1 B.1.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/residence-without-work": {
      kind: "prose",
      title: "Residencia sin trabajo — D.1",
      dek: "Residencia sin trabajo — D.1.",
      meta: "Residencia sin trabajo — D.1",
      blocks: [
        {
          p: [
            "D.1.2 D.1.3 D.1.4. Art.96. 300%+100%. 90 ≠ 183 IRPF.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/digital-nomad": {
      kind: "prose",
      title: "Nomada digital — D.3",
      dek: "Residencia nomada digital — D.3.",
      meta: "Nomada digital — D.3",
      blocks: [],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/family-reunification": {
      kind: "prose",
      title: "Reagrupación familiar — B.1",
      dek: "Reagrupación familiar — B.1.",
      meta: "Reagrupación familiar — B.1",
      blocks: [{ p: ["100%/70%."] }],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/tax-residence": {
      kind: "prose",
      title: "Residencia fiscal",
      dek: "Residencia fiscal.",
      meta: "Residencia fiscal",
      blocks: [{ p: ["Art.8."] }],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/self-employed-residence": {
      kind: "prose",
      title: "Cuenta propia — J.1",
      dek: "Cuenta propia — J.1.",
      meta: "Cuenta propia — J.1",
      blocks: [{ p: ["Cupo 200. 34%."] }],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/entrepreneur-residence": {
      kind: "prose",
      title: "Programás emprendedores — D.4",
      dek: "Residencia programás de emprendedores — D.4.",
      meta: "Programás emprendedores — D.4",
      blocks: [{ p: ["Tarjetas de un ano."] }],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/the-file": {
      kind: "prose",
      title: "El expediente y el banco",
      dek: "El expediente y el banco.",
      meta: "El expediente y el banco",
      blocks: [],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/opening-a-bank-account": {
      kind: "prose",
      title: "Abrir una cuenta",
      dek: "Abrir una cuenta.",
      meta: "Abrir una cuenta",
      blocks: [{ p: ["Andbank MoraBanc Creand."] }],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/buying-property": {
      kind: "prose",
      title: "Comprar siendo no residente",
      dek: "Comprar siendo no residente.",
      meta: "Comprar siendo no residente",
      blocks: [
        {
          p: [
            "3% a 6% primer inmueble, 5% a 10% segunda. Decret 58/2026.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
  },
  ca: {
    "/": {
      kind: "home",
      title: "Si de veritat hi voleu viure",
      dek: "Si de veritat hi voleu viure.",
      meta: "Viure a Andorra: permisos, bancs, parroquies i despatxos amb nom. Lletres oficials, no un fullet.",
      choosing:
        "Andorra es un pais, no una estacio d'esqui amb un rumor fiscal. El catala es oficial. La capital es a dues fronteres. S'hi viu sota el dret andorrà d'immigració. Les lletres que compten son les del Govern: A.1, J.1, D.1, B.1, D.3, D.4.",
      pillars: [
        { h: "Un permís, no un ambient", p: "Un permís, no un ambient." },
        { h: "Petit, a proposit", p: "Petit, a proposit." },
        { h: "La muntanya, i despres els papers", p: "La muntanya, i despres els papers." },
        { h: "Llegiu el text vigent", p: "Llegiu el text vigent." },
      ],
      year: [
        {
          label: "Hivern",
          h: "Grandvalira Pal-Arinsal",
          p: "Hivern Grandvalira Pal-Arinsal.",
        },
        {
          label: "Estiu",
          h: "Sorteny Comapedrosa Madriu",
          p: "Estiu Sorteny Comapedrosa Madriu.",
        },
        {
          label: "La setmana",
          h: "Bancs, escoles, Immigració",
          p: "La setmana bancs escoles Immigració a la vall central.",
        },
      ],
    },
    "/become-a-resident": {
      kind: "prose",
      title: "Esdevenir resident",
      dek: "Esdevenir resident.",
      meta: "Esdevenir resident",
      notice: "Govern.ad i Llei 2/2026.",
      blocks: [
        {
          p: [
            "A.1 J.1 D.1 B.1 C.1 D.3 D.4.",
            "Jane Whittaker mapa un cop.",
            "Decret 75/2026 quota 200. Art.96 1.000.000; 800.000 per unitat; 400.000 Fons d'Habitatge; AFA 50.000+12.000 definitives no reemborsables tret de denegacio; tarifes 3.000/1.000/500.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/residency-vs-tax": {
      kind: "prose",
      title: "Tres coses que la gent confon",
      dek: "Tres coses que la gent confon.",
      meta: "Tres coses que la gent confon",
      blocks: [
        { p: ["90 vs 183. Llei 5/2014 art.8. Comprar no atorga permís."] },
      ],
    },
    "/directory": {
      kind: "directory",
      title: "Directori",
      dek: "primer joc de fitxes, no un ram de pagament.",
      meta: "Directori",
      intro: "primer joc de fitxes, no un ram de pagament.",
      noStars: "Ni estrelles ni recomanat ni telefon no públicat.",
    },
    "/living-in-andorra": {
      kind: "prose",
      title: "Viure a Andorra",
      dek: "Viure a Andorra.",
      meta: "Viure a Andorra",
      blocks: [{ p: ["Coprincipat. Catala oficial. Tres sistemes. SAAS. CASS."] }],
    },
    "/parishes": {
      kind: "parishes",
      title: "Les set parroquies",
      dek: "Les set parroquies.",
      meta: "Les set parroquies",
    },
    "/properties": {
      kind: "properties",
      title: "Immobles",
      dek: "Immobles",
      meta: "Immobles",
      empty: "",
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/moving-to-andorra": {
      kind: "prose",
      title: "Mudar-se a Andorra",
      dek: "Mudar-se a Andorra.",
      meta: "Mudar-se a Andorra",
      blocks: [{ p: ["Conveni 2001."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/residence-without-work": {
      kind: "prose",
      title: "Residencia sense treball — D.1",
      dek: "Residencia sense treball — D.1.",
      meta: "Residencia sense treball — D.1",
      blocks: [{ p: ["D.1.2 D.1.3 D.1.4. Art.96."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/digital-nomad": {
      kind: "prose",
      title: "Nomada digital — D.3",
      dek: "Residencia nomada digital — D.3.",
      meta: "Nomada digital — D.3",
      blocks: [],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/family-reunification": {
      kind: "prose",
      title: "Reagrupament familiar — B.1",
      dek: "Reagrupament familiar — B.1.",
      meta: "Reagrupament familiar — B.1",
      blocks: [{ p: ["100%/70%."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/tax-residence": {
      kind: "prose",
      title: "Residencia fiscal",
      dek: "Residencia fiscal.",
      meta: "Residencia fiscal",
      blocks: [{ p: ["Art.8."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/self-employed-residence": {
      kind: "prose",
      title: "Compte propi — J.1",
      dek: "Compte propi — J.1.",
      meta: "Compte propi — J.1",
      blocks: [{ p: ["Quota 200. 34%."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/entrepreneur-residence": {
      kind: "prose",
      title: "Programes d'emprenedors — D.4",
      dek: "Residencia programes d'emprenedors — D.4.",
      meta: "Programes d'emprenedors — D.4",
      blocks: [{ p: ["Targetes d'un any."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/the-file": {
      kind: "prose",
      title: "L'expedient i el banc",
      dek: "L'expedient i el banc.",
      meta: "L'expedient i el banc",
      blocks: [],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/opening-a-bank-account": {
      kind: "prose",
      title: "Obrir un compte",
      dek: "Obrir un compte.",
      meta: "Obrir un compte",
      blocks: [{ p: ["Andbank MoraBanc Creand."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/buying-property": {
      kind: "prose",
      title: "Comprar sent no resident",
      dek: "Comprar sent no resident.",
      meta: "Comprar sent no resident",
      blocks: [{ p: ["6% o 10%. Decret 58/2026."] }],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
  },
};
