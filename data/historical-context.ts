import { HistoricalContext } from '@/lib/types';

const historicalContext: HistoricalContext[] = [
  {
    id: 'context-1',
    title: 'Rise of Nazi Germany',
    period: '1933-1939',
    description: 'After Adolf Hitler was appointed Chancellor of Germany in January 1933, the Nazi party began to consolidate power and transform Germany into a totalitarian state. The Nuremberg Laws of 1935 stripped Jews of their citizenship and civil rights, marking a significant escalation in persecution.',
    keyEvents: [
      {
        year: 1933,
        event: 'Hitler appointed Chancellor of Germany; Dachau concentration camp established'
      },
      {
        year: 1935,
        event: 'Nuremberg Laws enacted, stripping Jews of German citizenship'
      },
      {
        year: 1938,
        event: 'Kristallnacht (Night of Broken Glass) - organized violence against Jews throughout Germany'
      }
    ],
    imageUrl: '/images/context/nazi-rise.jpg',
    relatedMapLocations: ['berlin', 'nuremberg', 'dachau']
  },
  {
    id: 'context-2',
    title: 'World War II and the Holocaust',
    period: '1939-1945',
    description: 'World War II began with Germany\'s invasion of Poland in September 1939. As Nazi Germany conquered territories across Europe, millions of Jews were forced into ghettos and concentration camps. The systematic murder of Jews and other targeted groups intensified with the implementation of the "Final Solution" in 1941-1942.',
    keyEvents: [
      {
        year: 1939,
        event: 'Germany invades Poland, beginning World War II'
      },
      {
        year: 1941,
        event: 'Mass shootings by Einsatzgruppen in Eastern Europe; first use of gas chambers'
      },
      {
        year: 1942,
        event: 'Wannsee Conference formalizes plans for the "Final Solution"'
      },
      {
        year: 1943,
        event: 'Warsaw Ghetto Uprising'
      }
    ],
    imageUrl: '/images/context/world-war-ii.jpg',
    relatedMapLocations: ['auschwitz', 'warsaw', 'treblinka']
  },
  {
    id: 'context-3',
    title: 'Canada and the Holocaust',
    period: '1933-1948',
    description: 'Canada\'s response to the Holocaust was marked by restrictive immigration policies that prevented many Jewish refugees from finding safety. The phrase "None is too many" reflected the government\'s attitude toward Jewish immigration. After the war, Canada\'s policies slowly changed, eventually allowing Holocaust survivors to immigrate.',
    keyEvents: [
      {
        year: 1939,
        event: 'Canada turns away the MS St. Louis carrying Jewish refugees'
      },
      {
        year: 1940,
        event: 'Internment of Jewish refugees as "enemy aliens" in Canada'
      },
      {
        year: 1947,
        event: 'Canadian immigration policies begin to change, allowing some Holocaust survivors entry'
      }
    ],
    imageUrl: '/images/context/canada-holocaust.jpg',
    relatedMapLocations: ['montreal', 'toronto', 'halifax']
  },
  {
    id: 'context-4',
    title: 'Liberation and Aftermath',
    period: '1944-1948',
    description: 'As Allied forces advanced across Europe, they liberated concentration camps, revealing the full horror of the Holocaust. The Nuremberg Trials held Nazi leaders accountable for war crimes and crimes against humanity. The establishment of Israel in 1948 provided a homeland for many Jewish survivors.',
    keyEvents: [
      {
        year: 1944,
        event: 'Soviet forces liberate Majdanek concentration camp'
      },
      {
        year: 1945,
        event: 'Liberation of Auschwitz by Soviet forces; British forces liberate Bergen-Belsen'
      },
      {
        year: 1945,
        event: 'Nuremberg Trials begin'
      },
      {
        year: 1948,
        event: 'Establishment of the State of Israel'
      }
    ],
    imageUrl: '/images/context/liberation.jpg',
    relatedMapLocations: ['auschwitz', 'bergen-belsen', 'nuremberg']
  },
  {
    id: 'context-5',
    title: 'Holocaust Remembrance',
    period: '1945-Present',
    description: 'Holocaust remembrance efforts ensure that the genocide is not forgotten and that its lessons are passed to future generations. Museums, memorials, and educational programs around the world, including in Canada, preserve the memory of victims and promote understanding of the Holocaust\'s causes and consequences.',
    keyEvents: [
      {
        year: 1953,
        event: 'Yad Vashem established in Israel'
      },
      {
        year: 1993,
        event: 'United States Holocaust Memorial Museum opens in Washington, DC'
      },
      {
        year: 2005,
        event: 'United Nations designates January 27 as International Holocaust Remembrance Day'
      },
      {
        year: 2019,
        event: 'National Holocaust Monument dedicated in Ottawa, Canada'
      }
    ],
    imageUrl: '/images/context/remembrance.jpg',
    relatedMapLocations: ['jerusalem', 'washington', 'ottawa']
  }
];

export default historicalContext;
