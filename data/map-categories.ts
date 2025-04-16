import { LocationCategory } from '@/lib/types';

export interface MapCategoryInfo {
  id: LocationCategory;
  label: string;
  description: string;
  color: string;
  icon?: string; // Icon name for map markers
}

export const mapCategories: MapCategoryInfo[] = [
  {
    id: 'concentration-camp',
    label: 'Concentration Camps',
    description: 'Nazi concentration camps where prisoners were held in inhumane conditions',
    color: '#B91C1C', // red
    icon: 'camp',
  },
  {
    id: 'death-camp',
    label: 'Death Camps',
    description: 'Extermination camps built specifically for mass murder',
    color: '#7F1D1D', // red-dark
    icon: 'skull',
  },
  {
    id: 'ghetto',
    label: 'Ghettos',
    description: 'Segregated areas where Jews were forced to live under terrible conditions',
    color: '#B7950B', // gold-dark
    icon: 'fence',
  },
  {
    id: 'memorial',
    label: 'Memorials',
    description: 'Sites dedicated to remembering Holocaust victims',
    color: '#6B7280', // gray
    icon: 'monument',
  },
  {
    id: 'museum',
    label: 'Museums',
    description: 'Educational institutions preserving Holocaust history',
    color: '#1A3A5F', // navy-light
    icon: 'building',
  },
  {
    id: 'refugee-center',
    label: 'Refugee Centers',
    description: 'Places where Holocaust survivors found temporary shelter',
    color: '#374151', // gray-dark
    icon: 'home',
  },
  {
    id: 'canadian-connection',
    label: 'Canadian Connections',
    description: 'Locations with significant connections to Canada',
    color: '#D4AF37', // gold
    icon: 'maple-leaf',
  },
];

export default mapCategories;
