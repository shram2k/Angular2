import { Injectable } from '@angular/core';
import { Book } from './Books';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BookService {

// tslint:disable-next-line:max-line-length
private _bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=quilting&key=AIzaSyBsv_Pi6pY-v1LCKNi_IcyB7n5VBXvQ1TA&langRestrict=en&maxResults=2';
constructor(private _http: HttpClient) {

}
GetBooks() {
// return new Array<Book>();
return this._http.get(this._bookUrl);
}
}
