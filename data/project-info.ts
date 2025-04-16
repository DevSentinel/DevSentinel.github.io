interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
}

interface ProjectInfo {
  title: string;
  description: string;
  mission: string;
  goals: string[];
  team: TeamMember[];
  acknowledgements: string[];
  contactEmail: string;
}

const projectInfo: ProjectInfo = {
  title: "Holocaust History Project",
  description: "An interactive educational resource exploring the Holocaust with a focus on Canadian connections and perspectives.",
  mission: "Our mission is to educate about the Holocaust through interactive timelines, maps, and educational resources. We aim to preserve the memory of victims, honor survivors, and highlight Canada's historical connections to these events.",
  goals: [
    "Provide accurate and comprehensive information about the Holocaust",
    "Create engaging interactive tools to explore historical events and locations",
    "Highlight Canada's role and response to the Holocaust",
    "Offer educational resources for students, educators, and the general public",
    "Preserve the memory of Holocaust victims and survivors",
    "Promote understanding of the historical context that led to the Holocaust"
  ],
  team: [
    {
      name: "Dr. Sarah Cohen",
      role: "Project Director & Holocaust Historian",
      bio: "Dr. Cohen has specialized in Holocaust studies for over 15 years and leads research initiatives at the Canadian Center for Holocaust Education.",
      imageUrl: "/images/team/sarah-cohen.jpg"
    },
    {
      name: "Michael Lebowitz",
      role: "Educational Content Developer",
      bio: "Michael develops curriculum materials for schools and has worked with numerous Holocaust education organizations.",
      imageUrl: "/images/team/michael-lebowitz.jpg"
    },
    {
      name: "Jennifer Park",
      role: "Digital Experience Designer",
      bio: "Jennifer specializes in creating interactive digital experiences for historical and educational projects.",
      imageUrl: "/images/team/jennifer-park.jpg"
    },
    {
      name: "David Rosenberg",
      role: "Research Coordinator",
      bio: "David coordinates research efforts and ensures historical accuracy across all project materials.",
      imageUrl: "/images/team/david-rosenberg.jpg"
    }
  ],
  acknowledgements: [
    "Canadian Museum for Human Rights",
    "Montreal Holocaust Museum",
    "Vancouver Holocaust Education Centre",
    "United States Holocaust Memorial Museum",
    "Yad Vashem",
    "The families of Holocaust survivors who shared their stories",
    "The Canadian government for supporting Holocaust education initiatives"
  ],
  contactEmail: "contact@holocausthistoryproject.ca"
};

export default projectInfo;
