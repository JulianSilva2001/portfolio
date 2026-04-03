import TeaResearch from "../experiences/TeaResearch";
import NeurosteeredSpeaker from "./NeurosteeredSpeaker";
import PanoramaStitching from "./PanoramaStitching";
import MonocularRGBSlam from "./MonocularRGBSlam";
import EkfSlam from "./EkfSlam";
import Metroband from "./Metroband";
import Micromouse from "./Micromouse";
import Nanonaut from "./Nanonaut";
import SpeedObo from "./SpeedObo";
import GuitarPedal from "./GuitarPedal";
import Sportsense from "./Sportsense";
import PMFAnalyzer from "./PMFAnalyzer";
import Xplore from "./Xplore";
import Signify from "./Signify";
import Battlebot from "./Battlebot";
import CrystalClear from "./CrystalClear";
import PCBCompany from "./PCBCompany";
import CrowdNavigationRL from "./CrowdNavigationRL";







// Placeholder for other projects
const ProjectPlaceholder = ({ projectId }: { projectId: string }) => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Project: {projectId}</h3>
                <p>Detailed breakdown coming soon.</p>
            </div>
            <div className="process-card">
                <p>Values for {projectId} are being populated.</p>
                <a href="#/projects" className="action-button">Back to Projects</a>
            </div>
        </section>
    );
};

const ProjectDispatcher = ({ route }: { route: string }) => {
    // Route format: /project/some-id
    const projectId = route.replace("/project/", "");

    // Logic to return specific components based on ID
    // We can map specific IDs to the existing detailed pages we have!

    if (projectId === "tea-research") {
        return <TeaResearch />;
    }
    if (projectId === "neurosteered-speaker-extraction") {
        return <NeurosteeredSpeaker />;
    }
    if (projectId === "panorama-stitching") {
        return <PanoramaStitching />;
    }
    if (projectId === "monocular-rgb-slam") {
        return <MonocularRGBSlam />;
    }
    if (projectId === "ekf-slam-ros") {
        return <EkfSlam />;
    }
    if (projectId === "metroband") {
        return <Metroband />;
    }
    if (projectId === "obomouse") {
        return <Micromouse />;
    }
    if (projectId === "robot-nanonaut") {
        return <Nanonaut />;
    }
    if (projectId === "speedobo") {
        return <SpeedObo />;
    }
    if (projectId === "guitar-pedal") {
        return <GuitarPedal />;
    }
    if (projectId === "sportsense") {
        return <Sportsense />;
    }
    if (projectId === "pmf-analysis-agent") {
        return <PMFAnalyzer />;
    }
    if (projectId === "xplore") {
        return <Xplore />;
    }
    if (projectId === "signify") {
        return <Signify />;
    }
    if (projectId === "metronix-battlebot") {
        return <Battlebot />;
    }
    if (projectId === "crystal-clear") {
        return <CrystalClear />;
    }
    if (projectId === "pcb-company-app") {
        return <PCBCompany />;
    }
    if (projectId === "drl-crowd-navigation") {
        return <CrowdNavigationRL />;
    }

    // For now, return placeholder until we generate the files
    return <ProjectPlaceholder projectId={projectId} />;
};

export default ProjectDispatcher;
