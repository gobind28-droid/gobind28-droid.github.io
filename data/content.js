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
      "My main project is Orient, a 3-DOF Stewart-style platform that balances a ball, which I've rebuilt three times. Each revision went after free play in the linkages, and the third has almost none left. I'm now building a scaled-up bipedal robot, based on the open-source Open Duck Mini.",
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
      subtitle: "3-DOF Stewart-style ball-balancing platform",
      category: "Robotics & Controls",
      status: "Completed",
      time: "2026",
      featured: true,
      summary: "A 3-DOF Stewart-style platform that tilts to keep a ball centred, using an overhead camera for feedback and a PID loop for control.",
      description: [
        "Orient is a 3-DOF Stewart-style parallel platform. Six hobby servos, arranged in three pairs around the base, drive rod-end linkages up to a clear acrylic plate. A camera on the overhead arm tracks the ball, and a PID controller works out the plate tilt needed to bring it back to the setpoint and drives the servos to get there.",
        "I designed the base, servo mounts, linkages and camera arm in SolidWorks and 3D printed them. Most of the work went into the mechanism. Any free play in the linkages shows up as the ball wandering around the setpoint, because the controller commands an angle the plate doesn't actually reach. Each revision went after that slack.",
        "The photos and videos here are of Rev B, the second iteration."
      ],
      revisions: [
        { rev: "A", change: "First build: proof of concept for the platform and vision loop.", result: "Working balance; noticeable linkage slack." },
        { rev: "B", change: "Redesigned and scaled up the structure; reworked the linkage joints and added the overhead camera arm.", result: "About 85% less free play; stiffer frame. Shown in the photos and videos." },
        { rev: "C", change: "Third iteration of the joint and linkage design.", result: "Almost no free play left in the linkages.", current: true }
      ],
      specs: [
        "Configuration: 3-DOF parallel platform",
        "Actuation: 6 hobby servos in 3 pairs, rod-end linkages",
        "Feedback: overhead camera, vision-based ball tracking",
        "Control: PID on ball position",
        "Response time: under 0.7 s (MATLAB simulation)",
        "Platform: clear acrylic plate on 3D-printed base"
      ],
      tags: ["SolidWorks", "MATLAB", "Simulink", "PID", "Computer vision", "3D printing"],
      learning: ["Backlash and its effect on control", "Parallel-mechanism kinematics", "PID tuning", "Vision-based feedback"],
      media: [
        { type: "image", src: "assets/images/orient/1.jpg", caption: "Orient Rev B with the overhead camera arm." },
        { type: "video", src: "assets/videos/orient-balance.mp4", poster: "assets/images/orient/poster-balance.jpg", caption: "Balancing: the platform brings the ball back to centre after it is disturbed." },
        { type: "video", src: "assets/videos/orient-tracking.mp4", poster: "assets/images/orient/poster-tracking.jpg", caption: "Vision loop: the camera feed on screen tracks the ball while the platform responds." },
        { type: "video", src: "assets/videos/orient-motion.mp4", poster: "assets/images/orient/poster-motion.jpg", caption: "Motion test of the platform." },
        { type: "video", src: "assets/videos/orient-calibration.mp4", poster: "assets/images/orient/poster-calibration.jpg", caption: "Working on Orient and calibrating it." },
        { type: "image", src: "assets/images/orient/4.jpg", caption: "Base assembly in SolidWorks: three servo pairs around the base." },
        { type: "image", src: "assets/images/orient/5.jpg", caption: "Servo pairs and linkage arms, isometric view." },
        { type: "image", src: "assets/images/orient/6.jpg", caption: "Full assembly with the camera arm." },
        { type: "image", src: "assets/images/orient/2.jpg", caption: "On the bench during assembly, with all six servos fitted." },
        { type: "image", src: "assets/images/orient/3.jpg", caption: "Side view of the linkages and acrylic plate." },
        { type: "image", src: "assets/images/orient/7.jpg", caption: "Receiving certificates at TIET's Experiential Learning Centre." }
      ]
    },
    {
      id: "biped",
      dwg: "GS-02",
      title: "Bipedal robot",
      subtitle: "A scaled-up Open Duck Mini",
      category: "Legged Robots",
      status: "In progress",
      time: "Oct 2026 – present",
      summary: "A scaled-up bipedal walking robot, based on the open-source Open Duck Mini. We built the original first to learn from it.",
      description: [
        "We started by building the <a href=\"https://github.com/apirrone/Open_Duck_Mini\" target=\"_blank\" rel=\"noopener\">Open Duck Mini</a>, an open-source bipedal robot (the black one in the photos). It was our reference: building and running it showed us where its problems were before we committed to a design of our own.",
        "We are now designing and building a scaled-up version (the blue one). We scaled the design up 1.3×, the largest size that keeps the joint torques within the servos' 30 kg·cm limit. I'm working on the legs, hips and body in SolidWorks, and the parts are 3D printed. The legs are printed and fitted with servos, and the full assembly is coming together."
      ],
      specs: [
        "Reference design: Open Duck Mini (open source)",
        "Our version: scaled up 1.3×, redesigned in SolidWorks",
        "Scale limit: servo torque, 30 kg·cm",
        "Actuators: Feetech STS3215 serial bus servos",
        "Build: 3D-printed structure"
      ],
      tags: ["SolidWorks", "3D printing", "Kinematics", "Balance control"],
      learning: ["Learning from an open-source design", "Scaling a mechanism to an actuator torque limit"],
      media: [
        { type: "image", src: "assets/images/biped/1.jpg", caption: "Our scaled-up version (blue, left) next to the Open Duck Mini we built as a reference (black, right)." },
        { type: "video", src: "assets/videos/biped-walk-1.mp4", poster: "assets/images/biped/poster-walk-1.jpg", caption: "Open Duck Mini reference build: walking test." },
        { type: "video", src: "assets/videos/biped-walk-2.mp4", poster: "assets/images/biped/poster-walk-2.jpg", caption: "Open Duck Mini: walking and turning on the floor." },
        { type: "video", src: "assets/videos/biped-walk-3.mp4", poster: "assets/images/biped/poster-walk-3.jpg", caption: "Open Duck Mini: longer walking test." },
        { type: "image", src: "assets/images/biped/2.jpg", caption: "Scaled-up design in SolidWorks: full assembly with body shell and head." },
        { type: "image", src: "assets/images/biped/3.jpg", caption: "Legs, hips and neck without the body shell." },
        { type: "image", src: "assets/images/biped/4.jpg", caption: "Leg and hip design." },
        { type: "image", src: "assets/images/biped/5.jpg", caption: "Scaled-up legs, printed and fitted with servos." },
        { type: "image", src: "assets/images/biped/9.jpg", caption: "Working on the Open Duck Mini legs." },
        { type: "video", src: "assets/videos/biped-leg-test.mp4", poster: "assets/images/biped/poster-leg-test.jpg", caption: "Testing the leg servos on the Open Duck Mini." },
        { type: "image", src: "assets/images/biped/6.jpg", caption: "Assembling the legs of the Open Duck Mini reference build." },
        { type: "image", src: "assets/images/biped/7.jpg", caption: "The Open Duck Mini legs and hips, assembled." },
        { type: "image", src: "assets/images/biped/8.jpg", caption: "With the team at TIET's Experiential Learning Centre, both bipeds in front." }
      ]
    },
    {
      id: "gokart-brakes",
      dwg: "GS-03",
      title: "Go-kart braking system",
      subtitle: "Team Oorja, TIET",
      category: "Vehicle Design",
      status: "Completed",
      time: "Oct 2023 – Aug 2025",
      summary: "I led the brakes department for Team Oorja's go-kart, which finished 6th nationally at the Indian Karting Race 2024.",
      description: [
        "I designed the kart's hydraulic disc-brake system, from the pedal ratio and master-cylinder sizing through to structural and thermal analysis in ANSYS, and helped fabricate it: cutting, welding and surface finishing.",
        "We chose disc brakes over drums because they are more compact, cool better through the drilled rotor, resist fade under repeated hard stops and are easier to service. The design goal was the shortest stopping distance without locking the wheels.",
        "The pedal went through several iterations. The design target was a 2000 N driver load, so each version was checked against that case until the final 7:1 pedal held it with margin.",
        "At the Indian Karting Race at Buddh International Circuit (2024) the team finished 6th nationally. I made last-minute technical fixes that kept the kart qualified for the advanced rounds. We also competed in the 12th Go-Kart Design Challenge at Kari Motor Speedway (2025)."
      ],
      revisions: [
        { rev: "A", change: "First brake calculations at a 4:1 pedal ratio, comparing 12 mm and 14 mm master-cylinder bores.", result: "12 mm bore chosen for higher line pressure; pedal ratio raised for the next iteration." },
        { rev: "B", change: "Early pedal concept modelled and simulated in SolidWorks.", result: "Minimum factor of safety 1.01: too little margin." },
        { rev: "C", change: "Final 7:1 pedal with a lightened, cranked profile, checked in ANSYS at 2000 N.", result: "Minimum factor of safety 1.18, 2.1 mm peak deflection.", current: true }
      ],
      specs: [
        "Pedal ratio: 7:1",
        "Pedal design load: 2000 N",
        "Master cylinder: 12 mm bore",
        "Caliper: 30 mm bore, fixed, twin-piston",
        "Disc: 190 mm diameter, drilled",
        "Brake line: 3 mm, DOT 3 fluid",
        "Calculated line pressure: about 11.8 MPa",
        "Calculated braking torque: about 570 N·m",
        "Stopping distance: 4.5 m from 50 km/h (3.3 m calculated)"
      ],
      tags: ["SolidWorks", "ANSYS Structural", "ANSYS Thermal", "Hydraulic brakes", "Fabrication", "Welding"],
      learning: ["Designing to a load case", "Iterating on factor of safety", "Thermal behaviour of brake discs", "Leading a department"],
      media: [
        { type: "image", src: "assets/images/gokart-brakes/1.jpg", caption: "E-177, Team Oorja's electric kart." },
        { type: "video", src: "assets/videos/gokart-track.mp4", poster: "assets/images/gokart-brakes/poster-track.jpg", caption: "Track testing." },
        { type: "image", src: "assets/images/gokart-brakes/2.jpg", caption: "Final pedal, ANSYS: factor of safety at 2000 N (minimum 1.18)." },
        { type: "image", src: "assets/images/gokart-brakes/3.jpg", caption: "Final pedal, ANSYS: von Mises stress at 2000 N." },
        { type: "image", src: "assets/images/gokart-brakes/4.jpg", caption: "Final pedal, ANSYS: total deformation at 2000 N (2.1 mm peak)." },
        { type: "image", src: "assets/images/gokart-brakes/5.jpg", caption: "Brake disc, ANSYS steady-state thermal under two load cases (peak 169 °C and 233 °C)." },
        { type: "image", src: "assets/images/gokart-brakes/6.jpg", caption: "Rev B: early pedal concept, SolidWorks factor-of-safety plot (minimum 1.01)." },
        { type: "video", src: "assets/videos/gokart-pedal.mp4", poster: "assets/images/gokart-brakes/poster-pedal.jpg", caption: "Brake pedal and master cylinder fitted to the kart." },
        { type: "video", src: "assets/videos/gokart-fabrication.mp4", poster: "assets/images/gokart-brakes/poster-fabrication.jpg", caption: "Fabrication in the team workshop." },
        { type: "image", src: "assets/images/gokart-brakes/7.jpg", caption: "In the bare chassis during the build, June 2024." },
        { type: "image", src: "assets/images/gokart-brakes/8.jpg", caption: "Team Oorja at the Formula Imperial & Indian Karting Race 2024." },
        { type: "image", src: "assets/images/gokart-brakes/9.jpg", caption: "Team Oorja at the 12th Go-Kart Design Challenge." }
      ]
    },
    {
      id: "garud-pak",
      dwg: "GS-04",
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
      dwg: "GS-05",
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
