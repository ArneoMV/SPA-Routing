export default class {
    constructor(params) {
        this.params = params;

        console.log(this.params);
    }

    // Updata title u tabu
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}