import React from 'react';
import Container from '../../components/Container';
import { Trash2 } from 'lucide-react';

function HistoryHealth({
  setFilter,
  counts,
  filter,
  filteredEntries,
  deleteEntry,
}) {
  const formatEntryValue = (entry) => {
    if (entry.type === 'calories') return `${entry.value.toFixed(0)} kcal`;
    if (entry.type === 'sugar') return `${entry.value.toFixed(0)} mg`;
    if (entry.type === 'water') return `${entry.value.toFixed(0)} ml`;
    return '';
  };

  const getEntryIcon = (entry) => { 
    switch (entry.type) {
      case 'calories':
        return '🔥';
      case 'sugar':
        return '🍬';
      case 'water':
        return '💧';
      case 'condition':
        const desc = entry.description.toLowerCase();
        if (
          desc.includes('well') ||
          desc.includes('awesome') ||
          desc.includes('better') ||
          desc.includes('good') ||
          desc.includes('great') ||
          desc.includes('ok') ||
          desc.includes('fine') ||
          desc.includes('recovered') ||
          desc.includes('sehat') || 
          desc.includes('membaik')
        ) {
          return '😊'; 
        }
       
        if (
          desc.includes('sick') ||
          desc.includes('headache') ||
          desc.includes('flu') ||
          desc.includes('pain') ||
          desc.includes('bad') ||
          desc.includes('worse') ||
          desc.includes('not good') ||
          desc.includes('sakit') || 
          desc.includes('buruk') ||
          desc.includes('pusing')
        ) {
          return '🤒'; 
        }
        return '😐'; 
      default:
        return '📝';
    }
  };

  return (
    <Container>
      <div className="my-8 p-6 bg-base-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-base-content mb-6 text-center">
          Health Log History
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(counts).map((key) => (
            <button
              key={key}
              className={`btn btn-sm ${filter === key ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} ({counts[key]})
            </button>
          ))}
        </div>

        {filteredEntries.length === 0 ? (
          <p className="text-center text-base-content/70">No entries for this filter yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Value</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry) => (
                  <tr key={entry.id} className="hover">
                    <td>
                      <span className="mr-2">{getEntryIcon(entry)}</span>
                      {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                    </td>
                    <td>{formatEntryValue(entry)}</td>
                    <td>{entry.description}</td>
                    <td>{entry.createdAt.toLocaleDateString()}</td>
                    <td>
                      <button
                        className="btn btn-xs btn-ghost btn-circle text-error"
                        onClick={() => deleteEntry(entry.id)}
                        title="Delete Entry"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Container>
  );
}

export default HistoryHealth;