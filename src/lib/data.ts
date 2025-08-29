
import type { Code, BrainCircuit, Database, Globe, Wrench, Award, List, User, Heart, Gamepad2, Mountain, BookOpen, CheckCircle2, Github, Linkedin, MapPin, Circle, Music, Trophy, Link as LinkIcon, Lightbulb, ChevronDown, Video } from 'lucide-react';

export const experienceData = [
  {
    role: "Working Student - Generative AI Services",
    company: "Siemens Healthineers AG, Erlangen, Germany",
    date: "Dec 2024 - Present",
    description: "Enhancing an internal RAG platform and developing Angular applications.",
    logoUrl: "/assets/Siemens_Healthineers_logo.svg.png",
    details: [
      "Enhancing and optimizing the internal RAG platform to improve performance and scalability",
      "Developing Angular-based web applications and writing end-to-end (e2e) test cases to ensure robust and reliable software",
    ]
  },
  {
    role: "Working Student - Full Stack Web Developer",
    company: "heatbeat engineering GmbH, Nürnberg, Germany",
    date: "Jan 2024 - Nov 2024",
    description: "Developed data visualizations for a digital twin and optimized website performance.",
    logoUrl: "/assets/heatbeat-logo-header.svg",
    details: [
      "Created advanced data visualizations for the digital twin application using Python, React, and Plotly, enhancing user insights",
      "Optimized website code, reducing home page loading time by 30%",
    ],
    images: [
      "/assets/heatbeat_enerpipe.jpeg",
      "/assets/heatbeat_onsite_meeting_3.png",
      "/assets/heatbeat_glasswall.jpeg",
      "/assets/heatbeat-onsite-meeting.jpg"
      
    ],
  },
  {
    company: "Josh Technology Group, Gurugram, India",
    logoUrl: "/assets/jtg_logo.png",
    roles: [
      {
        role: "Senior Software Developer",
        date: "Oct 2021 - Sep 2023",
        description: "Led a team of 6 developers, mentored junior engineers, and managed agile ceremonies.",
        details: [
          "Coordinated a team of 6 developers, serving 100k+ users, and mentored 4 junior developers through design/code reviews and SCRUM ceremonies (stand-ups, sprint planning, retros)",
          "Planned and executed projects exceeding 1,200 hours, collaborating with the Product team to refine requirements and deliver scalable solutions",
        ]
      },
      {
        role: "Software Developer",
        date: "Jan 2019 - Oct 2021",
        description: "Delivered 5+ major modules using Python/Django, boosting revenue by 20%.",
        details: [
          "Solely managed the HomeTool project, integrating third-party tools (e.g., Stripe) and affiliate marketing software, boosting revenue by 20%",
          "Delivered 5+ major modules using Python and Django/DRF, expanding 2 marquee customers by 50% and acquiring 10+ new clients",
          "Managed sprint releases, deployments, hotfixes, and performance monitoring",
          "Improved security with AWS GuardDuty and cut costs by automating an SSL certificate renewal",
        ]
      },
      {
        role: "Software Developer - Summer Intern",
        date: "Jun 2018 - Jul 2018",
        description: "Developed a Marksheet Parser using ML, achieving 90% accuracy.",
        details: [
          "Designed and Implemented ML algorithms for the Marksheet Parser project, achieving close to 90% accuracy in extracting structural features from high school marksheet images"
        ]
      },
    ],
    images: [
      "/assets/mentorcloud_team.webp",
      "/assets/mentorcloud_2.webp",
      "/assets/mentorcloud_group.webp"
    ]
  },
];


export const educationData = [
  {
    role: "Master of Science, Artificial Intelligence",
    company: "Friedrich-Alexander Universität, Erlangen, Germany",
    date: "Oct 2023 - Oct 2026",
    description: "Focusing on advanced topics in machine learning, computer vision, and natural language processing.",
    logoUrl: "/assets/fau_logo_2.jpg",
    details: [
        "Key coursework: Deep Learning, Reinforcement Learning, Medical Image Analysis, NLP.",
        "Member of the university AI research group, contributing to ongoing projects.",
    ],
    images: [
      "/assets/fau_firstday_final.jpg",
    ],
    dataAiHint: "university campus"
  },
  {
    role: "Bachelor of Technology, Information Technology",
    company: "J.C. Bose University of Science & Technology, YMCA, Faridabad, India",
    date: "Aug 2015 - Jul 2019",
    description: "Graduated with a comprehensive foundation in computer science and information technology.",
    logoUrl: "/assets/ymca_logo.png",
    details: [
        "Excelled in Data Structures, Algorithms, Database Management, and Web Technologies.",
        "Final year project on a machine learning-based recommendation system.",
    ],
    images: [
      "/assets/ymca_farewell.jpg",
    ],
    dataAiHint: "university building"
  }
];

export const projectsData = [
  {
    title: "AI Application Helper",
    description: "A prototype multi-agent system that automates application drafting and submission with LangChain / LangGraph and browser-use.",
    tags: ["Multi-Agent Systems", "LangChain", "LangGraph", "browser-use", "MCP"],
    subtitle: "Personal Project | Aug 2025 – Present",
    details: [
      "Designed a multi-agent workflow for data ingestion, profile summarization, drafting, validation, and browser-based automated submission",
      "Coordinated agents using LangChain/LangGraph and exposed interoperability via MCP server",
      "Built a Streamlit UI for human-in-the-loop validation and debugging of real-world workflows",
    ],
    githubUrl: "https://github.com/techie-shashank/ai_application_helper",
    demoVideoUrl: "https://player.vimeo.com/video/1114075421"
  },
  {
    title: "RAG Performance Comparison Tool",
    description: "Tool to evaluate Agentic Retrieval vs. Hybrid Search using Azure AI Search and OpenAI, with real-time evaluation metrics.",
    tags: ["RAG", "Agentic Retrieval", "Azure AI"],
    subtitle: "Personal Project | Jul 2025 – Aug 2025",
    details: [
      "Developed a framework to compare Agentic Retrieval vs. Hybrid Search (vector + keyword)",
      "Supported ingestion of PDFs, DOCX, and TXT for side-by-side retrieval evaluation",
      "Integrated Azure AI Services, including Search, Document Intelligence, Blob Storage, and OpenAI models",
      "Found Agentic Retrieval improved relevance by ~40% for complex queries, at 2–5× higher latency"
    ],
    githubUrl: "https://github.com/techie-shashank/RAG-Performance-Comparison-Tool",
    demoVideoUrl: "https://player.vimeo.com/video/1114091962"
  },
  {
    title: "Medical Time Series Classification using Mamba",
    description: "Compared Mamba and LSTM models for binary classification on the PTB-XL medical dataset.",
    tags: ["Mamba", "LSTM", "PyTorch", "Time Series"],
    subtitle: "Academic Project | Apr 2025 – Present | Pattern Recognition Lab, FAU",
    details: [
      "Benchmarked Mamba vs. LSTM models for binary classification on PTB-XL medical ECG dataset",
      "Analyzed multi-label classification performance and identified architecture trade-offs for medical time series"
    ],
    githubUrl: "https://github.com/techie-shashank/mamba_ts_forecasting"
  },
  {
    title: "Tool Action Recognition",
    description: "Evaluated semi-supervised learning strategies for tool action recognition on industrial datasets.",
    tags: ["Semi-Supervised Learning", "LSTM", "TCN", "PyTorch"],
    subtitle: "Academic Project | Apr 2025 – Jul 2025 | Machine Learning & Data Analytics Lab, FAU",
    details: [
      "Tested semi-supervised approaches with LSTM and TCN models on an industrial tool-tracking dataset",
      "Improved recognition accuracy with limited labeled data"
    ],
    githubUrl: "https://github.com/techie-shashank/Tool_Action_Recognition"
  },
  {
    title: "High-Precision 3D Surface Reconstruction",
    description: "3D reconstruction pipeline using phase-shifting algorithms and deep learning for pose estimation.",
    tags: ["3D Reconstruction", "Computer Vision", "Structured Light", "Deep Learning"],
    subtitle: "Academic Project | Oct 2024 – Present | Institute for Factory Automation & Production Systems",
    details: [
      "Built a structured-light based 3D reconstruction pipeline using phase-shifting algorithms",
      "Researched deep learning methods to improve accuracy for 6DoF pose estimation",
      "Focused on generating robust, high-precision 3D surface models"
    ],
    githubUrl: null
  },
  {
    title: "Marksheet Parser",
    description: "Extracted structural features from high school marksheet images with ~90% accuracy using ML and OCR.",
    tags: ["OCR", "OpenCV", "Machine Learning", "Python"],
    subtitle: "Internship Project | Jun 2018 – Jul 2018",
    details: [
      "Designed and implemented ML algorithms for parsing marksheet images",
      "Achieved ~90% accuracy in extracting structural and tabular features"
    ],
    githubUrl: "https://github.com/techie-shashank/Marksheet-parser"
  }
];

export const skillsData = {
  "Machine Learning & AI": ["RAG", "Agentic AI", "LangChain", "LangGraph", "Browser-Use", "Azure AI", "PyTorch", "OpenCV"],
  "Programming Languages & Databases": ["Python (Proficient)", "C++", "JavaScript", "PostgreSQL"],
  "Web Development": ["Django/DRF (Proficient)", "React", "Redux", "Angular"],
  "DevOps & Cloud": ["Docker", "AWS", "Azure", "Jenkins"],
  "Tools & Monitoring": ["Git", "JIRA", "GitHub Copilot", "PyCharm", "VS Code"]
};

export const achievementsData = [
    {
        title: "Digital Tech Fellows",
        date: "Apr 2025 - Jul 2025",
        description: "Selected as 1 of 20 students university-wide for FAU’s elite 12-week entrepreneurship and innovation program at Digital Tech Academy, FAU, Erlangen, Germany.",
        details: [
            "Collaborated in an interdisciplinary team to analyze markets, design business models, prototype solutions, validate ideas, and pitch innovations under expert mentorship.",
        ],
        images: [
          "/assets/dta_complete_group.jpeg",
          "/assets/dta_fime.jpeg",
          "/assets/dta_waichsenfeld_2.jpeg",
        ],
        logoUrl: "/assets/dta_logo.jpg",
        link: {
            url: "https://www.dta.fau.de/student-program/",
            text: "Learn More"
        }
    }
];

export const extracurricularData = [
    {
        title: "AI Agent Hackathon @ Microsoft, Munich",
        date: "Aug 2025",
        description: "Collaborated in a team to design an agentic AI system that streamlines workplace issue resolution by connecting employees with the right experts using Azure AI Foundry.",
        details: [
            "Collaborated in a team to design an agentic AI system that streamlines workplace issue resolution by connecting employees with the right experts using Azure AI Foundry.",
            "Gained hands-on experience in rapid prototyping, teamwork, and applying AI to solve real-world organizational challenges."
        ],
        logoUrl: "/assets/ms_logo.png",
        images: [
          "/assets/ms_agent_hackathon.jpeg",
          "/assets/microsoft_hackathon.jpeg"
        ],
    },
    {
        title: "Healthcare Hackathon Bavaria",
        date: "Oct 2024",
        description: "Built an AI-driven prototype for electronic patient records (ePA) as a preventive health platform. Developed algorithms to assess patient risk factors, reducing diagnostic delays by 30%, in a 48-hour sprint with an interdisciplinary team.",
        details: [
            "Built an AI-driven prototype for electronic patient records (ePA) as a preventive health platform.",
            "Developed algorithms to assess patient risk factors, reducing diagnostic delays by 30%, in a 48-hour sprint with an interdisciplinary team."
        ],
        logoUrl: "/assets/healthcare_hackathon_logo.svg",
        images: [
          "/assets/healthcare-hackathon-bayern-keyvisual.jpg",
        ],
        link: {
          url: "https://www.bayern-innovativ.de/detail/de/veranstaltung/healthcare-hackathon-bayern-2024",
          text: "Learn More"
        },
    },
    {
      title: "Cybersecurity Summer School @ Politehnica University of Timișoara",
      date: "Jul 2024",
      description: "Completed a summer school on cybersecurity at Politehnica University of Timișoara, Romania. Learned about encryption, network security, and risk management, while exploring real-world cyberattacks and defense strategies.",
      details: [
          "Completed a summer school on cybersecurity at Politehnica University of Timișoara, Romania.",
          "Learned about encryption, network security, and risk management, while exploring real-world cyberattacks and defense strategies."
      ],
      logoUrl: "/assets/best_logo.svg",
      images: [
        "/assets/timisoara_group.jpeg",
        "/assets/timisoara.jpeg"
      ],
      link: {
        url: "https://www.best.eu.org/event/details.jsp?activity=o1nrq9v",
        text: "Learn More"
      },
    },
    {
        title: "Tensor Tournament",
        date: "May 2024",
        description: "Secured a Top-10 rank in a prestigious AI competition. Demonstrated expertise in Generative AI, Machine Learning, and advanced algorithms by solving cutting-edge research challenges.",
        details: [
            "Secured a Top-10 rank in a prestigious AI competition.",
            "Demonstrated expertise in Generative AI, Machine Learning, and advanced algorithms by solving cutting-edge research challenges."
        ],
        logoUrl: "/assets/tensor_tournament_logo.png",
        link: {
          url: "https://www.mad.tf.fau.de/2024/04/02/the-tensor-tournament-t3-2024-is-here/",
          text: "Learn More"
        },
    }
];
