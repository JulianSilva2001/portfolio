import { useState } from "react";
import compereBasketballImg from "../assets/Others/Public_Speaking/Basketball Tournament.jpg";
import compereCarolServiceImg from "../assets/Others/Public_Speaking/Carol_Service.jpg";
import compereColoursAwards23Img from "../assets/Others/Public_Speaking/Colours_awards_23.jpg";
import compereColoursAwards24Img from "../assets/Others/Public_Speaking/Colours_Awards_24.jpg";
import compereEnvoyageImg from "../assets/Others/Public_Speaking/Envoyage.jpg";
import compereGlobalVillageImg from "../assets/Others/Public_Speaking/Global Village.jpg";
import compereIdealize2023Img from "../assets/Others/Public_Speaking/Idealize_2023.jpg";
import compereMoraForesightAwardingImg from "../assets/Others/Public_Speaking/Moraforesight Awarding Ceremony.jpg";
import compereSlrcFinalsImg from "../assets/Others/Public_Speaking/SLRC_Finals.jpg";
import compereSlugBaseballImg from "../assets/Others/Public_Speaking/SLUG_basballe.jpg";
import aestheticsAbhinaDanceImg from "../assets/Others/Aesthetics/Abhina_Dance.jpeg";
import aestheticsAbhinaDramaImg from "../assets/Others/Aesthetics/Abhina_drama.jpeg";
import aestheticsAbhinaInstrumentsImg from "../assets/Others/Aesthetics/Abhina_Instruments.jpeg";
import aestheticsAnnualCarolConductImg from "../assets/Others/Aesthetics/Annual Unviersity Carol Service_Conduct.jpeg";
import aestheticsBeatboxTronicImg from "../assets/Others/Aesthetics/BeatBox_TronicPadura.jpg";
import aestheticsChathurmanaChoirImg from "../assets/Others/Aesthetics/Chathurmana_Choir.jpg";
import aestheticsColomboCarolsConductImg from "../assets/Others/Aesthetics/Sri Lanka Universities Colombo Region Carols_Conduct.jpeg";
import aestheticsYathraChoirImg from "../assets/Others/Aesthetics/Yathra_choir.jpeg";

const News = () => {
    const [newsFilter, setNewsFilter] = useState("All");

    return (
        <section className="section">
            <div className="section-header">
                <h3>News</h3>
                <p>Compere appearances and aesthetics performances.</p>
            </div>
            <div className="project-filters">
                {["All", "Compere", "Aesthetics"].map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        className={
                            newsFilter === filter ? "filter-chip active" : "filter-chip"
                        }
                        onClick={() => setNewsFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="project-grid">
                {[
                    {
                        title: "Carol Service",
                        category: "Compere",
                        description:
                            "Hosted the annual carol service of University of Moratuwa.",
                        image: compereCarolServiceImg,
                    },
                    {
                        title: "Colours Awards 2023",
                        category: "Compere",
                        description: "Compere for Colours Awards 2023.",
                        image: compereColoursAwards23Img,
                    },
                    {
                        title: "Colours Awards 2024",
                        category: "Compere",
                        description: "Compere for Colours Awards 2024.",
                        image: compereColoursAwards24Img,
                    },
                    {
                        title: "Envoyage",
                        category: "Compere",
                        description:
                            "Hosted Envoyage organized by the Department of ENTC.",
                        image: compereEnvoyageImg,
                    },
                    {
                        title: "Basketball Tournament",
                        category: "Compere",
                        description:
                            "Hosted the Inter-University basketball tournament program.",
                        image: compereBasketballImg,
                    },
                    {
                        title: "Global Village",
                        category: "Compere",
                        description: "Compere for the Global Village showcase.",
                        image: compereGlobalVillageImg,
                    },
                    {
                        title: "Idealize 2023",
                        category: "Compere",
                        description: "Compere for the Idealize 2023 event.",
                        image: compereIdealize2023Img,
                    },
                    {
                        title: "MoraForesight Awarding Ceremony",
                        category: "Compere",
                        description: "Hosted the MoraForesight awarding ceremony.",
                        image: compereMoraForesightAwardingImg,
                    },
                    {
                        title: "SLRC Finals",
                        category: "Compere",
                        description: "Compere for the SLRC Grand Finale.",
                        image: compereSlrcFinalsImg,
                    },
                    {
                        title: "SLUG Baseball Ceremony",
                        category: "Compere",
                        description: "Hosted the SLUG Baseball Ceremonies.",
                        image: compereSlugBaseballImg,
                    },

                    {
                        title: "Annual University Carol Service",
                        category: "Aesthetics",
                        description: "Conducted the annual university carol service.",
                        image: aestheticsAnnualCarolConductImg,
                    },

                    {
                        title: "Colombo Region Carols",
                        category: "Aesthetics",
                        description: "Conducted Colombo Region university carols.",
                        image: aestheticsColomboCarolsConductImg,
                    },

                    {
                        title: "Abhina Dance",
                        category: "Aesthetics",
                        description: "Dance performance at Abhina.",
                        image: aestheticsAbhinaDanceImg,
                    },
                    {
                        title: "Abhina Drama",
                        category: "Aesthetics",
                        description: "Drama performance at Abhina.",
                        image: aestheticsAbhinaDramaImg,
                    },
                    {
                        title: "Abhina Instruments",
                        category: "Aesthetics",
                        description: "Instrumental performance at Abhina.",
                        image: aestheticsAbhinaInstrumentsImg,
                    },

                    {
                        title: "BeatBox Tronic Padura",
                        category: "Aesthetics",
                        description: "Beatbox performance at Tronic Padura.",
                        image: aestheticsBeatboxTronicImg,
                    },
                    {
                        title: "Chathurmana Choir",
                        category: "Aesthetics",
                        description: "Choir performance at Chathurmana.",
                        image: aestheticsChathurmanaChoirImg,
                    },

                    {
                        title: "Yathra Choir",
                        category: "Aesthetics",
                        description: "Choir performance at Yathra.",
                        image: aestheticsYathraChoirImg,
                    },
                ]
                    .filter(
                        (newsItem) =>
                            newsFilter === "All" || newsItem.category === newsFilter
                    )
                    .map((newsItem) => (
                        <article
                            key={`${newsItem.title}-${newsItem.category}`}
                            className="project-card"
                        >
                            <div className="project-media">
                                <img src={newsItem.image} alt={newsItem.title} />
                            </div>
                            <div className="project-meta">
                                <span className="tag">{newsItem.category}</span>
                            </div>
                            <h4>{newsItem.title}</h4>
                            <p>{newsItem.description}</p>
                        </article>
                    ))}
            </div>
        </section>
    );
};

export default News;
