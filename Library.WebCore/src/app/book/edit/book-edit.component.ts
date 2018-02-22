import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookDataService } from '../data.service';
import { Book } from '../book';

@Component({
    templateUrl: './book-edit.component.html'
})
export class BookEditComponent implements OnInit {

    id: number;
    book: Book;    // изменяемый объект
    loaded: boolean = false;

    constructor(private dataService: BookDataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.dataService.getBook(this.id)
                .subscribe((data: Book) => {
                    this.book = data;
                    if (this.book != null) this.loaded = true;
                });
    }

    save() {
        this.dataService.updateBook(this.book).subscribe(data => this.router.navigateByUrl("/book"));
    }
}