import sendRequest from "./send-request";

const BASE_URL = '/api/pets';

export function getAll() {
    return sendRequest(BASE_URL);
}