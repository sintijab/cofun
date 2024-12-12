import { Flex, TextBase } from "@co-fun/ui";

export default function Index() {
  return (
    <>
      <TextBase textStyle="heading" lineHeight="2" alignSelf="center">
        Integrations
      </TextBase>
      <TextBase textStyle="project-descr" lineHeight="2" p=".5rem 0">
        At CO-FUN mainly use open-source and cross-platform libraries for software development, and incorporate intelligent systems such as <u><a href="https://openai.com/" target="_blank" rel="norefferer noopener">Open AI</a></u> LLMs for developing search algorithms globally and performing semantic data analysis for advanced business cases.
      </TextBase>
      <TextBase textStyle="project-title" lineHeight="2">
        List of Technologies
      </TextBase>
      <ul>
        <li><u><a href="https://openai.com/" target="_blank" rel="norefferer noopener">Open AI</a></u> Large Language Model for search with AI and integrations with our software.</li>
        <li><u><a href="https://socket.io/" target="_blank" rel="norefferer noopener">Socket.IO</a></u> Event-based communication framework for our chatbot systems with low-overhead communication channels.</li>
        <li><u><a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank" rel="norefferer noopener">WebSockets API</a></u> Protocol for two-way interactive connection between the browser and a server. </li>
        <li><u><a href="https://expressjs.com/" target="_blank" rel="norefferer noopener">Express JS</a></u> Node.js web application framework that provides a robust features for web and mobile applications.</li>
        <li><u><a href="https://nextjs.org/" target="_blank" rel="norefferer noopener">Next JS</a></u> React based web application framework that allows us to create high performing web applications.</li>
        <li><u><a href="https://developers.google.com/maps/documentation/places/web-service/overview" target="_blank" rel="norefferer noopener">Google Places API</a></u> service for location-aware features to make detailed location data easily accessible.</li>
        <li><u><a href="https://rapidapi.com/" target="_blank" rel="norefferer noopener">Rapid API</a></u> Marketplace for application programming interface (API) management.</li>
        <li><u><a href="https://apexcharts.com/" target="_blank" rel="norefferer noopener">ApexCharts</a></u> open-source chart library for building interactive visualizations for web software.</li>
        <li>Technologies available on-demand and inquired from our customers continuously (TBA/TBD).</li>
      </ul>
    </>
  );
}