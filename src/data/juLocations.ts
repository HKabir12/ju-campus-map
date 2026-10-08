import { CampusLocation } from '@/types/mapTypes';

export const JU_LOCATIONS: CampusLocation[] = [
  // Gates
  { id: 'dairy_gate', name: 'Dairy Gate (Main Gate)', bnName: 'ডেইরি গেট (প্রধান ফটক)', category: 'gate', lat: 23.8782, lng: 90.2685 },
  { id: 'prantik_gate', name: 'Prantik Gate', bnName: 'প্রান্তিক গেট', category: 'gate', lat: 23.8885, lng: 90.2612 },

  // Admin & Spots
  { id: 'shaheed_minar', name: 'Shaheed Minar', bnName: 'কেন্দ্রীয় শহীদ মিনার', category: 'spot', lat: 23.8824, lng: 90.2671 },
  { id: 'tsc', name: 'TSC', bnName: 'টিএসসি (TSC)', category: 'admin', lat: 23.8812, lng: 90.2662 },
  { id: 'chourangi', name: 'Chourangi', bnName: 'চৌরঙ্গী মোড়', category: 'spot', lat: 23.8805, lng: 90.2678 },
  { id: 'library', name: 'Central Library', bnName: 'কেন্দ্রীয় লাইব্রেরি', category: 'admin', lat: 23.8830, lng: 90.2668 },
  { id: 'bottala', name: 'Bottala Food Court', bnName: 'বটতলা (খাবারের দোকান)', category: 'spot', lat: 23.8842, lng: 90.2651 },

  // Halls
  { id: 'al_beruni', name: 'Al-Beruni Hall', bnName: 'আল-বেরুনী হল', category: 'hall', lat: 23.8851, lng: 90.2635 },
  { id: 'mh_hall', name: 'Mir Mosharraf Hossain Hall', bnName: 'মীর মশাররফ হোসেন হল', category: 'hall', lat: 23.8765, lng: 90.2690 },
  { id: 'jahanara_imam', name: 'Jahanara Imam Hall', bnName: 'জাহানারা ইমাম হল', category: 'hall', lat: 23.8860, lng: 90.2640 },

  // Academic
  { id: 'wrc', name: 'Wazed Miah Research Centre', bnName: 'ওয়াজেদ মিয়া গবেষণা কেন্দ্র', category: 'academic', lat: 23.8828, lng: 90.2655 },
  { id: 'canteen_social', name: 'Social Sciences Faculty', bnName: 'সমাজবিজ্ঞান অনুষদ', category: 'academic', lat: 23.8818, lng: 90.2660 }
];