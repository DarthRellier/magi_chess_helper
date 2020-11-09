/* 
The difference between the files is magi.js and magi2.js are alost exatly 
the same(one makes the background black the other makes it white) same with magi and magi2.html.
rules.html is a word doc of the rules
*/
let hasKing = false;
let mWeapons = ["Fire Spellbook", "Water Spellbook", "Earth Spellbook", "Dead"];
let aWeapons = ["Bow", "Throwing Knife", "Dead"];
let kWeapons = ["Sword", "Lance", "Dead"];
let fWeapons = ["Pitchfork", "Dead"];
let sWeapons = ["2 Slice Dagger", "Dead"];
let kiWeapons = ["None", "Dead"];
let maxHpFromKi = 0;
let maxHpFromA = 20;
let maxHpFromK = 10;
let maxHpFromM = 30;
let maxHpFromF = 80;
let maxHpFromS = 60;
let aType = 1;
let mType = 1;
let kType = 1;
let fType = 1;
let total = 0;
function add(type, weapNum, typeNum, doTotalInc) {
  let posNum = 1;
  hp = 160;
  let body = document.getElementById("body");
  if (total != 17 || type == "ki" || hasKing == true) {
    let hp = 160;
    let flex = document.getElementById("flex");
    let elem = document.createElement("div");
    let sel0 = document.createElement("select");
    let header = document.createElement("label");
    elem.style.color = "black";
    header.htmlFor = sel0;
    header.innerText = findH1(type);
    header.style.fontSize = "medium";
    elem.appendChild(header);
    for (let numOp = 0; numOp < typeNum; numOp++) {
      let option = document.createElement("option");
      option.innerText = posNum;
      posNum++;
      sel0.appendChild(option);
    }
    elem.appendChild(sel0);
    let br0 = document.createElement("br");
    elem.appendChild(br0);
    let brx = document.createElement("br");
    elem.appendChild(brx);
    let sel = document.createElement("select");
    sel.id = "sel";
    hp -= fromMaxHp(type);
    numUsingHp = hp / 10 + 2;
    for (let op = 0; op < numUsingHp; op++) {
      let opElem = document.createElement("option");
      opElem.innerText = hp;
      if (hp == 0) {
        hp = "Dead";
      } else {
        hp -= 10;
      }
      sel.appendChild(opElem);
    }
    let l1 = document.createElement("label");
    l1.htmlFor = sel;
    l1.innerText = "HP: ";
    elem.appendChild(l1);
    elem.appendChild(sel);
    let br = document.createElement("br");
    elem.appendChild(br);
    let sel2 = document.createElement("select");
    for (let index = 0; index < weapNum; index++) {
      let opNum = document.createElement("option");
      opNum.innerText = list(type, index);
      sel2.appendChild(opNum);
    }
    elem.appendChild(sel2);
    let l2 = document.createElement("label");
    l2.htmlFor = sel2;
    l2.innerText = "Weapon: ";
    elem.insertBefore(l2, sel2);
    let br2 = document.createElement("br");
    elem.appendChild(br2);
    let burnTime = document.createElement("input");
    burnTime.type = "number";
    burnTime.innerText = 0;
    elem.appendChild(burnTime);
    let burnTimeLabel = document.createElement("label");
    burnTimeLabel.htmlFor = burnTime;
    burnTimeLabel.innerText = "Turns Left In Burn";
    elem.insertBefore(burnTimeLabel, burnTime);
    let br3 = document.createElement("br");
    elem.appendChild(br3);
    let button = document.createElement("button");
    button.innerText = "Remove";
    button.style.backgroundColor = "white";
    button.addEventListener("click", function () {
      flex.removeChild(elem);
      if (type == "ki") {
        hasKing = false;
      }
      total--;
      reShow(type);
      switch (type) {
        case "a":
          aType--;
          break;
        case "k":
          kType--;
          break;
        case "m":
          mType--;
          break;
        case "f":
          fType--;
          break;
        case "s":
          fType--;
      }
    });
    elem.appendChild(button);
    let lb = document.createElement("br");
    elem.appendChild(lb);
    if (type == "f") {
      let s = document.createElement("button");
      s.innerText = "Change To Scout";
      s.addEventListener("click", function () {
        add("s", 2, 8, false);
        flex.removeChild(elem);
      });
      elem.appendChild(s);
    }
    flex.appendChild(elem);
    body.style.backgroundColor = "limegreen";
    setTimeout(clear, 250);
    switch (type) {
      case "a":
        aType++;
        break;
      case "m":
        mType++;
        break;
      case "k":
        kType++;
        break;
      case "f":
        fType++;
    }
    if (aType == 5) {
      let a = document.getElementById("a");
      a.style.visibility = "hidden";
    }
    if (kType == 5) {
      let k = document.getElementById("k");
      k.style.visibility = "hidden";
    }
    if (mType == 5) {
      let m = document.getElementById("m");
      m.style.visibility = "hidden";
    }
    if (fType == 9) {
      let f = document.getElementById("f");
      f.style.visibility = "hidden";
    }
    if (type == "ki") {
      hasKing = true;
    }
    if (doTotalInc) {
      total++;
    }
  } else {
    body.style.backgroundColor = "red";
    setTimeout(clear, 250, true);
  }
  if (total == 18) {
    let a = document.getElementById("a");
    let k = document.getElementById("k");
    let m = document.getElementById("m");
    let f = document.getElementById("f");
    a.style.visibility = "hidden";
    k.style.visibility = "hidden";
    m.style.visibility = "hidden";
    f.style.visibility = "hidden";
  }
  if (type == "ki") {
    let king = document.getElementById("ki");
    king.style.visibility = "hidden";
  }
}

function findH1(type) {
  switch (type) {
    case "a":
      return `Archer `;
    case "m":
      return `Mage `;
    case "k":
      return `Knight `;
    case "f":
      return `Farmer `;
    case "ki":
      return "King ";
    case "s":
      return "Scout ";
  }
}

function list(type, index) {
  switch (type) {
    case "a":
      return aWeapons[index];
    case "m":
      return mWeapons[index];
    case "k":
      return kWeapons[index];
    case "f":
      return fWeapons[index];
    case "s":
      return sWeapons[index];
    case "ki":
      return kiWeapons[index];
  }
}
function fromMaxHp(type) {
  switch (type) {
    case "a":
      return maxHpFromA;
    case "k":
      return maxHpFromK;
    case "f":
      return maxHpFromF;
    case "m":
      return maxHpFromM;
    case "s":
      return maxHpFromS;
    case "ki":
      return maxHpFromKi;
  }
}
function clear(doKingAlert) {
  body.style.backgroundColor = "inherit";
  if (doKingAlert) {
    alert("You must have a King");
  }
}
function reShow(typeDeleted) {
  switch (typeDeleted) {
    case "a":
      let a = document.getElementById("a");
      a.style.visibility = "visible";
      break;
    case "k":
      let k = document.getElementById("k");
      k.style.visibility = "visible";
      break;
    case "m":
      let m = document.getElementById("m");
      m.style.visibility = "visible";
      break;
    case "f":
      let f = document.getElementById("f");
      f.style.visibility = "visible";
      break;
    case "ki":
      let ki = document.getElementById("ki");
      ki.style.visibility = "visible";
      break;
    case "s":
      let s = document.getElementById("f");
      s.style.visibility = "visible";
      break;
  }
}
