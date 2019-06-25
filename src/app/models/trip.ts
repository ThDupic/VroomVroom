import { firestore } from 'firebase';

export interface Trip {
    id?: string;
    from: string;
    to: string;
    startAt?: firestore.Timestamp;
    endAt?: firestore.Timestamp;
    price: number;
    distance?: number;
    note?: string;
    authorId: string;
    participantsIds?: string[];
}
