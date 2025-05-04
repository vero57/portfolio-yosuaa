import { Check } from "lucide-react";
import aboutYosua from "@/assets/about-yosua.png";

const skills = [
  "JavaScript (ES6+)", 
  "TypeScript",
  "React",
  "Node.js",
  "HTML & CSS",
  "Tailwind CSS",
  "Responsive Design",
  "Laravel",
  "PHP",
  "Dart",
  "Flutter",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/50 dark:bg-secondary/20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me a little better</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={aboutYosua}
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
              A passionate developer with a love for creating exceptional digital experiences.
            </h3>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                  As a student at SMKN 1 Cibinong, majoring in Information Systems, Networking, and Applications (SIJA), I possess a strong passion for Web and App Development, with a focus on building functional and engaging projects. I also have a keen interest in game development.
              </p>
              
              <p>
                  I am a proactive self-learner, utilizing various digital resources to continuously enhance my technical skills. I am actively improving my proficiency in programming languages such as JavaScript, Dart, Java, and PHP. My experience participating in collaborative projects like the '40 Game Project' has provided valuable opportunities to contribute and learn alongside other developers, bringing ideas to life as tangible applications.
              </p>
              
              <p>
                  Beyond schoolwork and projects, I enjoy experimenting with new technologies to broaden my perspectives. I believe in the importance of continuous learning and am always eager to create something new and beneficial.
              </p>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-6">My Technical Skills</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check size={18} className="text-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors"
              >
                Download CV
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
