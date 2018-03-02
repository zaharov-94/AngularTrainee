import { GetPublicationHouseViewItem } from './../publicationHouseViewModel/getPublicationHouseViewItem';

export class GetBookViewItem {
  public id: number;
  public name: string;
  public author: string;
  public yearOfPublishing: string;
  public publicationHouses: GetPublicationHouseViewItem[];
}
