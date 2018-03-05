import { PostPublicationHouseViewItem } from './../publicationHouseViewModel/postPublicationHouseViewItem';
import { PostAuthorViewItem } from './../authorViewModel/postAuthorViewItem';

export class PostBookViewItem {
    public id: number;
    public name: string;
    public authors: PostAuthorViewItem[];
    public dateOfPublishing: Date;
    public publicationHouses: PostPublicationHouseViewItem[];
}
