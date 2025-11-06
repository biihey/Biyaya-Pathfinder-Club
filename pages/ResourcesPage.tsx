
import React from 'react';
import { resources } from '../constants';
import { DocumentDownloadIcon } from '../components/icons';

interface Resource {
    category: string;
    title: string;
    url: string;
}

const ResourcesPage: React.FC = () => {
  const groupedResources = resources.reduce((acc, resource) => {
    (acc[resource.category] = acc[resource.category] || []).push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Resources & Downloads
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            Find important handbooks, guides, and documents here.
          </p>
        </div>
        
        <div className="space-y-12">
          {Object.entries(groupedResources).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-pathfinder-blue mb-4 pb-2 border-b-2 border-pathfinder-yellow">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-50 p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-pathfinder-blue/5 transition-all duration-300 flex items-center gap-4 border-l-4 border-slate-200 hover:border-pathfinder-green"
                  >
                    <DocumentDownloadIcon className="h-8 w-8 text-pathfinder-blue group-hover:text-pathfinder-green transition-colors" />
                    <div>
                        <h3 className="font-bold text-slate-800 group-hover:text-pathfinder-blue transition-colors">
                        {item.title}
                        </h3>
                        <p className="text-sm text-slate-500">Download PDF</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
