// var playerInfo = {
//     name: window.prompt("What's your robot's name?"),
//     health: 100,
//     attack: 10,
//     money: 10
// };

// var enemyInfo = [
//     {
//         name:"Roborto",
//         attack: randomNumber(10, 14)
//     },
//     {
//         name: "Amy Android",
//         attack: randomNumber(10, 14)
//     },
//     {
//         name: "Robo Trumble",
//         attack: randomNumber(12, 14)
//     }
// ];

//fight function
var fight = function(enemy) {
    //sub val of playerInfo.attack from val of enemy.health -> result updates val in enemy.health
    while ( playerInfo.health > 0 && enemy.health > 0) {
        //run or fight?
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player picks skip confirm & stop loop
        if(promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //yes
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        // if (promptFight === "fight" || promptFight === "FIGHT") {
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        //Log result
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

            //check enemy's health
        if (enemy.health<= 0) {
            window.alert(enemy.name + " has died!");
                
            playerInfo.money = playerInfo.money + 20;
                //leave while loop since enemy is dead
            break;
        }

        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
            //sub val of enemy.attack from val of playerInfo.health -> result updates val in playerInfo.health
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
            //log a result
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
            
         //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        }

        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

//execute function
var startGame = function() {
    playerInfo.reset();
    // playerInfo.health = 100;
    // playerInfo.attack = 10;
    // playerInfo.money = 10;
    
    for (var i = 0; i < enemyInfo.length; i++) {
        //call fight function with enemy-robot
        if(playerInfo.health > 0) { 
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
                    //if we're not at the last enemy in array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //if yes, to store func
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerInfo.health > 0) {
        window.alert("Great job, you survived the game! You have a score of " + playerInfo.money +".");
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

var shop = function() {
    var shopOptionPrompt = window.prompt (
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch (shopOptionPrompt) {
        case "REFILL":
        case "Refill":
        case "refill":
            playerInfo.refillHealth();
            break;
        
        case "UPGRADE":
        case "Upgrade":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        
        case "LEAVE":
        case "Leave":
        case "leave":
            window.alert("Leaving the store.");

            break;
        default:
            window.alert("You did not pick a valid option. Try again!");

            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
        this.attack += 6;
        this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name:"Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(12, 14)
    }
];

startGame();
