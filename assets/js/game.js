var playerName = window.prompt ("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack =12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    //sub val of playerAttack from val of enemyHealth -> result updates val in enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    //Log result
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

    //check enemy's health
    if (enemyHealth<= 0) {
        window.alert(enemyName + " has died!");
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //sub val of enemyAttack from val of playerHealth -> result updates val in playerHealth
    playerHealth = playerHealth - enemyAttack;
    //log a result
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");

    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

//execute function
fight();