import { motolinkImages } from '../assets/projects/motolink/motolinkAssets';
import { erentImages } from '../assets/projects/e-rent/erentAssets';
import { ncesImages } from '../assets/projects/nces/ncesAssets';
import { careImages } from '../assets/projects/care/careAssets';

import activehubImg from '../assets/projects/gym/1.png';
import assetflowImg from '../assets/projects/inv/1.png';

import portfolio1 from '../assets/projects/portfolio/1.png';
import portfolio2 from '../assets/projects/portfolio/2.PNG';
import poslogin from '../assets/projects/pos/login.png';
import posview from '../assets/projects/pos/pos.png';
import poscreate from '../assets/projects/pos/create.png';
import mvc from '../assets/projects/mvc/1.png';

export const getProjects = () => [
    {
        title: "Motorcycle Parts E-commerce & Services Management System",
        categories: ["E-Commerce", "Web App", "AI Integration"],
        description: "A full-stack e-commerce platform built for motorcycle parts and services. It handles inventory management, secure checkout flows, service booking appointments, and a dedicated admin dashboard.",
        tech: [
            "Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript", "AJAX", 
            "Chart.js", "ApexChart.js", "Gemini Flash 2.5 API", "IPROG SMS API", "OAuth 2.0"
        ],
        images: motolinkImages,
        link: "https://motolink.lovestoblog.com",
        linkType: "demo",
        github: "#"
    },
    {
        title: "Online Property Rental Management Platform",
        categories: ["Rental Platform", "Booking", "Web App"],
        description: "A web platform for finding and listing rental properties. Users can search for rental spaces, book places to stay, and upgrade their accounts to become hosts so they can list and manage their own properties.",
        tech: ["Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript", "Chart.js", "OAuth 2.0"],
        images: erentImages,
        link: "https://property-rental.infinityfree.io/",
        linkType: "demo",
        github: "#"
    },
    {
        title: "Student Permanent Records Management System",
        categories: ["Student Record", "Web App"],
        description: "A web application for digitizing, backing up, and managing student Form 137 permanent records online. It allows school staff to safely archive files and quickly search or retrieve records.",
        tech: ["Next.js", "Supabase", "PostgreSQL", "Bootstrap5", "CSS3", "hCaptcha"],
        images: ncesImages,
        link: "#",
        linkType: "demo",
        github: "#"
    },
    {
        title: "Gym & Membership Management System",
        categories: ["Management System", "POS", "Membership"],
        description: "A full-stack gym management web application featuring a public website and an admin portal. It streamlines member check-ins, subscription tracking, sales merchandise inventory with a built-in Point of Sale (POS), and revenue analytics.",
        tech: ["Python Flask", "MySQL", "Bootstrap5", "CSS3", "JavaScript"],
        images: [
            { img: activehubImg }
        ],
        link: "#",
        linkType: "demo",
        github: "#"
    },
    {
        title: "School Asset & Inventory Management",
        categories: ["Inventory", "Web App"],
        description: "A web application for tracking school equipment, managing borrower records, and monitoring asset status, including items under maintenance or scheduled for write-off.",
        tech: ["Next.js", "Supabase", "Bootstrap5", "CSS3"],
        images: [
            { img: assetflowImg }
        ],
        link: "https://school-ims.vercel.app/",
        linkType: "demo",
        github: "#"
    },
    {
        title: "Clinic Appointment and Management System",
        categories: ["Healthcare", "Booking", "Management System"],
        description: "A full-stack healthcare management web application for hospitals. It includes patients booking consultation along with dedicated dashboards for doctors, receptionists, billing staff, pharmacists, and admins to manage all operations.",
        tech: ["Laravel 12", "MySQL", "Bootstrap 5", "CSS3", "JavaScript", "OAuth 2.0"],
        images: careImages,
        link: "#",
        linkType: "demo",
        github: "#"
    },
    // {
    //     title: "GoHighLevel Portfolio",
    //     categories: ["Portfolio"],
    //     description: "A modern and responsive portfolio showcasing custom GoHighLevel projects, including automated workflows, funnels, and high-converting landing pages built for clients.",
    //     tech: ["React", "Bootstrap", "Vite", "CSS3"],
    //     images: [
    //         { img: portfolio2 }
    //     ],
    //     link: "https://hanneygraceleominares-ghl-portfolio.vercel.app/",
    //     linkType: "live",
    //     github: "#"
    // },
    // {
    //     title: "Personal Portfolio",
    //     categories: ["Portfolio", "No-Code"],
    //     description: "A simple personal portfolio website created in Webflow to showcase background, interests, core skills, and career goals.",
    //     tech: ["WebFlow"],
    //     images: [
    //         { img: portfolio1 }
    //     ],
    //     link: "#",
    //     linkType: "demo",
    //     github: "#"
    // },
    {
        title: "Filipino Snacks & Beverages Point of Sale",
        categories: ["Desktop App", "POS System"],
        description: "A desktop Point of Sale (POS) application for local snack and beverage shops. It helps process customer transactions, manage inventory, and calculate daily sales quickly on a single system.",
        tech: ["Visual Basic", "MySQL", "Windows Forms"],
        images: [
            { img: poslogin },
            { img: posview },
            { img: poscreate }
        ],
        link: "#",
        linkType: "demo",
        github: "https://github.com/rtch-cntlls/POS-System-VB.NET-WinForms.git"
    },
    {
        title: "Simple Motorcycle Loan Calculator",
        categories: ["Web Tool", "Calculator"],
        description: "A simple web application built with ASP.NET MVC for computing motorcycle loans. It easily calculates unit prices, monthly amortizations, and total loanable amounts all on a single page.",
        tech: ["C#", "ASP.NET MVC", "Bootstrap", "CSS3"],
        images: [
            { img: mvc }
        ],
        link: "#",
        linkType: "demo",
        github: "https://github.com/rtch-cntlls/Motorcycle-Loan-Calculator.git"
    }
];