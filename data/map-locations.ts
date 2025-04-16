import { MapLocation } from '@/lib/types';

export const mapLocations: MapLocation[] = [
  {
    id: 'auschwitz',
    name: 'Auschwitz-Birkenau',
    description: 'The largest Nazi concentration and death camp complex',
    longDescription: 'Auschwitz-Birkenau was the largest Nazi concentration and extermination camp complex, consisting of Auschwitz I (the main camp), Auschwitz II-Birkenau (the extermination camp), and Auschwitz III-Monowitz (a labor camp). Located in German-occupied Poland, it operated from May 1940 until January 1945. More than 1.1 million people, primarily Jews, were murdered at Auschwitz-Birkenau, making it the deadliest of all Nazi death camps. Today, the site serves as a museum and memorial to the victims of the Holocaust.',
    categories: ['death-camp', 'concentration-camp', 'memorial', 'museum'],
    coordinates: {
      lat: 50.0343,
      lng: 19.1779
    },
    country: 'Poland',
    yearEstablished: 1940,
    yearClosed: 1945,
    sources: [
      {
        title: 'Auschwitz: A New History',
        author: 'Laurence Rees',
        year: 2005,
        citation: 'Rees, L. (2005). Auschwitz: A New History. PublicAffairs.'
      }
    ]
  },
  {
    id: 'treblinka',
    name: 'Treblinka',
    description: 'Nazi death camp in occupied Poland where approximately 900,000 Jews were murdered',
    longDescription: 'Treblinka was an extermination camp built and operated by Nazi Germany in occupied Poland during World War II. It operated between July 1942 and October 1943 as part of Operation Reinhard, the deadliest phase of the Holocaust. During this time, approximately 900,000 Jews were murdered at Treblinka, along with an unknown number of Romani people and Poles. The camp was dismantled by the Nazis in an attempt to hide evidence of the mass killings. Today, a memorial consisting of 17,000 stones symbolizes the Jewish communities destroyed in the Holocaust.',
    categories: ['death-camp', 'memorial'],
    coordinates: {
      lat: 52.6293,
      lng: 22.0583
    },
    country: 'Poland',
    yearEstablished: 1942,
    yearClosed: 1943,
    sources: [
      {
        title: 'Belzec, Sobibor, Treblinka: The Operation Reinhard Death Camps',
        author: 'Yitzhak Arad',
        year: 1987,
        citation: 'Arad, Y. (1987). Belzec, Sobibor, Treblinka: The Operation Reinhard Death Camps. Indiana University Press.'
      }
    ]
  },
  {
    id: 'warsaw-ghetto',
    name: 'Warsaw Ghetto',
    description: 'Largest Jewish ghetto established by Nazi Germany during the Holocaust',
    longDescription: 'The Warsaw Ghetto was the largest of the Jewish ghettos established by Nazi Germany during the Holocaust. It was established in the Polish capital Warsaw in October 1940 and sealed off from the rest of the city in November 1940. At its height, as many as 460,000 Jews were imprisoned in the 3.4 km² area, with an average of 9.2 persons per room. The ghetto was the site of the Warsaw Ghetto Uprising in 1943, the largest single act of Jewish resistance during the Holocaust. Most of the ghetto\'s residents who survived the uprising were transported to concentration and extermination camps.',
    categories: ['ghetto', 'memorial'],
    coordinates: {
      lat: 52.2476,
      lng: 20.9958
    },
    country: 'Poland',
    yearEstablished: 1940,
    yearClosed: 1943,
    sources: [
      {
        title: 'The Warsaw Ghetto: A Guide to the Perished City',
        author: 'Barbara Engelking and Jacek Leociak',
        year: 2009,
        citation: 'Engelking, B., & Leociak, J. (2009). The Warsaw Ghetto: A Guide to the Perished City. Yale University Press.'
      }
    ]
  },
  {
    id: 'montreal-holocaust-museum',
    name: 'Montreal Holocaust Museum',
    description: 'Canada\'s first Holocaust museum, dedicated to educating people about the Holocaust and genocide',
    longDescription: 'The Montreal Holocaust Museum (formerly the Montreal Holocaust Memorial Centre) was founded in 1979 by a group of Holocaust survivors, and opened its doors to the public in 1979. It was Canada\'s first Holocaust museum and remains a vital educational institution. The museum houses an extensive collection of artifacts, photographs, documents, and audiovisual testimonies related to the Holocaust. Its permanent exhibition tells the story of the Holocaust through the experiences of Montreal survivors. The museum also offers educational programs, commemorative events, and resources for teachers and students.',
    categories: ['museum', 'memorial', 'canadian-connection'],
    coordinates: {
      lat: 45.4946,
      lng: -73.6387
    },
    country: 'Canada',
    yearEstablished: 1979,
    sources: [
      {
        title: 'Montreal Holocaust Museum',
        url: 'https://museeholocauste.ca/en/',
        accessDate: '2025-04-08',
        citation: 'Montreal Holocaust Museum. (n.d.). Retrieved April 8, 2025, from https://museeholocauste.ca/en/'
      }
    ]
  },
  {
    id: 'vancouver-holocaust-education-centre',
    name: 'Vancouver Holocaust Education Centre',
    description: 'Western Canada\'s leading Holocaust education institution',
    longDescription: 'The Vancouver Holocaust Education Centre (VHEC) is Western Canada\'s leading Holocaust education institution. Established in 1994 and operated by the Vancouver Holocaust Centre Society, the VHEC engages approximately 25,000 students and teachers annually. The Centre\'s exhibits, educational programs, and resources focus on the Holocaust, antisemitism, racism, human rights, and social justice. The VHEC also houses Western Canada\'s largest collection of Holocaust-related artifacts, survivor testimonies, and archival materials, which serve as essential resources for research, education, and commemoration.',
    categories: ['museum', 'memorial', 'canadian-connection'],
    coordinates: {
      lat: 49.2634,
      lng: -123.1396
    },
    country: 'Canada',
    yearEstablished: 1994,
    sources: [
      {
        title: 'Vancouver Holocaust Education Centre',
        url: 'https://www.vhec.org/',
        accessDate: '2025-04-08',
        citation: 'Vancouver Holocaust Education Centre. (n.d.). Retrieved April 8, 2025, from https://www.vhec.org/'
      }
    ]
  },
  {
    id: 'pier-21-halifax',
    name: 'Pier 21 - Canadian Museum of Immigration',
    description: 'Historic gateway where many Holocaust survivors first entered Canada',
    longDescription: 'Pier 21 in Halifax, Nova Scotia, served as Canada\'s primary immigration entry point from 1928 to 1971. Following World War II, it became the gateway for thousands of Holocaust survivors who came to Canada to rebuild their lives. Between 1947 and 1955, approximately 35,000 Holocaust survivors immigrated to Canada, many of them passing through Pier 21. Today, the site houses the Canadian Museum of Immigration, which preserves and shares the stories of immigrants to Canada, including Holocaust survivors. The museum includes exhibits, archives, and an oral history collection that documents the experiences of those who passed through its doors.',
    categories: ['memorial', 'museum', 'canadian-connection'],
    coordinates: {
      lat: 44.6367,
      lng: -63.5714
    },
    country: 'Canada',
    yearEstablished: 1928,
    yearClosed: 1971,
    sources: [
      {
        title: 'Canadian Museum of Immigration at Pier 21',
        url: 'https://pier21.ca/',
        accessDate: '2025-04-08',
        citation: 'Canadian Museum of Immigration at Pier 21. (n.d.). Retrieved April 8, 2025, from https://pier21.ca/'
      }
    ]
  },
  {
    id: 'kielce-pogrom',
    name: 'Kielce Pogrom Site',
    description: 'Location of the deadliest post-Holocaust pogrom in Poland, which influenced Jewish emigration to Canada',
    longDescription: 'The Kielce Pogrom was an outbreak of violence against the Jewish community in the Polish city of Kielce on July 4, 1946. It was the deadliest pogrom in post-World War II Poland, resulting in the murder of 42 Jews and wounding of over 40 others. The pogrom was sparked by false accusations of ritual murder and child kidnapping. This event, along with other instances of post-war antisemitism in Europe, accelerated Jewish emigration from Poland, with many survivors seeking refuge in countries like Canada. The pogrom site now contains a memorial plaque, and the event is commemorated annually.',
    categories: ['memorial', 'canadian-connection'],
    coordinates: {
      lat: 50.8724,
      lng: 20.6282
    },
    country: 'Poland',
    yearEstablished: 1946,
    sources: [
      {
        title: 'Fear: Anti-Semitism in Poland After Auschwitz',
        author: 'Jan T. Gross',
        year: 2006,
        citation: 'Gross, J. T. (2006). Fear: Anti-Semitism in Poland After Auschwitz. Random House.'
      }
    ]
  },
  {
    id: 'bergen-belsen',
    name: 'Bergen-Belsen',
    description: 'Nazi concentration camp where many future Canadian immigrants were liberated',
    longDescription: 'Bergen-Belsen was a Nazi concentration camp in northern Germany, established in 1940. Initially a prisoner-of-war camp, it later became a concentration camp and was used as a collection center for survivors of death marches. The camp was liberated by British forces on April 15, 1945, who found over 60,000 prisoners, most of them seriously ill. Among the survivors were many Jews who would later immigrate to Canada. Anne Frank and her sister Margot died at Bergen-Belsen in February or March 1945. Today, the site includes a memorial and a documentation center that chronicles the history of the camp and commemorates its victims.',
    categories: ['concentration-camp', 'memorial', 'museum', 'canadian-connection'],
    coordinates: {
      lat: 52.7585,
      lng: 9.9083
    },
    country: 'Germany',
    yearEstablished: 1940,
    yearClosed: 1945,
    sources: [
      {
        title: 'Belsen: The Liberation of a Concentration Camp',
        author: 'Joanne Reilly',
        year: 1998,
        citation: 'Reilly, J. (1998). Belsen: The Liberation of a Concentration Camp. Routledge.'
      }
    ]
  },
  {
    id: 'national-holocaust-monument-ottawa',
    name: 'National Holocaust Monument',
    description: 'Canada\'s national monument dedicated to the victims and survivors of the Holocaust',
    longDescription: 'The National Holocaust Monument in Ottawa, inaugurated in 2017, is Canada\'s national memorial to the six million Jews murdered during the Holocaust and the millions of other victims of Nazi Germany and its collaborators. The monument, designed by team led by Gail Dexter-Lord, features six triangular concrete volumes arranged to create the points of a star—the star that Jews were forced to wear during the Holocaust. The monument includes interpretive panels that tell the story of the Holocaust, Canada\'s response to Jewish refugees, and the contributions Holocaust survivors have made to Canada. It serves as a place of remembrance, reflection, and education.',
    categories: ['memorial', 'canadian-connection'],
    coordinates: {
      lat: 45.4215,
      lng: -75.7106
    },
    country: 'Canada',
    yearEstablished: 2017,
    sources: [
      {
        title: 'National Holocaust Monument',
        url: 'https://www.ncc-ccn.gc.ca/places/national-holocaust-monument',
        accessDate: '2025-04-08',
        citation: 'National Capital Commission. (n.d.). National Holocaust Monument. Retrieved April 8, 2025, from https://www.ncc-ccn.gc.ca/places/national-holocaust-monument'
      }
    ]
  },
  {
    id: 'kensington-market-toronto',
    name: 'Kensington Market',
    description: 'Historic Toronto neighborhood where many Holocaust survivors settled after World War II',
    longDescription: 'Kensington Market in Toronto has been a gateway for immigrants to Canada for over a century. Following World War II, it became home to many Holocaust survivors, particularly Jewish refugees from Eastern Europe. These survivors established businesses, synagogues, and cultural institutions that transformed the neighborhood. While the Jewish population has largely moved to other areas of Toronto since the 1960s, the market retains traces of its Jewish heritage. Today, Kensington Market is recognized as a National Historic Site of Canada and continues to be a vibrant, multicultural neighborhood that reflects Canada\'s immigrant history.',
    categories: ['canadian-connection'],
    coordinates: {
      lat: 43.6545,
      lng: -79.4004
    },
    country: 'Canada',
    sources: [
      {
        title: 'Kensington Market: Collective Memory, Public History, and Toronto\'s Urban Landscape',
        author: 'Na Li',
        year: 2015,
        citation: 'Li, N. (2015). Kensington Market: Collective Memory, Public History, and Toronto\'s Urban Landscape. University of Toronto Press.'
      }
    ]
  }
];

export default mapLocations;
