import React from "react";
import source from './SourceText.json';

function AboutSection() {
    return (
        <div className="text-lg w-96 text-left">
            {source.about}
        </div>
    );
}

export default AboutSection;
