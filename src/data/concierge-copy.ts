import type { Locale } from "../lib/i18n";

export type ConciergeLocale = Extract<Locale, "en" | "es">;

type Segment = string | { href: string; label: string; external?: boolean };

export type ConciergeCopy = {
  disclaimer: string;
  concierge: {
    title: string;
    description: string;
    label: string;
    h1: string;
    dek: string;
    offersTitle: string;
    offersIntro: string;
    offers: { id: string; label: string; h: string; p: string; href: string; paid: boolean }[];
    freeNote: string;
    stepsTitle: string;
    steps: { h: string; p: string }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
  };
  plan: {
    title: string;
    description: string;
    label: string;
    h1: string;
    dek: string;
    blocks: { h?: string; p: Segment[] }[];
    toolTitle: string;
    calcTitle: string;
    calcIntro: string;
    emailTitle: string;
    emailIntro: string;
  };
  newsletter: {
    title: string;
    description: string;
    label: string;
    h1: string;
    dek: string;
    points: string[];
  };
  partners: {
    title: string;
    description: string;
    label: string;
    h1: string;
    dek: string;
    blocks: { h?: string; p: Segment[] }[];
  };
  form: {
    requestTitle: string;
    requestIntro: string;
    newsletterTitle: string;
    name: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    offerLegend: string;
    offers: { id: string; label: string }[];
    consent: string;
    partners: string;
    newsletterConsent: string;
    privacy: string;
    submit: string;
    newsletterSubmit: string;
    successTitle: string;
    success: string;
    error: string;
    honeypot: string;
  };
  quiz: {
    progress: string;
    back: string;
    again: string;
    resultLabel: string;
    charges: string;
    capital: string;
    route: string;
    dependants: string;
    housingFund: string;
    property: string;
    price: string;
    first: string;
    further: string;
    update: string;
    excludedTitle: string;
    sourcesTitle: string;
    empty: string;
    noscript: string;
    routes: Record<string, string>;
    reasons: Record<string, string>;
    lines: Record<string, string>;
    warnings: Record<string, string>;
    questions: {
      id: string;
      prompt: string;
      options: { value: string; label: string }[];
    }[];
  };
};

const en: ConciergeCopy = {
  disclaimer:
    "This is information, not advice. It does not file an application, open a bank account, or choose a route for you. Those acts belong to licensed Andorran professionals. Figures are copied from the sources named, with the date they were read. If a figure here and the BOPA disagree, use the BOPA.",
  concierge: {
    title: "Concierge | Andorra Private",
    description:
      "A free Andorra relocation concierge: sourced 2026 figures, an automated plan, and introductions to licensed partners. Information, not advice.",
    label: "Concierge",
    h1: "Arrange the move in writing",
    dek: "The notes already on this site, a plan generated from the figures we cite, and a form if you want that plan emailed or, with your consent, passed to a licensed partner. There is no telephone line.",
    offersTitle: "What you can ask for",
    offersIntro:
      "Each request is a form. The page writes the plan. Mail goes to hello@privateandorra.com and is answered in writing.",
    offers: [
      {
        id: "guide",
        label: "Guide",
        h: "Reading pack",
        p: "The residency, banking and parish notes already published here, sent as one email.",
        href: "/living-in-andorra",
        paid: true,
      },
      {
        id: "plan",
        label: "Plan",
        h: "Automated plan",
        p: "Answer the questions on the planner. The page writes a plan from the sourced figures. Ask for a copy by email if you want one in your inbox.",
        href: "/plan",
        paid: true,
      },
      {
        id: "partner",
        label: "Partner",
        h: "Partner introduction",
        p: "A place to live, a bank introduction, insurance, a school, a car, utilities, deliveries. Name which of those you need. With your consent, a short summary is emailed to an independent licensed professional, who writes to you.",
        href: "/directory",
        paid: false,
      },
    ],
    freeNote: "These requests are free.",
    stepsTitle: "How a request moves",
    steps: [
      {
        h: "You write it down",
        p: "The form asks for an email, the route you are looking at, and whether a partner may be told.",
      },
      {
        h: "The page does the sorting",
        p: "The planner maps your answers onto an official letter — D.1, J.1, D.3 or B.1 — and lists the amounts we can source.",
      },
      {
        h: "A person replies only if you asked",
        p: "If you ticked the partner box, a summary can go to a lawyer, gestor, agent, insurer or school. If you did not, the email stays in the site inbox.",
      },
    ],
    faqTitle: "Questions",
    faq: [
      {
        q: "Are you a law firm?",
        a: "No. We publish sourced notes and generate a plan from them. Filings, tax opinions, bank decisions and notarial acts are done by licensed Andorran professionals.",
      },
      {
        q: "Will someone telephone me?",
        a: "No. There is no telephone number on this site. You write through the form. Mail is read at hello@privateandorra.com.",
      },
      {
        q: "Do you charge for a request?",
        a: "Not on this site. The reading pack, the plan and the introduction request are free.",
      },
      {
        q: "Where do the euro figures come from?",
        a: "Law 2/2026 in the BOPA, in force on 13 February 2026, and the Govern.ad immigration tariffs table read on 11 October 2026. Property tax follows the Government note of 26 February 2026. Secondary pages are quoted only where they disagree, and they are not added into the quote.",
      },
      {
        q: "Can you file my residence?",
        a: "No. Use the directory for firms that publish their own sites, or tick the partner box and we will pass a summary you have agreed.",
      },
    ],
  },
  plan: {
    title: "Plan a move to Andorra | Andorra Private",
    description:
      "Andorra relocation cost quote for 2026 from Law 2/2026 and the Govern.ad tariffs, plus a plan generated from your answers. Information, not advice.",
    label: "Planner",
    h1: "What a move can cost in 2026",
    dek: "Official amounts from Law 2/2026 and the tariffs table, then a plan written on this page from your answers. Nothing here is a quote from a firm.",
    blocks: [
      {
        h: "What counts as an official amount",
        p: [
          "The investment and the AFA income are in article 96 of ",
          {
            href: "https://bopadocuments.blob.core.windows.net/bopa-documents/038015/pdf/CGL_2026_02_12_10_11_12.pdf",
            label: "Law 2/2026",
            external: true,
          },
          ", published in the BOPA on 12 February 2026 and in force on 13 February 2026. Card-delivery amounts are the lines on the ",
          {
            href: "https://www.govern.ad/ca/tematiques/immigracio/altres-tramits/tarifes",
            label: "Govern.ad tariffs table",
            external: true,
          },
          ", read on 11 October 2026. A longer English note is on ",
          { href: "/become-a-resident", label: "become a resident" },
          ".",
        ],
      },
      {
        h: "The letters",
        p: [
          "D.1 is residence without local work. J.1 is residence and work on your own account. D.3 is the digital-nomad authorisation. B.1 is family reunification. The Government’s own pages are linked from ",
          { href: "/residence-without-work", label: "D.1" },
          ", ",
          { href: "/self-employed-residence", label: "J.1" },
          ", ",
          { href: "/digital-nomad", label: "D.3" },
          " and ",
          { href: "/family-reunification", label: "B.1" },
          ". Tax residence, under article 8 of Law 5/2014, is a different test: more than 183 days, or the centre of economic interests. That note is ",
          { href: "/tax-residence", label: "tax residence" },
          ".",
        ],
      },
      {
        h: "What the quote adds",
        p: [
          "For D.1 it adds the €1,000,000 of qualifying assets, or the €400,000 Housing Fund figure, the AFA income of €50,000 plus €12,000 a dependant, and card delivery of €3,000 plus €1,000 a dependant resident. The AFA sums are definitive and not refundable unless the initial authorisation is refused. If you type a purchase price it adds ITP at 4% and the foreign-investment property tax at 6% or 10%, on top. The million, and the Housing Fund figure, stay yours. They are not a charge.",
        ],
      },
      {
        h: "What it leaves out",
        p: [
          "A secondary page updated on 23 September 2026, and read here on 11 October 2026, still prints €2,500 plus €500 a dependant, about €94,120 of means, and €224.61 for a digital nomad. Those figures are shown under the quote and are not added. The tariffs table we read does not match the first of them, and it does not name a digital-nomad line. Means on the official pages are either “set by regulation” or a percentage of the minimum wage, which this site does not convert into euros. Insurance premiums, rent, notary costs and a firm’s own bill are not invented here.",
        ],
      },
    ],
    toolTitle: "Am I looking at the right letter?",
    calcTitle: "Official amounts",
    calcIntro:
      "Change the route, the household or a purchase price. The total uses only the sourced lines.",
    emailTitle: "Email yourself the plan",
    emailIntro:
      "The plan is already on this page. The form asks the inbox to send you a copy. There is no telephone line.",
  },
  newsletter: {
    title: "Newsletter | Andorra Private",
    description:
      "A monthly note when a BOPA text or a Govern.ad immigration page changes a figure this site cites.",
    label: "Newsletter",
    h1: "When a cited figure moves",
    dek: "A short email when a BOPA text or a Govern.ad immigration page changes something this site has quoted. You can leave from any letter.",
    points: [
      "What changed, and the official page it changed on.",
      "Whether the planner on this site was updated to match.",
      "No telephone follow-up. The letter is the whole message.",
    ],
  },
  partners: {
    title: "Partners | Andorra Private",
    description:
      "How an introduction to a licensed Andorran professional works, and what is sent only with your consent.",
    label: "Partners",
    h1: "Introductions, with a tick",
    dek: "Lawyers, gestors, estate agents, insurers and schools do their own work. This site can pass a summary only if you agree, and only by email.",
    blocks: [
      {
        h: "What we are not",
        p: [
          "We are not a law firm, a gestoria, a bank, an insurer or an estate agency. We do not file the application and we do not hold client money. Firms with their own websites are listed in the ",
          { href: "/directory", label: "directory" },
          ". We do not invent a practice that has not published its own site.",
        ],
      },
      {
        h: "What an introduction contains",
        p: [
          "If you tick the box, the summary is your name, your email, the letter the planner suggested, the timing you gave, and the sentence you wrote. It is not a file, and it is not advice. The professional writes to you on their own terms. You can ask for the plan and leave the box unticked.",
        ],
      },
      {
        h: "How to start",
        p: [
          "Use the ",
          { href: "/plan", label: "planner" },
          " if you want the amounts first, or the ",
          { href: "/concierge", label: "concierge form" },
          " if you already know which introduction you want. The privacy note is the ",
          { href: "/privacy", label: "Llei 29/2021 policy" },
          ".",
        ],
      },
    ],
  },
  form: {
    requestTitle: "Send a request",
    requestIntro:
      "Tell us which note you want. We reply by email to the address you give. There is no telephone line.",
    newsletterTitle: "Send me the note",
    name: "Name",
    email: "Email",
    message: "What you want in writing",
    messagePlaceholder: "Route, timing, and which practical pieces you need.",
    offerLegend: "Request",
    offers: [
      { id: "guide", label: "Reading pack" },
      { id: "plan", label: "Automated plan" },
      { id: "partner", label: "Partner introduction" },
    ],
    consent: "I ask Andorra Private to email me about this request. I have read the privacy policy.",
    partners:
      "I agree that a summary of this request may be emailed to an independent licensed professional (a lawyer, gestor, agent, insurer or school) so they can write to me. I can leave this unticked and still receive the plan.",
    newsletterConsent:
      "I ask to receive the monthly note by email. I can unsubscribe from any letter. I have read the privacy policy.",
    privacy: "Privacy policy",
    submit: "Send",
    newsletterSubmit: "Subscribe",
    successTitle: "Received",
    success:
      "That’s with the inbox. We will reply by email. Nothing further is required on this page.",
    error: "Check the email address and the consent box, then send again.",
    honeypot: "Leave this empty",
  },
  quiz: {
    progress: "{n} of {total}",
    back: "Back",
    again: "Start again",
    resultLabel: "The letter this points at",
    charges: "Official charges in this quote",
    capital: "Capital that stays yours",
    route: "Route",
    dependants: "Dependants",
    housingFund: "Use the €400,000 Housing Fund figure instead of €1,000,000",
    property: "Purchase price, if you want the property taxes",
    price: "Price in euros",
    first: "First qualifying acquisition (6%)",
    further: "Further acquisition (10%)",
    update: "Update the quote",
    excludedTitle: "Printed elsewhere, not added",
    sourcesTitle: "Sources",
    empty: "Answer the questions, or set a route below, and the quote will use the sourced lines.",
    noscript:
      "The questions and the quote need JavaScript. The form further down still sends.",
    routes: {
      d1: "D.1 — residence without work",
      j1: "J.1 — residence and work on your own account",
      d3: "D.3 — digital nomad",
      b1: "B.1 — family reunification",
      none: "The published routes on these pages ask for at least 90 days. The answer you gave is under that.",
      compare: "The answers do not pick a single letter. Read D.1, J.1 and D.3 before you choose.",
    },
    reasons: {
      "days-short":
        "D.1 and D.3, as published, ask for principal and effective residence of at least 90 days in the calendar year.",
      family:
        "Joining someone who already holds a status is B.1 on the Government’s list, not a second copy of their permit.",
      "own-account":
        "Working on your own account is J.1. The live page still names an AFA sum at filing. A practitioner map has reported the quota closed; that report is not a Government notice. Confirm on Govern.ad.",
      remote:
        "Remote work for a life that is not a local job is the shape of D.3. Means are those set by regulation. The tariffs table we read does not name a separate digital-nomad line.",
      "no-work":
        "Living here without local employment is D.1. Article 96 of Law 2/2026 is the investment and AFA text.",
      "capital-short":
        "The figure you chose sits under both the €1,000,000 and the €400,000 Housing Fund amount in article 96.",
      "capital-mid":
        "Between €400,000 and €1,000,000, the million is not met. The Housing Fund figure is in the law “in accordance with the applicable regulations”. It is not a counter you can assume is open.",
      "capital-met":
        "€1,000,000 meets the headline investment. If any of it is property, each unit still has to be more than €800,000.",
      "capital-unstated":
        "You did not give a capital figure. The quote still shows the legal amounts, not an estimate of what you have.",
      "days-183-tax":
        "183 days is the tax-residence test in article 8 of Law 5/2014, not the immigration day-count.",
      "days-90-j1":
        "J.1 is a work authorisation. Tax residence is still the 183-day test if that is the question you are actually asking.",
      unsure:
        "Pick the closest letter in the quote, then read the Government page for that letter.",
    },
    lines: {
      "d1.investment": "Qualifying Andorran assets. This stays yours.",
      "d1.housingFund":
        "Housing Fund figure in article 96. This stays yours, if that route is open.",
      "d1.afa": "AFA income for the principal and dependants on the same status.",
      "d1.tariff": "Card delivery for the principal and dependant residents.",
      "d1.renewal": "Later renewal of residence without work. Not in the total.",
      "j1.afa": "AFA income for a new self-employed file.",
      "j1.tariff": "Delivery of a self-employed residence-and-work authorisation.",
      "j1.receipt": "Application receipt on the tariffs table.",
      "j1.capital": "Minimum paid-up capital of an SL. It stays in the company.",
      "d3.means": "Economic means are those set by regulation. No euro amount is added.",
      "d3.days": "Days of principal residence stated on the D.3 page.",
      "b1.tariff": "Delivery of residence without work for family reunification.",
      "b1.means":
        "Household means are 100% of the minimum wage for each adult and 70% for each minor. Not converted into euros.",
      "property.itp": "ITP at 4% of the price you entered.",
      "property.iieiFirst": "Foreign-investment property tax at 6%.",
      "property.iieiFurther": "Foreign-investment property tax at 10%.",
    },
    warnings: {
      "housing-fund-caveat":
        "Article 96 names €400,000 when the investment is made in the Housing Fund, in accordance with the applicable regulations. Treat it as a legal possibility, not a counter you can walk up to.",
      "unit-floor":
        "If property is used, each immovable unit must be more than €800,000. The price you entered does not clear that floor.",
      "investment-balance":
        "A unit can clear €800,000 and still leave a gap under €1,000,000. The balance has to sit in other permitted assets.",
      "housing-and-property":
        "The Housing Fund figure and a purchase are different things. Both are on the quote because you asked for both.",
      "joining-family":
        "Each person who joins you is a separate file. This quote does not invent their amounts.",
    },
    questions: [
      {
        id: "intent",
        prompt: "What are you trying to do?",
        options: [
          { value: "no-work", label: "Live here without a local job" },
          { value: "own-account", label: "Work on my own account" },
          { value: "remote", label: "Keep working remotely for a life elsewhere" },
          { value: "family", label: "Join someone who is already here" },
          { value: "unsure", label: "I am not sure" },
        ],
      },
      {
        id: "days",
        prompt: "How many days in the year can you actually be here?",
        options: [
          { value: "90", label: "At least 90" },
          { value: "183", label: "At least 183" },
          { value: "under-90", label: "Fewer than 90" },
        ],
      },
      {
        id: "localWork",
        prompt: "Will you work in Andorra?",
        options: [
          { value: "no", label: "No local work" },
          { value: "yes", label: "Yes, on my own account" },
          { value: "remote-foreign", label: "Only remotely, for a foreign activity" },
        ],
      },
      {
        id: "dependants",
        prompt: "How many dependants would take the same status?",
        options: [
          { value: "0", label: "None" },
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
          { value: "3", label: "Three or more" },
        ],
      },
      {
        id: "capital",
        prompt: "What can you place in Andorran assets?",
        options: [
          { value: "under-400", label: "Under €400,000" },
          { value: "400-999", label: "€400,000 to under €1,000,000" },
          { value: "1000-plus", label: "€1,000,000 or more" },
          { value: "unstated", label: "I would rather not say" },
        ],
      },
      {
        id: "timeline",
        prompt: "When would you move?",
        options: [
          { value: "here", label: "I am already dealing with it" },
          { value: "under-6", label: "Within six months" },
          { value: "6-18", label: "In six to eighteen months" },
          { value: "exploring", label: "I am reading, not moving" },
        ],
      },
    ],
  },
};

const es: ConciergeCopy = {
  disclaimer:
    "Esto es información, no asesoramiento. No presenta una solicitud, no abre una cuenta bancaria y no elige una vía por usted. Esos actos corresponden a profesionales colegiados en Andorra. Las cifras están copiadas de las fuentes citadas, con la fecha en que se leyeron. Si una cifra de aquí y el BOPA no coinciden, manda el BOPA.",
  concierge: {
    title: "Conserjería | Andorra Private",
    description:
      "Conserjería gratuita para mudarse a Andorra: cifras de 2026 con fuente, un plan automático e introducciones a profesionales colegiados. Información, no asesoramiento.",
    label: "Conserjería",
    h1: "Organice la mudanza por escrito",
    dek: "Las notas que ya están en este sitio, un plan generado con las cifras que citamos, y un formulario si quiere ese plan por correo o, con su consentimiento, enviado a un profesional colegiado. No hay línea telefónica.",
    offersTitle: "Qué puede pedir",
    offersIntro:
      "Cada petición es un formulario. La página redacta el plan. El correo llega a hello@privateandorra.com y se contesta por escrito.",
    offers: [
      {
        id: "guide",
        label: "Guía",
        h: "Dossier de lectura",
        p: "Las notas de residencia, banca y parroquias ya publicadas aquí, enviadas en un solo correo.",
        href: "/living-in-andorra",
        paid: true,
      },
      {
        id: "plan",
        label: "Plan",
        h: "Plan automático",
        p: "Responda a las preguntas del planificador. La página redacta un plan con las cifras citadas. Pida una copia por correo si la quiere en su buzón.",
        href: "/plan",
        paid: true,
      },
      {
        id: "partner",
        label: "Profesional",
        h: "Introducción a un profesional",
        p: "Un lugar donde vivir, una introducción bancaria, seguro, colegio, coche, suministros, entregas. Diga cuáles necesita. Con su consentimiento, un resumen breve se envía por correo a un profesional colegiado independiente, que le escribe.",
        href: "/directory",
        paid: false,
      },
    ],
    freeNote: "Estas peticiones son gratuitas.",
    stepsTitle: "Cómo avanza una petición",
    steps: [
      {
        h: "Usted lo deja por escrito",
        p: "El formulario pide un correo, la vía que está mirando y si un profesional puede ser informado.",
      },
      {
        h: "La página ordena las respuestas",
        p: "El planificador lleva sus respuestas a una letra oficial — D.1, J.1, D.3 o B.1 — y lista los importes que podemos citar.",
      },
      {
        h: "Alguien contesta solo si usted lo pidió",
        p: "Si marcó la casilla del profesional, un resumen puede ir a un abogado, un gestor, un agente, una aseguradora o un colegio. Si no la marcó, el correo se queda en el buzón del sitio.",
      },
    ],
    faqTitle: "Preguntas",
    faq: [
      {
        q: "¿Son un bufete?",
        a: "No. Publicamos notas con fuente y generamos un plan a partir de ellas. Las solicitudes, los dictámenes fiscales, las decisiones bancarias y las actas notariales las hacen profesionales colegiados en Andorra.",
      },
      {
        q: "¿Alguien me telefoneará?",
        a: "No. En este sitio no hay número de teléfono. Se escribe por el formulario. El correo se lee en hello@privateandorra.com.",
      },
      {
        q: "¿Cobran por una petición?",
        a: "No en este sitio. El dossier, el plan y la petición de introducción son gratuitos.",
      },
      {
        q: "¿De dónde salen las cifras en euros?",
        a: "De la Ley 2/2026 en el BOPA, en vigor el 13 de febrero de 2026, y de la tabla de tarifas de inmigración de Govern.ad leída el 11 de octubre de 2026. El impuesto inmobiliario sigue la nota del Gobierno del 26 de febrero de 2026. Las páginas secundarias se citan solo donde no coinciden, y no se suman al cálculo.",
      },
      {
        q: "¿Pueden presentar mi residencia?",
        a: "No. Use el directorio para firmas que publican su propio sitio, o marque la casilla del profesional y pasaremos un resumen que usted haya aceptado.",
      },
    ],
  },
  plan: {
    title: "Planificar una mudanza a Andorra | Andorra Private",
    description:
      "Cálculo de una mudanza a Andorra en 2026 con la Ley 2/2026 y las tarifas de Govern.ad, y un plan generado con sus respuestas. Información, no asesoramiento.",
    label: "Planificador",
    h1: "Lo que una mudanza puede costar en 2026",
    dek: "Importes oficiales de la Ley 2/2026 y de la tabla de tarifas, y después un plan escrito en esta página con sus respuestas. Esto no es un presupuesto de un despacho.",
    blocks: [
      {
        h: "Qué cuenta como importe oficial",
        p: [
          "La inversión y el ingreso a la AFA están en el artículo 96 de la ",
          {
            href: "https://bopadocuments.blob.core.windows.net/bopa-documents/038015/pdf/CGL_2026_02_12_10_11_12.pdf",
            label: "Ley 2/2026",
            external: true,
          },
          ", publicada en el BOPA el 12 de febrero de 2026 y en vigor el 13 de febrero de 2026. Los importes de entrega de la tarjeta son las líneas de la ",
          {
            href: "https://www.govern.ad/ca/tematiques/immigracio/altres-tramits/tarifes",
            label: "tabla de tarifas de Govern.ad",
            external: true,
          },
          ", leída el 11 de octubre de 2026. La nota en inglés está en ",
          { href: "/become-a-resident", label: "hacerse residente" },
          ".",
        ],
      },
      {
        h: "Las letras",
        p: [
          "D.1 es residencia sin trabajo local. J.1 es residencia y trabajo por cuenta propia. D.3 es la autorización de nómada digital. B.1 es el reagrupamiento familiar. Las páginas del Gobierno se enlazan desde ",
          { href: "/residence-without-work", label: "D.1" },
          ", ",
          { href: "/self-employed-residence", label: "J.1" },
          ", ",
          { href: "/digital-nomad", label: "D.3" },
          " y ",
          { href: "/family-reunification", label: "B.1" },
          ". La residencia fiscal, según el artículo 8 de la Ley 5/2014, es otra prueba: más de 183 días, o el centro de los intereses económicos. Esa nota es ",
          { href: "/tax-residence", label: "la residencia fiscal" },
          ".",
        ],
      },
      {
        h: "Qué suma el cálculo",
        p: [
          "Para D.1 suma 1.000.000 € en activos que califican, o la cifra de 400.000 € del Fons d’Habitatge, el ingreso a la AFA de 50.000 € más 12.000 € por persona a cargo, y la entrega de la tarjeta de 3.000 € más 1.000 € por residente a cargo. Esas sumas de la AFA son definitivas y no se devuelven, salvo que se deniegue la autorización inicial. Si escribe un precio de compra, suma el ITP al 4% y el impuesto sobre la inversión extranjera inmobiliaria al 6% o al 10%, además. El millón, y la cifra del fondo, siguen siendo suyos. No son un cargo.",
        ],
      },
      {
        h: "Qué deja fuera",
        p: [
          "Una página secundaria actualizada el 23 de septiembre de 2026, y leída aquí el 11 de octubre de 2026, sigue imprimiendo 2.500 € más 500 € por persona a cargo, unos 94.120 € de medios, y 224,61 € para el nómada digital. Esas cifras se muestran bajo el cálculo y no se suman. La tabla de tarifas que leímos no coincide con la primera, y no nombra una línea de nómada digital. Los medios, en las páginas oficiales, o bien «los fija el reglamento» o bien son un porcentaje del salario mínimo, que este sitio no convierte en euros. Primas de seguro, alquiler, notaría y la minuta de un despacho no se inventan aquí.",
        ],
      },
    ],
    toolTitle: "¿Estoy mirando la letra correcta?",
    calcTitle: "Importes oficiales",
    calcIntro:
      "Cambie la vía, el hogar o un precio de compra. El total usa solo las líneas citadas.",
    emailTitle: "Envíese el plan por correo",
    emailIntro:
      "El plan ya está en esta página. El formulario pide al buzón que le envíe una copia. No hay línea telefónica.",
  },
  newsletter: {
    title: "Boletín | Andorra Private",
    description:
      "Una nota mensual cuando un texto del BOPA o una página de inmigración de Govern.ad cambia una cifra que este sitio cita.",
    label: "Boletín",
    h1: "Cuando se mueve una cifra citada",
    dek: "Un correo breve cuando un texto del BOPA o una página de inmigración de Govern.ad cambia algo que este sitio ha citado. Puede darse de baja en cualquier envío.",
    points: [
      "Qué cambió, y la página oficial en la que cambió.",
      "Si el planificador de este sitio se actualizó para coincidir.",
      "No hay seguimiento telefónico. La carta es el mensaje entero.",
    ],
  },
  partners: {
    title: "Profesionales | Andorra Private",
    description:
      "Cómo funciona una introducción a un profesional colegiado en Andorra, y qué se envía solo con su consentimiento.",
    label: "Profesionales",
    h1: "Introducciones, con una casilla",
    dek: "Abogados, gestores, agentes inmobiliarios, aseguradoras y colegios hacen su propio trabajo. Este sitio puede pasar un resumen solo si usted está de acuerdo, y solo por correo.",
    blocks: [
      {
        h: "Lo que no somos",
        p: [
          "No somos un bufete, una gestoría, un banco, una aseguradora ni una agencia inmobiliaria. No presentamos la solicitud y no custodiamos dinero de clientes. Las firmas con sitio propio están en el ",
          { href: "/directory", label: "directorio" },
          ". No inventamos un despacho que no haya publicado su propio sitio.",
        ],
      },
      {
        h: "Qué contiene una introducción",
        p: [
          "Si marca la casilla, el resumen es su nombre, su correo, la letra que sugirió el planificador, el plazo que indicó y la frase que escribió. No es un expediente y no es asesoramiento. El profesional le escribe en sus propios términos. Puede pedir el plan y dejar la casilla sin marcar.",
        ],
      },
      {
        h: "Por dónde empezar",
        p: [
          "Use el ",
          { href: "/plan", label: "planificador" },
          " si quiere los importes primero, o el ",
          { href: "/concierge", label: "formulario de conserjería" },
          " si ya sabe qué introducción quiere. La nota de privacidad es la ",
          { href: "/privacy", label: "política de la Ley 29/2021" },
          ".",
        ],
      },
    ],
  },
  form: {
    requestTitle: "Enviar una petición",
    requestIntro:
      "Diga qué nota quiere. Contestamos por correo a la dirección que indique. No hay línea telefónica.",
    newsletterTitle: "Quiero la nota",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Lo que quiere por escrito",
    messagePlaceholder: "Vía, plazo y qué piezas prácticas necesita.",
    offerLegend: "Petición",
    offers: [
      { id: "guide", label: "Dossier de lectura" },
      { id: "plan", label: "Plan automático" },
      { id: "partner", label: "Introducción a un profesional" },
    ],
    consent:
      "Pido a Andorra Private que me escriba por correo sobre esta petición. He leído la política de privacidad.",
    partners:
      "Acepto que un resumen de esta petición pueda enviarse por correo a un profesional colegiado independiente (abogado, gestor, agente, aseguradora o colegio) para que me escriba. Puedo dejar esto sin marcar y recibir igualmente el plan.",
    newsletterConsent:
      "Pido recibir la nota mensual por correo. Puedo darme de baja en cualquier envío. He leído la política de privacidad.",
    privacy: "Política de privacidad",
    submit: "Enviar",
    newsletterSubmit: "Suscribirme",
    successTitle: "Recibido",
    success:
      "Ha quedado en el buzón. Contestaremos por correo. En esta página no hace falta nada más.",
    error: "Revise el correo y la casilla de consentimiento, y envíe de nuevo.",
    honeypot: "Deje esto vacío",
  },
  quiz: {
    progress: "{n} de {total}",
    back: "Atrás",
    again: "Empezar de nuevo",
    resultLabel: "La letra a la que apunta",
    charges: "Cargos oficiales de este cálculo",
    capital: "Capital que sigue siendo suyo",
    route: "Vía",
    dependants: "Personas a cargo",
    housingFund: "Usar la cifra de 400.000 € del Fons d’Habitatge en lugar de 1.000.000 €",
    property: "Precio de compra, si quiere los impuestos inmobiliarios",
    price: "Precio en euros",
    first: "Primera adquisición que califica (6%)",
    further: "Adquisición ulterior (10%)",
    update: "Actualizar el cálculo",
    excludedTitle: "Impreso en otro sitio, no sumado",
    sourcesTitle: "Fuentes",
    empty:
      "Responda a las preguntas, o elija una vía debajo, y el cálculo usará las líneas citadas.",
    noscript:
      "Las preguntas y el cálculo necesitan JavaScript. El formulario de más abajo sí envía.",
    routes: {
      d1: "D.1 — residencia sin trabajo",
      j1: "J.1 — residencia y trabajo por cuenta propia",
      d3: "D.3 — nómada digital",
      b1: "B.1 — reagrupamiento familiar",
      none: "Las vías publicadas en estas páginas piden al menos 90 días. La respuesta que dio está por debajo.",
      compare:
        "Las respuestas no eligen una sola letra. Lea D.1, J.1 y D.3 antes de escoger.",
    },
    reasons: {
      "days-short":
        "D.1 y D.3, tal como están publicados, piden residencia principal y efectiva de al menos 90 días en el año natural.",
      family:
        "Reunirse con alguien que ya tiene un estatuto es B.1 en la lista del Gobierno, no una segunda copia de su permiso.",
      "own-account":
        "Trabajar por cuenta propia es J.1. La página vigente sigue nombrando una suma de la AFA al presentar el expediente. Un mapa de profesionales ha informado de que el cupo está cerrado; ese informe no es un aviso del Gobierno. Confírmelo en Govern.ad.",
      remote:
        "El trabajo a distancia para una vida que no es un empleo local tiene la forma de D.3. Los medios son los que fije el reglamento. La tabla de tarifas que leímos no nombra una línea distinta de nómada digital.",
      "no-work":
        "Vivir aquí sin empleo local es D.1. El artículo 96 de la Ley 2/2026 es el texto de la inversión y de la AFA.",
      "capital-short":
        "La cifra que eligió está por debajo tanto de 1.000.000 € como de los 400.000 € del Fons d’Habitatge en el artículo 96.",
      "capital-mid":
        "Entre 400.000 € y 1.000.000 €, el millón no se alcanza. La cifra del fondo está en la ley «de acuerdo con la normativa aplicable». No es un mostrador que se pueda dar por abierto.",
      "capital-met":
        "1.000.000 € alcanza la inversión de cabecera. Si una parte es inmueble, cada unidad tiene que superar los 800.000 €.",
      "capital-unstated":
        "No indicó una cifra de capital. El cálculo muestra igualmente los importes legales, no una estimación de lo que usted tiene.",
      "days-183-tax":
        "183 días es la prueba de residencia fiscal del artículo 8 de la Ley 5/2014, no el cómputo de días de inmigración.",
      "days-90-j1":
        "J.1 es una autorización de trabajo. La residencia fiscal sigue siendo la prueba de los 183 días si esa es la pregunta que en realidad se hace.",
      unsure:
        "Elija la letra más cercana en el cálculo y lea después la página del Gobierno para esa letra.",
    },
    lines: {
      "d1.investment": "Activos andorranos que califican. Siguen siendo suyos.",
      "d1.housingFund":
        "Cifra del Fons d’Habitatge en el artículo 96. Sigue siendo suya, si esa vía está abierta.",
      "d1.afa": "Ingreso a la AFA del titular y de las personas a cargo en el mismo estatuto.",
      "d1.tariff": "Entrega de la tarjeta del titular y de los residentes a cargo.",
      "d1.renewal": "Renovación posterior de la residencia sin trabajo. No va en el total.",
      "j1.afa": "Ingreso a la AFA de un expediente nuevo por cuenta propia.",
      "j1.tariff": "Entrega de una autorización de residencia y trabajo por cuenta propia.",
      "j1.receipt": "Recibo de solicitud en la tabla de tarifas.",
      "j1.capital": "Capital mínimo desembolsado de una SL. Se queda en la sociedad.",
      "d3.means": "Los medios económicos son los que fije el reglamento. No se suma un importe en euros.",
      "d3.days": "Días de residencia principal indicados en la página D.3.",
      "b1.tariff": "Entrega de residencia sin trabajo por reagrupamiento familiar.",
      "b1.means":
        "Los medios del hogar son el 100% del salario mínimo por cada adulto y el 70% por cada menor. No se convierten en euros.",
      "property.itp": "ITP al 4% del precio que ha escrito.",
      "property.iieiFirst": "Impuesto sobre la inversión extranjera inmobiliaria al 6%.",
      "property.iieiFurther": "Impuesto sobre la inversión extranjera inmobiliaria al 10%.",
    },
    warnings: {
      "housing-fund-caveat":
        "El artículo 96 nombra 400.000 € cuando la inversión se hace en el Fons d’Habitatge, de acuerdo con la normativa aplicable. Trátelo como una posibilidad legal, no como un mostrador al que se pueda acudir.",
      "unit-floor":
        "Si se usa un inmueble, cada unidad tiene que superar los 800.000 €. El precio que ha escrito no alcanza ese suelo.",
      "investment-balance":
        "Una unidad puede superar los 800.000 € y dejar aún un hueco bajo 1.000.000 €. El resto tiene que estar en otros activos permitidos.",
      "housing-and-property":
        "La cifra del fondo y una compra son cosas distintas. Las dos aparecen porque usted pidió las dos.",
      "joining-family":
        "Cada persona que se reúne con usted es un expediente distinto. Este cálculo no inventa sus importes.",
    },
    questions: [
      {
        id: "intent",
        prompt: "¿Qué intenta hacer?",
        options: [
          { value: "no-work", label: "Vivir aquí sin un empleo local" },
          { value: "own-account", label: "Trabajar por cuenta propia" },
          { value: "remote", label: "Seguir trabajando a distancia para una vida en otro lugar" },
          { value: "family", label: "Reunirme con alguien que ya está aquí" },
          { value: "unsure", label: "No estoy seguro" },
        ],
      },
      {
        id: "days",
        prompt: "¿Cuántos días al año puede estar de verdad aquí?",
        options: [
          { value: "90", label: "Al menos 90" },
          { value: "183", label: "Al menos 183" },
          { value: "under-90", label: "Menos de 90" },
        ],
      },
      {
        id: "localWork",
        prompt: "¿Trabajará en Andorra?",
        options: [
          { value: "no", label: "Sin trabajo local" },
          { value: "yes", label: "Sí, por cuenta propia" },
          { value: "remote-foreign", label: "Solo a distancia, para una actividad extranjera" },
        ],
      },
      {
        id: "dependants",
        prompt: "¿Cuántas personas a cargo tomarían el mismo estatuto?",
        options: [
          { value: "0", label: "Ninguna" },
          { value: "1", label: "Una" },
          { value: "2", label: "Dos" },
          { value: "3", label: "Tres o más" },
        ],
      },
      {
        id: "capital",
        prompt: "¿Qué puede colocar en activos andorranos?",
        options: [
          { value: "under-400", label: "Menos de 400.000 €" },
          { value: "400-999", label: "De 400.000 € a menos de 1.000.000 €" },
          { value: "1000-plus", label: "1.000.000 € o más" },
          { value: "unstated", label: "Prefiero no decirlo" },
        ],
      },
      {
        id: "timeline",
        prompt: "¿Cuándo se mudaría?",
        options: [
          { value: "here", label: "Ya lo estoy tramitando" },
          { value: "under-6", label: "En seis meses" },
          { value: "6-18", label: "Entre seis y dieciocho meses" },
          { value: "exploring", label: "Estoy leyendo, no mudándome" },
        ],
      },
    ],
  },
};

export const conciergeCopy: Record<ConciergeLocale, ConciergeCopy> = { en, es };
