import motolinkImg from '../assets/projects/motolink/admin-login.PNG';
import motolinkdashbord from '../assets/projects/motolink/dashboard.PNG';
import motolinkinventory from '../assets/projects/motolink/inventory.PNG';
import motolinkinventorydetails from '../assets/projects/motolink/inventory-details.PNG';
import motolinkpos from '../assets/projects/motolink/pos.PNG';
import motolinktransaction from '../assets/projects/motolink/transaction.PNG';
import motolinkproduct from '../assets/projects/motolink/product.PNG';
import motolinkproductdetails from '../assets/projects/motolink/product-details.PNG';
import motolinkorder from '../assets/projects/motolink/order.PNG';
import motolinkcustomer from '../assets/projects/motolink/customer.PNG';
import motolinkpromo from '../assets/projects/motolink/promo.PNG';
import motolinkpromocreate from '../assets/projects/motolink/promo-create.PNG';
import motolinkservicelist from '../assets/projects/motolink/service-list.PNG';
import motolinkbooking from '../assets/projects/motolink/booking.PNG';
import motolinkservicelog from '../assets/projects/motolink/service-log-details.PNG';
import motolinkanalytics from '../assets/projects/motolink/analytics.PNG';
import motolinksalereport from '../assets/projects/motolink/sale-report.PNG';
import motolinkservicereport from '../assets/projects/motolink/service-report.PNG';
import motolinksettings from '../assets/projects/motolink/settings.PNG';


import activehubImg from '../assets/projects/gym/1.png';
import assetflowImg from '../assets/projects/inv/1.PNG';
import propertyImg from '../assets/projects/erent/1.png';
import portfolio1 from '../assets/projects/portfolio/1.png';
import portfolio2 from '../assets/projects/portfolio/2.PNG';
import portfolio3 from '../assets/projects/portfolio/3.PNG';
import portfolio4 from '../assets/projects/portfolio/4.PNG';
import nces from '../assets/projects/nces/1.PNG';
import care from '../assets/projects/care/1.png';
import pos from '../assets/projects/pos/1.png';
import mvc from '../assets/projects/mvc/1.png';

export const getProjects = () => [
    {
        title: "ActiveHub",
        subtitle: "Gym & Membership Management System",
        description: "A fitness and lifestyle management web app built with Python Flask, MySQL, and Bootstrap 5.",
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
        title: "My Portfolio v3",
        subtitle: "Developer Portfolio",
        description: "My Personal portfolio showcasing client and personal project, skills, and services.",
        tech: ["React", "Bootstrap", "Vite", "CSS3"],
        images: [
            { img: portfolio3, type: "public", caption: "Home View" }
        ],
        link: "#",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "SHS Portfolio",
        subtitle: "SHS Personal Portfolio (2)",
        description: "A responsive personal portfolio and overview highlighting professional background, career objectives, creative hobbies, and personal milestones.",
        tech: ["WebFlow"],
        images: [
            { img: portfolio1, type: "public", caption: "Portfolio Hero" }
        ],
        link: "#",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "GHL Portfolio",
        subtitle: "GoHighLevel Specialist Portfolio",
        description: "A specialized portfolio showcasing client project automations, custom funnels, and responsive landing sites.",
        tech: ["React", "Bootstrap", "Vite", "CSS3"],
        images: [
            { img: portfolio2, type: "public", caption: "Landing Page" }
        ],
        link: "https://hanneygraceleominares-ghl-portfolio.vercel.app/",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "My Portfolio v2",
        subtitle: "My Personal Portfolio",
        description: "My Personal portfolio showcasing client and personal project, skills, and services.",
        tech: ["React", "Bootstrap", "Vite", "CSS3"],
        images: [
            { img: portfolio4, type: "public", caption: "Main Preview" }
        ],
        link: "https://rtchcntlls.pages.dev/",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "AssetFlow",
        subtitle: "School Asset & Inventory Management",
        description: "School asset and inventory management web application built with Next.js and Supabase.",
        tech: ["Next.js", "Supabase", "Bootstrap5", "CSS3"],
        images: [
            { img: assetflowImg, type: "admin", caption: "Inventory Dashboard" }
        ],
        link: "https://school-ims.vercel.app/",
        linkType: "demo",
        github: "#",
        year: 2026
    },
    {
        title: "NCES",
        subtitle: "Student Permanent Record Digitalization System",
        description: "A digital archive and management system designed to digitize and streamline student Form 137 records, academic histories, and transcript tracking.",
        tech: ["Next.js", "Supabase", "Bootstrap5", "CSS3"],
        images: [
            { img: nces, type: "admin", caption: "Records Archive Dashboard" }
        ],
        link: "#",
        linkType: "live",
        github: "#",
        year: 2026
    },
    {
        title: "MotoLink",
        subtitle: "MotoCycle Parts E-commerce & Services Management System",
        description: "A full-stack e-commerce platform built for motorcycle parts and services. It handles inventory management, secure checkout flows, service booking appointments, and a dedicated admin dashboard.",
        tech: ["Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript", "AJAX", "Chart.js", "ApexChart.js",
            "Gemini Flash 2.5 API", "IPROG SMS API", "OAuth 2.0"],
        images: [
            { img: motolinkImg, type: "admin", caption: "Admin Login Portal" },
            { img: motolinkdashbord, type: "admin", caption: "Admin Dashboard" },
            { img: motolinkinventory, type: "admin", caption: "Inventory Management" },
            { img: motolinkinventorydetails, type: "admin", caption: "Inventory Details" },
            { img: motolinkpos, type: "admin", caption: "Point of Sale" },
            { img: motolinktransaction, type: "admin", caption: "Sale Transaction Management" },
            { img: motolinkproduct, type: "admin", caption: "Product Management" },
            { img: motolinkproductdetails, type: "admin", caption: "Product Details" },
            { img: motolinkorder, type: "admin", caption: "Order Management" },
            { img: motolinkcustomer, type: "admin", caption: "Customer Management" },
            { img: motolinkpromo, type: "admin", caption: "Promo & Discount Management" },
            { img: motolinkpromocreate, type: "admin", caption: "Create Product Discount" },
            { img: motolinkservicelist, type: "admin", caption: "Services Management" },
            { img: motolinkbooking, type: "admin", caption: "Booking Management" },
            { img: motolinkservicelog, type: "admin", caption: "AI Service Log Details" },
            { img: motolinkanalytics, type: "admin", caption: "Overview Analytics" },
            { img: motolinksalereport, type: "admin", caption: "Sale Report" },
            { img: motolinkservicereport, type: "admin", caption: "Service report" },
            { img: motolinksettings, type: "admin", caption: "Platform Settings" },
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2025
    },
    {
        title: "E-Rent",
        subtitle: "Property Rental Marketplace Platform",
        description: "Property rental search filter components and editorial hosting landing pages using Laravel.",
        tech: ["Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript"],
        images: [
            { img: propertyImg, type: "public", caption: "Rental Search Feed" }
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2025
    },
    {
        title: "CarePoint",
        subtitle: "Patient Care, Medical Records & Booking Management System",
        description: "A secure healthcare platform designed to streamline patient appointments, electronic medical records (EMR), doctor schedules, prescription tracking, and hospital billing operations.",
        tech: ["Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript"],
        images: [
            { img: care, type: "public", caption: "Patient Portal" }
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2025
    },
    {
        title: "Snack Stream",
        subtitle: "Filipino Snacks & Beverages Point of Sale",
        description: "A secure healthcare platform designed to streamline patient appointments, electronic medical records (EMR), doctor schedules, prescription tracking, and hospital billing operations.",
        tech: ["Visual Basic", "MySQL", "Window Form"],
        images: [
            { img: pos, type: "admin", caption: "POS Terminal Screen" }
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2024
    },
    {
        title: "Loan Calculator",
        subtitle: "Simple Motorcycle Loan Calculator",
        description: "A secure healthcare platform designed to streamline patient appointments, electronic medical records (EMR), doctor schedules, prescription tracking, and hospital billing operations.",
        tech: ["C#", "ASP.NET", "Bootstrap", "CSS3"],
        images: [
            { img: mvc, type: "public", caption: "Calculator Tool View" }
        ],
        link: "#",
        linkType: "demo",
        github: "#",
        year: 2023
    },
];