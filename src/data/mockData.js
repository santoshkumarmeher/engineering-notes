export const branches = [
  { id: 1, name: 'Computer Science', code: 'CSE' },
  { id: 2, name: 'Mechanical Engineering', code: 'ME' },
  { id: 3, name: 'Electrical Engineering', code: 'EE' },
  { id: 4, name: 'Civil Engineering', code: 'CE' },
  { id: 5, name: 'Electronics & Communication', code: 'ECE' }
];

export const subjects = {
  CSE: [
    { id: 1, name: 'IoT', code: 'CS201' },
    { id: 2, name: 'Algorithms', code: 'CS301' },
    { id: 3, name: 'Database Management', code: 'CS401' },
    { id: 4, name: 'Operating Systems', code: 'CS501' }
  ],
  ME: [
    { id: 1, name: 'Thermodynamics', code: 'ME201' },
    { id: 2, name: 'Fluid Mechanics', code: 'ME301' }
  ],
  EE: [
    { id: 1, name: 'Circuit Theory', code: 'EE201' },
    { id: 2, name: 'Power Systems', code: 'EE301' }
  ]
};

export const notes = {
  CS201: [
    {
      id: 1,
      title: 'Internet of Things',
      teacher: 'Mr. M. ROHITH ANANTH RATNAM',
      college: 'MALLA REDDY INSTITUTE OF TECHNOLOGY AND SCIENCE',
      type: 'pdf',
      file: '/assets/pdfs/IoT Lecture Material.pdf',
      date: '2025-11-09'
    },
    {
      id: 2,
      title: 'Internet of Things and It\'s Application',
      teacher: 'Mr.M.Anantha Guptha',
      college: 'MALLA REDDY INSTITUTE OF TECHNOLOGY AND SCIENCE',
      type: 'pdf',
      file: '/assets/pdfs/IoT & Applications Digital Notes.pdf',
      date: '2025-11-09'
    }
  ]
};

export const skills = [
  {
    id: 1,
    name: 'Web Development',
    category: 'Programming',
    resources: [
      { name: 'HTML/CSS Basics', type: 'pdf', file: '/assets/pdfs/web_dev.pdf' },
      { name: 'JavaScript Fundamentals', type: 'ppt', file: '/assets/ppts/js_basics.ppt' }
    ]
  },
  {
    id: 2,
    name: 'Data Science',
    category: 'Analytics',
    resources: [
      { name: 'Python for Data Science', type: 'pdf', file: '/assets/pdfs/python_ds.pdf' }
    ]
  }
];