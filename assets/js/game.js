var playerName = window.prompt ("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack =12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    //sub val of playerAttack from val of enemyHealth -> result updates val in enemyHealth
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
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

    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //yes//
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract
            playerMoney = playerMoney - 2;
        }
        //no
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choosed a valid option. Try again!");
    }
};

//execute function
fight();