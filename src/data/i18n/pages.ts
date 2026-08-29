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
  blocks: { h?: string; p: string[]; ul?: string[] }[];
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
      dek: "Quien busca « residencia pasiva » o « golden visa » suele hablar del D.1. No es un nombre oficial andorrano.",
      meta: "Residencia en Andorra: letras oficiales A.1, J.1, D.1, B.1, D.3, D.4 y cifras de 2026.",
      notice:
        "Use el procedimiento vigente en Govern.ad y el texto 2026 de la Llei 2/2026 en el BOPA antes de actuar. Las letras de abajo son las del Gobierno.",
      table: {
        headers: ["", ""],
        rows: [
          ["A.1", "Residencia y trabajo para un empleador andorrano."],
          ["J.1", "Residencia y trabajo por cuenta propia."],
          ["D.1", "Residencia sin tomar empleo local."],
          ["B.1", "Reagrupación familiar."],
          ["C.1", "Trabajo fronterizo."],
          ["D.3", "Nomada digital. Sigue en Govern.ad."],
          ["D.4", "Programás para emprendedores. Sigue en Govern.ad."],
        ],
      },
      blocks: [
        {
          p: [
            "Algunos asesores anglosajones usan un mapa privado A/B/C/D. En Jane Whittaker, A = D.1 sin trabajo, B = D.1.2, C = D.1.3, D = J.1. Ese mapa se dice una vez. No es la ley. Este sitio usa los códigos oficiales.",
            "Residencia y trabajo: A.1 suele exigir un contrato con una sociedad andorrana real y plaza en el cupo del ano. J.1 es la primera autorización si trabaja por cuenta propia. La primera tarjeta A.1 o J.1 suele ser de un ano. Una nota del Govern describe el Decret 75/2026: cupo general de 200 autorizaciónes por cuenta propia — 150 casos de inversion extranjera, 50 profesiones libérales. Compruebe que se esta expidiendo plaza antes de planear sobre el rumor de que la vía esta « cerrada ».",
            "Lo que dice la Llei 2/2026 para la residencia sin actividad lucrativa: Llei 2/2026 de 22 de enero, públicada en el BOPA el 12 de febrero de 2026, en vigor el 13 de febrero de 2026. Articulo 96: el titular principal de una residencia sin actividad lucrativa debe invertir, de forma permanente y efectiva, al menos 1.000.000 de euros en activos andorraños nombrados.",
          ],
          ul: [
            "Inmuebles; participaciones en sociedades residentes; ciertos instrumentos de deuda o de inversion colectiva de emisores residentes durante un máximo de 36 meses antes de mover la suma; deuda de la administracion pública; productos de seguro de vida de aseguradoras residentes; o depositos AFA no remunerados.",
            "Si la inversion es total o parcialmente inmobiliaria: más de 800.000 euros por unidad. El millon sigue siendo el total.",
            "La inversion baja a 400.000 euros si se coloca, de forma permanente y efectiva, en el Fons d'Habitatge, « de acuerdo con la normativa aplicable ». Una posibilidad legal, no un mostrador.",
            "Ingreso a la AFA de 50.000 euros para el principal y 12.000 euros por cada dependiente. El BOPA dice que esas sumás son definitivas y no reembolsables, salvo denegacion de la autorización inicial.",
          ],
        },
        {
          p: [
            "Tarifas de expedicion en Govern.ad, a dia de hoy: 3.000 euros por entrega de una autorización de residencia sin trabajo, 1.000 euros por dependiente y 500 euros por esa renovación. Confirme la linea de su expediente.",
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
            "Tres pruebas. 90 o 183 inmigración. Art.8 183 o centro de intereses. Comprar no otorga permiso.",
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
      dek: "La prueba es la semana laboral, no un sabado en las pistas.",
      meta: "Vivir en Andorra",
      blocks: [
        {
          p: [
            "La prueba es la semana laboral, no un sabado en las pistas. Andorra es un coprincipado entre Francia y Espana. Se recorre el valle principal en menos de una hora. No es un suburbio de Barcelona ni de Toulouse.",
            "El catalan es la lengua oficial. El espanol y el frances se usan mucho. El ingles es habitual en despachos y menos en la tienda del pueblo. Las notas actuales del Gobierno esperan que los nuevos residentes avancen hacia el catalan en la renovación. Confirme el nivel entonces exigido en Govern.ad.",
            "Andorra la Vella y Escaldes-Engordany concentran la mayoria de las citas y el hospital público. Ordino y Canillo estan más altos. La Massana y Encamp estan en carreteras de esqui. Sant Julia de Loria es la puerta sur, más cerca de Espana y de la universidad. Una vivienda que sirve para un expediente de residencia no es un chalet de vacaciones.",
            "Tres sistemás escolares públicados: andorrano, espanol y frances. La universidad pública esta en Sant Julia. La sanidad pública es el SAAS; el Hospital Nostra Senyora de Meritxell se describe como el único hospital del pais. La seguridad social es la CASS. La cobertura depende de la afiliación.",
          ],
        },
      ],
    },
    "/parishes": {
      kind: "parishes",
      title: "Las siete parroquias",
      dek: "Cada una tiene su Comu, su caracter y su altitud. Elija la parroquia antes que la casa.",
      meta: "Las siete parroquias",
      lead: [
        "Cada una tiene su Comu, su caracter y su altitud. Elija la parroquia antes que la casa.",
      ],
    },
    "/properties": {
      kind: "properties",
      title: "Inmuebles",
      dek: "Viviendas para quien va a vivir aqui, no un portal raspado.",
      meta: "Inmuebles",
      lead: [
        "Viviendas para quien va a vivir aqui, no un portal raspado. Hasta que no hayamos visto un expediente, la lista permanece vacia.",
        "No inventamos casas, precios ni fotografias. Nada en esta página es una oferta. Comprar o alquilar suele pasar por un agente AGIA, un notario y, para no residentes, las reglas vigentes de inversion extranjera.",
      ],
      empty: "Selección actual: ningun anuncio público.",
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/moving-to-andorra": {
      kind: "prose",
      title: "Mudarse a Andorra",
      dek: "Una mudanza es un expediente de inmigración, un sitio donde vivir, un banco y, casí siempre, un asesor local.",
      meta: "Mudarse a Andorra",
      blocks: [
        {
          p: [
            "Una mudanza es un expediente de inmigración, un sitio donde vivir, un banco y, casí siempre, un asesor local. Orientacion, no un presupuesto.",
            "Convenio 2001 con Espana y Francia, otro posterior con Portugal. Servei d'Immigració. D.3 D.1 J.1 B.1. Ninguno es la residencia fiscal. No somos un despacho de abogados.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/residence-without-work": {
      kind: "prose",
      title: "Residencia sin trabajo — D.1",
      dek: "Se busca « residencia pasiva ». Oficialmente es el D.1.",
      meta: "Residencia sin trabajo — D.1",
      notice:
        "Fuente: página D.1 en Govern.ad. Renovación: D.2. El articulo 96 de la Llei 2/2026 reviso la inversion y el ingreso AFA. La página D.1 en linea puede ir detras del BOPA. Si discrepan, rige la ley.",
      blocks: [
        {
          h: "D.1.2 — profesionales con proyeccion internacional",
          p: [
            "Sede o base de la actividad en Andorra. Como máximo una persona con contrato laboral. Al menos el 85 % de los servicios usados fuera de Andorra. Cupo fijado por reglamento. 90 días. Viabilidad de la actividad y cualificacion.",
          ],
        },
        {
          h: "D.1.3 — interes cientifico, cultural o deportivo",
          p: [
            "Reconocimiento internacional del talento. El mismo cupo y 90 días. Al menos el 85 % de los servicios fuera de Andorra. Un curriculum evaluable e ingresos de esa actividad en el año anterior a la autorización.",
          ],
        },
        {
          h: "D.1.4 — centros geriatricos o medicos privados",
          p: [
            "Residencia en un centro geriatrico, medico o terapeutico privado al menos 90 días al ano, sin ejercer alli actividad laboral o profesional.",
          ],
        },
        {
          p: [
            "A 29 de agosto de 2026 las rubricas no muestran un D.1.1. El expediente clasico sin actividad lucrativa sigue siendo el del articulo 96.",
            "Autorización inicial de dos años; primera renovación dos años; segunda tres años; después diez, salvo nacionales de Estados con convenio. Confirme el ciclo en el texto vivo.",
            "Inversion: al menos 1.000.000 de euros; más de 800.000 euros por unidad si se usa inmueble; vía Fons d'Habitatge a 400.000 euros « de acuerdo con la normativa aplicable »; ingreso AFA 50.000 + 12.000 por dependiente, definitivo salvo denegacion inicial. Tarifas de tarjeta ahora 3.000 / 1.000 / 500.",
            "Ingresos: más del 300 % del salario mínimo anual para el titular, más el 100 % de ese indicador por cada dependiente. La página da la formula: salario base x 12 x 3. Aqui no lo convertimos a euros.",
            "Noventa días en una página de inmigración no son ciento ochenta y tres días en la ley del IRPF.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/digital-nomad": {
      kind: "prose",
      title: "Residencia nomada digital — D.3",
      dek: "El Gobierno sigue públicando una página D.3. Esto es esa página, en espanol.",
      meta: "Residencia nomada digital — D.3",
      blocks: [
        {
          p: [
            "El D.3 autoriza a residir durante la vigencia de la autorización. Puede pedirla un recién llegado cuyo trabajo no exija un lugar geografico fijo y use las telecomúnicaciones; que entre en el cupo entonces fijado por reglamento; y que establezca residencia principal y efectiva al menos 90 días por año civil.",
            "Inicial dos años; primera renovación dos años; segunda tres; después diez, salvo nacionales con convenio.",
          ],
          ul: [
            "Solicitud de residencia sin trabajo.",
            "Pasaporte, o documento nacional si es UE/EEE.",
            "Antecedentes del pais de origen, de nacionalidad y de residencia, más declaración jurada.",
            "Resolución favorable del ministerio competente en economia que califique el trabajo como no sedentario.",
            "Prueba de vivienda habitable, o de una compra que deba cerrarse en el año de la solicitud.",
            "Compromiso escrito de los 90 días y de mantener el seguro.",
            "Medios económicos suficientes segun reglamento: la página no imprime una cifra en euros.",
            "Cobertura de enfermedad e invalidez para Andorra (cobertura solo de enfermedad para menores y mayores de sesenta, segun la página).",
            "Alta en el Comu en el plazo de un mes desde la concesion.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/family-reunification": {
      kind: "prose",
      title: "Reagrupación familiar — B.1",
      dek: "El B.1 autoriza a la persona reagrupada a residir con un nacional andorrano, o con el titular de una autorización de residencia y trabajo, siempre que esas personas residan en el pais.",
      meta: "Reagrupación familiar — B.1",
      blocks: [
        {
          p: [],
          ul: [
            "El conyuge, o el miembro de una union estable (unio estable de parella).",
            "Los hijos menores del solicitante, y los del conyuge sobre los que tenga la guarda.",
            "Los hijos mayores dependientes bajo tutela o institucion analoga.",
            "Los ascendientes dependientes de al menos 65 años o jubilados.",
            "Otras personas bajo tutela reconocida por el derécho andorrano, cuando ambos progenitores hayan perdido la patria potestad.",
          ],
        },
        {
          p: [
            "La página no anade hermaños, ni parejas de hécho no inscritas como unio estable.",
            "Con un nacional andorraño cabe la duracion maxima de diez años. Con titular de residencia y trabajo: un ano, renovable tres veces por dos años; a los siete años, renovaciónes de diez, salvo nacionales con convenio.",
            "Medios: el 100 % del salario mínimo andorraño para el solicitante. Ingresos del hogar: al menos el 100 % de ese salario por cada adulto en la vivienda, y al menos el 70 % por cada menor. Si ambos conyuges son residentes légales, Inmigración solo suma ambos ingresos si el conyuge lo acepta de forma exprèsa. Aqui no convertimos esos porcentajes a euros.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/tax-residence": {
      kind: "prose",
      title: "Residencia fiscal",
      dek: "Un permiso de inmigración no es, por si solo, esa prueba.",
      meta: "Residencia fiscal",
      blocks: [
        {
          p: [
            "Un permiso de inmigración no es, por si solo, esa prueba. Se tratan como residentes fiscales, y por tanto como contribuyentes del IRPF, las personas fisicas que permanecen más de 183 días en territorio andorraño en el año civil — las ausencias esporadicas cuentan salvo prueba de residencia fiscal en otro pais — o cuyo nucleo principal de actividades o intereses económicos esta aqui. Hay también presuncion cuando el conyuge no separado y los hijos menores son residentes fiscales aqui. Las páginas D.1 y D.3 hablan de 90 días. Eso es una condicion de inmigración. El articulo 8 habla de 183 días. El pais que deja puede seguir tratandole como su residente fiscal. No tome una carta de permiso por un placet de HMRC, de la Agencia Tributaria o de la DGFiP. Esta página no cita tipos del IRPF ni convenios. No presentamos declaraciónes.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/self-employed-residence": {
      kind: "prose",
      title: "Cuenta propia — J.1",
      dek: "El J.1 autoriza a residir y a ejercer una actividad por cuenta propia de forma permanente.",
      meta: "Cuenta propia — J.1",
      blocks: [
        {
          p: [
            "El J.1 autoriza a residir y a ejercer una actividad por cuenta propia de forma permanente. El Decret 75/2026 se describe como un cupo general de 200: 150 casos de inversion extranjera, 50 profesiones libérales. Compruebe que se esta expidiendo plaza de verdad. Primera autorización de un ano, renovable tres veces por dos años. A los siete años, renovaciónes de diez. Inversion extranjera: más del 34 %, constitución legal, en tres meses comercio inscrito y activo. Deposito AFA: la página J.1 en linea sigue nombrando 50.000 euros; si los textos discrepan, rige el BOPA. Profesion libéral: autorización y colegiación en tres meses. Alta en el Comu en tres meses. Los papeles de renovación piden prueba de la actividad comercial. No fijan una cifra de facturación.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/entrepreneur-residence": {
      kind: "prose",
      title: "Residencia programás de emprendedores — D.4",
      dek: "No es visado general de start-up.",
      meta: "Residencia programás de emprendedores — D.4",
      blocks: [
        {
          p: [
            "No es visado general de start-up. Puede pedirla un recién llegado cuyo trabajo no exija un lugar fijo, que use las telecomúnicaciones y las herramientas del programa para emprendedores extranjeros, y que establezca residencia principal y efectiva al menos 90 días al ano. Autorización inicial de un ano, renovable por periodos sucesivos de la misma duracion. Mas corta que D.1 / D.3. El expediente incluye resolución favorable del ministerio de economia, vivienda (o una compra a cerrar en un ano), medios segun reglamento, seguro, compromiso escrito de los 90 días y alta en el Comu en el mes de la concesion. Los medios no se imprimen en euros en la página.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/the-file": {
      kind: "prose",
      title: "El expediente y el banco",
      dek: "Casí todos los retrasos no son teoria jurídica. Son una apostilla que falta, un banco que no acepta el dinero o un certificado medico del sitio equivocado.",
      meta: "El expediente y el banco",
      blocks: [
        {
          p: [
            "Casí todos los retrasos no son teoria jurídica. Son una apostilla que falta, un banco que no acepta el dinero o un certificado medico del sitio equivocado. Monte un solo paquete. Todo documento público extranjero necesita apostilla y, en general, traduccion al catalan, salvo escrito en contrario. Pasaporte valido. Antecedentes de cada pais de la última decada, apostillados y recientes. Prueba de vivienda: contrato o escritura, no reserva de hotel. Medios y origen de fondos. Cobertura sanitaria. Reconocimiento medico cuando la vía lo exija. Actas de matrimonio y nacimiento. En J.1: estatutos, plan, libro de socios, autorización de inversion extranjera. En D.1: compromiso de inversion y después prueba de que se hizo a tiempo. Los bancos andorraños son pequenos, supervisados y alergicos a la fortuna sin explicacion. Abra la conversacion bancaria en paralelo, no después de la concesion.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/opening-a-bank-account": {
      kind: "prose",
      title: "Abrir una cuenta",
      dek: "Un proceso de cumplimiento, no un formulario desde el Wi-Fi del hotel.",
      meta: "Abrir una cuenta",
      blocks: [
        {
          p: [
            "Un proceso de cumplimiento, no un formulario desde el Wi-Fi del hotel. Se pasa por Andbank, MoraBanc o Creand. Andorran Banking trata la solicitud como un proceso de cumplimiento. Las cuentas de no residentes pueden llevar un mínimo por el coste de verificar fondos extranjeros. Cada banco fija su umbral. No inventamos esas cifras. Puede pedirla cualquier persona fisica o jurídica. Los bancos pueden rechazar a un cliente si sospechan fondos ilicitos. No se abre una cuenta directamente por internet. El KYC exige una reunion, un documento oficial con fotografia y prueba del origen de los fondos. No hay cuentas anónimas. Andorra aplica las normás internacionales de intercambio de información fiscal. Las cuentas nuevas llevan una auto-certificación de residencia fiscal. La discrecion de la banca privada no es un escudo. La supervisiónn corresponde a la AFA.",
          ],
        },
      ],
      formIntro: "Si quiere una presentacion, deje un correo.",
    },
    "/buying-property": {
      kind: "prose",
      title: "Comprar siendo no residente",
      dek: "Una casa no es un permiso. La nota de 2026 sitúa el impuesto extra en el 6 % o el 10 %, segun el caso.",
      meta: "Comprar en Andorra como no residente: autorización e impuesto de inversion extranjera al 6 % o 10 %.",
      blocks: [
        {
          p: [
            "Porcentajes tomados de la nota de Govern.ad del 26 de febrero de 2026 y del Decret 58/2026. Confirme el test vigente con el Gobierno, un notario y un agente AGIA.",
            "Se describe una autorización administrativa prevía para la inversion extranjera inmobiliaria. Los casos públicados incluyen a un particular no residente que no es andorrano, y a un residente que no puede acreditar tres años de residencia efectiva y permanente en los diez años anteriores a la solicitud, con las salvedades de convenios y ausencias por estudios.",
            "La nota del 26 de febrero de 2026 indica que el impuesto pasa del 3 % al 6 % en un primer inmueble, y del 5 % al 10 % en una segunda vivienda. Lea el reglamento vigente para exenciones y el tramo del 10 %. El notario formaliza la compraventa concluida.",
            "Los agentes deben estar inscritos en AGIA. Este sitio no inventa casas ni precios. Las páginas de inmigración piden prueba de alojamiento; la compra puede servir una vez la escritura este en orden. El permiso sigue siendo una solicitud de inmigración.",
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
      dek: "Qui cerca « residencia passiva » o « golden visa » sol parlar del D.1. No es un nom oficial andorrà.",
      meta: "Qui cerca « residencia passiva » o « golden visa » sol parlar del D.1. No es un nom oficial andorrà.",
      notice:
        "Feu servir el procediment vigent a Govern.ad i el text 2026 de la Llei 2/2026 al BOPA abans d'actuar. Les lletres de sota son les del Govern.",
      table: {
        headers: ["", ""],
        rows: [
          ["A.1", "Residencia i treball per a un ocupador andorrà."],
          ["J.1", "Residencia i treball per compte propi."],
          ["D.1", "Residencia sense prendre una feina local."],
          ["B.1", "Reagrupament familiar."],
          ["C.1", "Treball fronterer."],
          ["D.3", "Nomada digital. Encara a Govern.ad."],
          ["D.4", "Programes per a emprenedors. Encara a Govern.ad."],
        ],
      },
      blocks: [
        {
          p: [
            "Alguns assessors anglosaxons fan servir un mapa privat A/B/C/D. A Jane Whittaker, A = D.1 sense treball, B = D.1.2, C = D.1.3, D = J.1. Aquest mapa es diu un cop. No es la llei. Aquest lloc fa servir els codis oficials.",
            "A.1 sol exigir un contracte amb una societat andorrana real i una placa en la quota de l'any. J.1 es la primera autorització si treballeu per compte propi. La primera targeta A.1 o J.1 sol ser d'un any. Una nota del Govern descriu el Decret 75/2026: quota general de 200 autoritzacións per compte propi — 150 casos d'inversio estrangera, 50 professions libérals. Comproveu que s'esta expedint placa.",
            "Llei 2/2026 del 22 de gener, públicada al BOPA el 12 de febrer del 2026, en vigor el 13 de febrer del 2026. Article 96: el titular principal ha d'invertir, de manera permanent i efectiva, com a minim 1.000.000 d'euros en actius andorrans nomenats.",
          ],
          ul: [
            "Immobles; participacions; instruments de deute o inversio col·lectiva 36 mesos; deute públic; asseguranca de vida; diposits AFA no remunerats.",
            "Si immobiliaria: mes de 800.000 euros per unitat. El milio continua sent el total.",
            "400.000 al Fons d'Habitatge « d'acord amb la normativa aplicable ». Possibilitat legal, no un taulell.",
            "AFA 50.000 + 12.000, definitives i no reemborsables tret de denegacio inicial.",
          ],
        },
        {
          p: ["Tarifes 3.000 / 1.000 / 500."],
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
      dek: "La prova es la setmana laboral, no un dissabte a les pistes.",
      meta: "Viure a Andorra",
      blocks: [
        {
          p: [
            "La prova es la setmana laboral, no un dissabte a les pistes. Andorra es un coprincipat entre Franca i Espanya. Es recorre la vall principal en menys d'una hora. No es un suburbi de Barcelona ni de Tolosa.",
            "El catala es la llengua oficial. El castella i el frances s'hi fan servir molt. L'angles es habitual als despatxos i menys a la botiga del poble. Les notes actuals del Govern esperen que els nous residents avencin cap al catala en la renovació. Confirmeu el nivell aleshores exigit a Govern.ad.",
            "Andorra la Vella i Escaldes-Engordany concentren la majoria de les cites i l'hospital public. Ordino i Canillo son mes alts. La Massana i Encamp son a carreteres d'esqui. Sant Julia de Loria es la porta sud, mes a prop d'Espanya i de la universitat. Un habitatge que serveix per a un expedient de residencia no es un xalet de vacances.",
            "Tres sistemes escolars públicats: andorrà, espanyol i frances. La universitat pública es a Sant Julia. La sanitat pública es el SAAS; l'Hospital Nostra Senyora de Meritxell es descriu com l'unic hospital del pais. La seguretat social es la CASS. La cobertura depèn de l'afiliació.",
          ],
        },
      ],
    },
    "/parishes": {
      kind: "parishes",
      title: "Les set parroquies",
      dek: "Cadascuna te el seu Comu.",
      meta: "Les set parroquies",
      lead: ["Cadascuna te el seu Comu."],
    },
    "/properties": {
      kind: "properties",
      title: "Immobles",
      dek: "Llista buida.",
      meta: "Immobles",
      lead: ["No inventem cases, preus ni fotografies."],
      empty: "Llista buida.",
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/moving-to-andorra": {
      kind: "prose",
      title: "Mudar-se a Andorra",
      dek: "Conveni 2001. Servei d'Immigració. D.3 D.1 J.1 B.1.",
      meta: "Mudar-se a Andorra",
      blocks: [
        {
          p: ["Conveni 2001. Servei d'Immigració. D.3 D.1 J.1 B.1."],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/residence-without-work": {
      kind: "prose",
      title: "Residencia sense treball — D.1",
      dek: "Font página D.1 a Govern.ad. Renovació D.2. Article 96. Si discrepen, regeix la llei.",
      meta: "Residencia sense treball — D.1",
      notice:
        "Font página D.1 a Govern.ad. Renovació D.2. Article 96. Si discrepen, regeix la llei.",
      blocks: [
        {
          h: "D.1.2 professionals amb projeccio internacional",
          p: [
            "Seu a Andorra, com a maxim una persona amb contracte, 85 % serveis fora, quota, 90 dies, viabilitat i qualificacio.",
          ],
        },
        {
          h: "D.1.3 interès scientific, cultural o esportiu",
          p: [
            "Reconeixement internacional, mateixa quota i 90 dies, 85 % fora, curriculum i ingressos l'any anterior.",
          ],
        },
        {
          h: "D.1.4 centres geriatrics o medics privats",
          p: ["90 dies, sense activitat professional."],
        },
        {
          p: [
            "A 29 d'agost del 2026 no hi ha D.1.1. L'expedient classic es l'article 96.",
            "Autorització 2 / 2 / 3 / 10 tret de conveni.",
            "Inversio 1.000.000; 800.000 per unitat; Fons d'Habitatge 400.000; AFA 50.000+12.000; tarifes 3.000/1.000/500.",
            "Ingressos mes del 300 % del salari minim anual + 100 % per dependent. Formula salari x 12 x 3. No convertim a euros.",
            "Noranta dies no son 183 de l'IRPF.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/digital-nomad": {
      kind: "prose",
      title: "Residencia nomada digital — D.3",
      dek: "El D.3 autoritza a residir durant la vigenza.",
      meta: "Residencia nomada digital — D.3",
      blocks: [
        {
          p: [
            "El D.3 autoritza a residir durant la vigenza. Nouvingut sense lloc fix, telecomúnicacions, quota, 90 dies. Inicial 2/2/3/10.",
          ],
          ul: [
            "Sol·licitud.",
            "Passaport o document UE/EEE.",
            "Antecedents.",
            "Resolució del ministeri.",
            "Habitatge o compra en un any.",
            "Compromis 90 dies i asseguranca.",
            "Mitjans segons reglament sense xifra en euros.",
            "Malaltia i invalidesa (nomes malaltia menors i mes de seixanta).",
            "Alta al Comu en un mes.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/family-reunification": {
      kind: "prose",
      title: "Reagrupament familiar — B.1",
      dek: "Persona reagrupada amb nacional andorrà o titular de residencia i treball que resideixin al pais.",
      meta: "Reagrupament familiar — B.1",
      blocks: [
        {
          p: [],
          ul: [
            "Conuge o unio estable de parella.",
            "Fills menors i del conuge amb guarda.",
            "Fills grans dependents sota tutela.",
            "Ascendents 65+ o jubilats.",
            "Altres sota tutela si ambdos progenitors han perdut la patria potestat.",
          ],
        },
        {
          p: [
            "Sense germans ni parelles de fet no inscrites.",
            "Nacional: deu anys. Residencia i treball: un any, tres vegades dos, als set anys deu.",
            "Mitjans 100 % salari minim sol·licitant; llar 100 % per adult i 70 % per menor. No convertim a euros.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/tax-residence": {
      kind: "prose",
      title: "Residencia fiscal",
      dek: "Un permís no es aquesta prova.",
      meta: "Residencia fiscal",
      blocks: [
        {
          p: [
            "Un permís no es aquesta prova. IRPF si mes de 183 dies (absencies esporadiques compten tret de prova en un altre pais) o nucli principal d'interessos aqui. Presumpcio conuge no separat i fills menors. D.1 i D.3 90 dies son immigració. Article 8 son 183. El pais que deixeu pot continuar reclamant. No es un placet de HMRC, Agencia Tributaria o DGFiP. Aquesta página no cita tipus de l'IRPF. No presentem declaracións.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/self-employed-residence": {
      kind: "prose",
      title: "Compte propi — J.1",
      dek: "Quota Decret 75/2026 de 200: 150 / 50.",
      meta: "Compte propi — J.1",
      blocks: [
        {
          p: [
            "Quota Decret 75/2026 de 200: 150 / 50. Primera un any, tres vegades dos, als set anys deu. Inversio estrangera mes del 34 %, constitució, comerç actiu en tres mesos. Página J.1 encara nomena 50.000; si discrepen, BOPA. Professio libéral: autorització i col·legiació en tres mesos. Alta al Comu en tres mesos. Renovació demana activitat comercial, no facturació.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/entrepreneur-residence": {
      kind: "prose",
      title: "Residencia programes d'emprenedors — D.4",
      dek: "No visat general.",
      meta: "Residencia programes d'emprenedors — D.4",
      blocks: [
        {
          p: [
            "No visat general. 90 dies. Un any renovable mateixa durada. Resolució ministeri, habitatge, mitjans per reglament no impresos en euros, asseguranca, compromis, Comu en un mes.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/the-file": {
      kind: "prose",
      title: "L'expedient i el banc",
      dek: "Apostilla que falta, banc que no accepta diners, certificat medic del lloc equivocat.",
      meta: "L'expedient i el banc",
      blocks: [
        {
          p: [
            "Apostilla que falta, banc que no accepta diners, certificat medic del lloc equivocat. Un sol paquet. Apostilla i traduccio al catala tret d'escrit en contra. Passaport; antecedents 10 anys; habitatge contracte o escriptura; mitjans i origen; cobertura; reconeixement medic; actes matrimoni i naixement; J.1 estatuts pla llibre de socis autorització; D.1 compromis i prova a temps. Conversa bancaria en paral·lel, no despres.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/opening-a-bank-account": {
      kind: "prose",
      title: "Obrir un compte",
      dek: "Andbank, MoraBanc o Creand. Compliment.",
      meta: "Obrir un compte",
      blocks: [
        {
          p: [
            "Andbank, MoraBanc o Creand. Compliment. Els comptes de no residents poden portar un minim. Cada banc fixa el llindar. No inventem xifres. KYC en persona. No internet. No anònims. Intercanvi d'informació. Auto-certificació. La discrecio no es un escut. Supervisión AFA.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
    "/buying-property": {
      kind: "prose",
      title: "Comprar sent no resident",
      dek: "Una casa no es un permís. La nota del 2026 situa l'impost extra en el 6 % o el 10 %, segons el cas.",
      meta: "Una casa no es un permís. La nota del 2026 situa l'impost extra en el 6 % o el 10 %, segons el cas.",
      blocks: [
        {
          p: [
            "Percentatges presos de la nota de Govern.ad del 26 de febrer del 2026 i del Decret 58/2026. Confirmeu el test vigent amb el Govern, un notari i un agent AGIA.",
            "Es descriu una autorització administrativa prevía per a la inversio estrangera immobiliaria. Els casos públicats inclouen un particular no resident que no es andorrà, i un resident que no pot acreditar tres anys de residencia efectiva i permanent en els deu anys anteriors a la sol·licitud, amb les salvetats de convenis i absencies per estudis.",
            "La nota del 26 de febrer del 2026 indica que l'impost passa del 3 % al 6 % en un primer immoble, i del 5 % al 10 % en un segon habitatge. Llegiu el reglament vigent per a exempcions i el tram del 10 %. El notari formalitza la compravenda conclosa.",
            "Els agents han d'estar inscrits a l'AGIA. Aquest lloc no inventa cases ni preus. Les pagines d'immigració demanen prova d'allotjament; la compra pot servir un cop l'escriptura estigui en ordre. El permís continua sent una sol·licitud d'immigració.",
          ],
        },
      ],
      formIntro: "Si voleu una presentacio, deixeu un correu.",
    },
  },
};
