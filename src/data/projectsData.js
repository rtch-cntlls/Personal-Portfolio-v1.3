import { motolinkImages } from '../assets/projects/motolink/motolinkAssets';
import { erentImages } from '../assets/projects/e-rent/erentAssets';
import { ncesImages } from '../assets/projects/nces/ncesAssets';

import activehubImg from '../assets/projects/gym/1.png';
import assetflowImg from '../assets/projects/inv/1.png';

import portfolio1 from '../assets/projects/portfolio/1.png';
import portfolio2 from '../assets/projects/portfolio/2.PNG';
import care from '../assets/projects/care/1.png';
import poslogin from '../assets/projects/pos/login.png';
import posview from '../assets/projects/pos/pos.png';
import poscreate from '../assets/projects/pos/create.png';
import mvc from '../assets/projects/mvc/1.png';

export const getProjects = () => [
    {
        title: "ActiveHub",
        subtitle: "Gym & Membership Management System",
        description: "A full-stack gym management web application featuring a public website and an admin portal. It streamlines member check-ins, subscription tracking, sales merchandise inventory with a built-in Point of Sale (POS), and revenue analytics.",
        tech: ["Python Flask", "MySQL", "Bootstrap5", "CSS3", "JavaScript"],
        images: [
            { img: activehubImg, type: "public", caption: "Dashboard Landing" }
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2026
    },
    {
        title: "AssetFlow",
        subtitle: "School Asset & Inventory Management",
        description: "A web application for tracking school equipment, managing borrower records, and monitoring asset status, including items under maintenance or scheduled for write-off.",
        tech: ["Next.js", "Supabase", "Bootstrap5", "CSS3"],
        images: [
            { img: assetflowImg, type: "admin", caption: "Inventory Dashboard" }
        ],
        link: "https://school-ims.vercel.app/",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "StudentArchive",
        subtitle: "Student Permanent Record Digitalization System",
        description: "A web application for digitizing, backing up, and managing student Form 137 permanent records online. It allows school staff to safely archive files and quickly search or retrieve records.",
        tech: ["Next.js", "Supabase", "PostgreSQL", "Bootstrap5", "CSS3", "hCaptcha"],
        images: ncesImages,
        link: "#",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "Webflow",
        subtitle: "SHS Personal Portfolio (2)",
        description: "A simple personal portfolio website created in Webflow to showcase background, interests, core skills, and career goals.",
        tech: ["WebFlow"],
        images: [
            { img: portfolio1, caption: "Website Portfolio" }
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2026
    },
    {
        title: "GHL",
        subtitle: "GoHighLevel Specialist Portfolio",
        description: "A modern and responsive portfolio showcasing custom GoHighLevel projects, including automated workflows, funnels, and high-converting landing pages built for clients.",
        tech: ["React", "Bootstrap", "Vite", "CSS3"],
        images: [
            { img: portfolio2, caption: "Website Portfolio" }
        ],
        link: "https://hanneygraceleominares-ghl-portfolio.vercel.app/",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "MotoLink",
        subtitle: "MotoCycle Parts E-commerce & Services Management System",
        description: "A full-stack e-commerce platform built for motorcycle parts and services. It handles inventory management, secure checkout flows, service booking appointments, and a dedicated admin dashboard.",
        tech: [
            "Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript", "AJAX", 
            "Chart.js", "ApexChart.js", "Gemini Flash 2.5 API", "IPROG SMS API", "OAuth 2.0"
        ],
        images: motolinkImages,
        link: "https://motolink.lovestoblog.com",
        linkType: "live",
        github: "#",
        year: 2025
    },
    {
        title: "E-Rent",
        subtitle: "Property Rental Platform",
        description: "A web platform for finding and listing rental properties. Users can search for rental spaces, book places to stay, and upgrade their accounts to become hosts so they can list and manage their own properties.",
        tech: ["Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript", "OAuth 2.0"],
        images: erentImages,
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2025
    },
    {
        title: "CarePoint",
        subtitle: "Patient Care, Medical Records & Booking Management System",
        description: "A full-stack healthcare management web application for hospitals. It includes patients booking consultation along with dedicated dashboards for doctors, receptionists, billing staff, pharmacists, and admins to manage all operations.",
        tech: ["Laravel 12", "MySQL", "Bootstrap 5", "CSS3", "JavaScript", "OAuth 2.0"],
        images: [
            { img: care, type: "public", caption: "Patient Portal" }
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2025
    },
    {
        title: "SnackStream",
        subtitle: "Filipino Snacks & Beverages Point of Sale",
        description: "A desktop Point of Sale (POS) application for local snack and beverage shops. It helps process customer transactions, manage inventory, and calculate daily sales quickly on a single system.",
        tech: ["Visual Basic", "MySQL", "Windows Forms"],
        images: [
            { img: poslogin},
            { img: posview},
            { img: poscreate},
        ],
        link: "#",
        linkType: "demo",
        github: "https://github.com/rtch-cntlls/POS-System-VB.NET-WinForms.git",
        year: 2023
    },
    {
        title: "LoanCalculator",
        subtitle: "Simple Motorcycle Loan Calculator",
        description: "A simple web application built with ASP.NET MVC for computing motorcycle loans. It easily calculates unit prices, monthly amortizations, and total loanable amounts all on a single page.",
        tech: ["C#", "ASP.NET MVC", "Bootstrap", "CSS3"],
        images: [
            { img: mvc, caption: "Calculator Tool View" }
        ],
        link: "#",
        linkType: "demo",
        github: "https://github.com/rtch-cntlls/Motorcycle-Loan-Calculator.git",
        year: 2023
    }
];