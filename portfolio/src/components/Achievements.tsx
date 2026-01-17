import { useState } from "react";
import achievementBattlebotImg from "../assets/Achievements/battlebot.jpeg";
import achievementBrainstormImg from "../assets/Achievements/Brainstorm.jpeg";
import achievementDeansListImg from "../assets/Achievements/deansList.png";
import achievementIdealizeRunnerUpImg from "../assets/Achievements/Idealize_2.jpeg";
import achievementIdealizeConceptualistImg from "../assets/Achievements/Idealize_conceptualist.jpeg";
import achievementIESLImg from "../assets/Achievements/IESL.jpeg";
import achievementImagineCupImg from "../assets/Achievements/imagineCup.png";
import achievementMicroMazeImg from "../assets/Achievements/micromaze.jpeg";
import achievementPhysicsImg from "../assets/Achievements/Physics.jpg";
import achievementRobofestImg from "../assets/Achievements/robofest.jpeg";
import achievementSparkImg from "../assets/Achievements/spark.jpg";
import achievementVRCadeImg from "../assets/Achievements/VRCade.jpeg";
import achievementBasketballImg from "../assets/Achievements/basketball.png";
import achievementBylImg from "../assets/Achievements/byl.jpeg";
import achievementChessImg from "../assets/Achievements/chess.png";
import achievementChoirImg from "../assets/Achievements/choir.jpg";
import achievementChoir2Img from "../assets/Achievements/choir2.jpg";
import achievementIgvImg from "../assets/Achievements/igv.jpeg";
import achievementMusicianImg from "../assets/Achievements/musician.jpeg";
import achievementIdealizeImg from "../assets/Achievements/amplifier.jpg";
import achievementChathurmanaImg from "../assets/Achievements/chathurmana.jpeg";

const Achievements = () => {
    const [achievementFilter, setAchievementFilter] = useState("All");

    return (
        <section className="section">
            <div className="section-header">
                <h3>Achievements</h3>
                <p>Milestones I&apos;m proud of.</p>
            </div>
            <div className="project-filters">
                {[
                    "All",
                    "Technical & Innovation Competitions",
                    "Academic Excellence",
                    "Leadership & AIESEC",
                    "Music & Performing Arts",
                    "Sports",
                ].map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        className={
                            achievementFilter === filter
                                ? "filter-chip active"
                                : "filter-chip"
                        }
                        onClick={() => setAchievementFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="list-grid">
                {[
                    {
                        title: "Champions - VR Cade 2025 (Mixed Reality Competition)",
                        category: "Technical & Innovation Competitions",
                        description: "IEEE IAS at UoM",
                        image: achievementVRCadeImg,
                    },
                    {
                        title: "Champions - MicroMaze 2024 (Micromouse)",
                        category: "Technical & Innovation Competitions",
                        description: "IEEE RAS at IIT",
                        image: achievementMicroMazeImg,
                    },
                    {
                        title:
                            "1st Runner-Up - Idealize 2024 (Ideathon & Mobile App)",
                        category: "Technical & Innovation Competitions",
                        description: "AIESEC UoM",

                        image: achievementIdealizeRunnerUpImg,
                    },

                    {
                        title: "2nd Runner-Up - Robofest 2024 (Micromouse)",
                        category: "Technical & Innovation Competitions",
                        description: "SLIIT",
                        image: achievementRobofestImg,
                    },
                    {
                        title: "5th Place - SPARK 2024 Innovation Competition",
                        category: "Technical & Innovation Competitions",
                        description: "Electronic Club UoM",
                        image: achievementSparkImg,
                    },
                    {
                        title: "7th Place - UWU Robot Battle Competition",
                        category: "Technical & Innovation Competitions",
                        image: achievementBattlebotImg,
                    },

                    {
                        title: "Conceptualist Award - Idealize 2024",
                        category: "Technical & Innovation Competitions",
                        description: "AIESEC UoM",
                        image: achievementIdealizeConceptualistImg,
                    },
                    {
                        title:
                            "Finalist - Brainstorm 2024 (Sri Lanka’s Premier Healthcare Innovation Competition)",
                        category: "Technical & Innovation Competitions",
                        image: achievementBrainstormImg,
                    },
                    {
                        title: "Finalist - IESL Startup Challenge 20205",
                        category: "Technical & Innovation Competitions",
                        image: achievementIESLImg,
                    },
                    {
                        title:
                            "Semifinalist - Microsoft ImagineCup 2024 (AI-Driven Student Startups)",
                        category: "Technical & Innovation Competitions",
                        image: achievementImagineCupImg,
                    },

                    {
                        title:
                            "Dean’s List - 6/7 semesters (Level 1 (Sem 1 & 2), Level 2 (Sem 2), Level 3 (Sem 1 & 2))",
                        category: "Academic Excellence",
                        description: "University of Moratuwa",
                        image: achievementDeansListImg,
                    },
                    {
                        title: "Winner - Best Student in Physics of the Year (2020)",
                        category: "Academic Excellence",
                        image: achievementPhysicsImg,
                        description: "St. Anthony’s College Kandy",
                    },

                    {
                        title: "Best Young Leader Nominee",
                        category: "Leadership & AIESEC",
                        description: "AIESEC Sri Lanka (2022)",
                        image: achievementBylImg,
                    },

                    {
                        title: "Best Team Leader & Best Project of the Quarter - IGV",
                        category: "Leadership & AIESEC",
                        description: "AIESEC UoM",
                        image: achievementIgvImg,
                    },
                    {
                        title: "Second Best Leader - AMPLIFIER 2021",
                        category: "Leadership & AIESEC",
                        description: "AIESEC Sri Lanka",
                        image: achievementIdealizeImg,
                    },

                    {
                        title:
                            "Finalist - Chathurmana ’23 (Inter-University Talent Competition)",
                        category: "Music & Performing Arts",
                        description: "Choir TripleG",
                        image: achievementChathurmanaImg,
                    },
                    {
                        title: "Winner - Best Musician of the Year (2019)",
                        category: "Music & Performing Arts",
                        description: "St. Anthony’s College Kandy",
                        image: achievementMusicianImg,
                    },
                    {
                        title:
                            "First Place - Three times| All-Island Choir Competitions ",
                        category: "Music & Performing Arts",
                        description: "2019, 2017, 2015",
                        image: achievementChoirImg,
                    },
                    {
                        title:
                            "Second Place - Two Times | All-Island Choir Competitions ",
                        category: "Music & Performing Arts",
                        description: "2018, 2016",
                        image: achievementChoir2Img,
                    },
                    {
                        title: "Runner-Up - Inter-School Basketball Tournament",
                        category: "Sports",
                        description: "2016",
                        image: achievementBasketballImg,
                    },
                    {
                        title: "Runner-Up - Zonal Chess Championship",
                        category: "Sports",
                        description: "2015",
                        image: achievementChessImg,
                    },
                ]
                    .filter(
                        (achievement) =>
                            achievementFilter === "All" ||
                            achievement.category === achievementFilter
                    )
                    .map((achievement) => (
                        <article
                            key={`${achievement.title}-${achievement.category}`}
                            className="project-card"
                        >
                            <div className="project-media">
                                {achievement.image ? (
                                    <img src={achievement.image} alt={achievement.title} />
                                ) : (
                                    "Achievement image"
                                )}
                            </div>
                            <div className="project-meta">
                                <span className="tag">{achievement.category}</span>
                            </div>
                            <h4>{achievement.title}</h4>
                            {achievement.description && (
                                <p>{achievement.description}</p>
                            )}
                        </article>
                    ))}
            </div>
        </section>
    );
};

export default Achievements;
