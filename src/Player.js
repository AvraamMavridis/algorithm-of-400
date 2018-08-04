const Event = require('./Event');

class Player {

  constructor(rating, event) {
    Player.event = Player.event || new Event();
    const playerData = {
      wins: 0,
      rating,
      loses: 0,
      gamesPlayed: 0,
      draws: 0,
    }

    class PrivatePlayer{
      getPerformanceRating(){
        const { wins, rating, loses, gamesPlayed } = playerData;

        return (rating + (400 * (wins - loses))) / gamesPlayed;
      }

      increaseWins(){
        playerData.wins++;
      }

      increaseLoses(){
        playerData.loses++;
      }

      increaseDraws(){
        playerData.draws++;
      }

      increaseGames(){
        playerData.gamesPlayed++;
      }

      winsFrom(Player2){
        this.increaseGames();
        this.increaseWins();
        Player2.increaseLoses();
        Player2.increaseGames();
      }

      losesFrom(Player2){
        this.increaseGames();
        this.increaseLoses();
        Player2.increaseWins();
        Player2.increaseGames();
      }

      drawsWith(Player2){
        this.increaseDraws();
        this.increaseGames();
        Player2.increaseDraws();
        Player2.increaseGames();
      }
    }

    const player = new PrivatePlayer(rating);
    Player.event.addPlayer(player);

    return player;
  }
}
