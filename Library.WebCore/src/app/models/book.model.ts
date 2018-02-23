import { PublicationHouse } from '../models/publicationHouse.model';

export class Book {
  public id: number;
  public name: string;
  public author: string;
  public yearOfPublishing: string;
  public publicationHouses: PublicationHouse[];
}
