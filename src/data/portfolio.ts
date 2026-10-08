import type { PortfolioConfig } from '../types/portfolio';

export const portfolio: PortfolioConfig = {
  personal: {
    name: "Shodhan K Ganiga",
    title: "Software Engineer | Backend Developer",
    location: "Bangalore, India",
    email: "shodhan2901@gmail.com",
    phone: "+91 9019050668",
    profileImage: "/profile.jpg",
    availability: "Open to opportunities",
  },

  about: {
    short:
      "Backend Developer with hands-on experience designing RESTful APIs and microservices using Java and Spring Boot. Skilled in event-driven messaging with RabbitMQ, SQL optimization via Spring Data JPA, and automated CI/CD-tested workflows.",
    detailed:
      "I am a Software Engineer focused on designing reliable, high-throughput backend systems and distributed services. At Tata Consultancy Services (TCS), I engineer secure Spring Boot REST APIs for identity lifecycle provisioning, decouple enterprise systems with RabbitMQ event-driven queues, and optimize relational database queries to eliminate concurrency bottlenecks. My engineering approach emphasizes robust error handling, automated batch pipelines, and clean test-driven architectures with high code coverage.",
    yearsOfExperience: "1+ Years",
    coreSpecialties: [
      "RESTful APIs & Microservices",
      "Spring Boot & Spring Data JPA",
      "Event-Driven Architecture (RabbitMQ)",
      "Database Indexing & Query Tuning",
      "Automated Testing (JUnit, Mockito)",
      "Identity Lifecycle Workflows (Saviynt)",
    ],
    engineeringPhilosophy:
      "Design systems with clear modular boundaries, resilient failure handling, and measurable performance benchmarks.",
  },

  social: {
    github: "https://github.com/shodhan-k",
    linkedin: "https://linkedin.com/in/shodhan-k-ganiga-ba32a42a2",
  },

  experience: [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "System Engineer",
      location: "Pune, India",
      startDate: "May 2025",
      endDate: "Present",
      description:
        "Engineered scalable backend solutions, identity provisioning automations, and asynchronous messaging pipelines for enterprise ERP integrations.",
      responsibilities: [
        "Built secure Spring Boot REST APIs to automate user lifecycle workflows, role-based access control (RBAC), and identity provisioning with Saviynt.",
        "Integrated RabbitMQ with retry queues and Dead Letter Queues (DLQ) to decouple Maximo and SAP ERP, resolving stuck Purchase Order sync states.",
        "Automated the weekly employee deactivation pipeline using Spring Data JPA batch updates, reducing manual operational effort by 80%.",
        "Optimized complex SQL queries and indexes using DBeaver, eliminating database row-locking contention during high-volume data synchronizations.",
        "Authored comprehensive unit and integration test suites with JUnit and Mockito achieving 80%+ coverage, consistently meeting SonarQube quality gates across Agile sprints.",
      ],
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Data JPA",
        "RabbitMQ",
        "MySQL",
        "Saviynt",
        "JUnit",
        "Mockito",
        "SonarQube",
        "DBeaver",
      ],
    },
  ],

  education: [
    {
      institution: "Dr. Ambedkar Institute of Technology",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Engineering",
      startDate: "2020",
      endDate: "2024",
      grade: "CGPA: 8.14 / 10",
    },
    {
      institution: "Viveka PU College, Kota",
      degree: "Pre-University Course (PUC)",
      field: "Science",
      startDate: "2018",
      endDate: "2020",
      grade: "Score: 88%",
    },
  ],

  skills: {
    languages: ["Java (Core Java, Java 8/17)", "SQL", "Python (Basic)"],
    backend: [
      "Spring Boot",
      "Microservices Architecture",
      "Spring Data JPA",
      "RESTful Web Services",
      "Hibernate ORM",
    ],
    messaging: [
      "RabbitMQ (AMQP)",
      "Dead Letter Queues (DLQ)",
      "Asynchronous Event-Driven Architecture",
    ],
    databases: ["MySQL", "DBeaver", "SQL Query Optimization", "Database Indexing"],
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"],
    testing: ["JUnit 5", "Mockito", "SonarQube Quality Gates", "Integration Testing"],
    tools: [
      "REST APIs",
      "Postman",
      "Git & GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Maven",
    ],
  },

  projects: [
    {
      title: "Employee Management System",
      description:
        "A full-featured Spring Boot backend application designed to streamline employee directory management, department structures, and office location hierarchies with transactional consistency.",
      technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs", "JUnit 5", "Postman"],
      featured: true,
      github: "https://github.com/shodhan-k/employee-management-system",
      highlights: [
        "Architected clean RESTful endpoints supporting full CRUD operations for personnel, departments, and office locations.",
        "Implemented database indexing and pagination for high-throughput queries across employee records.",
        "Built robust integration tests using JUnit and Mockito verifying service layers and transactional boundaries.",
      ],
      caseStudy: {
        problem:
          "Organizations frequently struggle with fragmented employee records, slow multi-table relational joins, and manual updates leading to data inconsistency across departmental hierarchies.",
        approach:
          "Designed a multi-layered Spring Boot service with strict separation between Controller, Service, DTO, and Repository tiers, enforcing declarative transaction boundaries and input validation.",
        architecture:
          "Layered REST microservice architecture with Jakarta Bean Validation, Spring Data JPA ORM, and MySQL relational persistence, with global error interceptors using @RestControllerAdvice.",
        implementation:
          "Developed REST endpoints for onboarding, department reassignment, automated status deactivations, and location queries with foreign key constraints and cascade rules.",
        challenges:
          "Preventing N+1 query execution bottlenecks when fetching employees along with their parent department and location associations.",
        solution:
          "Employed JPA Entity Graphs and custom JPQL JOIN FETCH queries combined with indexed foreign keys, reducing query counts to a single SQL query and maintaining sub-25ms response times.",
        technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "JUnit 5", "Mockito", "Maven"],
        outcome:
          "Delivered an extensible, zero-downtime employee data backend with sub-30ms read latency, comprehensive test coverage, and strict validation against invalid states.",
      },
    },
    {
      title: "Event Management System",
      description:
        "A backend scheduling and participant management platform offering atomic attendee registrations, slot reservation handling, and lifecycle event tracking.",
      technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "REST APIs", "Postman"],
      featured: false,
      github: "https://github.com/shodhan-k/event-management-system",
      highlights: [
        "Engineered RESTful APIs for scheduled event creation, date-time validation, capacity tracking, and attendee registrations.",
        "Guaranteed concurrency safety during peak participant sign-ups using transactional state checks.",
        "Structured modular domain models mapping event organizers, categories, venues, and attendee profiles.",
      ],
    },
    {
      title: "Enterprise ERP & Maximo Integration Pipeline",
      description:
        "Asynchronous event broker architecture decoupling IBM Maximo asset management with SAP ERP for automated Purchase Order synchronization and retry processing.",
      technologies: ["Java", "Spring Boot", "RabbitMQ (AMQP)", "Dead Letter Queues", "Spring Data JPA", "MySQL", "Saviynt"],
      featured: false,
      isPrivate: true,
      privateLabel: "Enterprise Project (TCS)",
      highlights: [
        "Resolved stuck Purchase Order synchronization states between enterprise asset management and SAP ERP.",
        "Implemented Dead Letter Exchange (DLX) retry topologies to safeguard against transient downstream network outages.",
        "Automated weekly user deactivation batch jobs cutting manual administrative effort by 80%.",
      ],
    },
  ],

  certifications: [
    {
      name: "Java Full Stack Certificate",
      issuer: "Full Stack Training Program",
      date: "2024",
    },
  ],

  resume: {
    file: "/resume/resume.pdf",
    label: "Download Resume",
    viewLabel: "View Resume",
  },
};
