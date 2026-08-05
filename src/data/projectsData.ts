export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  category: 'Web System' | 'Automation' | 'App / Utility' | 'CLI / Data Structures' | string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  status: 'Active / Open Source' | 'Production Ready' | 'In Development';
  features: {
    title: string;
    description: string;
  }[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: 'elite-mess',
    number: '01',
    title: 'Elite-Mess-Management',
    category: 'Web System',
    tagline: 'Comprehensive Mess & Hostel Financial & Inventory Automation System',
    description:
      'Elite-Mess-Management is a full-featured web solution engineered to automate meal counts, daily market costs, shared utility bills, and individual member balances with real-time financial accuracy and automated report generation.',
    highlights: [
      'Automated meal count calculation & daily market rate tracking',
      'Food inventory, expense management & balance reconciliation',
      'Analytics dashboard with PDF/Excel report export capabilities',
      'Role-based authentication for Mess Managers and Members',
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'Chart.js'],
    githubUrl: 'https://github.com/Yeasifjanimishad/Elite-Mess-Management/tree/main#-elite-mess-management-system',
    demoUrl: 'https://elite-mess-management.vercel.app/',
    status: 'Active / Open Source',
    features: [
      {
        title: 'Smart Meal Rate Engine',
        description: 'Dynamically divides daily market expenses by total meals consumed to ensure transparent balance distribution.',
      },
      {
        title: 'Deposit & Dues Ledger',
        description: 'Keeps track of member deposits, pending dues, and sends automated reminder alerts.',
      },
      {
        title: 'Interactive Analytics',
        description: 'Visual charts illustrating monthly consumption patterns and category-wise expenditure breakdown.',
      },
    ],
  },
  {
    id: 'lab-monitor',
    number: '02',
    title: 'Lab-Monitor Pro',
    category: 'Automation',
    tagline: 'Centralized University Computer Lab Monitoring & Remote Management',
    description:
      'Lab-Monitor Pro provides real-time desktop monitoring, remote task execution, assignment distribution, and file collection across dozens of workstation nodes in university computer labs.',
    highlights: [
      'Centralized admin dashboard monitoring active student PCs',
      'Automated lab assignment distribution & bulk file collection',
      'Lightweight background PowerShell agent for zero-lag performance',
      'Instant broadcast messaging and emergency workstation locking',
    ],
    techStack: ['PowerShell', 'Batch', 'Python', 'Web Dashboard', 'Windows API'],
    githubUrl: 'https://github.com/Yeasifjanimishad/LabMonitor#labmonitor-pro---centralized-university-lab-monitoring-system',
    status: 'Production Ready',
    features: [
      {
        title: 'Zero-Agent Deployment',
        description: 'Deploys seamlessly across Windows workstations using native PowerShell scripts without complex installers.',
      },
      {
        title: 'Real-Time Telemetry',
        description: 'Displays current active applications, CPU/RAM usage, and student attendance status at a glance.',
      },
      {
        title: 'File Collection Vault',
        description: 'Collects student exam and lab submission files into structured folders organized by student ID automatically.',
      },
    ],
  },
  {
    id: 'parkify',
    number: '03',
    title: 'Parkify',
    category: 'App / Utility',
    tagline: 'Smart Vehicle Parking & Slot Reservation System',
    description:
      'Parkify simplifies urban and institutional parking by providing real-time slot availability, QR-code ticket scanning, automated entry/exit timestamps, and digital payment receipts.',
    highlights: [
      'Interactive parking lot map with live occupancy indicators',
      'QR code validation for entry & exit gate verification',
      'Automated hourly fee calculation & receipt generation',
      'Historical parking analytics and peak-hour heatmaps',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'QR Engine'],
    githubUrl: 'https://github.com/Yeasifjanimishad',
    status: 'In Development',
    features: [
      {
        title: 'Live Slot Tracker',
        description: 'Visual grid mapping showing available, reserved, and occupied parking slots in real time.',
      },
      {
        title: 'Instant QR Pass',
        description: 'Drivers scan a generated mobile QR code at entry and exit gates for cashless billing.',
      },
      {
        title: 'Admin Gate Control',
        description: 'Gives parking attendants quick tools to override reservations and manage VIP allocations.',
      },
    ],
  },
  {
    id: 'obstacle-robot',
    number: '04',
    title: 'Autonomous Obstacle Detection & Avoidance Robot',
    category: 'App / Utility',
    tagline: 'Microcontroller-Driven Real-Time Collision Avoidance & Autonomous Navigation Robot',
    description:
      'An intelligent robotic system engineered to detect obstacles automatically, avoid collisions, and navigate independently. Combines ultrasonic sensor telemetry with a microcontroller for real-time motor control and autonomous path clearance.',
    highlights: [
      'Automated obstacle detection using ultrasonic distance sensors',
      'Collision avoidance algorithm with real-time dynamic steering',
      'Independent navigation without external human remote intervention',
      'Microcontroller integration with motor drivers and servo control',
    ],
    techStack: ['Arduino / C++', 'HC-SR04 Ultrasonic Sensor', 'Servo Motor', 'L298N Motor Driver', 'Microcontroller'],
    githubUrl: 'https://github.com/Yeasifjanimishad',
    status: 'Production Ready',
    features: [
      {
        title: 'Real-Time Sensor Scanning',
        description: 'Continuously measures obstacle distance in milliseconds to prevent collisions before impact.',
      },
      {
        title: 'Servo Radar Sweep',
        description: 'Scans left, right, and center angles to calculate the optimal path with maximum clearance.',
      },
      {
        title: 'Autonomous Navigation Engine',
        description: 'Executes independent motor drive maneuvers based on real-time sensor feedback.',
      },
    ],
  },
  {
    id: 'c-inventory-manager',
    number: '05',
    title: 'Personal Inventory Manager (C Language)',
    category: 'CLI / Data Structures',
    tagline: 'CLI Inventory System utilizing Array, Stack, Queue, and Binary Search Tree (BST)',
    description:
      'A structured Personal Inventory Manager developed in C. Leverages advanced computer science data structures (Arrays, Stacks, Queues, and BSTs) for efficient item management, quick name searches, price sorting, undo history, and alphabetical traversal.',
    highlights: [
      'Add & delete inventory items dynamically with memory management',
      'Instant search by name and sorting by price',
      'Undo last added item via Stack (LIFO) structure',
      'View queue order and alphabetical BST traversal',
    ],
    techStack: ['C Programming', 'Data Structures', 'BST', 'Stack & Queue', 'Memory Management'],
    githubUrl: 'https://github.com/Yeasifjanimishad',
    status: 'Production Ready',
    features: [
      {
        title: 'Multi-Data Structure Core',
        description: 'Combines Arrays for fast indexing, Stacks for undo operations, and Queues for sequential processing.',
      },
      {
        title: 'Binary Search Tree (BST)',
        description: 'Provides logarithmic O(log n) time complexity for searching items by name and in-order alphabetical traversal.',
      },
      {
        title: 'Undo & Sorting System',
        description: 'Allows instant reversion of the last added item using Stack LIFO principles and quick sorting by price.',
      },
    ],
  },
];

