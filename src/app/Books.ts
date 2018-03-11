import { IBook } from "./IBook";

export class Book implements IBook {
    Title: string;
    Authors: string;
    Publisher: string;
    Rating: number;
    constructor(options: IBook) {
        this.Title = options.Title;
        this.Rating = options.Rating;
        this.Publisher = options.Publisher;
        this.Rating = options.Rating;
    }
}