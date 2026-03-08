export interface BookPage {
  title: string;
  subtitle?: string;
  type: 'intro' | 'stats' | 'highlights' | 'partners' | 'infrastructure' | 'testimonials' | 'faculty' | 'achievements';
  content: any;
}

export interface College {
  id: number;
  name: string;
  location: string;
  tagline: string;
  img: string;
  ranking: string;
  courses: string[];
  highlights: string[];
  stats: {
    highestPackage: string;
    averagePackage: string;
    placementRate: string;
  };
  scholarships: string[];
  description: string;
  bookPages: BookPage[];
}

export const colleges: College[] = [
  {
    id: 1,
    name: "Atmiya University",
    location: "Rajkot, Gujarat",
    tagline: "Spiritual Values, Professional Excellence",
    img: "/images/colleges/atmiya-cover.jpg",
    ranking: "NAAC A Grade",
    courses: ["B.Tech (CSE, AI & ML)", "MBA", "MCA", "B.Pharm", "B.Sc IT"],
    highlights: [
      "UGC Recognized & NAAC A Accredited",
      "250+ Core Faculty Members",
      "Annual Tech Fest 'Explora'",
      "Supportive Startup Incubation Cell"
    ],
    stats: {
      highestPackage: "₹12.0 LPA",
      averagePackage: "₹4.8 LPA",
      placementRate: "85%+"
    },
    scholarships: [
      "Veda Academic Excellence Grant",
      "Best Startup Idea Seed Funding",
      "Academic Merit Tuition Waiver"
    ],
    description: "Atmiya University is a leading educational hub in Gujarat, dedicated to fostering academic excellence and ethical values. With over 250+ core faculty members, it provides a technology-driven learning environment aimed at preparing students for global challenges.",
    bookPages: [
      {
        title: "Institution Profile",
        subtitle: "A Legacy of Excellence",
        type: 'intro',
        content: {
          establishment: "Spiritual Roots, Modern Education",
          facultyScale: "250+ Core Faculty",
          accreditation: "UGC Sec 2(f) Recognized",
          description: "Atmiya University is not just a campus; it's a 100+ acre lush green Wi-Fi enabled ecosystem designed for sustainability and holistic growth."
        }
      },
      {
        title: "Campus Infrastructure",
        subtitle: "Sustainable Learning",
        type: 'infrastructure',
        content: [
          "Wi-Fi Enabled 100-Acre Campus",
          "Advanced Labs for AI & Robotics",
          "SMART Classrooms & Innovation Hub",
          "Central Library with Digital Access"
        ]
      },
      {
        title: "Placement Partners",
        subtitle: "Global Opportunities",
        type: 'partners',
        content: {
          partners: ["TCS", "Infosys", "Wipro", "Capgemini", "Tech Mahindra", "Atos", "Reliance", "Adani Group", "L&T"],
          training: "85% Placement Success Rate"
        }
      },
      {
        title: "Success Statistics",
        type: 'stats',
        content: {
          highest: "12.0 LPA",
          average: "4.8 LPA",
          rate: "85% Career Track"
        }
      },
      {
        title: "Tech-Fests & Events",
        subtitle: "Beyond Academics",
        type: 'highlights',
        content: [
          "'Explora' National Tech Symposium",
          "Smart India Hackathon Nodal Center",
          "Atmiya Yuva Mahotsav Cultural Fest",
          "IEEE & GDSC Campus Chapters"
        ]
      },
      {
        title: "Faculty Excellence",
        subtitle: "Expert Mentorship",
        type: 'faculty',
        content: [
          "250+ Core Research Faculty",
          "30% PhD Holders in Key Depts",
          "Focus on Innovative Pedagogy",
          "Mentorship-driven Learning Model"
        ]
      },
      {
        title: "Research & Incubation",
        subtitle: "Fostering Innovation",
        type: 'achievements',
        content: [
          "Awarded 'Best Startup Support'",
          "In-house Incubation Cell",
          "Seed Funding for Student Projects",
          "Advanced Applied Science Labs"
        ]
      },
      {
        title: "Holistic Development",
        subtitle: "Spirituality & Wellness",
        type: 'testimonials',
        content: [
          "Emphasis on Ethical Value Systems",
          "Dedicated Yoga & Wellness Areas",
          "Holistic Growth Environment",
          "Vibrant Student Life & Clubs"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Aditya College of Engg & Tech",
    location: "Surampalem, Andhra Pradesh",
    tagline: "Shaping Future Tech Innovators",
    img: "/images/colleges/aditya-cover.jpeg",
    ranking: "NAAC Accredited",
    courses: ["B.Tech (CSE, AI & ML, DS, Cyber Security)", "M.Tech", "MBA"],
    highlights: [
      "Permanently Affiliated to JNTUK",
      "Technical Hub Integrated Learning",
      "Global Certifications (CISCO, Red Hat)",
      "3.5 Star IIC Annual Performance Rating"
    ],
    stats: {
      highestPackage: "₹31.3 LPA",
      averagePackage: "₹4.1 LPA",
      placementRate: "90%+"
    },
    scholarships: [
      "Veda Academic Excellence Grant",
      "Technical Hub Merit Awards",
      "JNTUK Toppers Recognition"
    ],
    description: "Aditya College of Engineering and Technology (ACET) is a premier autonomous institution. It stands out for its Technical Hub (THub) which provides specialized training in PEGA, AWS, and Salesforce, making students industry-ready.",
    bookPages: [
      {
        title: "Technical Excellence",
        subtitle: "Autonomous Innovation",
        type: 'intro',
        content: {
          affiliation: "Permanently Affiliated to JNTUK",
          thub: "Technical Hub Ecosystem",
          mous: "12+ Global Industry MOUs",
          description: "ACET is recognized for its vibrant technical culture, hosting the annual 'VEDA' Tech Fest and maintaining a consistent 3.5-star rating from the Institution's Innovation Council."
        }
      },
      {
        title: "Global MOUs",
        subtitle: "Industry Immersion",
        type: 'partners',
        content: {
          partners: ["CISCO", "Red Hat", "SAP", "Dell EMC", "AWS Educate", "Salesforce", "Oracle", "Automation Anywhere"],
          training: "Specialized Certifications on Campus"
        }
      },
      {
        title: "THub Ecosystem",
        subtitle: "Advanced Training",
        type: 'highlights',
        content: [
          "PEGA University Academic Program",
          "AWS Cloud Practitioner Academy",
          "Salesforce Developer Training",
          "Cyber Security & Networking Hub"
        ]
      },
      {
        title: "Placement Statistics",
        type: 'stats',
        content: {
          highest: "31.3 LPA",
          average: "4.1 LPA",
          rate: "90% Career Progression"
        }
      },
      {
        title: "Campus Facilities",
        subtitle: "Smart Infrastructure",
        type: 'infrastructure',
        content: [
          "High-Speed Computing Laboratories",
          "Comprehensive Technical Library",
          "Smart Classrooms & Digital Media Center",
          "Innovation & Entrepreneurship Cell"
        ]
      },
      {
        title: "Student Success",
        subtitle: "Vocal Testimonials",
        type: 'testimonials',
        content: [
          "Nadimpalli Suryakala: 'College provided valuable knowledge & skills via THub'",
          "IV Surya Kalanjali: 'Nurturing environment with experienced faculty'",
          "Vamsi Thadi: 'Curriculum enhances professional abilities significantly'",
          "Empowerment through Industry Exposure"
        ]
      },
      {
        title: "Events & Fests",
        subtitle: "VEDA 2023",
        type: 'achievements',
        content: [
          "Annual Tech Fest 'VEDA'",
          "Internal Smart India Hackathons",
          "National Cyber Safety Standard Partner",
          "Top-rated Innovation Council (IIC)"
        ]
      },
      {
        title: "Academic Strength",
        subtitle: "Expert Mentorship",
        type: 'faculty',
        content: [
          "Highly Dedicated Engineering Faculty",
          "Industry-Expert Trainers at THub",
          "Focus on Practical Application",
          "Continuous Faculty Development Programs"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Akash Group of Institutions",
    location: "Bangalore, Karnataka",
    tagline: "The Destination for Medical & Tech",
    img: "/images/colleges/akash-cover.jpg",
    ranking: "Premier Multi-Specialty Hub",
    courses: ["MBBS", "B.Tech (CSE, AI & ML, Cyber Security)", "Nursing", "MBA", "Physiotherapy"],
    highlights: [
      "Integrated Medical & Engineering Ecosystem",
      "Modern Infrastructure with Smart Classrooms",
      "Clinical Exposure at Akash Hospital",
      "Dedicated Placement Cell for Healthcare & IT"
    ],
    stats: {
      highestPackage: "₹15.0 LPA",
      averagePackage: "₹4.5 LPA",
      placementRate: "100% Assistance"
    },
    scholarships: [
      "Akash Healthcare Fellowship",
      "Merit-based Technical Grants",
      "Veda Excellence Grant for Medical Studies"
    ],
    description: "Akash Group of Institutions (AGI) Bengaluru is a leading destination for aspirants in Medical, Engineering, and Management. With a focus on hands-on clinical skills and industry-relevant B.Tech programs, AGI shapes well-rounded professionals.",
    bookPages: [
      {
        title: "Integrated Campus",
        subtitle: "From Medicine to Management",
        type: 'intro',
        content: {
          diversity: "Multi-disciplinary Excellence",
          infrastructure: "Avant-garde Ecosystem",
          hospitals: "Akash Multi-Specialty Hospital",
          description: "AGI provides a unique blend of technical innovation and medical precision. Our beautiful, student-friendly campus is equipped with modern laboratories that enhance practical learning."
        }
      },
      {
        title: "World-Class Amenities",
        subtitle: "Library & Digital Hub",
        type: 'infrastructure',
        content: [
          "1 Lakh+ Books in Central Library",
          "Digital e-Library & CD/DVD Section",
          "Smart ICT Enabled Classrooms",
          "Advanced Research Laboratory"
        ]
      },
      {
        title: "Medical Excellence",
        subtitle: "Clinical Practice",
        type: 'highlights',
        content: [
          "Direct Clinical Exposure at Akash Hospital",
          "State-of-the-Art MBBS Lecture Halls",
          "Advanced Physiotherapy Workshops",
          "Hands-on Nursing Training Modules"
        ]
      },
      {
        title: "Placement Stats",
        type: 'stats',
        content: {
          highest: "15.0 LPA",
          average: "4.5 LPA",
          rate: "100% Placement Assistance"
        }
      },
      {
        title: "Corporate Alliances",
        subtitle: "Future Careers",
        type: 'partners',
        content: {
          partners: ["24/7 AI", "TCS", "Infosys", "Tech Mahindra", "Wipro Healthcare", "Global Hospitals", "Akash Healthcare"],
          placement: "Strong Focus on Career Growth"
        }
      },
      {
        title: "Student Stories",
        subtitle: "Nurturing Growth",
        type: 'testimonials',
        content: [
          "AIET Student: 'AGI infrastructure inspired my innovation'",
          "MCA Student: 'Placement support gave me huge confidence'",
          "Nursing Intern: 'Hands-on training prepared my career'",
          "Physiotherapy: 'Nurturing environment for clinical skills'"
        ]
      },
      {
        title: "Beyond Academics",
        subtitle: "Campus Life",
        type: 'achievements',
        content: [
          "Vibrant Campus Tour Programs",
          "Annual Graduation Ceremonies",
          "Inter-College Sports Championships",
          "Cultural Festivals and Networking"
        ]
      },
      {
        title: "Faculty & Vision",
        subtitle: "Academic Leadership",
        type: 'faculty',
        content: [
          "Highly Knowledgeable Medical Faculty",
          "Expert Engineering Professors",
          "Management Industry Consultants",
          "Personalized Student Mentoring"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "S-VYASA University",
    location: "Bangalore, Karnataka",
    tagline: "Bridging Tradition & Modern Science",
    img: "/images/colleges/svyasa-cover.png",
    ranking: "NAAC A+ Accredited",
    courses: ["B.Sc Yoga", "B.Tech (AI & ML, Cyber Security)", "MBA", "M.Sc Psychology", "BNYS"],
    highlights: [
      "Pioneer in Yoga & Scientific Research",
      "30+ Years of Anvesana Research Center",
      "Prashanti Campus - Holistic Vibe",
      "United Nations Academic Impact Member"
    ],
    stats: {
      highestPackage: "₹18.0 LPA",
      averagePackage: "₹6.0 LPA",
      placementRate: "80%+"
    },
    scholarships: [
      "Yoga Excellence Grant",
      "Quantum Computing Research Fellowship",
      "Veda Holistic Education Grant"
    ],
    description: "S-VYASA (Deemed To Be University) is a world-renowned pioneer in blending traditional Yoga with modern advancements. Founded by Dr. H R Nagendra, it focuses on holistic development through its famous Prashanti Campus.",
    bookPages: [
      {
        title: "Yoga & Science",
        subtitle: "The Anvesana Heritage",
        type: 'intro',
        content: {
          heritage: "30+ Years of Research",
          campus: "Prashanti & Global City Campus",
          unai: "UN Academic Impact Member",
          description: "S-VYASA bridges Indian Knowledge Systems with modern science. The Anvesana Research facility is dedicated to restoring Yoga heritage through evidence-based scientific studies."
        }
      },
      {
        title: "Prashanti Campus",
        subtitle: "The Holistic Vibe",
        type: 'infrastructure',
        content: [
          "Modern Library & Information Center",
          "Spacious Seminar Halls & Auditorium",
          "Premium Hostel & Transport Facilities",
          "Yoga Therapy Centers & Research Labs"
        ]
      },
      {
        title: "Institutional Reach",
        subtitle: "Global Reach",
        type: 'partners',
        content: {
          partners: ["Ministry of AYUSH", "Global Yoga Alliance", "TCS", "Computer Society of India", "NIMHANS Collaboration"],
          reach: "International Research Networking"
        }
      },
      {
        title: "Placement Statistics",
        type: 'stats',
        content: {
          highest: "18.0 LPA",
          average: "6.0 LPA",
          rate: "80% Alumni Success Rate"
        }
      },
      {
        title: "Events & conferences",
        subtitle: "INCOFYRA",
        type: 'highlights',
        content: [
          "INCOFYRA - International Conference",
          "Himalaya Yoga Olympiad 2025",
          "Hackathon 2025: Innovation Surge",
          "Science Fair & Unlocking Innovation"
        ]
      },
      {
        title: "Research impact",
        subtitle: "Scientific Evidence",
        type: 'achievements',
        content: [
          "Pathology treatment through Yoga",
          "Quantum Computing & Cybersec FDP",
          "United Nations Academic Impact partner",
          "Promotion of Health through Yoga Research"
        ]
      },
      {
        title: "Life @ S-VYASA",
        subtitle: "Beyond Textbooks",
        type: 'testimonials',
        content: [
          "Hike Hills & Smash Serves @ Sports",
          "Yoga & Wellness: Find Inner Peace",
          "Art & Clubs: Ignite Your Spark",
          "Vibrant Student Bonds & Community"
        ]
      },
      {
        title: "Academic Mentors",
        subtitle: "Visionary Leaders",
        type: 'faculty',
        content: [
          "Dr. H R Nagendra - Expert Fraternity",
          "Dr. R Nagaratna - Research Pioneer",
          "Specialized Yoga Therapy Faculty",
          "Modern Engineering & MBA Professors"
        ]
      }
    ]
  }
];
