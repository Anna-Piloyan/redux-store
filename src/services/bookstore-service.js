export default class BookstoreService {

    _apiBase = 'http://localhost:3000';

    async delay(ms) {
        // return await for better async stack trace support in case of errors.
        return await new Promise(resolve => setTimeout(resolve, ms));
    }
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        // await this.delay(2000);

        return await res.json();
    }


    getBooks() {
        return this.getResource('/books');
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

}