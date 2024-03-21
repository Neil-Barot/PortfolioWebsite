export class Tag {
    static readonly Angular = new Tag('Angular', 'red');
    static readonly Typescript = new Tag('TypeScript', 'darkred');
    static readonly Python = new Tag('Python', 'green');
    static readonly HTML = new Tag('HTML', 'darkgreen');
    static readonly CSS = new Tag('CSS', 'Purple');
    static readonly CompVision = new Tag('Computer Vision', 'blue');
    static readonly Jave = new Tag('Java', 'orange');
    static readonly ASPNET = new Tag('ASP.Net', 'lightblue');
    static readonly Nodejs = new Tag('Node.js', 'brown');
    static readonly Docker = new Tag('Docker', 'magenta');
    static readonly Networks = new Tag('Networks', 'teal');
    static readonly React = new Tag('React', 'lightblue');
    static readonly SQL = new Tag('SQL', 'pink');

    private constructor(private readonly key: string, public readonly color: string) {

    }

    toString() {
        return this.key;
    }
}