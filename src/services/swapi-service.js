export default class SwapiService {
    
    _apiBase = 'https://swapi.dev/api'

    async getResource() {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `,received ${res.status}`)
        }
        return await res.json()
    }
    getAllPeople() {
        return this.getResource(`https://swapi.dev/api/people/`)
    }
    getPerson(id) {
        return this.getResource(`https://swapi.dev/api/people/${id}/`)
    }
}