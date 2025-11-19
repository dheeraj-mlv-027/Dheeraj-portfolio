import { Experience, Project, SkillCategory } from './types';
export { SectionId } from './types';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Dheeraj M.L.V",
  role: "Software Engineer",
  tagline: "Architecting Scalable Systems & AI Solutions",
  email: "dheerajmlv027.work@gmail.com",
  phone: "+91-9390611515",
  social: [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "Email", icon: Mail, url: "mailto:dheerajmlv027.work@gmail.com" },
  ]
};

export const ABOUT_TEXT = `
I am a dedicated Software Engineer with a Bachelor of Technology from IIT Mandi. 
My expertise lies in building robust backend systems, optimizing data pipelines, and integrating AI models into practical applications. 
I have a proven track record of reducing manual operational overhead through automation and architecting high-performance infrastructure using Python, C++, and modern cloud technologies.
`;

export const EXPERIENCES: Experience[] = [
  {
    id: "tortoise",
    role: "Software Engineer",
    company: "Tortoise.Pro",
    period: "Dec 2024 – Present",
    location: "Gurgaon, Haryana",
    description: [
      "Architected the Mail Minion workflow engine integrating SendGrid and Zoho webhooks with LangGraph-powered agents to process inbound emails, reducing manual intervention by 60%.",
      "Engineered multi-channel data import/export pipelines handling diverse data sources, reducing support hours by 90%.",
      "Designed core Fee Invoicing and Invoice Management modules enabling automated revenue computation.",
      "Revamped pricing infrastructure with multiple supplier channels and automated marketplace scraping using rotating proxies."
    ]
  },
  {
    id: "cogoport",
    role: "Software Engineer",
    company: "Cogoport",
    period: "Jul 2024 – Dec 2024",
    location: "Gurgaon, Haryana",
    description: [
      "Integrated Outlook APIs to develop an in-house mailing solution with threaded communication, used by 300+ employees.",
      "Partnered with customer support to design a Twilio-based call routing system with round-robin allocation, reducing assignment time to under 30s."
    ]
  },
  {
    id: "siemens",
    role: "Research Engineer Intern",
    company: "Siemens India",
    period: "Jan 2023 – Jun 2023",
    location: "Remote",
    description: [
      "Generated synthetic tabular data using Generative Adversarial Networks (GANs), reducing data acquisition time by 80%.",
      "Deployed Google SCANN for high-speed similarity search, improving retrieval performance by 90%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lms",
    title: "Learning Management System",
    description: "Built an end-to-end platform enabling instructor–student interaction. Integrated Copyleaks API to automate AI and peer plagiarism detection, streamlining grading workflows.",
    tags: ["Full Stack", "API Integration", "Automation"]
  },
  {
    id: "classy-pics",
    title: "Classy Pics",
    description: "Developed an image diffusion model to generate diverse and high-quality synthetic fruit images for dataset augmentation and computer vision tasks.",
    tags: ["Deep Learning", "Computer Vision", "Diffusion Models"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Frameworks",
    items: ["Django", "Django REST", "FastAPI", "ExpressJS"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Kafka", "Nginx", "CI/CD"]
  }
];