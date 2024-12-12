document.getElementById("start-button").addEventListener("click", function() {
    const heroName = document.getElementById("hero-name").value;

    if (!heroName.trim() || heroName.trim().length < 4) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    document.getElementById("start-screen").style.display="none";
    document.getElementById("character-screen").style.display="flex";
    document.getElementById("monster-fight").style.display="flex";
    document.getElementById("character-name").innerText = `Nome: ${heroName}`;

});

let heroExpValue = 0;

document.getElementById("monster").addEventListener("click", function() {
    const hpBar = document.getElementById("hp-bar");
    let currentHp = parseInt(hpBar.innerText.replace("HP: ", ""), 10);
    const damage = 1;
    const heroExpElement = document.getElementById("character-exp");
    const heroExpLevel = document.getElementById("character-lvl");

    currentHp -= damage;
    hpBar.innerText = `HP: ${currentHp}`;

    if (currentHp < 0) {
        alert("Você derrotou o monstro! Ganhou 1000 EXP.")
        heroExpValue += 1000;
        heroExpElement.innerText = `XP: ${heroExpValue}`

        if (heroExpValue <= 1000) {
            heroExpLevel.innerText = `Nível: Ferro`
        }
        else if (heroExpValue >= 1001 && heroExpValue <= 2000) {
            heroExpLevel.innerText = `Nível: Bronze`   
        }
        else if (heroExpValue >= 2001 && heroExpValue <= 5000) {
            heroExpLevel.innerText = `Nível: Prata`   
        }
        else if (heroExpValue >= 6001 && heroExpValue <= 7000) {
            heroExpLevel.innerText = `Nível: Ouro`   
        }
        else if (heroExpValue >= 7001 && heroExpValue <= 8000) {
            heroExpLevel.innerText = `Nível: Platina`   
        }
        else if (heroExpValue >= 8001 && heroExpValue <= 9000) {
            heroExpLevel.innerText = `Nível: Ascendente`   
        }
        else if (heroExpValue >= 9001 && heroExpValue <= 10000) {
            heroExpLevel.innerText = `Nível: Imortal`   
        }
        else if (heroExpValue >= 10001) {
            heroExpLevel.innerText = `Nível: Radiante`   
        }

        // Reseta e cria um novo monstro
        currentHp = 10; 
        hpBar.innerText = `HP: ${currentHp}`;
    }
});



