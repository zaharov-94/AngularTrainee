var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var BookDataService = /** @class */ (function () {
    function BookDataService(http) {
        this.http = http;
        this.url = "/api/books";
    }
    BookDataService.prototype.getBooks = function () {
        return this.http.get(this.url);
    };
    BookDataService.prototype.getBook = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    BookDataService.prototype.createBook = function (book) {
        return this.http.post(this.url, book);
    };
    BookDataService.prototype.updateBook = function (book) {
        return this.http.put(this.url + '/' + book.id, book);
    };
    BookDataService.prototype.deleteBook = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    BookDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], BookDataService);
    return BookDataService;
}());
export { BookDataService };
//# sourceMappingURL=data.service.js.map