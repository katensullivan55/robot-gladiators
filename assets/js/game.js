let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
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
        );
      }
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
        
        //award player money for winning
        playerMoney = playerMoney + 20;
        
        // leave while () loop since enemy is dead
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
          // leave while() loop if player is dead
          break;
          } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
          }
    }
    
};

//run fight function to start game
var startGame() {
  // reset player stats
  playerHealth = 100
  playerAttack = 10
  playerMoney = 10

  for (let i = 0; i < enemyNames.length; i++) {
    //if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's values into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  //play again
  startGame();

  //end game
  var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
      // restart the game
      startGame();
    } 
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  }

  endGame();
};

// start game
startGame();

