//スコア
let score = new BigNumber(Cookies.get("score") || "0");

//Github更新確認
const version = "0.14.7";
console.log("ほうちげー version: "+version);

//クリックの価格
let clickScore = { min: 0.5, max: 1 };

//価格上昇倍率
const PricesRate = [1.1, 1.2, 1.2, 1.2, 1.2, 1.2];

//アイテムの個数
let autoItemCounts = JSON.parse(Cookies.get("ItemCounts") || "[0,0,0,0,0,0]");

//初期値段
let autoItemPrices = [10, 500, 3000, 10000, 100000, 1000000];
const bautoItemPrices = [...autoItemPrices];

for (let i=0; i<autoItemPrices.length; i++) {
  const price = Price(autoItemCounts[i], autoItemPrices[i], PricesRate[i]);
  autoItemPrices[i] = price;
  document.getElementById(`item${i+1}-price`).innerText = getNotationString(new BigNumber(price));
  document.getElementById(`item${i+1}-count`).innerText = autoItemCounts[i];
}

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
    const addScore = (Math.random() * (clickScore.max - clickScore.min) + clickScore.min).toFixed(1);
    score = score.plus(addScore);
    if (score.gte("1e3001")) score = new BigNumber("1e3000");
    showScore();
    addScoreText.innerText = getNotationString(new BigNumber(addScore));
    buttonchech()
});

// 自動生成アイテム Lv.1を購入する
item1.addEventListener("click", () => {
    if (score.gte(autoItemPrices[0])) {
        score = score.minus(autoItemPrices[0]);
        autoItemCounts[0]++;
        autoItemPrices[0] = Price(autoItemCounts[0], bautoItemPrices[0], PricesRate[0]);
        item1Count.innerText = autoItemCounts[0];
        item1Price.innerText = getNotationString(new BigNumber(autoItemPrices[0]));
        item2.disabled = autoItemCounts[0] < 10;
        showScore();
        buttonchech()
    }
});

// 自動生成アイテム Lv.2を購入する
item2.addEventListener("click", () => {
    if (score.gte(autoItemPrices[1])) {
        score = score.minus(autoItemPrices[1]);
        autoItemCounts[1]++;
        autoItemPrices[1] = Price(autoItemCounts[1], bautoItemPrices[1], PricesRate[1]);
        item2Count.innerText = autoItemCounts[1];
        item2Price.innerText = getNotationString(new BigNumber(autoItemPrices[1]));
        item3.disabled = autoItemCounts[1] < 10;
        showScore();
        buttonchech()
    }
});

// 自動生成アイテム Lv.3を購入する
item3.addEventListener("click", () => {
    if (score.gte(autoItemPrices[2])) {
        score = score.minus(autoItemPrices[2]);
        autoItemCounts[2]++;
        autoItemPrices[2] = Price(autoItemCounts[2], bautoItemPrices[2], PricesRate[2]);
        item3Count.innerText = autoItemCounts[2];
        item3Price.innerText = getNotationString(new BigNumber(autoItemPrices[2]));
        item4.disabled = autoItemCounts[2] < 10;
        showScore();
        buttonchech()
    }
});

// 自動生成アイテム Lv.4を購入する
item4.addEventListener("click", () => {
  if (score.gte(autoItemPrices[3])) {
      score = score.minus(autoItemPrices[3]);
      autoItemCounts[3]++;
      autoItemPrices[3] = Price(autoItemCounts[3], bautoItemPrices[3], PricesRate[3]);
      item4Count.innerText = autoItemCounts[3];
      item4Price.innerText = getNotationString(new BigNumber(autoItemPrices[3]));
      item5.disabled = autoItemCounts[3] < 10;
      showScore();
      buttonchech()
  }
});

// 自動生成アイテム Lv.5を購入する
item5.addEventListener("click", () => {
  if (score.gte(autoItemPrices[4])) {
      score = score.minus(autoItemPrices[4]);
      autoItemCounts[4]++;
      autoItemPrices[4] = Price(autoItemCounts[4], bautoItemPrices[4], PricesRate[4]);
      item5Count.innerText = autoItemCounts[4];
      item5Price.innerText = getNotationString(new BigNumber(autoItemPrices[4]));
      item6.disabled = autoItemCounts[4] < 10;
      showScore();
      buttonchech()
  }
});

// 自動生成アイテム Lv.6を購入する
item6.addEventListener("click", () => {
  if (score.gte(autoItemPrices[5])) {
      score = score.minus(autoItemPrices[5]);
      autoItemCounts[5]++;
      autoItemPrices[5] = Price(autoItemCounts[5], bautoItemPrices[5], PricesRate[5]);
      item6Count.innerText = autoItemCounts[5];
      item6Price.innerText = getNotationString(new BigNumber(autoItemPrices[5]));
      showScore();
      buttonchech()
  }
});

// 自動生成アイテムによるポイント生成
setInterval(() => {
    const addScore = autoScores[0] * autoItemCounts[0] + autoScores[1] * autoItemCounts[1] + autoScores[2] * autoItemCounts[2] + autoScores[3] * autoItemCounts[3] + autoScores[4] * autoItemCounts[4] + autoScores[5] * autoItemCounts[5];
    score = score.plus(addScore);
    if (score.gte("1e3001")) score = new BigNumber("1e3000");
    showScore();
    // 自動生成アイテムによるポイントの表示
    document.getElementById("add-score-auto").innerText = addScore.toFixed(1);
    buttonchech()
}, 1000);

//定期保存
setInterval(() => {
  Cookies.set("score", score.toFixed(1), { expires: 28 });
  Cookies.set("ItemCounts", JSON.stringify(autoItemCounts));
}, 20000);


// 初期状態で自動生成アイテムを非活性にする
item2.disabled = (item1Count.innerText < 10);
item3.disabled = (item2Count.innerText < 10);;
item4.disabled = (item3Count.innerText < 10);;
item5.disabled = (item4Count.innerText < 10);;
item6.disabled = (item5Count.innerText < 10);;


//score par second の表示
pps1.innerText = autoScores[0];
pps2.innerText = autoScores[1];
pps3.innerText = autoScores[2];
pps4.innerText = autoScores[3];
pps5.innerText = autoScores[4];
pps6.innerText = autoScores[5];


buttonchech();
showScore();


function buttonchech() {
  //1
  if (score.gte(autoItemPrices[0]))
    item1.style.backgroundColor = can;
  else
    item1.style.backgroundColor = cant;

  //2
  if (item2.disabled)
    item2.style.backgroundColor = disa;
  else if (score.gte(autoItemPrices[1]))
    item2.style.backgroundColor = can;
  else
    item2.style.backgroundColor = cant;

  //3
  if (item3.disabled)
    item3.style.backgroundColor = disa;
  else if (score.gte(autoItemPrices[2]))
    item3.style.backgroundColor = can;
  else
    item3.style.backgroundColor = cant;

  //4
  if (item4.disabled)
    item4.style.backgroundColor = disa;
  else if (score.gte(autoItemPrices[3]))
    item4.style.backgroundColor = can;
  else
    item4.style.backgroundColor = cant;

  //5
  if (item5.disabled)
    item5.style.backgroundColor = disa;
  else if (score.gte(autoItemPrices[4]))
    item5.style.backgroundColor = can;
  else
    item5.style.backgroundColor = cant;

  //6
  if (item6.disabled)
    item6.style.backgroundColor = disa;
  else if (score.gte(autoItemPrices[5]))
    item6.style.backgroundColor = can;
  else
    item6.style.backgroundColor = cant;
}


function setScrollHeight() {
  const windowHeight = window.innerHeight;
  const scrollArea = document.getElementById("scroll-area");
  scrollArea.style.height = (windowHeight - 40) + "px";
}
window.onload = setScrollHeight;
window.onresize = setScrollHeight;

function showScore() {

  const notation = getNotationString();
  scoreText.innerText = `スコア: ${notation}pt`;
}


// 桁数に応じた指数表記の表示文字列を取得する関数
function getNotationString(s = new BigNumber(score)) {
  const notations = [
    { value: 0, notation: '' },
    { value: 1e4, notation: '万' },
    { value: 1e8, notation: '億' },
    { value: 1e12, notation: '兆' },
    { value: 1e16, notation: '京' },
    { value: 1e20, notation: '垓' },
    { value: 1e24, notation: '𥝱' },
    { value: 1e28, notation: '穣' },
    { value: 1e32, notation: '溝' },
    { value: 1e36, notation: '澗' },
    { value: 1e40, notation: '正' },
    { value: 1e44, notation: '載' },
    { value: 1e48, notation: '極' },
    { value: 1e52, notation: '恒河沙' },
    { value: 1e56, notation: '阿僧祇' },
    { value: 1e60, notation: '那由他' },
    { value: 1e64, notation: '不可思議' },
    { value: 1e68, notation: '無量大数' },
    { value: 1e72, notation: '' }
  ];

  for (let i = notations.length - 1; i >= 0; i--) {
    if (s.gte(Number(notations[i].value))) {
      if (s.eq(Infinity)) return Infinity;
      let notation = notations[i].notation;
      let n = new BigNumber(s);
      let num = new BigNumber(n.decimalPlaces(1, BigNumber.ROUND_DOWN));
      if (notation !== "")
        return num.div(notations[i].value).toFixed(1)+notation;
      if (num.gte("1e2") && i !== 0)
        return `${new BigNumber(num.div(new BigNumber("1e"+(num.e-2)))).toFixed(1)}e${(num.e-2)}`
      return num.toFixed(1)
    }
  }
}


window.addEventListener('unload', function() {
  Cookies.set("score", score.toFixed(1), { expires: 28 });
  Cookies.set("ItemCounts", JSON.stringify(autoItemCounts));
});

function Price(quantity, price, rate) {
  return (price * Math.pow(rate, quantity)).toFixed(1);
}
