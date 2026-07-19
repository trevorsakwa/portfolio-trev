/*
  CONTENT DATA
  ============
  Text that changes depending on which profile (mech / fin) is selected.
  Edit the strings directly to update your bio or skills lists.
*/

const CONTENT = {
  mech: {
    heroWord: "engineering",
    titleBlockValue: "MECHANICAL",
    bio: "As an engineer, I design, simulate, and build. My work runs from CAD models validated through FEA and CFD, to hands-on manufacturing and maintenance work that taught me how designs actually fail in the field — non-destructive testing on production pipework, fatigue analysis on hospital equipment, HVAC design for a live surgical ward extension. Formula Student vehicle design and a 3D-printing process optimisation research project (15% tensile strength improvement) sit alongside that field experience. I'm currently completing a dual Master's — Mechanical Engineering with Management, and Finance and Investment Management — which means I evaluate engineering decisions through both a technical and a commercial lens.",
    skills: [
      { group: "CAD", items: ["SolidWorks", "PTC Creo", "Autodesk Inventor", "Siemens NX"] },
      { group: "Simulation", items: ["ANSYS Fluent", "OpenFOAM", "Siemens STAR-CCM", "FEA"] },
      { group: "Manufacturing", items: ["CNC machining", "3D printing (FDM/SLA)", "Laser processing", "NDT (ultrasonic, eddy current)"] },
      { group: "Programming & data", items: ["Python", "MATLAB", "C++", "Power BI"] },
      { group: "Project delivery", items: ["MS Project", "Critical path analysis", "Risk registers", "Cross-functional coordination"] }
    ],
    resume: { href: "assets/resume/trevor-sakwa-mechanical-cv.pdf", label: "Download CV (mechanical)" }
  },
  fin: {
    heroWord: "finance",
    titleBlockValue: "FINANCE",
    bio: "As a financial analyst, I turn portfolio theory and market data into decisions. That means building Python-driven Monte Carlo and Black-Litterman models, running event studies against real market shocks, and designing dashboards that translate quantitative findings for people who need answers, not equations. My dual background in mechanical engineering carries over directly — the same rigour I'd bring to modelling stress on a part, I bring to modelling risk in a portfolio. Currently completing an MSc in Finance and Investment Management at the University of Liverpool, with CFA Level 1 and 2 curriculum covered and chartership planned.",
    skills: [
      { group: "Portfolio & wealth", items: ["Portfolio optimisation", "Black-Litterman", "Risk-return analysis", "Scenario planning"] },
      { group: "Modelling", items: ["Monte Carlo simulation", "Event studies", "Financial modelling", "Forecasting"] },
      { group: "Technical", items: ["Python", "SQL", "Excel (advanced)", "Power BI / DAX"] },
      { group: "Reporting", items: ["Financial statement analysis", "Variance analysis", "Cash flow analysis", "Stakeholder reporting"] },
      { group: "Credentials", items: ["MSc Finance & Investment Management", "CFA L1 & L2 curriculum", "MSc Mech. Eng. with Management"] }
    ],
    resume: { href: "assets/resume/trevor-sakwa-finance-cv.pdf", label: "Download CV (finance)" }
  }
};
