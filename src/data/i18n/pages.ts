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
  lead?: string[];
};

export type PropertiesCopy = {
  kind: "properties";
  title: string;
  dek: string;
  meta: string;
  lead?: string[];
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
      blocks: [
        {
          p: [
            "A.1 Residence et travail pour un employeur andorran. J.1 Residence et travail a titre indépendant (compte propre). D.1 Residence sans prendre un emploi local. B.1 Regroupement familial. C.1 Travail frontalier. D.3 Nomade numerique. Toujours sur Govern.ad. D.4 Programmes pour entrepreneurs. Toujours sur Govern.ad.",
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
            "Trois systemes.",
            "1 permis 90 ou 183 immigration pas fiscal.",
            "2 IRPF Llei 5/2014 art.8 183 jours ou centre d'intérêts. Permis 90 jours ne fait pas un resident fiscal.",
            "3 acheter ne donne pas un permis. Plancher 800 000. IIEI pour non-residents et moins de 3 ans.",
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
      dek: "C'est la semaine de travail qui compte, pas un samedi sur les pistes.",
      meta: "Vivre en Andorre",
      blocks: [
        {
          p: [
            "C'est la semaine de travail qui compte, pas un samedi sur les pistes. Andorre est une coprincipaute entre la France et l'Espagne. On traverse la vallée principale en moins d'une heure. Ce n'est pas une banlieue de Barcelone ou de Toulouse.",
            "Le catalan est la langue officielle. L'espagnol et le francais sont largement employs. L'anglais est courant dans les bureaux et moins au magasin du village. Les notes actuelles du Gouvernement attendent des nouveaux residents un mouvement vers le catalan au renouvellement. Confirmez le niveau alors exige sur Govern.ad.",
            "Andorra la Vella et Escaldes-Engordany tiennent la plupart des rendez-vous et l'hôpital public. Ordino et Canillo sont plus hauts. La Massana et Encamp sont sur les routes de ski. Sant Julia de Loria est la porte sud, plus pres de l'Espagne et de l'universite. Un logement qui tient pour un dossier de residence n'est pas un chalet de vacances.",
            "Trois systemes scolaires publies: andorran, espagnol, francais. L'universite publique est a Sant Julia. La sante publique est le SAAS; l'Hôpital Nostra Senyora de Meritxell est decrit comme le seul hôpital du pays. La sécurité sociale est la CASS. La couverture depend de l'affiliation.",
          ],
        },
      ],
    },
    "/parishes": {
      kind: "parishes",
      title: "Les sept paroisses",
      dek: "Chaque paroisse a son Comu, son caractere et son altitude. Choisissez la paroisse avant la maison.",
      meta: "Les sept paroisses",
      lead: [
        "Chaque paroisse a son Comu, son caractere et son altitude. Choisissez la paroisse avant la maison.",
      ],
    },
    "/properties": {
      kind: "properties",
      title: "Biens immobiliers",
      dek: "Des logements pour des gens qui vivront ici, pas un portail racle.",
      meta: "Biens immobiliers",
      lead: [
        "Des logements pour des gens qui vivront ici, pas un portail racle. Tant que nous n'avons pas vu un dossier, la liste reste vide.",
        "Nous n'inventons ni maisons, ni prix, ni photographies. Rien sur cette page n'est une offre. Acheter ou louer passe en general par un agent AGIA, un notaire, et pour les non-residents les regles d'investissement étranger en vigueur.",
        "Paroisse, type, statut. Pas de photo empruntee. Pas de prix guess.",
      ],
      empty: "Selection actuelle: aucune annonce publique.",
      formIntro: "Laissez un email.",
    },
    "/moving-to-andorra": {
      kind: "prose",
      title: "S'installer en Andorre",
      dek: "Un depart, c'est un dossier d'immigration, un logement, une banque, et le plus souvent un conseil local.",
      meta: "S'installer en Andorre",
      blocks: [
        {
          p: [
            "Un depart, c'est un dossier d'immigration, un logement, une banque, et le plus souvent un conseil local. Orientation, pas un devis.",
            "Les types de permis sont andorrans. Convention 2001 Espagne et France, plus tardive Portugal. Demandes au Servei d'Immigració. Identite, casiers apostilles, preuve de logement, etat civil, contrat pour salaries. Visite médicale. Après octroi, inscription au Comu.",
            "D.3 D.1 J.1 société distincte B.1. Aucun n'est la residence fiscale. Nous ne sommes pas un cabinet d'avocats.",
          ],
        },
      ],
      formIntro: "Pour une introduction, laissez un courriel.",
    },
    "/residence-without-work": {
      kind: "prose",
      title: "Residence sans travail — D.1",
      dek: "Source Govern.ad. Renouvellement D.2. Art.96 Llei 2/2026. En cas de conflit, la loi l'emporte.",
      meta: "Residence sans travail — D.1",
      notice:
        "Source Govern.ad. Renouvellement D.2. Art.96 Llei 2/2026. En cas de conflit, la loi l'emporte.",
      blocks: [
        {
          p: [
            "D.1.2 professionnels a projection internationale: siege en Andorre, au plus une personne sous contrat, 85% services hors Andorre, quota, 90 jours, viabilite et qualification.",
            "D.1.3 interet scientifique culturel sportif: reconnaissance internationale, meme quota et 90 jours, 85% hors Andorre, curriculum, revenus l'année précédant.",
            "D.1.4 centres gériatriques ou medicaux prives: 90 jours, sans activite professionnelle.",
            "Au 29 aout 2026 pas de D.1.1. Dossier classique art.96. Initiale 2 ans; premier renouvellement 2; deuxieme 3; ensuite 10 sauf conventionnes.",
            "Investissement 1 000 000; 800 000 par unite; Fons d'Habitatge 400 000 conformément a la règlementation; AFA 50 000+12 000 definitif sauf refus; tarifs 3 000/1 000/500.",
            "Revenus 300% salaire minimum annuel + 100% par dépendant; calcul salaire x12x3; ne pas convertir en euros. 90 jours immigration ne sont pas 183 jours IRPF.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/digital-nomad": {
      kind: "prose",
      title: "Nomade numerique — D.3",
      dek: "Residence nomade numerique — D.3. Autorise a resider pendant la duree.",
      meta: "Nomade numerique — D.3",
      blocks: [
        {
          p: [
            "Residence nomade numerique — D.3. Autorise a resider pendant la duree. Travail sans lieu fixe, telecommúnications, quota, 90 jours. Initiale 2/2/3/10.",
            "Dossier: formulaire residence sans travail; passeport ou CNI UE/EEE; casiers + declaration; resolution ministere économie; logement ou achat dans l'année; engagement 90 jours et assurance; moyens fixés par règlement sans montant en euros; maladie et invalidite (maladie seule mineurs et plus de 60); Comu dans le mois.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/family-reunification": {
      kind: "prose",
      title: "Regroupement familial — B.1",
      dek: "Reside avec national andorran ou titulaire residence-et-travail qui resident dans le pays.",
      meta: "Regroupement familial — B.1",
      blocks: [
        {
          p: [
            "Reside avec national andorran ou titulaire residence-et-travail qui resident dans le pays.",
            "Conjoint ou unio estable de parella; enfants mineurs et ceux du conjoint sous garde; enfants majeurs a charge sous tutelle; ascendants a charge 65+ ou retraites; autres sous tutelle si les deux parents ont perdu l'autorite parentale. Pas de freres/soeurs ni concubins non inscrits.",
            "National: 10 ans. Residence-et-travail: 1 an, 3x2, après 7 ans 10.",
            "Ressources 100% salaire minimum demandeur; menage 100% par adulte 70% par mineur; double revenu seulement si conjoint consent. Ne pas convertir en euros.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/tax-residence": {
      kind: "prose",
      title: "Residence fiscale",
      dek: "Permis n'est pas ce test.",
      meta: "Residence fiscale",
      blocks: [
        {
          p: [
            "Permis n'est pas ce test. IRPF si plus de 183 jours (absences sporadiques comptent sauf preuve ailleurs) ou noyau principal d'intérêts ici. Presomption conjoint non separe et enfants mineurs.",
            "D.1 et D.3 90 jours = immigration. Art.8 = 183. Pays de depart peut encore reclamer. Pas un quitus HMRC / Agencia Tributaria / DGFiP. Ne pas citer les taux d'IRPF. Nous ne deposons pas les declarations.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/self-employed-residence": {
      kind: "prose",
      title: "Compte propre — J.1",
      dek: "Quota Decret 75/2026 de 200: 150 investissement, 50 professions libérales.",
      meta: "Compte propre — J.1",
      blocks: [
        {
          p: [
            "Quota Decret 75/2026 de 200: 150 investissement, 50 professions libérales. Premiere 1 an, 3x2, après 7 ans 10.",
            "Voie investissement: >34%, constitution, commerce actif en 3 mois, AFA 50 000 encore nomme sur la page J.1, BOPA l'emporte.",
            "Voie profession libérale: autorisation et college en 3 mois. Comu en 3 mois. Renouvellement demande l'activite commerciale, pas un chiffre d'affaires.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/entrepreneur-residence": {
      kind: "prose",
      title: "Programmes entrepreneurs — D.4",
      dek: "Residence programmes entrepreneurs — D.4. Pas un visa start-up general.",
      meta: "Programmes entrepreneurs — D.4",
      blocks: [
        {
          p: [
            "Residence programmes entrepreneurs — D.4. Pas un visa start-up general. 90 jours. Initiale 1 an renouvelable mêmes périodes. Plus court que D.1/D.3.",
            "Dossier: resolution ministere, logement ou achat dans l'année, moyens par règlement non imprimes en euros, assurance, engagement 90 jours, Comu dans le mois.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/the-file": {
      kind: "prose",
      title: "Le dossier et la banque",
      dek: "Apostille et traduction catalane sauf ecrit contraire.",
      meta: "Le dossier et la banque",
      blocks: [
        {
          p: [
            "Apostille et traduction catalane sauf ecrit contraire.",
            "Liste: passeport; casiers 10 ans; logement bail ou acte; moyens et origine des fonds; sante; examen médical; actes mariage/naissance; J.1 statuts plan registre autorisation; D.1 engagement puis preuve dans le delai.",
            "Banques petites, supervisees. Conversation bancaire en parallele, pas après l'accord.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/opening-a-bank-account": {
      kind: "prose",
      title: "Ouvrir un compte",
      dek: "Andbank, MoraBanc ou Creand.",
      meta: "Ouvrir un compte",
      blocks: [
        {
          p: [
            "Andbank, MoraBanc ou Creand. Conformite. Minimums possibles, chaque banque fixe son seuil, nous n'inventons pas ces chiffres.",
            "KYC en personne. Pas internet. Pas anonymes. Echange d'informations. Auto-certification residence fiscale. Discretion n'est pas un bouclier. Supervisión AFA.",
          ],
        },
      ],
      formIntro: "Laissez un email.",
    },
    "/buying-property": {
      kind: "prose",
      title: "Acheter en non-resident",
      dek: "Note 26 fevrier 2026 et Decret 58/2026.",
      meta: "Acheter en non-resident",
      blocks: [
        {
          p: [
            "Note 26 fevrier 2026 et Decret 58/2026. Autorisation préalable. Non resident non andorran, ou resident sans 3 ans dans les 10 ans. Taxe 3% a 6% premier bien, 5% a 10% seconde residence.",
            "Notaire. Agents AGIA. Pas de maisons inventees. Achat peut servir de preuve de logement. Le permis reste une demande d'immigration.",
          ],
        },
      ],
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
          label: "El ano",
          h: "Invierno",
          p: "Invierno Grandvalira y Pal-Arinsal.",
        },
        {
          label: "Verano",
          h: "Sorteny Comapedrosa Madriu",
          p: "Verano Sorteny Comapedrosa Madriu.",
        },
        {
          label: "La semana",
          h: "Inmigración",
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
      dek: "No inventamos casas.",
      meta: "Inmuebles",
      empty: "Lista vacia.",
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
            "Convenio 2001 Espana y Francia, Portugal posterior. Servei d'Immigració. D.3 D.1 J.1 B.1. No somos un despacho.",
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
            "D.1.2 D.1.3 D.1.4. No D.1.1.",
            "Art.96 1.000.000; 800.000 por unidad; 400.000 Fons d'Habitatge; AFA 50.000+12.000 definitivas no reembolsables salvo denegacion; tarifas 3.000/1.000/500.",
            "300%+100%. 90 ≠ 183 IRPF.",
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
      blocks: [{ p: ["Cupo 200. 34%. Profesion libéral."] }],
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
      blocks: [{ p: ["apostilla traduccion catalan."] }],
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
          label: "L'any",
          h: "Hivern",
          p: "Hivern Grandvalira Pal-Arinsal.",
        },
        {
          label: "Estiu",
          h: "Sorteny Comapedrosa Madriu",
          p: "Estiu Sorteny Comapedrosa Madriu.",
        },
        {
          label: "La setmana",
          h: "Immigració",
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
      empty: "Llista buida.",
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
      blocks: [
        {
          p: [
            "Subtipus i art.96.",
            "Art.96 1.000.000; 800.000 per unitat; 400.000 Fons d'Habitatge; AFA 50.000+12.000 definitives no reemborsables tret de denegacio; tarifes 3.000/1.000/500.",
          ],
        },
      ],
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
      blocks: [{ p: ["Formula 100%/70%."] }],
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
