'use client';

import dynamic from 'next/dynamic';

const DynamicCampusMap = dynamic(() => import('./CampusMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 font-medium">
      JU ম্যাপ লোড হচ্ছে...
    </div>
  ),
});

export default DynamicCampusMap;