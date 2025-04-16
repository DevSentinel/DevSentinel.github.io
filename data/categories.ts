import { EventCategory } from '@/lib/types';

export interface CategoryInfo {
  id: EventCategory;
  label: string;
  description: string;
  color: string;
}

export const eventCategories: CategoryInfo[] = [
  {
    id: 'holocaust',
    label: 'Holocaust Events',
    description: 'Key events directly related to the Holocaust and persecution of Jews',
    color: '#B91C1C', // red
  },
  {
    id: 'ww2',
    label: 'World War II',
    description: 'Major World War II events that provide context for the Holocaust',
    color: '#0A2342', // navy
  },
  {
    id: 'canada-policy',
    label: 'Canadian Policy',
    description: 'Canadian government policies related to Jewish refugees and immigration',
    color: '#D4AF37', // gold
  },
  {
    id: 'canada-response',
    label: 'Canadian Response',
    description: 'How Canada and Canadians responded to the Holocaust',
    color: '#1A3A5F', // navy-light
  },
  {
    id: 'post-war',
    label: 'Post-War Period',
    description: 'Events after World War II related to Holocaust survivors and memory',
    color: '#6B7280', // gray
  },
  {
    id: 'survivor-stories',
    label: 'Survivor Stories',
    description: 'Personal stories and experiences of Holocaust survivors',
    color: '#B7950B', // gold-dark
  },
];

export default eventCategories;
