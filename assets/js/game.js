var playerName = window.prompt ("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack =12;


var fight = function(enemyName) {
    // window.alert("Welcome to Robot Gladiators!");
    //sub val of playerAttack from val of enemyHealth -> result updates val in enemyHealth
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        if(promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //yes
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
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

        // }
        // if (promptFight === "skip" || promptFight === "SKIP") {
        //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //     //yes//
        //     // if (confirmSkip) {
        //         window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //         //subtract
        //         playerMoney = playerMoney - 10;
        //         console.log("playerMoney", playerMoney);
        //         break;
        //     // }
        //     // //no
        //     // else {
        //     //     fight();
        //     // }
        // }
        // else {
        //     window.alert("You need to choosed a valid option. Try again!");
        // }
    }
};

//execute function
for(var i = 0; i < enemyNames.length; i++) {
    // debugger;
    //call fight function with enemy-robot
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}