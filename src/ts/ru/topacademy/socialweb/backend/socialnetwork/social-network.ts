import { Friendship } from "../friendships/Friendship.ts";
import { User } from "../users/User.ts";

export class SocialNetwork {
    users: User[];
    friendships: Friendship[];
    ids: [];
    
    constructor() {
        this.users = [];
        this.friendships = [];
        this.ids = [];
    }

    addUser(user: User): void { this.users.push(user); }

    addFriendship(friendship: Friendship): void { this.friendships.push(friendship); }
    
    findUser(id: number) { return this.users.find(user => user.id == id)}
    
    getFriends(id: number): Friendship[] { 
        let currentEdges: Friendship[] = [];
        this.friendships.forEach(friendship => {
            if(friendship.from == id) {
                currentEdges.push(friendship)
            }
        })
        
        return currentEdges;
    }
}

// TODOO
//addUser(user) — добавить пользователя.
// addFriendship(friendship) — добавить связь.
// findUser(id) — найти пользователя по id.
// getFriends(id) — получить список друзей пользователя.