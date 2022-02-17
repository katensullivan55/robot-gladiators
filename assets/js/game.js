// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// this creates a function named "fight"
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

// alert players the round is starting
window.alert("Welcome to Robot Gladiators");

let fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      //ask  if player chooses to fight or run
      let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      // if player choses to skip
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        let confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerNames + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney);
          break;
        }
      }
      //if player chooses to fight, fight
      if (promptFight === "fight" || promptFight === "FIGHT") {
          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
          );}
      
          // check enemy's health
          if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died!");
              //award player money for winning
              playerMoney = playerMoney + 20;
              break;
          
            } else {
            window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
          }
      
          // remove player's health by subtracting the amount set in the enemyAttack variable
          playerHealth = playerHealth - enemyAttack;
          console.log(
            enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );
      
          // check player's health
          if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
          } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
          }
    }
    
};

//run fight function to start game
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}