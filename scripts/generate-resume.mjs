import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const margin = 40;
  let y = height - 42;

  const primaryColor = rgb(0.1, 0.1, 0.1);
  const secondaryColor = rgb(0.3, 0.3, 0.3);
  const linkColor = rgb(0.05, 0.35, 0.65);
  const dividerColor = rgb(0.75, 0.75, 0.75);

  function drawDivider() {
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 0.75,
      color: dividerColor,
    });
    y -= 12;
  }

  // Header - Name
  const name = "SHODHAN K GANIGA";
  const nameWidth = fontBold.widthOfTextAtSize(name, 19);
  page.drawText(name, {
    x: (width - nameWidth) / 2,
    y,
    size: 19,
    font: fontBold,
    color: primaryColor,
  });
  y -= 18;

  // Title
  const title = "SOFTWARE ENGINEER";
  const titleWidth = fontBold.widthOfTextAtSize(title, 11);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y,
    size: 11,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 16;

  // Contact Info
  const contact = "Bangalore, India  |  9019050668  |  shodhan2901@gmail.com  |  LinkedIn: linkedin.com/in/shodhan-k-ganiga-ba32a42a2";
  const contactWidth = fontRegular.widthOfTextAtSize(contact, 8.5);
  page.drawText(contact, {
    x: (width - contactWidth) / 2,
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 14;

  drawDivider();

  // Section Header Function
  function drawSectionHeader(titleText) {
    page.drawText(titleText, {
      x: margin,
      y,
      size: 10.5,
      font: fontBold,
      color: primaryColor,
    });
    y -= 12;
  }

  // PROFESSIONAL SUMMARY
  drawSectionHeader("PROFESSIONAL SUMMARY");
  const summaryLines = [
    "Backend Developer with hands-on experience designing RESTful APIs and microservices using Java and",
    "Spring Boot. Skilled in event-driven messaging with RabbitMQ, SQL optimization via Spring Data JPA, and",
    "automated CI/CD-tested workflows."
  ];
  for (const line of summaryLines) {
    page.drawText(line, {
      x: margin,
      y,
      size: 9,
      font: fontRegular,
      color: primaryColor,
    });
    y -= 12;
  }
  y -= 2;
  drawDivider();

  // TECHNICAL SKILLS
  drawSectionHeader("TECHNICAL SKILLS");
  const skills = [
    { label: "Programming Languages: ", val: "Java (Core Java, Java 8/17), SQL, Python (Basic)" },
    { label: "Web Technologies: ", val: "HTML, CSS, JavaScript, React.js" },
    { label: "Backend & Framework: ", val: "Spring Boot, Microservices, Spring Data JPA, RESTful Web Services" },
    { label: "Messaging & Integration: ", val: "RabbitMQ (AMQP), Asynchronous Event-Driven Architecture" },
    { label: "Database: ", val: "MySQL, DBeaver" },
    { label: "API & Tools: ", val: "REST APIs, Postman, Git, VS Code" },
    { label: "Testing & Performance: ", val: "JUnit, Mockito, SonarQube" },
  ];

  for (const s of skills) {
    page.drawText(s.label, {
      x: margin,
      y,
      size: 8.5,
      font: fontBold,
      color: primaryColor,
    });
    const labelW = fontBold.widthOfTextAtSize(s.label, 8.5);
    page.drawText(s.val, {
      x: margin + labelW,
      y,
      size: 8.5,
      font: fontRegular,
      color: secondaryColor,
    });
    y -= 12;
  }
  y -= 2;
  drawDivider();

  // WORK EXPERIENCE
  drawSectionHeader("WORK EXPERIENCE");
  
  // Job title & Company
  page.drawText("System Engineer", {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;

  page.drawText("Tata Consultancy Services (TCS), Bangalore | May 2025 – Present", {
    x: margin,
    y,
    size: 9,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 13;

  const expBullets = [
    "Built secure Spring Boot REST APIs to automate user lifecycle workflows, RBAC, and identity provisioning with Saviynt.",
    "Integrated RabbitMQ with retry queues (DLQ) to decouple Maximo and SAP ERP, resolving stuck Purchase Order sync states.",
    "Automated the weekly employee deactivation pipeline using Spring Data JPA batch updates, cutting manual effort by 80%.",
    "Optimized complex SQL queries and indexes using DBeaver, eliminating database row-locking contention during high-volume syncs.",
    "Wrote unit/integration tests with JUnit and Mockito achieving 80%+ coverage, meeting SonarQube quality gates in Agile sprints."
  ];

  for (const bullet of expBullets) {
    page.drawText("•", {
      x: margin + 6,
      y,
      size: 8.5,
      font: fontBold,
      color: primaryColor,
    });
    page.drawText(bullet, {
      x: margin + 18,
      y,
      size: 8.5,
      font: fontRegular,
      color: primaryColor,
    });
    y -= 13;
  }
  y -= 2;
  drawDivider();

  // PROJECTS
  drawSectionHeader("PROJECTS");

  // Project 1
  page.drawText("Employee Management System", {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  const p1w = fontBold.widthOfTextAtSize("Employee Management System  ", 9);
  page.drawText("Technologies: Java, Spring Boot, MySQL, REST APIs", {
    x: margin + p1w,
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 12;

  const p1Bullets = [
    "Built a Spring Boot-based backend application for managing employee data",
    "Implemented CRUD operations with RESTful APIs for employees, departments, and locations"
  ];
  for (const b of p1Bullets) {
    page.drawText("•", { x: margin + 6, y, size: 8.5, font: fontBold, color: primaryColor });
    page.drawText(b, { x: margin + 18, y, size: 8.5, font: fontRegular, color: primaryColor });
    y -= 12;
  }
  y -= 3;

  // Project 2
  page.drawText("Event Management System", {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  const p2w = fontBold.widthOfTextAtSize("Event Management System  ", 9);
  page.drawText("Technologies: Java, Spring Boot, MySQL, REST APIs", {
    x: margin + p2w,
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 12;

  const p2Bullets = [
    "Developed a backend system for event scheduling and participant management",
    "Designed REST APIs for event creation, updates, and registrations"
  ];
  for (const b of p2Bullets) {
    page.drawText("•", { x: margin + 6, y, size: 8.5, font: fontBold, color: primaryColor });
    page.drawText(b, { x: margin + 18, y, size: 8.5, font: fontRegular, color: primaryColor });
    y -= 12;
  }
  y -= 2;
  drawDivider();

  // EDUCATION
  drawSectionHeader("EDUCATION");

  page.drawText("Bachelor of Engineering (B.E.)", {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;
  page.drawText("Dr. Ambedkar Institute of Technology, Bangalore  2020 – 2024  |  CGPA: 8.14", {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 14;

  page.drawText("Pre-University (PUC)", {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: primaryColor,
  });
  y -= 12;
  page.drawText("Viveka PU College, Kota  2018 – 2020  |  88%", {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 2;
  drawDivider();

  // CERTIFICATIONS
  drawSectionHeader("CERTIFICATIONS");
  page.drawText("Java Full Stack Certificate (2024)", {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });

  const outputDir = path.resolve('public/resume');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.join(outputDir, 'resume.pdf'), pdfBytes);
  console.log('Successfully generated public/resume/resume.pdf');
}

generateResume().catch(console.error);
