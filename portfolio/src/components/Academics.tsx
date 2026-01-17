const Academics = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Academics</h3>
                <p>Education milestones and academic highlights.</p>
            </div>
            <div className="project-grid">
                <div className="list-item">
                    <h4>University of Moratuwa, Sri Lanka | 2022 - Present</h4>
                    <p>
                        B.Sc. Honours in Electronic and Telecommunication Engineering
                        (CGPA: 3.82/4.00)
                    </p>
                    <p className="muted">
                        Dean&apos;s List appearance in 5 out of 6 semesters
                    </p>
                </div>
                <div className="list-item">
                    <h4>St. Anthony&apos;s College, Kandy | 2007 - 2020</h4>
                    <p>
                        Passed GCE A/L Examination with 3A&apos;s in Physical Stream
                        (University Entrance Examination)
                    </p>
                    <p className="muted">Z-score: 2.3016</p>
                    <p>Winner of Best Student in Physics Award for the Year 2025</p>
                </div>
            </div>
        </section>
    );
};

export default Academics;
