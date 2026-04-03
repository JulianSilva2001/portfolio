import { useState } from "react";
import battlebotImg from "../assets/Projects/Battlebot/main.jpeg";
import dyslexiaImg from "../assets/Projects/Dyslexia/main.jpg";
import pcbDefectsImg from "../assets/Projects/PCB Defects/main.jpg";
import panoramaImg from "../assets/Projects/Panorama/main.jpg";
import teaDefectsImg from "../assets/Projects/Tea/main.png";
import NSImage from "../assets/Projects/EEG_Fusion/Neurocodec.png";
import guitarPedalImg from "../assets/Projects/GuitarPedal/main.png";
import metrobandImg from "../assets/Projects/Metroband/main.png";
import micromouseImg from "../assets/Projects/Micromouse/main.jpeg";
import nanonautImg from "../assets/Projects/Nanonaut/main.jpg";
import pcbCompanyImg from "../assets/Projects/PCB_company/main.jpg";
import pmfAnalyzerImg from "../assets/Projects/PMF_Analyzer/main.png";
import signifyImg from "../assets/Projects/Signify/main.png";
import sportsenseImg from "../assets/Projects/Sportsense/main.jpg";
import xploreImg from "../assets/Projects/Xplore/main.jpg";
import speedoboImg from "../assets/Projects/SpeedObo/main.jpeg";
import ekfSlamImg from "../assets/Projects/EKF_SLAM/main.png";
import slamImg from "../assets/Projects/SLAM/main.png";
import rlCrowdImg from "../assets/Projects/RL/output_hall.gif";

const Projects = () => {
    const [projectFilter, setProjectFilter] = useState("All");

    const getProjectCategories = (category: string | string[]) =>
        Array.isArray(category) ? category : [category];

    return (
        <section className="section">
            <div className="section-header">
                <h3>Projects</h3>
                <p>Selected work grouped by focus area.</p>
            </div>
            <div className="project-filters">
                {["All", "AI & ML", "Robotics", "Embedded", "Software"].map(
                    (filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={
                                projectFilter === filter
                                    ? "filter-chip active"
                                    : "filter-chip"
                            }
                            onClick={() => setProjectFilter(filter)}
                        >
                            {filter}
                        </button>
                    )
                )}
            </div>
            <div className="project-grid">
                {[
                    {
                        id: "neurosteered-speaker-extraction",
                        title: "Neurosteered Target Speaker Extraction",
                        category: "AI & ML",
                        date: "Ongoing",
                        description:
                            "Generative EEG-guided target speaker extraction that predicts neural codec latents for high-fidelity (44.1 kHz) speech reconstruction in multi-speaker scenes.",
                        tech: "Python, PyTorch, MATLAB, EEGLAB, DAC, Causal Mamba",
                        image: NSImage,
                        highlight: "Final Year Project",
                    },
                    {
                        id: "pcb-defects-detection",
                        link: "https://medium.com/@silva.ljjp/building-a-computer-vision-based-pcb-defects-detection-and-inspection-system-0afbf2677bb9",
                        title: "PCB Defects Detection Device",
                        category: "AI & ML",
                        date: "April 2024",
                        description:
                            "An automated visual inspection system capable of detecting six types of PCB defects (missing holes, short circuits) and component errors with high accuracy.",
                        tech: "Python, YOLOv8, PyTorch, OpenCV, Altium, SolidWorks, React",
                        image: pcbDefectsImg,
                    },
                    {
                        id: "tea-classification",
                        link: "#/experience/tea", // Special link for this one
                        title: "Tea Classification and Signature Estimation (Paraqum)",
                        category: "AI & ML",
                        date: "December 2024",
                        description:
                            "AI system for identifying tea grades and estimating visual signatures (color, texture) to automate quality assessment in tea manufacturing.",
                        tech: "Python, TensorFlow, PyTorch, ResNet50, DINOv2",
                        image: teaDefectsImg,
                        highlight: "Internship Project",
                    },
                    {
                        id: "panorama-stitching",
                        title: "Panorama Stitching with Feature Matching (GNN)",
                        category: "AI & ML",
                        date: "November 2024",
                        description:
                            "Advanced image stitching pipeline using Graph Neural Networks (SuperGlue) for robust feature matching and seamless blending of panoramic views.",
                        tech: "SuperGlue GNN, Python, OpenCV, PyTorch, RANSAC",
                        image: panoramaImg,
                    },
                    {
                        id: "monocular-rgb-slam",
                        title: "Monocular RGB SLAM in Dynamic Environments",
                        category: ["AI & ML", "Robotics"],
                        date: "Ongoing",
                        description:
                            "A robust Monocular RGB SLAM system enhancing 3D Gaussian Splatting with uncertainty-aware tracking to map dynamic environments effectively.",
                        tech: "Python, PyTorch, 3D Gaussian Splatting, CUDA",
                        image: slamImg,
                    },
                    {
                        id: "drl-crowd-navigation",
                        title: "Deep RL Crowd Navigation (Graph + Mamba)",
                        category: ["AI & ML", "Robotics"],
                        date: "Ongoing",
                        description:
                            "Real-time crowd navigation policy combining Kalman Filtering Graph Networks and selective state space modeling for robust, low-latency robot behavior in dense dynamic scenes.",
                        tech: "Python, PyTorch, PPO, GNN, Mamba, LiDAR",
                        image: rlCrowdImg,
                        highlight: "Research Project",
                    },
                    {
                        id: "ekf-slam-ros",
                        title: "EKF SLAM in ROS",
                        category: ["Robotics"],
                        date: "2024",
                        description:
                            "Real-time localization and mapping implementation in ROS using Extended Kalman Filters (EKF) to fuse noisy sensor data for accurate robot navigation.",
                        tech: "ROS Noetic, Python, C++, EKF, Gazebo, Rviz",
                        image: ekfSlamImg,
                    },
                    {
                        id: "obomouse",
                        title: "OboMouse - Micromouse Robot",
                        category: ["Robotics", "Embedded"],
                        date: "Champions (MicroMaze 2024)",
                        description:
                            "Championship-winning autonomous maze-solving robot featuring flood-fill algorithms, high-speed PID control, and custom PCB design.",
                        tech: "STM32, C, Altium, SolidWorks, Flood-Fill Algo",
                        image: micromouseImg,
                    },
                    {
                        id: "robot-nanonaut",
                        title: "Robot Nanonaut",
                        category: ["Robotics", "Embedded"],
                        date: "—",
                        description:
                            "Modular multifunction robot designed with interchangeable blocks for Line Following, Obstacle Avoidance, Gripping, and Voice Control tasks.",
                        tech: "Arduino, SolidWorks, Altium, Bluetooth, Voice Recognition",
                        image: nanonautImg,
                    },
                    {
                        id: "speedobo",
                        title: "SpeedObo - High-Precision Line Follower",
                        category: ["Robotics", "Embedded"],
                        date: "—",
                        description:
                            "High-precision competitive line follower robot engineered with a custom 4WD chassis and optimized sensor arrays for maximum speed and accuracy.",
                        tech: "STM32, C++, Altium, SolidWorks, PID Control",
                        image: speedoboImg,
                    },
                    {
                        id: "metronix-battlebot",
                        title: "MetroniX Battlebot",
                        category: ["Robotics", "Embedded"],
                        date: "UWV Robot Battle 2024",
                        description:
                            "Combat robot built for the UWV Battle, featuring a high-torque active lifting mechanism and a custom RF communication protocol for low-latency control.",
                        tech: "Arduino, nRF24L01, Altium, SolidWorks, 3D Printing",
                        image: battlebotImg,
                    },
                    {
                        id: "metroband",
                        title: "Metroband - Tempo-Keeping Wristband",
                        category: "Embedded",
                        date: "Mora Ventures 6.0",
                        description:
                            "Wearable haptic wristband assisting musicians with tempo-keeping via vibration cues, featuring intelligent beat detection algorithms.",
                        tech: "C++, Altium, SolidWorks, Python, DSP",
                        image: metrobandImg,
                    },
                    {
                        id: "guitar-pedal",
                        title: "Analog Guitar Pedal Board",
                        category: "Embedded",
                        date: "—",
                        description:
                            "Comprehensive analog guitar effects unit featuring six distinct modules including Distortion, Overdrive, Delay, and Tremolo.",
                        tech: "Analog Circuits, LTspice, Altium, Audio Signal Processing",
                        image: guitarPedalImg,
                    },
                    {
                        id: "sportsense",
                        title: "Sportsense - AI Sports Trainer",
                        category: ["Software", "AI & ML"],
                        date: "Idealize 2024 (1st Runner-Up)",
                        description:
                            "AI Trainer app using Computer Vision to analyze gym exercises (squats, curls) in real-time, providing corrective feedback and rep counting.",
                        tech: "Kotlin, Firebase, Mediapipe, YOLOv8, Android",
                        image: sportsenseImg,
                    },
                    {
                        id: "signify",
                        title: "Signify - Speech-to-Sign-Language AR Glasses",
                        category: "Software",
                        date: "VR Cade 2025 (Champions)",
                        description:
                            "Award-winning AR glasses application that translates spoken language into sign language instantly, featuring a customizable 3D avatar interpreter.",
                        tech: "Unity, C#, Blender, OpenCV, Mediapipe",
                        image: signifyImg,
                    },
                    {
                        id: "pmf-analysis-agent",
                        title: "PMF Analysis Agent",
                        category: ["Software", "AI & ML"],
                        date: "Ongoing",
                        description:
                            "Intelligent agentic workflow for SaaS companies to analyze Product-Market Fit by processing qualitative and quantitative user feedback.",
                        tech: "React, Node.js, LangGraph, Python, AWS, LLMs",
                        image: pmfAnalyzerImg,
                    },
                    {
                        id: "xplore",
                        title: "Xplore - Travel Companion App",
                        category: ["Software", "AI & ML"],
                        date: "—",
                        description:
                            "Travel companion app offering AI-curated itineraries, real-time route tracking, and a community platform for sharing travel experiences.",
                        tech: "Next.js, React, Firestore, Google Maps API, Gemini AI",
                        image: xploreImg,
                    },
                    {
                        id: "crystal-clear",
                        title:
                            "Crystal Clear - Platform for Assisting Dyslexic Students",
                        category: ["Software", "AI & ML"],
                        date: "Imagine Cup 2024",
                        description:
                            "Interactive learning platform for dyslexic students using CV for hand-tracking (reading aid) and voice analysis for pronunciation verification.",
                        tech: "React, React Native, TensorFlow.js, Web Speech API",
                        image: dyslexiaImg,
                    },
                    {
                        id: "pcb-company-app",
                        title: "PCB Company Web Application",
                        category: "Software",
                        date: "—",
                        description:
                            "Enterprise-grade web application managing the entire PCB manufacturing lifecycle, including Order, Inventory, Production, and HR subsystems.",
                        tech: "Java Spring Boot, MongoDB, React, REST API",
                        image: pcbCompanyImg,
                    },
                ]
                    .filter(
                        (project) =>
                            projectFilter === "All" ||
                            getProjectCategories(project.category).includes(
                                projectFilter
                            )
                    )
                    .map((project) => (
                        <a
                            key={`${project.title}-${project.category}`}
                            href={project.link || `#/project/${project.id}`}
                            className="project-card-link"
                            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            target={project.link ? "_blank" : "_self"}
                            rel={project.link ? "noopener noreferrer" : ""}
                        >
                            <article className={`project-card ${project.highlight ? 'featured-project' : ''}`}>
                                <div className="project-media">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : (
                                        "Project image"
                                    )}
                                    {project.highlight && (
                                        <div className="project-badge">
                                            {project.highlight}
                                        </div>
                                    )}
                                </div>
                                <div className="project-content">
                                    <div className="project-meta">
                                        <div className="tag-group">
                                            {getProjectCategories(project.category).map(
                                                (category) => (
                                                    <span
                                                        key={`${project.title}-${category}`}
                                                        className="tag"
                                                    >
                                                        {category}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                        <span className="project-date">{project.date}</span>
                                    </div>
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.tech.split(', ').map((tech) => (
                                            <span key={tech} className="tech-chip">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
            </div>
        </section>
    );
};

export default Projects;
