import { ApplicationFOrmApi } from "../types";

const FORM_URL = 'http://127.0.0.1:4010/api/95.72932501148875/programs/adipisci/application-form';

export const getFormAPI = () => {

    return fetch(FORM_URL)
    
}

export const putFormAPI = (data: ApplicationFOrmApi) => {
    return fetch(FORM_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
}