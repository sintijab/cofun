export const technicalPath = (arg1, callback, arg2) => {
  switch(arg1) {
    case "rhytmic_scale":
      callback({
        questions: ["Please select one of the options below:"],
        ...rhytmic_scale,
        activeKey: "tempo_modulation",
      });
      break;
    case "tempo_modulation":
      callback({
        questions: ["Please select one of the options below:"],
        ...tempo_modulation,
        activeKey: "beat_types",
      });
      break;
    case "beat_types":
      callback({
        questions: ["Please select one of the options below:"],
        ...beat_types,
        activeKey: "tempo_range",
      });
      break;
    case "tempo_range":
      callback({
        questions: ["Please select one of the options below:"],
        ...tempo_range,
        activeKey: "tempo_complexity",
      });
      break;
    case "tempo_complexity":
      callback({
        questions: ["Please select one of the options below:"],
        ...tempo_complexity,
        activeKey: "spatial_context",
      });
      break;
    case "spatial_context":
      callback({
        questions: ["Please select one of the options below:"],
        ...spatial_context,
        activeKey: null,
      });
      break;
    case "enclosed_settings":
      callback({
        questions: ["Please select one of the options below:"],
        ...enclosed_settings,
        activeKey: "close_technical",
      });
      break;
    case "open_air":
      callback({
        questions: ["Please select one of the options below:"],
        ...open_air,
        activeKey: "close_technical",
      });
      break;
    case "natural_environments":
      callback({
        questions: ["Please select one of the options below:"],
        ...natural_environments,
        activeKey: "close_technical",
      });
      break;
    case "close_technical":
      callback({
        questions: ["Thank you for your answers!"],
        type: "technical",
        id: "close"
      });
      break;
    default:
      // code block
  }
}


export const sound_source = {
  id: 'sound_source',
  type: "button_select",
  title: "Sound Source",
  description: [
    "Identifies the origin of a sound, whether from traditional musical instruments or artificial, fabricated sources. This category helps distinguish between natural acoustic sources and mechanically or digitally generated sounds.",
    "Musical Instruments: Sounds produced by traditional or electronic musical instruments, such as strings, woodwinds, percussion, brass, or synthesizers.",
    "Fabricated Sources: Non-natural, human-made sound sources, such as mechanical noises, industrial sounds, household items, digital tones, or electronic machinery.",
    "Hybrid Sources: Combination of musical instruments and fabricated sounds, blending organic and synthetic elements to create unique textures.",
    "Environmental Sounds: Background ambiance from various natural or urban settings, such as cityscapes, nature reserves, or weather conditions, providing a contextual soundbed.",
    "Synthetic Sources: Completely digitally synthesized tones or sound effects, created using virtual instruments or digital signal processing (DSP) techniques."
  ],
  answers: [
    {
      key: "musical_instruments",
      answer: "Musical Instruments"
    },
    {
      key: "fabricated_sources",
      answer: "Fabricated Sources"
    },
    {
      key: "hybrid_sources",
      answer: "Hybrid Sources"
    },
    {
      key: "environmental_sounds",
      answer: "Environmental Sounds"
    },
    {
      key: "synthetic_sources",
      answer: "Synthetic Sources"
    }
  ]
}

export const rhytmic_scale = {
  id: 'rhytmic_scale',
  type: "button_select",
  title: "Rhythmic Scale and Patterns",
  description: "Rhythmic features capture the pulse, timing, and structure of a piece. They help define how sound flows, interacts, and drives forward motion.",
  answers: [
    {
      key: "micro",
      answer: "Micro (subtle subdivisions of a beat, polyrhythms)"
    },
    {
      key: "macro",
      answer: "Macro (overall rhythmic pattern, overarching structure)"
    },
    {
      key: "recursive",
      answer: "Recursive (repeating motifs, self-similar patterns)"
    },
    {
      key: "fluid",
      answer: "Fluid (shifting, ambiguous timing signatures)"
    }
  ]
}

export const tempo_modulation = {
  id: 'tempo_modulation',
  type: "button_select",
  title: 'Tempo Modulation',
  description: 'Rhythmic features capture the pulse, timing, and structure of a piece. They help define how sound flows, interacts, and drives forward motion.',
  answers: [
    {
      key: "accelerando",
      answer: "Accelerando (gradually speeding up)"
    },
    {
      key: "ritardando",
      answer: "Ritardando (gradually slowing down)"
    },
    {
      key: "rubato",
      answer: "Rubato (expressive tempo flexibility)",
    },
    {
      key: "static_tempo",
      answer: "Static (constant, unchanging beat)"
    }
  ]
}

export const beat_types = {
  id: 'beat_types',
  type: "button_select",
  title: 'Beat Types',
  description: 'Rhythmic features capture the pulse, timing, and structure of a piece. They help define how sound flows, interacts, and drives forward motion.',
  answers: [
    {
      key: 'even',
      answer: 'Even Beats: Straight, four-on-the-floor, standard 4/4 or 3/4 time'
    },
    {
      key: 'syncopation',
      answer: 'Syncopation: Off-beat accents, irregular timing'
    },
    {
      key: 'complex',
      answer: 'Complex Rhythms: Polyrhythms, tuplets, hemiolas'
    },
    {
      key: 'dissonant',
      answer: 'Dissonant Beats: Cross-rhythms, staggered downbeats'
    }
  ]
}

export const tempo_range = {
  id: 'tempo_range',
  type: "button_select",
  title: "Tempo Range",
  description: "Tempo is more than just beats per minute—it can convey energy, urgency, or calm.",
  answers: [
    {
      key: "slow",
      answer: "Slow: <60 BPM (Largo, Adagio, Grave)"
    },
    {
      key: "medium",
      answer: "Medium: 60–180 BPM (Andante, Moderato, Allegro)"
    },
    {
      key: "fast",
      answer: "Fast: >180 BPM (Vivace, Presto, Prestissimo)"
    }
  ]
}

export const tempo_complexity = {
  id: 'tempo_complexity',
  type: "button_select",
  title: "Tempo Complexity",
  description: "Complex tempo patterns can include constant, modulating, or interacting time signatures, adding depth and variation to the rhythm.",
  answers: [
    {
      key: "constant",
      answer: "Constant: Steady tempo with no variation"
    },
    {
      key: "modulating",
      answer: "Modulating: Gradual tempo changes throughout"
    },
    {
      key: "metric_modulation",
      answer: "Metric Modulation: Shifting subdivisions within a piece"
    },
    {
      key: "polytemporal",
      answer: "Polytemporal: Multiple tempos interacting simultaneously"
    }
  ]
}

export const spatial_context = {
  id: 'spatial_context',
  type: "button_select",
  title: "Spatial Context and Soundscape Settings",
  description: "Captures the environmental and spatial characteristics of sound within real and imagined spaces, covering a wide range of auditory settings and soundscapes.",
  answers: [
    {
      key: "enclosed_settings",
      answer: "Enclosed Settings: Recording Venues, Residential Spaces"
    },
    {
      key: "open_air",
      answer: "Open-Air and Public Spaces: Urban, Rooftop, Park"
    },
    {
      key: "natural_environments",
      answer: "Natural Environments: Forest, Desert, Mountain, Water"
    }
  ]
}


export const enclosed_settings = {
  id: 'enclosed_settings',
  type: "button_select",
  title: "Enclosed Settings",
  description: "Captures the environmental and spatial characteristics of sound within various enclosed spaces, highlighting the unique acoustic properties of different venues.",
  answers: [
    {
      key: "concert_hall",
      answer: "Concert Hall / Opera House / Theater"
    },
    {
      key: "club_lounge",
      answer: "Club / Lounge / Bar / Speakeasy"
    },
    {
      key: "warehouse_factory",
      answer: "Warehouse / Factory / Loft / Open Gallery"
    },
    {
      key: "church_cathedral",
      answer: "Church / Cathedral / Temple / Synagogue"
    },
    {
      key: "cafe_bistro",
      answer: "Cafe / Bistro / Restaurant"
    },
    {
      key: "library_office",
      answer: "Library / Open Office / Room"
    },
    {
      key: "studio",
      answer: "Sound Studio"
    },
    {
      key: "residential_apartment",
      answer: "Apartment / House / Cottage / Manor"
    },
    {
      key: "residential_historical",
      answer: "Historical Building (Museum, Castle, Fortress, Bunker)"
    },
    {
      key: "other_enclosed",
      answer: "Other"
    },
  ]
}

export const open_air = {
  id: 'open_air',
  type: "button_select",
  title: "Open-Air and Public Spaces",
  description: "Describes the spatial characteristics and acoustics of various open-air and public locations, each providing unique reverberation and ambient noise profiles.",
  answers: [
    {
      key: "public_plaza",
      answer: "Public Plaza / Market Square / Urban Alley"
    },
    {
      key: "rooftop_pier",
      answer: "Rooftop / Pier / Harbor / Train Yard"
    },
    {
      key: "playground_park",
      answer: "Playground / Park / Botanical Garden"
    },
    {
      key: "outdoors",
      answer: "Festival Grounds / Outdoor Stage / Pavilion"
    },
    {
      key: "other_open_air",
      answer: "Other"
    }
  ]
}

export const natural_environments = {
  id: 'natural_environments',
  type: "button_select",
  title: "Natural Environments",
  description: "Captures the sound qualities and unique acoustics of natural settings, emphasizing the influence of geography and weather on auditory experiences.",
  answers: [
    {
      key: "hydro_acoustics",
      answer: "Hydro-Acoustics: Underwater Sounds, Seaside, Lake Shore, Rainforest Stream, Waterfall"
    },
    {
      key: "environmental",
      answer: "Environmental: Urban Soundscapes, Ocean Waves, Desert Sands, Distant Howls, Sand Shifts"
    },
    {
      key: "forest",
      answer: "Forest: Birdsong, Cracking Branches, Leaf Rustle"
    },
    {
      key: "mountain",
      answer: "Mountain: Echoes, Avalanches, Cave Ambiance"
    },
    {
      key: "weather_conditions",
      answer: "Weather Conditions: Storms, Blizzard, Rainfall, Thunder, Hail"
    },
    {
      key: "animal_sounds",
      answer: "Animal Sounds: Birdsong, Insect Buzz, Mammal Calls"
    }
  ]
}
