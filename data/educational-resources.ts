import { EducationalResource } from '@/lib/types';

const educationalResources: EducationalResource[] = [
  {
    id: 'resource-1',
    title: 'The Holocaust: A History of the Jews of Europe During the Second World War',
    type: 'book',
    author: 'Martin Gilbert',
    year: 1985,
    description: 'A comprehensive account of the Holocaust, detailing the systematic murder of European Jews by Nazi Germany.',
    level: 'Advanced',
    imageUrl: '/images/resources/book-gilbert.jpg',
    tags: ['Holocaust Overview', 'Historical Account', 'European History'],
    url: 'https://www.amazon.com/Holocaust-History-Europe-During-Second/dp/0805003487'
  },
  {
    id: 'resource-2',
    title: 'Night',
    type: 'book',
    author: 'Elie Wiesel',
    year: 1956,
    description: 'A memoir by Holocaust survivor Elie Wiesel based on his experiences in the Auschwitz and Buchenwald concentration camps.',
    level: 'Intermediate',
    imageUrl: '/images/resources/book-night.jpg',
    tags: ['Personal Account', 'Memoir', 'Concentration Camps'],
    url: 'https://www.amazon.com/Night-Elie-Wiesel/dp/0374500010'
  },
  {
    id: 'resource-3',
    title: 'Shoah',
    type: 'video',
    author: 'Claude Lanzmann',
    year: 1985,
    description: 'A nine-hour documentary film about the Holocaust, featuring interviews with survivors, witnesses, and perpetrators.',
    level: 'Advanced',
    imageUrl: '/images/resources/video-shoah.jpg',
    tags: ['Documentary', 'Testimonies', 'Historical Footage'],
    url: 'https://www.criterion.com/films/27968-shoah'
  },
  {
    id: 'resource-4',
    title: 'The Diary of a Young Girl',
    type: 'book',
    author: 'Anne Frank',
    year: 1947,
    description: 'The diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.',
    level: 'Beginner',
    imageUrl: '/images/resources/book-anne-frank.jpg',
    tags: ['Personal Account', 'Diary', 'Jewish Persecution'],
    url: 'https://www.amazon.com/Diary-Young-Girl-Anne-Frank/dp/0553577123'
  },
  {
    id: 'resource-5',
    title: 'United States Holocaust Memorial Museum',
    type: 'website',
    description: 'Official website of the United States Holocaust Memorial Museum, offering extensive resources, exhibits, and educational materials.',
    level: 'All Levels',
    imageUrl: '/images/resources/website-ushmm.jpg',
    tags: ['Museum', 'Educational Resources', 'Research'],
    url: 'https://www.ushmm.org/'
  },
  {
    id: 'resource-6',
    title: 'Yad Vashem: The World Holocaust Remembrance Center',
    type: 'website',
    description: 'Israel\'s official memorial to the victims of the Holocaust, dedicated to preserving the memory of the dead and honoring Jews who fought against their Nazi oppressors.',
    level: 'All Levels',
    imageUrl: '/images/resources/website-yad-vashem.jpg',
    tags: ['Memorial', 'Archives', 'Research'],
    url: 'https://www.yadvashem.org/'
  },
  {
    id: 'resource-7',
    title: 'Schindler\'s List',
    type: 'video',
    author: 'Steven Spielberg',
    year: 1993,
    description: 'A historical drama film that depicts the story of Oskar Schindler, a German businessman who saved the lives of more than a thousand mostly Polish-Jewish refugees during the Holocaust.',
    level: 'Intermediate',
    imageUrl: '/images/resources/video-schindlers-list.jpg',
    tags: ['Film', 'Historical Drama', 'Rescue Efforts'],
    url: 'https://www.imdb.com/title/tt0108052/'
  },
  {
    id: 'resource-8',
    title: 'The Holocaust in Canada: Educational Resources',
    type: 'article',
    author: 'Canadian Museum for Human Rights',
    description: 'Educational materials focusing on Canada\'s connection to the Holocaust, including refugee policies, survivors\' stories, and commemoration efforts.',
    level: 'Intermediate',
    imageUrl: '/images/resources/article-canada-holocaust.jpg',
    tags: ['Canadian History', 'Educational Resources', 'Refugee Policies'],
    url: 'https://humanrights.ca/education/educational-resources'
  },
  {
    id: 'resource-9',
    title: 'The Path to Nazi Genocide',
    type: 'video',
    author: 'United States Holocaust Memorial Museum',
    description: 'A documentary examining the Nazis\' rise to power and the path to genocide, providing crucial historical context for understanding the Holocaust.',
    level: 'Beginner',
    imageUrl: '/images/resources/video-path-to-genocide.jpg',
    tags: ['Documentary', 'Nazi Rise', 'Historical Context'],
    url: 'https://www.ushmm.org/learn/holocaust/path-to-nazi-genocide'
  },
  {
    id: 'resource-10',
    title: 'Holocaust Encyclopedia',
    type: 'website',
    description: 'A comprehensive online encyclopedia with articles, photographs, maps, artifacts, and personal stories about the Holocaust.',
    level: 'All Levels',
    imageUrl: '/images/resources/website-holocaust-encyclopedia.jpg',
    tags: ['Encyclopedia', 'Research', 'Educational Resources'],
    url: 'https://encyclopedia.ushmm.org/'
  },
  {
    id: 'resource-11',
    title: 'Maus',
    type: 'book',
    author: 'Art Spiegelman',
    year: 1991,
    description: 'A graphic novel depicting the author\'s father\'s experiences as a Polish Jew and Holocaust survivor, with Jews depicted as mice and Germans as cats.',
    level: 'Intermediate',
    imageUrl: '/images/resources/book-maus.jpg',
    tags: ['Graphic Novel', 'Personal Account', 'Artistic Representation'],
    url: 'https://www.amazon.com/Complete-Maus-Art-Spiegelman/dp/0679406417'
  },
  {
    id: 'resource-12',
    title: 'Canada and the Holocaust: The Refugee Crisis',
    type: 'article',
    author: 'Irving Abella and Harold Troper',
    year: 1982,
    description: 'An examination of Canada\'s restrictive immigration policies during the Holocaust and the impact on Jewish refugees seeking safety.',
    level: 'Advanced',
    imageUrl: '/images/resources/article-canada-refugees.jpg',
    tags: ['Canadian History', 'Immigration Policy', 'Refugee Crisis'],
    url: 'https://www.thecanadianencyclopedia.ca/en/article/holocaust'
  }
];

export default educationalResources;
