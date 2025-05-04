import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


import cert1 from "@/assets/certificate1.png";
import cert2 from "@/assets/certificate2.png";
import cert3 from "@/assets/certificate3.png";

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
  }
];

export function CertificateSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Certificates</h2>
        <p className="section-subtitle">Beberapa sertifikat yang telah saya raih</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {certificates.map((cert, idx) => (
            <Card key={idx} className="overflow-hidden card-hover">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
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
          ))}
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
