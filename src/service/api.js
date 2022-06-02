import axios from 'axios';

// https://webhook.site/#!/9305c99c-efed-43ef-bcf5-3badb5220797/3ebe29fd-8917-4f6c-ac0d-2b33cc0f4b4b/1
const baseURL = 'https://webhook.site/9305c99c-efed-43ef-bcf5-3badb5220797';

export const api = axios.create({
  baseURL,
});
