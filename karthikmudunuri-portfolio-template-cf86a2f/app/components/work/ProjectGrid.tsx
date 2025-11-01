"use client";
import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import FilterBar from "./FilterBar";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectGrid = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearAll = () => {
    setSelectedTags([]);
  };

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTags.some((tag) => project.tags.includes(tag))
        );

  return (
    <>
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
        >
          Check out some of my work!
        </h4>
      </div>

      <FilterBar
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        onClearAll={handleClearAll}
      />

      <motion.div
        className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: ProjectProps) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                id={project.id}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                techNames={project.techNames}
                techLinks={project.techLinks}
                github={project.github}
                demo={project.demo}
                image={project.image}
                available={project.available}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          className="mt-10 text-center text-[#e4ded7] opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg">No projects found with selected tags.</p>
          <p className="mt-2 text-sm">Try selecting different filters!</p>
        </motion.div>
      )}
    </>
  );
};

export default ProjectGrid;
