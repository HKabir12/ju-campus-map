import { CampusLocation } from '@/types/mapTypes';

export const JU_LOCATIONS: CampusLocation[] = [
  // Gates
  { 
    id: 'dairy_gate', 
    name: 'Dairy Gate (Main Gate)', 
    bnName: 'ডেইরি গেট (প্রধান ফটক)', 
    category: 'gate', 
    lat: 23.8725, 
    lng: 90.2713 
  },
  { 
    id: 'prantik_gate', 
    name: 'Prantik Gate (Joy Bangla Gate)', 
    bnName: 'প্রান্তিক গেট (জয় বাংলা গেট)', 
    category: 'gate', 
    lat: 23.8882, 
    lng: 90.2625 
  },

  // Admin & Spots
  { 
    id: 'wrc', 
    name: 'Wazed Miah Science Research Centre', 
    bnName: 'ওয়াজেদ মিয়া বিজ্ঞান গবেষণা কেন্দ্র', 
    category: 'academic', 
    lat: 23.8768, 
    lng: 90.2682 
  },
  { 
    id: 'tsc', 
    name: 'TSC / Zahir Raihan Auditorium', 
    bnName: 'টিএসসি / জহির রায়হান মিলনায়তন', 
    category: 'admin', 
    lat: 23.8775, 
    lng: 90.2678 
  },
  { 
    id: 'chourangi', 
    name: 'Chourangi Moar', 
    bnName: 'চৌরঙ্গী মোড়', 
    category: 'spot', 
    lat: 23.8788, 
    lng: 90.2685 
  },
  { 
    id: 'library', 
    name: 'Central Library', 
    bnName: 'কেন্দ্রীয় লাইব্রেরি', 
    category: 'admin', 
    lat: 23.8789, 
    lng: 90.2671 
  },
  { 
    id: 'shaheed_minar', 
    name: 'Shaheed Minar', 
    bnName: 'কেন্দ্রীয় শহীদ মিনার', 
    category: 'spot', 
    lat: 23.8798, 
    lng: 90.2675 
  },
  { 
    id: 'canteen_social', 
    name: 'Social Sciences Faculty', 
    bnName: 'সমাজবিজ্ঞান অনুষদ', 
    category: 'academic', 
    lat: 23.8805, 
    lng: 90.2658 
  },
  { 
    id: 'bottala', 
    name: 'Bottala Food Court', 
    bnName: 'বটতলা (খাবারের দোকান)', 
    category: 'spot', 
    lat: 23.8812, 
    lng: 90.2652 
  },

  // Halls
  { 
    id: 'mh_hall', 
    name: 'Mir Mosharraf Hossain Hall', 
    bnName: 'মীর মশাররফ হোসেন হল', 
    category: 'hall', 
    lat: 23.8756, 
    lng: 90.2718 
  },
  { 
    id: 'al_beruni', 
    name: 'Al-Beruni Hall', 
    bnName: 'আল-বেরুনী হল', 
    category: 'hall', 
    lat: 23.8831, 
    lng: 90.2702 
  },
  { 
    id: 'jahanara_imam', 
    name: 'Jahanara Imam Hall', 
    bnName: 'জাহানারা ইমাম হল', 
    category: 'hall', 
    lat: 23.8842, 
    lng: 90.2683 
  }
];