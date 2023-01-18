import axios from "axios";

const COVID_API_KEY = "cb16907690msh18f93810452a958p1296fbjsn88b4f9e030c3";
const COVID_API_HOST = "ski-resort-forecast.p.rapidapi.com";
const COVID_API_SERVICE = `https://${COVID_API_HOST}`;

export async function getResortSnowInfo(resort) {
  const options = {
    method: "GET",
    url: `${COVID_API_SERVICE}/${resort}/snowConditions`,
    headers: {
      "X-RapidAPI-Key": COVID_API_KEY,
      "X-RapidAPI-Host": COVID_API_HOST,
    },
  };
  const response = await axios(options);
  // Validate data here, generate error if not valid
  // Treat error with your own logic
  // Transform data as you need, g.e. mapping
  const modifiedData = {
    topSnowDepth: response.data.metric.topSnowDepth,
    freshSnowfall: response.data.metric.freshSnowfall,
    botSnowDepth: response.data.metric.botSnowDepth,
    lastSnowfallDate: response.data.metric.lastSnowfallDate,
    region: response.data.metric.basicInfo.region,
    name: response.data.metric.basicInfo.name,
    topLiftElevation: response.data.metric.basicInfo.topLiftElevation,
    botLiftElevation: response.data.metric.basicInfo.botLiftElevation,
  };
  console.log(modifiedData);
  return modifiedData;
}
