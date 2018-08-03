class Event {
  constructor(){
    this.players = [];
  }

  addPlayer(player){
    this.players.push(player);
  }
}

module.exports = Event;