import { http, HttpResponse } from 'msw';

const server = [http.get('http://localhost:3001/date', () => {
    return HttpResponse.json({ date: '2024-09-24' });
})]
export default server;