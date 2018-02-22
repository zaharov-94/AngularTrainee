var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../data.service';
import { Book } from '../book';
var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.book = new Book(); // добавляемый объект
    }
    BookCreateComponent.prototype.save = function () {
        var _this = this;
        this.dataService.createBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/book"); });
    };
    BookCreateComponent = __decorate([
        Component({
            templateUrl: './book-create.component.html'
        }),
        __metadata("design:paramtypes", [BookDataService, Router])
    ], BookCreateComponent);
    return BookCreateComponent;
}());
export { BookCreateComponent };
//# sourceMappingURL=book-create.component.js.map