import { Component, Input } from '@angular/core';
import { Book } from '../book';
@Component({
    selector: "book-form",
    templateUrl: './book-form.component.html'
})
export class BookFormComponent {
    @Input() book: Book;
}