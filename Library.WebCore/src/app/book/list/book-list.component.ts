import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../data.service';
import { Book } from '../book';

@Component({
    templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

    books: Book[];
    constructor(private dataService: BookDataService) { }

    ngOnInit() {
        this.load();
    }
    load() {
        this.dataService.getBooks().subscribe((data: Book[]) => this.books = data);
    }
    delete(id: number) {
        this.dataService.deleteBook(id).subscribe(data => this.load());
    }
}
