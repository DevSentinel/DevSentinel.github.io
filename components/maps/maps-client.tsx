"use client";

import React, { useState } from "react";
import MapContainer from "@/components/maps/map-container";
import HistoricalContext from "@/components/education/historical-context";
import historicalContext from "@/data/historical-context";

export default function MapsClient() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocationId(locationId);
    // Scroll to map section
    document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div id="map-section" className="mb-12">
        <MapContainer selectedLocationId={selectedLocationId} />
      </div>
      <div className="mt-16">
        <HistoricalContext 
          contextItems={historicalContext}
          onLocationClick={handleLocationSelect}
        />
      </div>
    </>
  );
}
