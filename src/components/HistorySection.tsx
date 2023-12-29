// HistorySection.tsx
import React from "react";
import "./styles/HistorySection.css";

const HistorySection: React.FC = () => {
  return (
    <section className="container mt-4 history-section">
      <h2 className="display-3 font-weight-bold history-heading">History</h2>
      <hr className="history-divider" />

      {/* Blurb about the person */}
      <div className="row mb-4">
        <div className="col-md-12">
          <p className="history-blurb">
            During her time in college, Hoffman started her career in marketing
            early! She worked many student jobs for the univeristy marketing
            department such as being a social media assistant, as well as a
            social ambassador. After being a stellar student at Southeast
            Missouri State University, Hoffman graduated with the honors of
            Summa Cum Laude, obtaining a Marketing Degree. She then went
            straight into the field, getting a job with Convergence Companies as
            a Marketing and Communications Specalist where she works to grow
            their marketing department from the ground up, implementing new
            ideas and supporting the large team however she can.
          </p>
        </div>
      </div>

      {/* Timeline of career */}
      <div className="row">
        <div className="col-md-12">
          <ul className="timeline">
            <li>
              <div className="timeline-date">2021</div>
              <div className="timeline-event">
                Started working as a SEMO Social Ambassador
              </div>
            </li>

            <li>
              <div className="timeline-date">2022</div>
              <div className="timeline-event">
                Started working as a University Marketing Assistant
              </div>
            </li>

            <li>
              <div className="timeline-date">2023</div>
              <div className="timeline-event">
                Graduated Southeast Missouri State University
              </div>
            </li>

            <li>
              <div className="timeline-date">2023</div>
              <div className="timeline-event">
                Joined Convergence Companies as a Marketing/Communications
                Specalist
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
