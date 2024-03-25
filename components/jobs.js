export const jobs = [
    {
        title: "Senior Software Engineer",
        company: "CERN",
        role: "Converter Controls Software",
        startDate: "2021-05-01",
        location: "Geneva, Switzerland",
        url: "https://cern.ch/ccs-tools",
        imageUrl: "cern_logo.png",
        tasks: [
            {
                title: "Lead Developer for 'FGC Commander'",
                description: "Designed and developed an essential web application for Power Converter experts at CERN, offering comprehensive monitoring and control over Power Converters within the accelerator complex.",
                technologies: ["Python", "FastAPI", "OAuth2", "HTML5", "CSS3", "Vue.js", "Vuex", "Pinia", "Vue Router", "Vite", "i18n", "Bootstrap", "Vitest", "Cypress", "Figma"]
            },
            {
                title: "Architectural Designer of 'FGC-API'",
                description: "Designed and developed a unified web interface specification that integrates a REST API and a websocket service for real-time access, updates, and control over Power Converter resources, with server support for both OAuth2 and RBAC tokens.",
                technologies: ["Python", "FastAPI", "PyJWT", "SQLAlchemy"]
            },
            {
                title: "Owner of Containerisation and Orchestration project",
                description: "Led a project with 2 colleagues under my wing, streamlining the onboarding process for both internal and external CERN operations using containers, and enhanced deployment setup with automatic deployments for master branch commits and a simplified CLI for various other deployment targets.",
                technologies: ["Docker", "Docker-compose", "Traefik", "Kubernetes", "Helm", "Argo CD"]
            },
            {
                title: "Recruitment and Talent Acquisition",
                description: "Actively coordinated and implemented comprehensive recruitment strategies, including planning and conducting in-depth interviews and coding challenges to identify and onboard top-tier talent for our technical team.",
                technologies: []
            },
            {
                title: "Support",
                description: "Provided continuous support for issues raised by colleagues in JIRA and participated in the operationally critical 24/7 on-call rotation, supporting the mission-critical Power Converter infrastructure.",
                technologies: []
            }
        ]
    },
    {
        title: "Junior Software Engineer",
        company: "CERN",
        role: "Converter Controls Software",
        startDate: "2018-02-01",
        endDate: "2021-04-30",
        location: "Geneva, Switzerland",
        url: "https://cern.ch/ccs-tools",
        imageUrl: "cern_logo.png",
        tasks: [
            {
                title: "Lead Developer of 'FortLogs'",
                description: "Designed and developed a core data storage solution for Power Converter acquisition logs at CERN, handling various data types like analog, binary, bode, pole-zero plots, and tabular data.\n" +
                             "The system is crucial for over 5000 operational Power Converters, facilitating data management and retrieval, and integrating with multiple applications and services.\n" +
                             "Features a REST API with OAuth2 access management and a websocket service for live data streaming.\n" +
                             "Created a Python library for efficient data streaming into the platform.",
                technologies: ["PostgreSQL", "Python", "FastAPI", "OAuth2", "pandas", "numpy", "pydantic", "SQLAlchemy"]
            },
            {
                title: "Lead Python Developer",
                description: "Spearheaded the team’s language migration from Perl to Python as its first python developer:\n" +
                             "Ported core libraries essential for communication and control of Power Converters and other devices using Serial (USB), TCP/IP, UDP, and GPIB protocols, with RBAC token management and proper documentation built with Sphinx.\n" +
                             "Implemented automated testing and release processes using GitLab pipelines. " +
                             "Conducted tutorial sessions for library users.",
                technologies: ["Python", "TCP/IP", "UDP", "Serial", "GPIB", "Multithreading"]
            }
        ]
    },
    {
        title: "AI Research Internship",
        company: "Carnegie Mellon University",
        role: "Software Developer",
        startDate: "2017-01-01",
        endDate: "2017-03-31",
        location: "Pittsburgh, USA",
        imageUrl: "cmu_logo.png",
        tasks: [
            {
                title: "",
                description: "Research Project into Short-Sighted Probabilistic Planning",
                technologies: ["Python", "C++"]
            }
        ]
    },
    {
        title: "Software Engineer - Summer Internship",
        company: "Multicert",
        role: "Software Developer",
        startDate: "2015-08-01",
        endDate: "2015-09-30",
        location: "Porto Salvo, Portugal",
        imageUrl: "multicert_logo.png",
        tasks: [
            {
                title: "",
                description: "Browser fingerprinting and tracking prevention research project.",
                technologies: ["Python", "Scipy", "MongoDB"]
            }
        ]
    }
    
];
