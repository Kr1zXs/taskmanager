const filterCallbacks = {
  all: () => true,
  overdue: ({ due_date }) => typeof due_date === 'string' && due_date < new Date().toISOString(),
  
  today: ({ due_date }) => 
    typeof due_date === 'string' && due_date.slice(0, 10) === new Date().toISOString().slice(0, 10),
  favorites: ({ is_favorite }) => is_favorite === true,
  repeating: ({ repeating_days }) => 
    repeating_days && Object.values(repeating_days).some((day) => day === true), 
  archive: ({ is_archived }) => is_archived === true,
};

const filters = [
  { id: crypto.randomUUID(), filterType: 'all', disabled: false, checked: false, count: 13 },
  { id: crypto.randomUUID(), filterType: 'overdue', disabled: false, checked: false, count: 0 },
  { id: crypto.randomUUID(), filterType: 'today', disabled: false, checked: false, count: 0 },
  { id: crypto.randomUUID(), filterType: 'favorites', disabled: false, checked: false, count: 1 },
  { id: crypto.randomUUID(), filterType: 'repeating', disabled: false, checked: false, count: 1 },
  { id: crypto.randomUUID(), filterType: 'archive', disabled: false, checked: false, count: 115 },
];


const sortedCallbacks = {
  'SORT BY DEFAULT': () => 0, 
  'SORT BY DATE UP': (a, b) => new Date(a.due_date) - new Date(b.due_date), 
  'SORT BY DATE DOWN': (b, a) => new Date(a.due_date) - new Date(b.due_date), 
};

const DEFAULT_TASK = {
  
  "id": "null",
  "color": "green",
  "description": "New tasks",
  "due_date": new Date().toISOString9,
  "is_archived": false,
  "is_favorite": false,
  "repeating_days": {
    "mo": false,
    "tu": false,
    "we": false,
    "th": false,
    "fr": false,
    "sa": false,
    "su": false
  }

}


export { filterCallbacks, filters, sortedCallbacks, DEFAULT_TASK };
