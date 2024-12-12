export const openPath = (arg1, callback) => {
  switch(arg1) {
    case "emotion":
      callback({
        ...emotion,
        activeKey: "association",
      });
      break;
    case "association":
      callback({
        ...association,
        activeKey: "reflection",
      });
      break;
    case "reflection":
      callback({
        ...reflection,
        activeKey: "cultural_influence",
      });
      break;
    case "cultural_influence":
      callback({
        ...cultural_influence,
        activeKey: "uniqueness",
      });
      break;
    case "uniqueness":
      callback({
        ...uniqueness,
        activeKey: "technical_execution",
      });
      break;
    case "technical_execution":
      callback({
        ...technical_execution,
        activeKey: "niche_appeal",
      });
      break;
    case "niche_appeal":
      callback({
        ...niche_appeal,
        activeKey: "similar_artists",
      });
      break;
    case "similar_artists":
      callback({
        ...similar_artists,
        activeKey: "live_performance",
      });
      break;
    case "live_performance":
      callback({
        ...live_performance,
        activeKey: "narrative",
      });
      break;
    case "narrative":
      callback({
        ...narrative,
        activeKey: "aesthetic",
      });
      break;
    case "aesthetic":
      callback({
        ...aesthetic,
        activeKey: "stand_out",
      });
      break;
    case "stand_out":
      callback({
        ...stand_out,
        activeKey: "close_open",
      });
      break;
    case "close_open":
      callback({
        questions: ["Thank you for your answers!"],
        type: "open",
        id: "close"
      });
      break;
    default:
      // code block
  }
}


export const emotional_connection = {
  id: 'emotion',
  questions: ['What emotions or experience from sound listening does this music evoke?']
}

export const association = {
  id: 'association',
  questions: ['Do you associate this music with a specific time, place, or person?']
}

export const reflection = {
  id: 'reflection',
  questions: ['Cultural and historical context reflects the importance of origins, influences, and its role in cultural identity.', 'How does this piece reflect its cultural or historical background?']
}

export const cultural_influence = {
  id: 'cultural_influence',
  questions: ['Does this music introduce or influences you to a new cultural or regional style? Please describe it.']
}

export const uniqueness = {
  id: 'uniqueness',
  questions: ['Artistic expression developes how unique, innovative, or experimental a piece is in terms of sound, structure, and creativity.', 'Does this music offer a fresh or unique take on a genre? Which elements of this music feel experimental or unconventional?']
}

export const technical_execution = {
  id: 'technical_execution',
  questions: ['Technical Execution addresses the quality and skill of performance, production, and arrangement.', 'How would you rate the technical execution of the music (instrumentation, vocals) and how complex is the arrangement and layering of instruments?']
}

export const niche_appeal = {
  id: 'niche_appeal',
  questions: ['Genre focuses on genre distinctions, subgenre classifications, and niche styles.', 'How well does this music fit into its intended genre or subgenre? Can you describe it more?']
}

export const similar_artists = {
  id: 'similar_artists',
  questions: ['Does this piece remind you of other similar artists or genres?']
}

export const live_performance = {
  id: 'live_performance',
  questions: ['Which venues or open spaces is this music for a live performance suitable for?']
}

export const narrative = {
  id: 'narrative',
  questions: ['How well do the music and lyrics work together to convey the narrative?']
}

export const aesthetic = {
  id: 'aesthetic',
  questions: ['How would you describe the overall aesthetic of this music (e.g., raw, polished, dark, bright)?']
}

export const stand_out = {
  id: 'stand_out',
  questions: ['Which sonic elements stand out the most to you?']
}




