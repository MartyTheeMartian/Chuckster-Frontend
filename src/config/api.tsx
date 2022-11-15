import ENV_CONFIG from '../../config.json';
import { PRODUCTION, DEVELOPMENT, LOCAL } from '../assets/constants';


interface GetHeadersInterface {
  [key: string]: {
    [key: string]: string;
  };
}

let baseURL: string = '';

switch (process.env.NODE_ENV) {
  case PRODUCTION:
    baseURL = ENV_CONFIG[PRODUCTION].API_URL;
    break;
  case DEVELOPMENT:
    baseURL = ENV_CONFIG[DEVELOPMENT].API_URL;
    break;
  case LOCAL:
    baseURL = ENV_CONFIG[LOCAL].API_URL;
    break;
  default:
    baseURL = ENV_CONFIG[LOCAL].API_URL;
};

function getHeaders(): GetHeadersInterface {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export default {
  baseURL,
  getHeaders,
};
