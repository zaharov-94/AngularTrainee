import { PostPublicationHouseViewItem } from './../publicationHouseViewModel/postPublicationHouseViewItem';

export class PostBookViewItem {
    public id: number;
    public name: string;
    public author: string;
    public yearOfPublishing: string;
    public publicationHouses: PostPublicationHouseViewItem[];
}
