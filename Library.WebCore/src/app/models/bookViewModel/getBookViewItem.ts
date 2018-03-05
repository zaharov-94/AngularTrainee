import { GetPublicationHouseViewItem } from './../publicationHouseViewModel/getPublicationHouseViewItem';
import { GetAuthorViewItem } from './../authorViewModel/getAuthorViewItem';

export class GetBookViewItem {
  public id: number;
  public name: string;
  public authors: GetAuthorViewItem[];
  public dateOfPublishing: Date;
  public publicationHouses: GetPublicationHouseViewItem[];
}
