import React, { useState } from 'react';
import { Search, ShoppingCart, ExternalLink } from 'lucide-react';

const PriceComparison = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const medicines = [
    {
      id: 1,
      name: 'Aspirin 100mg',
      prices: [
        { store: 'PharmacyOne', price: 12.99, link: '#' },
        { store: 'MedStore', price: 10.99, link: '#' },
        { store: 'HealthMart', price: 11.99, link: '#' }
      ],
      alternatives: ['Generic Aspirin', 'Acetylsalicylic Acid']
    },
    {
      id: 2,
      name: 'Paracetamol 500mg',
      prices: [
        { store: 'PharmacyOne', price: 8.99, link: '#' },
        { store: 'MedStore', price: 7.99, link: '#' },
        { store: 'HealthMart', price: 9.99, link: '#' }
      ],
      alternatives: ['Acetaminophen', 'Generic Paracetamol']
    }
  ];

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Price Comparison</h2>
        
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <div className="space-y-6">
          {filteredMedicines.map(medicine => (
            <div key={medicine.id} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">{medicine.name}</h3>
              
              <div className="space-y-2 mb-4">
                {medicine.prices.map((price, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{price.store}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Rs{price.price}</span>
                      <a
                        href={price.link}
                        className="text-blue-600 hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-2">
                <p className="text-sm text-gray-500">
                  Alternatives: {medicine.alternatives.join(', ')}
                </p>
              </div>
            </div>
          ))}

          {filteredMedicines.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
              <p>No medicines found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;