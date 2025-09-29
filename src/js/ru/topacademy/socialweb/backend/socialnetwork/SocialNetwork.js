export class SocialNetwork {
    constructor() {
        this.users = [];
        this.friendships = [];
        this.ids = [];
    }

    addUser(user) { this.users.push(user) }
    addFriendship(friendship) { this.friendships.push(friendship) }
    findUser(id) { return this.users.find(user => user.id == id)}
    getFriends(id) { 
        let currentEdges = []
        this.friendships.forEach(friendship => {
            if(friendship.from == id) {
                currentEdges.push(this.friendships.find(node => node.to == friendship.to))
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