import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../data.service';
import { Book } from '../book';

@Component({
    templateUrl: './book-create.component.html'
})
export class BookCreateComponent {

    book: Book = new Book();    // добавляемый объект
    constructor(private dataService: BookDataService, private router: Router) { }
    save() {
        this.dataService.createBook(this.book).subscribe(data => this.router.navigateByUrl("/book"));
    }
}