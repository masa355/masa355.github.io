let score = 0;
let autoScore = 0;
let autoItemLevel = 0;

//初期値段
let autoItemPrices = [10, 500, 3000, 10000, 100000, 1000000];

//アイテムの個数
let autoItemCounts = [0, 0, 0, 0, 0, 0];

// 自動生成アイテムの各レベルでの生成量
const autoScores = [0.5, 2, 10, 50, 100, 500];

//色指定
const disa = "#1a1a1a";//無効
const cant = "#567a2d";//金額不足
const can  = "#8bc34a";//購入可能

const button = document.getElementById("button");
const addScoreText = document.getElementById("add-score");
const scoreText = document.getElementById("score");
const item1 = document.getElementById("item1");
const item1Price = document.getElementById("item1-price");
const item1Count = document.getElementById("item1-count");
const pps1 = document.getElementById("pps1");
const item2 = document.getElementById("item2");
const item2Price = document.getElementById("item2-price");
const item2Count = document.getElementById("item2-count");
const pps2 = document.getElementById("pps2");
const item3 = document.getElementById("item3");
const item3Price = document.getElementById("item3-price");
const item3Count = document.getElementById("item3-count");
const pps3 = document.getElementById("pps3");
const item4 = document.getElementById("item4");
const item4Price = document.getElementById("item4-price");
const item4Count = document.getElementById("item4-count");
const pps4 = document.getElementById("pps4");
const item5 = document.getElementById("item5");
const item5Price = document.getElementById("item5-price");
const item5Count = document.getElementById("item5-count");
const pps5 = document.getElementById("pps5");
const item6 = document.getElementById("item6");
const item6Price = document.getElementById("item6-price");
const item6Count = document.getElementById("item6-count");
const pps6 = document.getElementById("pps6");

// クリックでポイントを獲得する
button.addEventListener("click", () => {
    const addScore = Math.floor(Math.random() * 101) / 100 + 0.1;
    score += addScore;
    scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
    addScoreText.innerText = `${addScore.toFixed(1)}pt`;
    buttonchech()
});

// 自動生成アイテム Lv.1を購入する
item1.addEventListener("click", () => {
    if (score >= autoItemPrices[0]) {
        score -= autoItemPrices[0];
        autoItemPrices[0] *= 1.1;
        autoItemCounts[0]++;
        item1Count.innerText = autoItemCounts[0];
        item1Price.innerText = Math.ceil(autoItemPrices[0]);
        item2.disabled = autoItemCounts[0] < 10;
        scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
        buttonchech()
    }
});

// 自動生成アイテム Lv.2を購入する
item2.addEventListener("click", () => {
    if (score >= autoItemPrices[1]) {
        score -= autoItemPrices[1];
        autoItemPrices[1] *= 1.2;
        autoItemCounts[1]++;
        item2Count.innerText = autoItemCounts[1];
        item2Price.innerText = Math.ceil(autoItemPrices[1]);
        item3.disabled = autoItemCounts[1] < 10;
        scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
        buttonchech()
    }
});

// 自動生成アイテム Lv.3を購入する
item3.addEventListener("click", () => {
    if (score >= autoItemPrices[2]) {
        score -= autoItemPrices[2];
        autoItemPrices[2] *= 1.2;
        autoItemCounts[2]++;
        item3Count.innerText = autoItemCounts[2];
        item3Price.innerText = Math.ceil(autoItemPrices[2]);
        item4.disabled = autoItemCounts[2] < 10;
        scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
        buttonchech()
    }
});

// 自動生成アイテム Lv.4を購入する
item4.addEventListener("click", () => {
  if (score >= autoItemPrices[3]) {
      score -= autoItemPrices[3];
      autoItemPrices[3] *= 1.2;
      autoItemCounts[3]++;
      item4Count.innerText = autoItemCounts[3];
      item4Price.innerText = Math.ceil(autoItemPrices[3]);
      item5.disabled = autoItemCounts[3] < 10;
      scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
      buttonchech()
  }
});

// 自動生成アイテム Lv.5を購入する
item5.addEventListener("click", () => {
  if (score >= autoItemPrices[4]) {
      score -= autoItemPrices[4];
      autoItemPrices[4] *= 1.2;
      autoItemCounts[4]++;
      item5Count.innerText = autoItemCounts[4];
      item5Price.innerText = Math.ceil(autoItemPrices[4]);
      item6.disabled = autoItemCounts[4] < 10;
      scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
      buttonchech()
  }
});

// 自動生成アイテム Lv.6を購入する
item6.addEventListener("click", () => {
  if (score >= autoItemPrices[5]) {
      score -= autoItemPrices[5];
      autoItemPrices[5] *= 1.2;
      autoItemCounts[5]++;
      item6Count.innerText = autoItemCounts[5];
      item6Price.innerText = Math.ceil(autoItemPrices[5]);
      scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
      buttonchech()
  }
});

// 自動生成アイテムによるポイント生成
setInterval(() => {
  const addScore = autoScores[0] * autoItemCounts[0] + autoScores[1] * autoItemCounts[1] + autoScores[2] * autoItemCounts[2] + autoScores[3] * autoItemCounts[3] + autoScores[4] * autoItemCounts[4] + autoScores[5] * autoItemCounts[5];
    score += addScore;
    scoreText.innerText = `スコア: ${score.toFixed(1)}pt`;
    // 自動生成アイテムによるポイントの表示
    document.getElementById("add-score-auto").innerText = addScore.toFixed(1);
    buttonchech()
}, 1000);


// 初期状態で自動生成アイテムを非活性にする
item2.disabled = true;
item3.disabled = true;
item4.disabled = true;
item5.disabled = true;
item6.disabled = true;

// 自動生成アイテムの価格を表示
item1Price.innerText = autoItemPrices[0];
item2Price.innerText = autoItemPrices[1];
item3Price.innerText = autoItemPrices[2];
item4Price.innerText = autoItemPrices[3];
item5Price.innerText = autoItemPrices[4];
item6Price.innerText = autoItemPrices[5];

//score par second の表示
pps1.innerText = autoScores[0];
pps2.innerText = autoScores[1];
pps3.innerText = autoScores[2];
pps4.innerText = autoScores[3];
pps5.innerText = autoScores[4];
pps6.innerText = autoScores[5];


buttonchech();


function buttonchech() {
  //1
  if (score >= autoItemPrices[0])
    item1.style.backgroundColor = can;
  else
    item1.style.backgroundColor = cant;

  //2
  if (item2.disabled)
    item2.style.backgroundColor = disa;
  else if (score >= autoItemPrices[1])
    item2.style.backgroundColor = can;
  else
    item2.style.backgroundColor = cant;

  //3
  if (item3.disabled)
    item3.style.backgroundColor = disa;
  else if (score >= autoItemPrices[2])
    item3.style.backgroundColor = can;
  else
    item3.style.backgroundColor = cant;

  //4
  if (item4.disabled)
    item4.style.backgroundColor = disa;
  else if (score >= autoItemPrices[3])
    item4.style.backgroundColor = can;
  else
    item4.style.backgroundColor = cant;

  //5
  if (item5.disabled)
    item5.style.backgroundColor = disa;
  else if (score >= autoItemPrices[4])
    item5.style.backgroundColor = can;
  else
    item5.style.backgroundColor = cant;

  //6
  if (item6.disabled)
    item6.style.backgroundColor = disa;
  else if (score >= autoItemPrices[5])
    item6.style.backgroundColor = can;
  else
    item6.style.backgroundColor = cant;
}

