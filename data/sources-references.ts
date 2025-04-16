interface SourceCategory {
  id: string;
  name: string;
}

export interface Reference {
  id: string;
  title: string;
  author?: string;
  publication?: string;
  year?: number;
  url?: string;
  description?: string;
  categories: string[];
  citation: string;
}

const sourceCategories: SourceCategory[] = [
  { id: 'primary', name: 'Primary Sources' },
  { id: 'secondary', name: 'Secondary Sources' },
  { id: 'academic', name: 'Academic Research' },
  { id: 'canadian', name: 'Canadian Sources' },
  { id: 'memorial', name: 'Memorial Institutions' },
  { id: 'testimonies', name: 'Survivor Testimonies' },
  { id: 'digital', name: 'Digital Archives' }
];

const references: Reference[] = [
  {
    id: 'ref-1',
    title: 'None Is Too Many: Canada and the Jews of Europe, 1933-1948',
    author: 'Irving Abella and Harold Troper',
    publication: 'University of Toronto Press',
    year: 1982,
    description: 'A landmark study of Canadian immigration policy and its impact on Jewish refugees during the Holocaust era.',
    categories: ['secondary', 'canadian', 'academic'],
    citation: 'Abella, I., & Troper, H. (1982). None Is Too Many: Canada and the Jews of Europe, 1933-1948. University of Toronto Press.'
  },
  {
    id: 'ref-2',
    title: 'The Holocaust: A New History',
    author: 'Laurence Rees',
    publication: 'PublicAffairs',
    year: 2017,
    description: 'A comprehensive history of the Holocaust, incorporating the latest historical research and survivor testimonies.',
    categories: ['secondary', 'academic'],
    citation: 'Rees, L. (2017). The Holocaust: A New History. PublicAffairs.'
  },
  {
    id: 'ref-3',
    title: 'United States Holocaust Memorial Museum',
    url: 'https://www.ushmm.org/',
    description: 'The official website of the United States Holocaust Memorial Museum, offering extensive resources, exhibits, and educational materials.',
    categories: ['digital', 'memorial'],
    citation: 'United States Holocaust Memorial Museum. (n.d.). Retrieved from https://www.ushmm.org/'
  },
  {
    id: 'ref-4',
    title: 'Yad Vashem: The World Holocaust Remembrance Center',
    url: 'https://www.yadvashem.org/',
    description: 'Israel\'s official memorial to the victims of the Holocaust, dedicated to preserving the memory of the dead and honoring Jews who fought against their Nazi oppressors.',
    categories: ['digital', 'memorial'],
    citation: 'Yad Vashem: The World Holocaust Remembrance Center. (n.d.). Retrieved from https://www.yadvashem.org/'
  },
  {
    id: 'ref-5',
    title: 'Montreal Holocaust Museum',
    url: 'https://museeholocauste.ca/en/',
    description: 'The Montreal Holocaust Museum educates people of all ages and backgrounds about the Holocaust, while sensitizing the public to the universal perils of antisemitism, racism, hate and indifference.',
    categories: ['digital', 'memorial', 'canadian'],
    citation: 'Montreal Holocaust Museum. (n.d.). Retrieved from https://museeholocauste.ca/en/'
  },
  {
    id: 'ref-6',
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    year: 1947,
    description: 'The diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.',
    categories: ['primary', 'testimonies'],
    citation: 'Frank, A. (1947). The Diary of a Young Girl. Contact Publishing.'
  },
  {
    id: 'ref-7',
    title: 'Night',
    author: 'Elie Wiesel',
    publication: 'Hill & Wang',
    year: 1960,
    description: 'A memoir by Holocaust survivor Elie Wiesel based on his experiences in the Auschwitz and Buchenwald concentration camps.',
    categories: ['primary', 'testimonies'],
    citation: 'Wiesel, E. (1960). Night. Hill & Wang.'
  },
  {
    id: 'ref-8',
    title: 'The Holocaust in Canada: Educational Resources',
    author: 'Canadian Museum for Human Rights',
    url: 'https://humanrights.ca/education/educational-resources',
    description: 'Educational materials focusing on Canada\'s connection to the Holocaust, including refugee policies, survivors\' stories, and commemoration efforts.',
    categories: ['digital', 'canadian', 'memorial'],
    citation: 'Canadian Museum for Human Rights. (n.d.). The Holocaust in Canada: Educational Resources. Retrieved from https://humanrights.ca/education/educational-resources'
  },
  {
    id: 'ref-9',
    title: 'USC Shoah Foundation Visual History Archive',
    url: 'https://sfi.usc.edu/vha',
    description: 'The USC Shoah Foundation Visual History Archive contains over 55,000 video testimonies of survivors and witnesses of the Holocaust and other genocides.',
    categories: ['digital', 'testimonies'],
    citation: 'USC Shoah Foundation. (n.d.). Visual History Archive. Retrieved from https://sfi.usc.edu/vha'
  },
  {
    id: 'ref-10',
    title: 'The Path to Nazi Genocide',
    author: 'United States Holocaust Memorial Museum',
    url: 'https://www.ushmm.org/learn/holocaust/path-to-nazi-genocide',
    description: 'A documentary examining the Nazis\' rise to power and the path to genocide, providing crucial historical context for understanding the Holocaust.',
    categories: ['digital', 'memorial'],
    citation: 'United States Holocaust Memorial Museum. (n.d.). The Path to Nazi Genocide. Retrieved from https://www.ushmm.org/learn/holocaust/path-to-nazi-genocide'
  },
  {
    id: 'ref-11',
    title: 'Canada and the Holocaust',
    author: 'The Canadian Encyclopedia',
    url: 'https://www.thecanadianencyclopedia.ca/en/article/holocaust',
    year: 2020,
    description: 'An overview of Canada\'s connections to the Holocaust, including immigration policies, refugee responses, and post-war developments.',
    categories: ['secondary', 'canadian', 'digital'],
    citation: 'The Canadian Encyclopedia. (2020). Canada and the Holocaust. Retrieved from https://www.thecanadianencyclopedia.ca/en/article/holocaust'
  },
  {
    id: 'ref-12',
    title: 'Auschwitz-Birkenau Memorial and Museum',
    url: 'http://www.auschwitz.org/en/',
    description: 'The official website of the Auschwitz-Birkenau Memorial and Museum, preserving the site of the former Nazi German concentration and extermination camp.',
    categories: ['digital', 'memorial'],
    citation: 'Auschwitz-Birkenau Memorial and Museum. (n.d.). Retrieved from http://www.auschwitz.org/en/'
  }
];

export { sourceCategories, references };
