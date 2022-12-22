import sendRequest from "./send-request";

const BASE_URL = '/api/pets';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function createPet(petFormData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', petFormData)
}

export function deletePet(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function updatePet(id, petData) {
    return sendRequest(`${BASE_URL}/edit/${id}`, 'PUT', petData)
}