# Portfolio Yosua

Personal portfolio website built with a, featuring my projects and certificates.

## Demo

**Live URL:** [https://portfolio-yosuaa.vercel.app/](https://portfolio-yosuaa.vercel.app/)

## Features

- Modern UI
- Project showcase with code and live demo links
- Certificate gallery with image popup modal
- Responsive design
- Dark/light mode support (follows system theme)
- Built with React, TypeScript, Tailwind CSS, shadcn-ui

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [SweetAlert2](https://sweetalert2.github.io/) (custom alert for unavailable demos)
- [Lucide Icons](https://lucide.dev/)

## Folder Structure (src)

```
src/
│
├── assets/                        # Project and certificate images
│
├── components/
│   ├── Header.tsx                 # Top navigation bar
│   ├── Footer.tsx                 # Footer section
│   ├── ThemeProvider.tsx          # Theme (dark/light/system) provider
│   └── sections/
│       ├── HeroSection.tsx        # Hero/landing section
│       ├── AboutSection.tsx       # About me section
│       ├── PortfolioSection.tsx   # Project showcase section (includes CertificateSection)
│       ├── CertificateSection.tsx # Certificate gallery section (with popup modal)
│       └── ContactSection.tsx     # Contact form and social links
│
├── hooks/
│   └── use-toast.ts               # Custom toast hook for notifications
│
├── lib/
│   └── utils.ts                   # Utility functions (e.g., cn)
│
├── pages/
│   └── index.tsx                  # Main page, combines all sections
│
└── App.css                        # Global styles
```

## Customization

- Add your own project and certificate images in `src/assets/`
- Edit project and certificate data in `PortfolioSection.tsx` and `CertificateSection.tsx`
- Update your bio, skills, and contact info in the respective section files

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```sh
git clone <YOUR_GIT_URL>
cd portofolio-yousaa
npm install
```

### Running Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

You can deploy this project to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static hosting provider.

## License

MIT

---
Made with ❤️ by Yosua
