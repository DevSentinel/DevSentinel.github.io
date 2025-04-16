import { TimelineEvent } from '@/lib/types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'nazi-rise-to-power',
    title: 'Nazi Party Rises to Power in Germany',
    date: '1933-01-30',
    description: 'Adolf Hitler is appointed Chancellor of Germany, marking the beginning of Nazi rule.',
    longDescription: 'On January 30, 1933, Adolf Hitler was appointed Chancellor of Germany by President Paul von Hindenburg. This marked the beginning of the Nazi regime, which would soon transform Germany into a totalitarian state and set the stage for the Holocaust. Within weeks, civil liberties were suspended, and the Nazis began consolidating power through legal and extralegal means.',
    categories: ['holocaust', 'ww2'],
    location: 'Berlin, Germany',
    coordinates: {
      lat: 52.5200,
      lng: 13.4050
    },
    sources: [
      {
        title: 'The Rise and Fall of the Third Reich',
        author: 'William L. Shirer',
        year: 1960,
        citation: 'Shirer, W. L. (1960). The Rise and Fall of the Third Reich: A History of Nazi Germany. Simon & Schuster.'
      }
    ]
  },
  {
    id: 'nuremberg-laws',
    title: 'Nuremberg Laws Enacted',
    date: '1935-09-15',
    description: 'Germany passes the Nuremberg Laws, stripping Jews of citizenship and prohibiting marriages between Jews and non-Jews.',
    longDescription: 'The Nuremberg Laws, announced on September 15, 1935, at the annual Nazi Party rally in Nuremberg, institutionalized many of the racial theories prevalent in Nazi ideology. They excluded German Jews from Reich citizenship and prohibited them from marrying or having sexual relations with persons of "German or related blood." These laws marked a significant escalation in the Nazi persecution of Jews, providing a legal framework for their systematic persecution.',
    categories: ['holocaust'],
    location: 'Nuremberg, Germany',
    coordinates: {
      lat: 49.4521,
      lng: 11.0767
    },
    sources: [
      {
        title: 'The Holocaust: A History of the Jews of Europe During the Second World War',
        author: 'Martin Gilbert',
        year: 1985,
        citation: 'Gilbert, M. (1985). The Holocaust: A History of the Jews of Europe During the Second World War. Henry Holt and Company.'
      }
    ]
  },
  {
    id: 'ms-st-louis',
    title: 'MS St. Louis Denied Entry to Canada',
    date: '1939-06-07',
    description: 'Canada refuses entry to the MS St. Louis, a ship carrying 907 Jewish refugees fleeing Nazi Germany.',
    longDescription: 'In June 1939, the MS St. Louis, carrying 907 Jewish refugees from Nazi Germany, was denied entry to Cuba, the United States, and Canada. The Canadian government, under Prime Minister William Lyon Mackenzie King, refused to provide sanctuary to the passengers, reflecting the antisemitic immigration policies of the time. The ship was forced to return to Europe, where many passengers later perished in the Holocaust. This incident exemplifies Canada\'s restrictive "None is Too Many" immigration policy toward Jewish refugees during this period.',
    categories: ['holocaust', 'canada-policy', 'canada-response'],
    location: 'Halifax, Canada',
    coordinates: {
      lat: 44.6488,
      lng: -63.5752
    },
    sources: [
      {
        title: 'None is Too Many: Canada and the Jews of Europe, 1933-1948',
        author: 'Irving Abella and Harold Troper',
        year: 1982,
        citation: 'Abella, I., & Troper, H. (1982). None is Too Many: Canada and the Jews of Europe, 1933-1948. University of Toronto Press.'
      }
    ]
  },
  {
    id: 'kristallnacht',
    title: 'Kristallnacht (Night of Broken Glass)',
    date: '1938-11-09',
    endDate: '1938-11-10',
    description: 'Coordinated attacks against Jews throughout Nazi Germany and Austria, destroying synagogues, Jewish businesses, and homes.',
    longDescription: 'Kristallnacht, or the "Night of Broken Glass," was a pogrom against Jews carried out by the Nazi Party\'s paramilitary forces and German civilians on November 9-10, 1938. The name refers to the shattered glass that littered the streets after Jewish-owned stores, buildings, and synagogues had their windows smashed. Over 250 synagogues were burned, over 7,000 Jewish businesses were damaged or destroyed, and dozens of Jewish people were killed. The event marked an escalation from economic, political, and social discrimination to physical violence and is often considered the beginning of the Holocaust.',
    categories: ['holocaust'],
    location: 'Berlin, Germany',
    coordinates: {
      lat: 52.5200,
      lng: 13.4050
    },
    sources: [
      {
        title: 'Kristallnacht: Prelude to Destruction',
        author: 'Martin Gilbert',
        year: 2006,
        citation: 'Gilbert, M. (2006). Kristallnacht: Prelude to Destruction. HarperCollins.'
      }
    ]
  },
  {
    id: 'canada-declares-war',
    title: 'Canada Declares War on Germany',
    date: '1939-09-10',
    description: 'Canada declares war on Germany, one week after the United Kingdom.',
    longDescription: 'On September 10, 1939, Canada declared war on Nazi Germany, following Britain\'s declaration of war by one week. This marked Canada\'s entry into World War II. Unlike in World War I, when Canada automatically entered the war when Britain did, the Canadian Parliament made its own declaration of war in 1939, signifying Canada\'s growing independence. Despite this independence, Canada maintained restrictive immigration policies that limited Jewish refugee admissions throughout the war.',
    categories: ['ww2', 'canada-response'],
    location: 'Ottawa, Canada',
    coordinates: {
      lat: 45.4215,
      lng: -75.6972
    },
    sources: [
      {
        title: 'Canada and the Two World Wars',
        author: 'C.P. Stacey',
        year: 1987,
        citation: 'Stacey, C.P. (1987). Canada and the Two World Wars. University of Toronto Press.'
      }
    ]
  },
  {
    id: 'wannsee-conference',
    title: 'Wannsee Conference',
    date: '1942-01-20',
    description: 'Nazi officials meet to coordinate the implementation of the "Final Solution to the Jewish Question."',
    longDescription: 'On January 20, 1942, senior Nazi officials met at a villa in the Berlin suburb of Wannsee to discuss and coordinate the implementation of the "Final Solution to the Jewish Question" - the plan to systematically murder all Jews in Europe. The meeting, chaired by Reinhard Heydrich, did not initiate the Holocaust (mass killings had already begun), but it formalized the plan and coordinated the efforts of various government departments in the genocide. The conference marked a crucial step in the transition from persecution to systematic extermination.',
    categories: ['holocaust'],
    location: 'Berlin, Germany',
    coordinates: {
      lat: 52.4331,
      lng: 13.1643
    },
    sources: [
      {
        title: 'The Wannsee Conference and the Final Solution: A Reconsideration',
        author: 'Mark Roseman',
        year: 2002,
        citation: 'Roseman, M. (2002). The Wannsee Conference and the Final Solution: A Reconsideration. Metropolitan Books.'
      }
    ]
  },
  {
    id: 'liberation-auschwitz',
    title: 'Liberation of Auschwitz',
    date: '1945-01-27',
    description: 'Soviet forces liberate the Auschwitz-Birkenau concentration and death camp complex.',
    longDescription: 'On January 27, 1945, Soviet forces liberated the Auschwitz-Birkenau concentration and death camp complex, discovering approximately 7,000 prisoners who had been left behind when the Nazis evacuated the camp. Auschwitz was the largest Nazi concentration and death camp, where more than 1.1 million people, primarily Jews, were murdered. The liberation revealed the full horror of the Nazi genocide to the world, although reports had been circulating earlier. January 27 is now commemorated as International Holocaust Remembrance Day.',
    categories: ['holocaust', 'ww2'],
    location: 'Oświęcim, Poland',
    coordinates: {
      lat: 50.0343,
      lng: 19.1779
    },
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
    id: 'war-refugee-board',
    title: 'War Refugee Board Established',
    date: '1944-01-22',
    description: 'U.S. President Roosevelt establishes the War Refugee Board to aid civilian victims of the Nazis.',
    longDescription: 'On January 22, 1944, U.S. President Franklin D. Roosevelt established the War Refugee Board (WRB) by executive order. The WRB was created to aid civilian victims of Nazi persecution, particularly Jews. It represented a significant shift in American policy toward Holocaust victims. The WRB helped save approximately 200,000 Jews and 20,000 non-Jews by various means, including facilitating their escape, providing relief, and establishing temporary havens. Canada did not establish a similar organization, maintaining its restrictive refugee policies until after the war.',
    categories: ['holocaust', 'ww2'],
    location: 'Washington, D.C., United States',
    coordinates: {
      lat: 38.8951,
      lng: -77.0364
    },
    sources: [
      {
        title: 'Abandonment of the Jews: America and the Holocaust 1941-1945',
        author: 'David S. Wyman',
        year: 1984,
        citation: 'Wyman, D.S. (1984). The Abandonment of the Jews: America and the Holocaust 1941-1945. Pantheon Books.'
      }
    ]
  },
  {
    id: 'canada-postwar-immigration',
    title: 'Canada Opens Immigration to Holocaust Survivors',
    date: '1947-05-01',
    description: 'Canada begins accepting Jewish Holocaust survivors as immigrants, ending its restrictive pre-war policies.',
    longDescription: 'In 1947, Canada began to change its immigration policies, allowing Jewish Holocaust survivors to immigrate to the country. This marked a significant shift from the pre-war and wartime "None is Too Many" policy that had severely restricted Jewish immigration. Between 1947 and 1955, approximately 35,000 Holocaust survivors settled in Canada, primarily in Montreal, Toronto, and Winnipeg. These survivors and their descendants have made significant contributions to Canadian society, culture, and economy.',
    categories: ['post-war', 'canada-policy', 'survivor-stories'],
    location: 'Ottawa, Canada',
    coordinates: {
      lat: 45.4215,
      lng: -75.6972
    },
    sources: [
      {
        title: 'None is Too Many: Canada and the Jews of Europe, 1933-1948',
        author: 'Irving Abella and Harold Troper',
        year: 1982,
        citation: 'Abella, I., & Troper, H. (1982). None is Too Many: Canada and the Jews of Europe, 1933-1948. University of Toronto Press.'
      }
    ]
  },
  {
    id: 'montreal-tailor-project',
    title: 'Tailor Project Brings Survivors to Canada',
    date: '1948-03-15',
    endDate: '1949-12-31',
    description: 'The Tailor Project brings approximately 2,500 skilled Jewish tailors and their families from displaced persons camps to Canada.',
    longDescription: 'The Tailor Project, also known as the Garment Workers Scheme, was a targeted immigration program that brought approximately 2,500 skilled Jewish tailors and their families from displaced persons camps in Europe to Canada between 1948 and 1949. Led by the Canadian Jewish Congress and the Jewish Labor Committee, with support from the Canadian garment industry, the project circumvented Canada\'s still restrictive immigration policies by emphasizing the economic benefits of bringing skilled workers to Canada. It represented one of the first organized efforts to bring Holocaust survivors to Canada and helped establish Jewish communities in cities like Montreal and Toronto.',
    categories: ['post-war', 'canada-policy', 'survivor-stories'],
    location: 'Montreal, Canada',
    coordinates: {
      lat: 45.5017,
      lng: -73.5673
    },
    sources: [
      {
        title: 'Coming to Canada: A History of Immigration and Ethnicity in Canada',
        author: 'Roger Riendeau',
        year: 2007,
        citation: 'Riendeau, R. (2007). Coming to Canada: A History of Immigration and Ethnicity in Canada. Oxford University Press.'
      }
    ]
  }
];

export default timelineEvents;
