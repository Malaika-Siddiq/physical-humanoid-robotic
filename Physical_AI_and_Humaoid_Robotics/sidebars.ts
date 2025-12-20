// import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// /**
//  * Creating a sidebar enables you to:
//  - create an ordered group of docs
//  - render a sidebar for each doc of that group
//  - provide next/previous navigation

//  The sidebars can be generated from the filesystem, or explicitly defined here.

//  Create as many sidebars as you want.
//  */
// const sidebars: SidebarsConfig = {
//   // Manual sidebar for Physical AI and Humanoid Robotics textbook
//   textbookSidebar: [
//     {
//       type: 'category',
//       label: 'Chapter 1: Introduction to Physical AI and Humanoid Robotics',
//       items: [
//         'chapter-01/lesson-1/lesson-1',
//         'chapter-01/lesson-2/lesson-2',
//         'chapter-01/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-01/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 2: Locomotion and Balance',
//       items: [
//         'chapter-02/lesson-1/lesson-1',
//         'chapter-02/lesson-2/lesson-2',
//         'chapter-02/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-02/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 3: Manipulation and Dexterity',
//       items: [
//         'chapter-03/lesson-1/lesson-1',
//         'chapter-03/lesson-2/lesson-2',
//         'chapter-03/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-03/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 4: Artificial Intelligence and Machine Learning',
//       items: [
//         'chapter-04/lesson-1/lesson-1',
//         'chapter-04/lesson-2/lesson-2',
//         'chapter-04/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-04/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 5: Cognitive Architectures',
//       items: [
//         'chapter-05/lesson-1/lesson-1',
//         'chapter-05/lesson-2/lesson-2',
//         'chapter-05/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-05/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 6: Human-Robot Interaction',
//       items: [
//         'chapter-06/lesson-1/lesson-1',
//         'chapter-06/lesson-2/lesson-2',
//         'chapter-06/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-06/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 7: Social Robotics',
//       items: [
//         'chapter-07/lesson-1/lesson-1',
//         'chapter-07/lesson-2/lesson-2',
//         'chapter-07/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-07/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 8: Ethics and Safety',
//       items: [
//         'chapter-08/lesson-1/lesson-1',
//         'chapter-08/lesson-2/lesson-2',
//         'chapter-08/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-08/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 9: Applications and Use Cases',
//       items: [
//         'chapter-09/lesson-1/lesson-1',
//         'chapter-09/lesson-2/lesson-2',
//         'chapter-09/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-09/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 10: Hardware Platforms and Technologies',
//       items: [
//         'chapter-10/lesson-1/lesson-1',
//         'chapter-10/lesson-2/lesson-2',
//         'chapter-10/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-10/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 11: Simulation and Development Tools',
//       items: [
//         'chapter-11/lesson-1/lesson-1',
//         'chapter-11/lesson-2/lesson-2',
//         'chapter-11/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-11/lesson-1/lesson-1'
//       }
//     },
//     {
//       type: 'category',
//       label: 'Chapter 12: Future Directions and Research Frontiers',
//       items: [
//         'chapter-12/lesson-1/lesson-1',
//         'chapter-12/lesson-2/lesson-2',
//         'chapter-12/lesson-3/lesson-3'
//       ],
//       link: {
//         type: 'doc',
//         id: 'chapter-12/lesson-1/lesson-1'
//       }
//     }
//   ]
// };

// export default sidebars;


import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  textbookSidebar: [
    'intro', // Added intro as the first item
    {
      type: 'category',
      label: 'Chapter 1: Introduction to Physical AI and Humanoid Robotics',
      items: [
        'chapter-01/lesson-1/lesson-1',
        'chapter-01/lesson-2/lesson-2',
        'chapter-01/lesson-3/lesson-3'
      ],
      link: {
        type: 'doc',
        id: 'chapter-01/lesson-1/lesson-1'
      }
    },
    {
      type: 'category',
      label: 'Chapter 2: The Robotic Nervous System (ROS 2)',
      items: [
        'chapter-02/lesson-1/lesson-1',
        'chapter-02/lesson-2/lesson-2',
        'chapter-02/lesson-3/lesson-3'
      ],
      link: {
        type: 'doc',
        id: 'chapter-02/lesson-1/lesson-1'
      }
    },
    {
      type: 'category',
      label: 'Chapter 3: Robot Simulation & Digital Twins (Gazebo & Unity)',
      items: [
        'chapter-03/lesson-1/lesson-1',
        'chapter-03/lesson-2/lesson-2',
        'chapter-03/lesson-3/lesson-3'
      ],
      link: {
        type: 'doc',
        id: 'chapter-03/lesson-1/lesson-1'
      }
    },
    {
      type: 'category',
      label: 'Chapter 4:  AI Robot Brain with NVIDIA Isaac',
      items: [
        'chapter-04/lesson-1/lesson-1',
        'chapter-04/lesson-2/lesson-2',
        'chapter-04/lesson-3/lesson-3'
      ],
      link: {
        type: 'doc',
        id: 'chapter-04/lesson-1/lesson-1'
      }
    },
    {
      type: 'category',
      label: 'Chapter 5:  Vision-Language-Action (VLA) Systems',
      items: [
        'chapter-05/lesson-1/lesson-1',
        'chapter-05/lesson-2/lesson-2',
        'chapter-05/lesson-3/lesson-3'
      ],
      link: {
        type: 'doc',
        id: 'chapter-05/lesson-1/lesson-1'
      }
    },
    {
      type: 'category',
      label: 'Chapter 6:  Humanoid Robot Design & Interaction',
      items: [
        'chapter-06/lesson-1/lesson-1',
        'chapter-06/lesson-2/lesson-2',
        'chapter-06/lesson-3/lesson-3'
      ],
      link: {
        type: 'doc',
        id: 'chapter-06/lesson-1/lesson-1'
      }
    },
    {
      type: 'category',
      label: 'Chapter 7:  Conversational Robotics & Capstone Project',
      items: [
        'chapter-07/lesson-1/lesson-1',
        'chapter-07/lesson-2/lesson-2',
        'chapter-07/lesson-3/lesson-3'
      ],
      link: {
        type: 'doc',
        id: 'chapter-07/lesson-1/lesson-1'
      }
    },
  
  
  ]
};

export default sidebars;
