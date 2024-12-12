/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { sound_source, technicalPath } from './assets/answers_listening';
import { emotional_connection, openPath } from './assets/answers_listening_simple';
const app = express();

const http = require('http');
const cors=require('cors');


const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
  }
});

const options = {
  origin: 'http://localhost:3000',
  }
app.use(cors(options))


io.on('connection', (socket) => {
  // console.log('client connected');
  socket.on('init', (callback) => {
    callback({
      activeKey: "listening_init",
      questions: ["We would like to collect more details from your listening experience. The answers will be collected and refined to select the artists on our platform.",  "Would you have time to answer a few questions?"],
      suggestions: [{ answer: `Let's do it`, key: true }, { answer: `Not now`, key: false }],
    });
  });
  socket.on('update_item', (arg1, arg2, callback) => {
    if (arg1 === "listening_init" ) {
      const consent = arg2 === true || arg2 === "Let's do it" || arg2.toLowerCase().includes('yes');
      if (consent) {
        return callback({
          activeKey: "title",
          id: "title",
          questions: ["What are you listening now?", "What is the song title?"]
        });
      } else {
        return callback({
          activeKey: "listening_closed",
          questions: ["Thank you for your feedback!"]
        });
      }
    }
    if (arg1 === "title") {
      return callback({
        activeKey: "author",
        id: "author",
        questions: ["Who is the author?"],
      });
    }
    if (arg1 === "author") {
      return callback({
        activeKey: "source",
        id: "source",
        questions: ["Where did you hear this song?", "Please provide any link or reference."],
      });
    }
    if (arg1 === "source") {
      return callback({
        questions: ["Would you prefer more technical and advanced or open questions?"],
        suggestions: [{ answer: `More technical`, key: 'technical' }, { answer: `Open-ended`, key: 'open' }],
      });
    }
    if (arg2 === "technical") {
      return callback({
        questions: ["Please select one of the options below:"],
        ...sound_source,
        activeKey: "rhytmic_scale",
      });
    } else if (arg2 === "open") {
      return callback({
        questions: ["Please select one of the options below:"],
        ...emotional_connection,
        activeKey: 'association',
      });
    }
    
    // if (arg1 === "technical" || arg1 === "open") {
    //   const url = `https://itunes.apple.com/search?term=${arg2}`;
    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data?.resultCount === 0) {
    //         return callback({
    //           activeKey: "listening_closed",
    //           questions: ["Sorry, we couldn't recognize this song"],
    //         });
    //       }
    //       let collections = data?.results;
    //       if (data?.resultCount > 1) {
    //         collections = data.results.filter(result => !result.collectionArtistId && arg2.includes(result.artistName));
    //         if (collections.length > 0) {
    //           collections = collections[0];
    //         }
    //       }
    //     })
    //     .catch((err) => {
    //       return callback({
    //         activeKey: "general_error",
    //         questions: ["Please try again later"],
    //       });
    //     })
    // }
    technicalPath(arg1, callback, arg2);
    openPath(arg1, callback);
  });
});

io.engine.on("connection_error", (err) => {
  console.log(err.req);      // the request object
  console.log(err.code);     // the error code, for example 1
  console.log(err.message);  // the error message, for example "Session ID unknown"
  console.log(err.context);  // some additional error context
});

const port = process.env.PORT || 3333;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
