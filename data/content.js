/*
  ============================================================
  GOBIND SINGH — PORTFOLIO CONTENT
  ============================================================
  This is the ONLY file you need to edit to change the website.
  See README.md for step-by-step instructions.

  Rules:
  - Text goes inside "double quotes".
  - Every item in a list ends with a comma, except the last one.
  - Media paths are relative to the site, e.g. "assets/images/orient/2.jpg"

  Media types you can use in a project's "media" list:
    { type: "image",   src: "assets/images/orient/1.jpg", caption: "..." }
    { type: "video",   src: "assets/videos/orient-demo.mp4", caption: "..." }   (keep under 25 MB)
    { type: "youtube", id: "dQw4w9WgXcQ", caption: "..." }                     (the code after watch?v=)
    { type: "model",   src: "assets/models/orient.glb", caption: "..." }        (3D, rotatable)
  ============================================================
*/

window.PORTFOLIO = {

  profile: {
    name: "Gobind Singh",
    title: "Mechatronics Engineer",
    avatar: "",                               // e.g. "assets/images/profile/gobind.jpg"
    email: "gsingh2_be23@thapar.edu",
    linkedin: "https://linkedin.com/in/gobind-singh-75301a278",
    github: "https://github.com/gobind28-droid",
    resume: "",                               // e.g. "assets/Gobind-Singh-Resume.pdf"
    location: "Patiala, India",
    tagline: "I design robots, from the mechanism up to the control loop.",
    about: [
      "I'm a mechatronics engineering student at Thapar Institute of Engineering & Technology (class of 2027). I design mechanisms in CAD, build them, and tune the controllers that run them.",
      "My main project is Orient, a ball-balancing parallel platform I've rebuilt three times. Each revision went after free play in the linkages, and the third has almost none left. I'm now designing a hexapod and a bipedal robot.",
      "I lead the mechanical team at Team G-Force and previously led brakes for Team Oorja's go-kart, which finished 6th nationally. I'm looking for master's programmes and roles in robotics and mechanical design."
    ],
    highlights: [
      { label: "Orient platform", value: "Rev C" },
      { label: "Settling response", value: "< 0.7 s" },
      { label: "Brake pedal load", value: "2000 N" },
      { label: "National karting", value: "6th" }
    ]
  },

  categories: ["All", "Robotics & Controls", "Legged Robots", "Vehicle Design", "Product Design"],

  projects: [
    {
      id: "orient",
      dwg: "GS-01",
      title: "Orient",
      subtitle: "Ball-balancing parallel platform",
      category: "Robotics & Controls",
      status: "Ongoing",
      time: "Jan 2026 – present",
      featured: true,
      summary: "A servo-driven parallel platform that tilts to keep a ball centred, using an overhead camera for feedback and a PID loop for control.",
      description: [
        "Orient is a Stewart-style parallel platform. A camera on the overhead arm tracks the ball, and a PID controller drives the servos to tilt the plate and bring the ball back to the setpoint.",
        "Most of the work has gone into the mechanism. Any free play in the linkages shows up as the ball wandering around the setpoint, because the controller commands an angle the plate doesn't actually reach. Each revision went after that slack."
      ],
      revisions: [
        { rev: "A", change: "First build: proof of concept for the platform and vision loop.", result: "Working balance; noticeable linkage slack." },
        { rev: "B", change: "Redesigned and scaled up the structure; reworked the linkage joints.", result: "About 85% less free play; stiffer frame." },
        { rev: "C", change: "Third iteration of the joint and linkage design.", result: "Almost no free play left in the linkages.", current: true }
      ],
      specs: [
        "Control: PID on vision-based ball position",
        "Response time: under 0.7 s (MATLAB simulation)",
        "Feedback: overhead camera",
        "Actuation: hobby servos with rod-end linkages"
      ],
      tags: ["SolidWorks", "MATLAB", "Simulink", "PID", "Computer vision", "3D printing"],
      learning: ["Backlash and its effect on control", "Parallel-mechanism kinematics", "PID tuning"],
      media: [
        { type: "image", src: "assets/images/orient/1.jpg", caption: "Orient with the overhead camera arm." }
      ]
    },
    {
      id: "hexapod",
      dwg: "GS-02",
      title: "Hexapod",
      subtitle: "Six-legged walking robot",
      category: "Legged Robots",
      status: "In design",
      time: "2026 – present",
      summary: "A six-legged walking robot, currently in the design phase.",
      description: [
        "I'm designing the leg mechanism and body in CAD, and planning a tripod gait so the robot always has three feet on the ground and stays statically stable while it walks."
      ],
      specs: ["Legs: 6", "Gait: tripod (planned)"],
      tags: ["SolidWorks", "Kinematics", "Gait planning"],
      learning: [],
      media: []
    },
    {
      id: "biped",
      dwg: "GS-03",
      title: "Bipedal robot",
      subtitle: "Two-legged walking robot",
      category: "Legged Robots",
      status: "In design",
      time: "2026 – present",
      summary: "A two-legged walking robot, currently in the design phase.",
      description: [
        "I'm designing the leg kinematics and actuator layout in CAD. The project builds on Orient's balance control, moving from balancing a ball on a platform to balancing the robot itself."
      ],
      specs: ["Legs: 2"],
      tags: ["SolidWorks", "Kinematics", "Balance control"],
      learning: [],
      media: []
    },
    {
      id: "gokart-brakes",
      dwg: "GS-04",
      title: "Go-kart braking system",
      subtitle: "Team Oorja, TIET",
      category: "Vehicle Design",
      status: "Completed",
      time: "Oct 2023 – Aug 2025",
      summary: "I led the brakes department for Team Oorja's go-kart, which finished 6th nationally at the Indian Karting Race 2024.",
      description: [
        "I designed and optimised the kart's braking system, checking load cases in ANSYS, and helped fabricate it: cutting, welding and surface finishing.",
        "At the Indian Karting Race at Buddh International Circuit (2024) the team finished 6th nationally. I made last-minute technical fixes that kept the kart qualified for the advanced rounds. We also competed in the Go-Kart Design Challenge at Kari Motor Speedway (2025)."
      ],
      specs: [
        "Pedal ratio: 7:1",
        "Pedal design load: 2000 N",
        "Stopping distance: 4.5 m from 50 km/h"
      ],
      tags: ["SolidWorks", "ANSYS Structural", "Fabrication", "Welding"],
      learning: ["Designing to a load case", "Working to competition deadlines", "Leading a department"],
      media: []
    },
    {
      id: "garud-pak",
      dwg: "GS-05",
      title: "Garud Pak",
      subtitle: "Quick-assembly cardboard drone",
      category: "Product Design",
      status: "Ongoing",
      time: "Jan 2026 – present",
      summary: "A cardboard drone that folds flat and deploys in under 10 minutes, built for a problem statement set by the army.",
      description: [
        "This is our capstone project. I designed the fuselage to fold flat and be assembled in the field within the 10-minute benchmark set by the problem statement, while keeping it cheap and quick to replace."
      ],
      specs: ["Material: cardboard", "Deploy target: 10 minutes or less"],
      tags: ["CAD", "Design for assembly", "Drones"],
      learning: [],
      media: []
    },
    {
      id: "r3bin",
      dwg: "GS-06",
      title: "R3BIN",
      subtitle: "Smart waste segregation, Fostride",
      category: "Product Design",
      status: "Completed",
      time: "Jun 2025",
      summary: "A continuous sorting mechanism for a smart bin, so new waste can go in without waiting for the last cycle to finish.",
      description: [
        "I built a continuous pipeline sorting mechanism, so new waste can be added while earlier items are still being sorted. I also proposed a new workflow to make sorting faster and set the product apart."
      ],
      specs: ["Sorting: continuous pipeline"],
      tags: ["Mechanism design", "Automation"],
      learning: [],
      media: []
    }
  ],

  /*
    CAD LIBRARY — every design Gobind has made.
    The "CAD library" menu item appears automatically once this list has at least one entry.
    Example entry:
    {
      title: "Brake pedal, 7:1",
      software: "SolidWorks",
      image: "assets/cad/brake-pedal.png",       // a render or screenshot
      model: "assets/models/brake-pedal.glb",    // optional, makes it rotatable
      files: "https://github.com/gobind28-droid/cad-library/tree/main/brake-pedal"   // optional link to source files
    },
  */
  cad: [
  ],

  experience: [
    { role: "Mechanical Head", org: "Team G-Force, TIET", time: "Jul 2026 – present",
      points: ["Lead the mechanical side of the team's robots and teach juniors design and fabrication.", "Manage build deadlines and the team's additive manufacturing."] },
    { role: "Production & Assembly Intern", org: "Ramani Precision Machines Pvt. Ltd., Mohali", time: "Jun – Jul 2026",
      points: ["Worked in the production and assembly team on daily shop-floor operations over 45 days.", "Ran and improved mechanical assembly workflows on the production line."] },
    { role: "Brakes Head", org: "Team Oorja, TIET", time: "Oct 2023 – Aug 2025",
      points: ["Led the design and optimisation of the go-kart's braking system.", "Used SolidWorks and ANSYS for modelling and simulation to make the system safer and more efficient."] }
  ],

  education: [
    { degree: "B.E., Mechatronics Engineering", school: "Thapar Institute of Engineering & Technology, Patiala", time: "2023 – 2027" }
  ],

  skills: [
    { group: "Design", items: ["SolidWorks", "Creo Parametric", "AutoCAD", "Additive manufacturing"] },
    { group: "Simulation", items: ["ANSYS Structural", "ANSYS Thermal", "ANSYS Fluent", "MATLAB Simscape"] },
    { group: "Control & code", items: ["MATLAB & Simulink", "C / C++", "Python", "Arduino"] }
  ],

  certifications: [
    { name: "MATLAB control course", issuer: "MATLAB", link: "" },
    { name: "Simulink control course", issuer: "Simulink", link: "" }
  ],

  extras: ["Black belt in karate"]
};
