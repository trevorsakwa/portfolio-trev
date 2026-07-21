/*
  PROJECTS DATA
  =============
  To add a new project: copy one of the objects below and edit the fields.
  Each project belongs to mode: "mech" or "fin".

  Fields:
    title       - project name
    tag         - short category label shown on the card (e.g. "CAD + FEA")
    summary     - 1-3 sentence description
    tools       - array of short tool/software names
    thumb       - (legacy/unused once `media` is set) path to a preview image
    media       - OPTIONAL array of images/videos shown on the card, in order. If omitted or
                  empty, the card shows a plain placeholder box instead. Each item:
                    { type: "image", src: "assets/projects/<folder>/photo1.jpg" }
                    { type: "video", src: "assets/projects/<folder>/demo.mp4" }
                    { type: "video", src: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
                  If a project has more than one media item, small arrows appear on the card
                  so a recruiter can step through photos/demo videos of that project.

                  Example (copy this pattern in for a real project):
                    media: [
                      { type: "video", src: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
                      { type: "image", src: "assets/projects/sure-formula-student/car-1.jpg" },
                      { type: "image", src: "assets/projects/sure-formula-student/car-2.jpg" }
                    ]

                  Large video files should NOT go in this repo (GitHub is not built for video
                  hosting). Upload the prototype demo to YouTube (can be set to "Unlisted" if
                  you don't want it publicly searchable) and use that link as the src — the
                  site embeds it automatically.

    links       - { report, files, repo, viewer } - any of these can be omitted or set to "#"
                    report -> link to a PDF report/writeup
                    files  -> link to downloadable source files (CAD, xlsx, Fluent case etc.)
                              for large files, host on Google Drive / similar and paste the
                              share link here instead of putting the file in this repo.
                    repo   -> link to a GitHub repo (quant/code projects)
                    viewer -> link to an embedded 3D viewer (e.g. a Sketchfab page) if you have one
*/

const PROJECTS = [
  // ---------------- MECHANICAL ENGINEERING ----------------
  {
    mode: "mech",
    title: "SURE Formula Student Vehicle",
    tag: "CAD + CFD + FEA",
    summary: "Designed vehicle components in SolidWorks for the Swansea University Race Engineering single-seat racing car, ran CFD in ANSYS Fluent to reduce aerodynamic drag, and used FEA for structural integrity and fatigue-life prediction across the vehicle's lifespan. Coordinated designs with the manufacturing team to keep every part CNC- and hand-assembly friendly.",
    tools: ["SolidWorks", "ANSYS Fluent", "FEA", "CNC"],
    thumb: "assets/projects/sure-formula-student/thumb.jpg",
    links: { report: "#", files: "#" }
  },
  {
    mode: "mech",
    title: "Reverse Engineering — Automatic Air Freshener Assembly",
    tag: "CAD + reverse engineering",
    summary: "Fully reverse engineered a Glade Sense & Spray automatic air freshener into a complete PTC Creo Parametric assembly — dismantling the unit, measuring every component by hand, and remodelling the motion-sensor circuit, motor, and reduction gear train (a 12T motor gear driving 56T and 64T gears down to a 17T sector gear) that converts rotation into the linear nozzle motion which triggers the spray. Delivered as a full working assembly with a bill of materials and 2D manufacturing drawings.",
    tools: ["PTC Creo Parametric", "Reverse engineering", "GD&T", "Technical drawings"],
    thumb: "assets/projects/air-freshener-reverse-engineering/thumb.jpg",
    media: [
      { type: "image", src: "assets/projects/air-freshener-reverse-engineering/product-photo.jpg" },
      { type: "image", src: "assets/projects/air-freshener-reverse-engineering/gear-mechanism.jpg" },
      { type: "image", src: "assets/projects/air-freshener-reverse-engineering/gear-component.jpg" },
      { type: "image", src: "assets/projects/air-freshener-reverse-engineering/assembly-render.jpg" }
    ],
    links: {
      report: "assets/projects/air-freshener-reverse-engineering/reverse-engineering-report.pdf",
      files: "assets/projects/air-freshener-reverse-engineering/cad-files.zip"
    }
  },
  {
    mode: "mech",
    title: "3D Printing Process Optimisation — PLA Mechanical Properties",
    tag: "DOE + mechanical testing",
    summary: "MEng research project isolating the effect of infill density and raster angle on FDM-printed PLA parts, using a Taguchi-based design of experiments and ASTM-standard tensile and impact testing. Raising infill density from 20% to 100% improved impact strength by 78%, ultimate tensile strength by 35%, and tensile modulus by 28% — roughly 2-3x the effect of raster angle alone — with a 0° raster orientation giving the highest tensile strength recorded, 57.5 MPa.",
    tools: ["FDM / PLA", "Taguchi DOE", "ASTM testing", "Data analysis"],
    thumb: "assets/projects/3d-printing-optimisation/thumb.jpg",
    media: [
      { type: "image", src: "assets/projects/pla-process-optimisation/specimen-setup.jpg" },
      { type: "image", src: "assets/projects/pla-process-optimisation/testing-setup.jpg" },
      { type: "image", src: "assets/projects/pla-process-optimisation/results-chart.jpg" }
    ],
    links: { report: "#", files: "#" }
  },
  {
    mode: "mech",
    title: "Surgical Ward HVAC System Design",
    tag: "Simulation",
    summary: "Assisted in designing a dedicated HVAC system for a newly built surgical ward extension at Mount Elgon Hospital, contributing airflow, filtration, and pressure-control simulations and calculations in line with ASHRAE 170 requirements.",
    tools: ["HVAC design", "ASHRAE 170", "Simulation"],
    thumb: "assets/projects/hvac-surgical-ward/thumb.jpg",
    links: { report: "#" }
  },
  {
    mode: "mech",
    title: "Liverpool Waters Regeneration — Project Controls",
    tag: "Project management",
    summary: "Master's-level project management assignment: critical path analysis and work breakdown structures in Microsoft Project to find schedule-critical activities and compression opportunities, plus a risk register and cost analysis across mechanical, electrical and construction disciplines.",
    tools: ["MS Project", "Risk analysis", "Cost analysis"],
    thumb: "assets/projects/liverpool-waters/thumb.jpg",
    links: { report: "#" }
  },

  // ---------------- FINANCE / QUANT ----------------
  {
    mode: "fin",
    title: "Dynamic Leverage Monte Carlo Portfolio System",
    tag: "Python · Quant",
    summary: "A portfolio management system in Python treating asset weights as dynamic variables that respond to momentum, fundamentals and market sentiment, rather than static allocations. Uses Monte Carlo simulation to evaluate the full probability distribution of outcomes under varying market conditions, with a dynamic leverage cycling and signalling engine layered on top.",
    tools: ["Python", "Monte Carlo", "NumPy/pandas"],
    thumb: "assets/projects/monte-carlo-portfolio/thumb.jpg",
    links: { repo: "#", report: "#" }
  },
  {
    mode: "fin",
    title: "Event Study: Rolls-Royce Surprise Earnings",
    tag: "Python · Event study",
    summary: "Investigated market reaction to Rolls-Royce's surprise 2023 earnings announcement using event study methodology — abnormal returns (AR) and cumulative abnormal returns (CAR) benchmarked against the FTSE All-Share index to test for possible information leakage ahead of the announcement.",
    tools: ["Python", "Event study", "Statistical testing"],
    thumb: "assets/projects/rolls-royce-event-study/thumb.jpg",
    links: { repo: "#", report: "#" }
  },
  {
    mode: "fin",
    title: "Black-Litterman Wealth Allocation Model",
    tag: "Python · Portfolio theory",
    summary: "Optimal allocation model given investor risk tolerance and tax situation, using the Black-Litterman framework so manager market views can blend with equilibrium returns rather than relying on unconstrained mean-variance optimisation. Stress-tested against a replicated COVID-19 shock scenario to translate abstract risk into a concrete recession case.",
    tools: ["Python", "Black-Litterman", "Scenario testing"],
    thumb: "assets/projects/black-litterman-model/thumb.jpg",
    links: { repo: "#", report: "#" }
  },
  {
    mode: "fin",
    title: "Commercial Performance & Portfolio Dashboards",
    tag: "Power BI · Excel",
    summary: "Interactive dashboards built in Power BI and Excel for tracking KPIs and portfolio performance — pivot-table-driven models, dynamic visualisations and DAX measures translating quantitative output into decision-ready reporting for non-technical stakeholders.",
    tools: ["Power BI", "Excel", "DAX", "SQL"],
    thumb: "assets/projects/dashboards/thumb.jpg",
    links: { files: "#" }
  }
];
