import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import cert1 from "@/assets/certificate1.png";
import cert2 from "@/assets/certificate2.png";
import cert3 from "@/assets/certificate3.png";
import cert4 from "@/assets/certificate4.png";
import cert5 from "@/assets/certificate5.png";
import cert6 from "@/assets/certificate6.png";
import cert7 from "@/assets/certificate7.jpeg";
import cert8 from "@/assets/certificate8.png";

const certificates = [
  {
    title: "Docker Fundamental",
    description: "Certificate of completion for Docker Fundamental from Adinusa.",
    image: cert1,
  },
  {
    title: "Linux System Administration",
    description: "Certificate of completion for Linux System Administration from Adinusa.",
    image: cert2,
  },
  {
    title: "IDN Programmer class",
    description: "Cerrtificate of completion for IDN Programmer class from IDN.",
    image: cert3,
  },
  {
    title: "Responsive Web Design",
    description: "Certificate of completion for Responsive Web Design from Freecodecamp.",
    image: cert4,
  },
  {
    title: "Solu Edu games project",
    description: "Participated in the Educational Games Development Project as a Game Developer.",
    image: cert5,
  },
  {
    title: "Data Analytics digitalent 2024",
    description: "Data Analytics course fot student Thematic Academy",
    image: cert6,
  },
  {
    title: "Automation with Ansible",
    description: "Certificate of completion for Automation with Ansible from Adinusa",
    image: cert7,
  },
  {
    title: "Intern as Front End Developer at PT. Berbinar Insightful Indonesia",
    description: "Certificate of completion for Internship as Front End Developer at PT. Berbinar Insightful Indonesia",
    image: cert8,
  }
];

export function CertificateSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Certificates</h2>
        <p className="section-subtitle">Some of the certificates I have achieved</p>
        <div className="mt-8">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {certificates.map((cert, idx) => (
              <SwiperSlide key={idx}>
                <Card className="overflow-hidden card-hover h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setOpenIdx(idx)}
                    >
                      View Certificate
                    </Button>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <style>{`
            .swiper-pagination-bullet {
              background: #fff !important;
              opacity: 0.7;
            }
            .swiper-pagination-bullet-active {
              background: #fff !important;
              opacity: 1;
            }
          `}</style>
        </div>
        {openIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setOpenIdx(null)}
          >
            <div
              className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4 relative transition-all duration-300 ease-out scale-95 opacity-0 animate-cert-modal"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={certificates[openIdx].image}
                alt={certificates[openIdx].title}
                loading="lazy"
                className="w-full h-auto rounded"
              />
              <div className="mt-2 text-center font-semibold">{certificates[openIdx].title}</div>
            </div>
            <style>{`
              @keyframes cert-modal-in {
                0% {
                  opacity: 0;
                  transform: scale(0.95);
                }
                100% {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .animate-cert-modal {
                animation: cert-modal-in 0.25s cubic-bezier(0.4,0,0.2,1) forwards;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}
