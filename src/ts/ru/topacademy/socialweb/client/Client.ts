import { Friendship } from "../backend/friendships/Friendship.ts";
import { SocialNetwork } from "../backend/socialnetwork/social-network.ts";
import { User } from "../backend/users/User.ts";

const socialWeb = new SocialNetwork();

socialWeb.addUser(new User(1, "Aleg", 34, "Moscow"));
socialWeb.addUser(new User(2, "Oleg", 24, "St. Pitesburg"));
socialWeb.addUser(new User(3, "Anya", 14, "Ecatirenburg"));
socialWeb.addUser(new User(4, "Eldar", 18, "Sochi"));
socialWeb.addUser(new User(5, "Vanya", 44, "Kazan"));

console.log(socialWeb.users);

socialWeb.addFriendship(new Friendship(1, 3, 130));
socialWeb.addFriendship(new Friendship(1, 2, 30));
socialWeb.addFriendship(new Friendship(2, 4, 131));
socialWeb.addFriendship(new Friendship(4, 5, 31));
socialWeb.addFriendship(new Friendship(5, 1, 3));

console.log(socialWeb.friendships);

console.log(socialWeb.findUser(3));

console.log(socialWeb.getFriends(1));