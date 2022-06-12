var playerName = window.prompt ("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack =12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
var fight = function(enemyName) {
    //sub val of playerAttack from val of enemyHealth -> result updates val in enemyHealth
    while ( playerHealth > 0 && enemyHealth > 0) {
        //run or fight?
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player picks skip confirm & stop loop
        if(promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //yes
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        //Log result
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //check enemy's health
        if (enemyHealth<= 0) {
            window.alert(enemyName + " has died!");
                
            playerMoney = playerMoney + 20;
                //leave while loop since enemy is dead
            break;
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
            break;
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

//execute function
var startGame = function() {

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for (var i = 0; i < enemyNames.length; i++) {
        // debugger; 
        //call fight function with enemy-robot
        if(playerHealth > 0) { 
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    
    if (playerHealth > 0) {
        window.alert("Great job, you survived the game! You have a score of " + playerMoney +".");
    }
    else {
        window.alert("You've lost your robot in battle :(.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }

    else {
        window.alert("Thank you for playing ROBOT GLADIATORS! Come back soon!");
    }
};

startGame();
