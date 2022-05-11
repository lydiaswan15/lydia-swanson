import { LanguageComponent } from "./language/language.component";

export class Language{
    public name: string;
    public description: string;
    public img: string;
    public exampleLink: string;
    public exampleName: string;
    constructor(name: string, description: string, img: string, exampleName: string, exampleLink: string){
        this.name = name;
        this.description = description;
        this.img = img
        this.exampleLink = exampleLink;
        this.exampleName = exampleName;
    }
}