'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OverviewSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="explore" className="overview-section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2>
            &quot;None Is Too Many&quot;: The Holocaust and Canada
          </h2>
          <div className="memorial-divider"></div>
        </motion.div>
        
        <div className="overview-content">
          <motion.div 
            className="holocaust-overview"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3>
              The Holocaust
            </h3>
            <p>
              The Holocaust was the systematic, state-sponsored persecution and murder of six million 
              Jews by the Nazi regime and its allies and collaborators between 1933 and 1945. The Nazis 
              also targeted other groups for racial and ideological reasons, including Roma, people with 
              disabilities, Soviet prisoners of war, Polish civilians, and others.
            </p>
            <p>
              This genocide was implemented in stages, beginning with laws excluding Jews from civil society, 
              followed by the establishment of ghettos and concentration camps, and culminating in the construction 
              of killing centers designed for efficient mass murder.
            </p>
          </motion.div>
          
          <motion.div 
            className="canada-connection"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <h3>
              Canada&apos;s Connection
            </h3>
            <p>
              Canada&apos;s connection to the Holocaust is complex. Prior to and during World War II, 
              Canada maintained restrictive immigration policies that limited Jewish refugee admissions. 
              The infamous &quot;None is Too Many&quot; policy reflected the antisemitism present in Canadian 
              society and government at that time.
            </p>
            <p>
              After the war, Canada&apos;s policies changed, and between 1947 and 1955, approximately 35,000 
              Holocaust survivors immigrated to Canada, rebuilding their lives and contributed significantly 
              to Canadian society. Their stories and experiences form an important part of both Holocaust 
              history and Canadian history.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
