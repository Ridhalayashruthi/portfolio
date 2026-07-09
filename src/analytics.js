import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

ReactGA.initialize(measurementId);

export default ReactGA;