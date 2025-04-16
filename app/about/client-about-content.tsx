"use client";

import React from "react";
import ProjectInfo from "@/components/about/project-info";
import Credits from "@/components/about/credits";
import ResourceGrid from "@/components/education/resource-grid";
import projectInfo from "@/data/project-info";
import educationalResources from "@/data/educational-resources";

export default function ClientAboutContent() {
  return (
    <div className="space-y-16 w-full max-w-4xl">
      {/* Project Information Section */}
      <section>
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-xl p-8 border border-white/20 animate-fadein-glow">
          <ProjectInfo
            title={projectInfo.title}
            description={projectInfo.description}
            mission={projectInfo.mission}
            goals={projectInfo.goals}
          />
        </div>
      </section>
      {/* Team and Acknowledgements Section */}
      <section>
        <Credits
          team={projectInfo.team}
          acknowledgements={projectInfo.acknowledgements}
          contactEmail={projectInfo.contactEmail}
        />
      </section>
      {/* Educational Resources Section */}
      <section className="mt-16">
        <ResourceGrid
          resources={educationalResources}
          title="Educational Resources"
          description="Explore our curated collection of books, articles, videos, and websites about the Holocaust."
        />
      </section>
    </div>
  );
}
