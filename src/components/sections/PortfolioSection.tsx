import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link as LinkIcon } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
// import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
import { CertificateSection } from "./CertificateSection";
import { useCallback } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const projects = [
  {
    title: "Online Pharmacy",
    description: "An online pharmacy website built with Laravel and Tailwind CSS. The website allows users to browse and purchase pharmaceutical products online, providing a convenient and user-friendly shopping experience.",
    image: project1,
    tags: ["Laravel", "MySql", "Tailwind CSS"],
    githubUrl: "https://github.com/vero57/lsp-apotek-yosua.git",
    liveUrl: "#"
  },
  {
    title: "Emo Shuffle Card Game",
    description: "A fun and interactive card game built with Flutter and Tailwind CSS. Players can shuffle and match emojis to score points.",
    image: project2,
    tags: ["Flutter", "Dart", "Tailwind CSS"],
    githubUrl: "https://github.com/berbinarin/berbinarin-emoshuffle.git",
    liveUrl: "#"
  },
  // {
  //   title: "Educational Game Using Flutter",
  //   description: "Built with Flutter and Dart, the game essentially works like this: You'll see different types of fish, say, three kinds like red, yellow, and white, each with a varying number (e.g., 3 red, 1 yellow, 10 white). You get a time limit to remember these numbers. After time is up, a random question is posed, like 'How many red fish were shown?' That's the core gameplay.",
  //   image: project3,
  //   tags: ["Dart", "Flutter"],
  //   githubUrl: "https://github.com/vero57/fish-flash",
  //   liveUrl: "https://demo-fish-flash.vercel.app/"
  // },
  {
    title: "Order Food App",
    description: "A mobile app for ordering food from local restaurants, built with Flutter and Dart. Users can browse menus, add items to their cart, and place orders.",
    image: project4,
    tags: ["Dart", "Flutter"],
    githubUrl: "https://github.com/vero57/order-food-app",
    liveUrl: "#"
  }
];

export function PortfolioSection() {
  const handleLiveDemo = useCallback((project) => {
    if (project.liveUrl === "#") {
      MySwal.fire({
        title: (
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span role="img" aria-label="robot" style={{ fontSize: 28 }}>🤖</span>
            <span style={{ fontWeight: 600 }}>Live Demo Not Available</span>
          </span>
        ),
        html: (
          <span>
            Sorry, a live demo for <b>{project.title}</b> is not available.
          </span>
        ),
        background: window.matchMedia('(prefers-color-scheme: dark)').matches
          ? "#18181b"
          : "#f4f4f5",
        color: window.matchMedia('(prefers-color-scheme: dark)').matches
          ? "#f4f4f5"
          : "#18181b",
        customClass: {
          popup: "rounded-2xl shadow-xl border border-primary/20",
          title: "text-lg font-semibold",
          confirmButton: "bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary/50 transition-all"
        },
        showConfirmButton: true,
        confirmButtonText: "OK",
        icon: undefined,
        width: 400,
      });
    } else {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <>
      <section id="portfolio" className="py-20">
        <div className="section-container">
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle">Check out some of my recent projects</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <CardHeader className="pt-6">
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    type="button"
                    onClick={() => handleLiveDemo(project)}
                  >
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/vero57" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View More Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
      <CertificateSection />
    </>
  );
}
