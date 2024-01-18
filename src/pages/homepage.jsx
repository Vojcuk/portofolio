import React from 'react';
import Skills from "../componentrs/skills/skills";

function Homepage() {
    return (
        <div>
            <section id="section1">
                <h2>Dovednosti </h2>

                {
                    <Skills/>
                }

            </section>
            <section id="section2">
                <h2>Sekce 2</h2>
                {}
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {}

            </section>
        </div>
    );
}
export default Homepage;
