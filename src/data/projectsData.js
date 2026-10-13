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
import propertyImg from '../assets/projects/erent/1.PNG';
import portfolio1 from '../assets/projects/portfolio/1.png';
import portfolio2 from '../assets/projects/portfolio/2.PNG';
import nces from '../assets/projects/nces/1.PNG';
import care from '../assets/projects/care/1.png';
import pos from '../assets/projects/pos/1.png';
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
        title: "AssetFlow",
        subtitle: "School Asset & Inventory Management",
        description: "A web application for tracking school equipment, managing borrower records, and monitoring asset status, including items under maintenance or scheduled for write-off.",
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
        title: "StudentArchive",
        subtitle: "Student Permanent Record Digitalization System",
        description: "A web application for digitizing, backing up, and managing student Form 137 permanent records online. It allows school staff to safely archive files and quickly search or retrieve records.",
        tech: ["Next.js", "Supabase", "Bootstrap5", "CSS3", "hCaptcha"],
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
        subtitle: "Property Rental Platform",
      description: "A web platform for finding and listing rental properties. Users can search for rental spaces, book places to stay, and upgrade their accounts to become hosts so they can list and manage their own properties.",
        tech: ["Laravel12", "MySQL", "Bootstrap5", "CSS3", "JavaScript", "OAuth 2.0"],
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
            { img: pos, caption: "POS Terminal Screen" }
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