import React from 'react';

const QuerySelectorPlugin = () => {
  const queries = [
    {
      title: 'Query 1: All Films',
      query: `query MyQuery1 {
  allFilms(after: "")
}`,
    },
    {
      title: 'Query 2: All Vehicles',
      query: `query MyQuery2 {
  allVehicles
}`,
    },
  ];

  const updateQueryEditor = (query) => {
  };

  return {
    title: 'Query Selector Plugin v2',
    icon: () => (
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="8" />
      </svg>
    ),
    content: () => (
      <div>
        <h2>Available Queries:</h2>
        <ul>
          {queries.map((query, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  console.log(`Selected Query: ${query.title}`);
                  updateQueryEditor(query.query);
                }}
              >
                {query.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    ),
  };
};

export default QuerySelectorPlugin;