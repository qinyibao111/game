const landmarks = [
  {
    name: "黄陵庙",
    city: "宜昌",
    image: "assets/images/huangling-temple.jpg",
    photoCredit: "本地实景图：黄陵庙",
    intro: "三峡区域重要古庙，常与治水、航运和地方信仰记忆相连。",
    question: "哪条线索最适合指向黄陵庙？",
    options: ["三峡古庙与江峡航运", "江南园林私家宅院", "明代内阁首辅宅第", "武汉蛇山名楼"],
    answer: 0,
  },
  {
    name: "凤凰山",
    city: "鄂州",
    image: "assets/images/fenghuang-mountain.jpg",
    photoCredit: "本地实景图：凤凰山相关城市风貌",
    intro: "鄂州城市山水格局中的历史文化地标，承载地方古城记忆。",
    question: "凤凰山在本次巡游中归属哪座城市？",
    options: ["武汉", "宜昌", "荆州", "鄂州"],
    answer: 3,
  },
  {
    name: "夷陵古城墙",
    city: "宜昌",
    image: "assets/images/yiling-city-wall.jpg",
    photoCredit: "本地实景图：夷陵相关城市风貌",
    intro: "夷陵为宜昌古称之一，古城墙线索连接城市防御与峡江历史。",
    question: "“夷陵”这一线索最容易让你联想到今天的哪座城市？",
    options: ["宜昌", "武汉", "鄂州", "荆州"],
    answer: 0,
  },
  {
    name: "荆州古建筑群",
    city: "荆州",
    image: "assets/images/jingzhou-architecture.jpg",
    photoCredit: "本地实景图：荆州古城宾阳楼",
    intro: "荆州历史积淀深厚，古建筑群体现楚文化与古城风貌。",
    question: "荆州古建筑群最能体现哪类空间特征？",
    options: ["古城历史风貌", "近代工业码头", "海滨防御体系", "高原寺院聚落"],
    answer: 0,
  },
  {
    name: "万寿宝塔",
    city: "荆州",
    image: "assets/images/wanshou-pagoda.jpg",
    photoCredit: "本地实景图：万寿宝塔",
    intro: "荆州代表性古塔之一，是江汉平原古建景观中的醒目标识。",
    question: "万寿宝塔属于哪类古建筑？",
    options: ["古塔", "牌坊", "书院", "城门"],
    answer: 0,
  },
  {
    name: "张居正故居",
    city: "荆州",
    image: "assets/images/zhang-juzheng-residence.jpg",
    photoCredit: "本地实景图：张居正故居",
    intro: "纪念明代政治家张居正的历史宅第空间，兼具人物与地方记忆。",
    question: "张居正故居的核心人物线索是？",
    options: ["明代改革家张居正", "唐代诗人李白", "北宋书法家苏轼", "三国名将赵云"],
    answer: 0,
  },
  {
    name: "武昌门",
    city: "鄂州",
    image: "assets/images/wuchang-gate.jpg",
    photoCredit: "本地实景图：武昌门相关城市风貌",
    intro: "古城门意象连接鄂州旧城格局，也是识别城市历史肌理的入口。",
    question: "武昌门在游戏中代表的建筑类型是？",
    options: ["城门", "古琴台", "佛塔", "楼阁"],
    answer: 0,
  },
  {
    name: "松风阁",
    city: "鄂州",
    image: "assets/images/songfeng-pavilion.jpg",
    photoCredit: "本地实景图：鄂州古建环境参考",
    intro: "与山水人文相互映照的楼阁名胜，名称自带清雅的风物意象。",
    question: "“松风阁”这个名称最突出哪种审美意象？",
    options: ["松声与楼阁", "市井商铺", "水闸工程", "城墙箭楼"],
    answer: 0,
  },
  {
    name: "黄鹤楼",
    city: "武汉",
    image: "assets/images/yellow-crane-tower.jpg",
    photoCredit: "本地实景图：黄鹤楼",
    intro: "武汉最具辨识度的历史文化名楼之一，与诗文、长江和城市天际线相连。",
    question: "黄鹤楼最常被视作哪座城市的文化名片？",
    options: ["武汉", "宜昌", "荆州", "鄂州"],
    answer: 0,
  },
  {
    name: "晴川阁",
    city: "武汉",
    image: "assets/images/qingchuan-pavilion.jpg",
    photoCredit: "本地实景图：晴川阁",
    intro: "位于武汉汉阳一带，与长江、汉水和对岸名楼形成城市景观对话。",
    question: "晴川阁在武汉的城市景观中常与哪类元素关联？",
    options: ["两江交汇与楼阁眺望", "三峡船闸", "荆州城墙", "鄂州古城门"],
    answer: 0,
  },
  {
    name: "古琴台",
    city: "武汉",
    image: "assets/images/guqin-platform.jpg",
    photoCredit: "本地实景图：古琴台",
    intro: "以高山流水、知音文化闻名，是武汉重要的人文古迹。",
    question: "古琴台最鲜明的文化关键词是？",
    options: ["知音文化", "边塞烽燧", "皇家祭坛", "海上丝路"],
    answer: 0,
  },
];

const cities = ["武汉", "宜昌", "荆州", "鄂州"];
const state = {
  activeCity: "",
  current: null,
  currentRound: 0,
  score: 0,
  combo: 0,
  earned: new Set(),
  answered: false,
};

const nodes = {
  startButton: document.querySelector("#startButton"),
  resetButton: document.querySelector("#resetButton"),
  nextButton: document.querySelector("#nextButton"),
  scoreValue: document.querySelector("#scoreValue"),
  statusText: document.querySelector("#statusText"),
  stampCount: document.querySelector("#stampCount"),
  stampGrid: document.querySelector("#stampGrid"),
  cityGrid: document.querySelector("#cityGrid"),
  cityName: document.querySelector("#cityName"),
  cityLabel: document.querySelector("#cityLabel"),
  landmarkName: document.querySelector("#landmarkName"),
  landmarkIntro: document.querySelector("#landmarkIntro"),
  landmarkVisual: document.querySelector("#landmarkVisual"),
  landmarkImage: document.querySelector("#landmarkImage"),
  photoCaption: document.querySelector("#photoCaption"),
  questionText: document.querySelector("#questionText"),
  optionsList: document.querySelector("#optionsList"),
  feedbackText: document.querySelector("#feedbackText"),
  comboText: document.querySelector("#comboText"),
  roundText: document.querySelector("#roundText"),
  landmarkList: document.querySelector("#landmarkList"),
  landmarkTotal: document.querySelector("#landmarkTotal"),
  guideCallout: document.querySelector("#guideCallout"),
};

function renderStaticLists() {
  nodes.landmarkTotal.textContent = `${landmarks.length} 处`;

  nodes.cityGrid.innerHTML = cities
    .map((city) => `<button class="city-button" type="button" data-city="${city}">${city}</button>`)
    .join("");

  nodes.landmarkList.innerHTML = landmarks
    .map(
      (landmark) => `
        <div class="landmark-pill">
          <span class="landmark-pill__city">${landmark.city}</span>
          <strong>${landmark.name}</strong>
          <span>答对后点亮印章</span>
        </div>
      `,
    )
    .join("");
}

function renderStamps() {
  nodes.stampGrid.innerHTML = landmarks
    .map((landmark, index) => {
      const earned = state.earned.has(landmark.name);
      return `<div class="stamp ${earned ? "is-earned" : ""}" title="${landmark.name}">${earned ? landmark.name.slice(0, 2) : index + 1}</div>`;
    })
    .join("");
  nodes.stampCount.textContent = `${state.earned.size} / ${landmarks.length}`;
}

function updateHud() {
  nodes.scoreValue.textContent = state.score;
  nodes.comboText.textContent = `连击 ${state.combo}`;
  nodes.roundText.textContent = `第 ${state.currentRound} 关`;
  nodes.cityName.textContent = state.activeCity || "未选择";
  renderStamps();

  document.querySelectorAll(".city-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.city === state.activeCity);
  });
}

function chooseCity(city) {
  state.activeCity = city;
  nodes.statusText.textContent = `已抵达${city}，下一题会优先从这座城市抽取。`;
  nodes.guideCallout.textContent = `当前城市：${city}。如果这个城市的印章已集齐，系统会自动切换到其他城市。`;
  updateHud();
}

function getPool() {
  const available = landmarks.filter((landmark) => !state.earned.has(landmark.name));
  const cityPool = available.filter((landmark) => !state.activeCity || landmark.city === state.activeCity);
  return cityPool.length > 0 ? cityPool : available;
}

function shuffleOptions(landmark) {
  return landmark.options
    .map((text, index) => ({ text, correct: index === landmark.answer }))
    .sort(() => Math.random() - 0.5);
}

function drawLandmark() {
  if (state.earned.size >= landmarks.length) {
    finishGame();
    return;
  }

  const pool = getPool();
  if (pool.length === 0) {
    finishGame();
    return;
  }

  state.current = pool[Math.floor(Math.random() * pool.length)];
  state.currentRound += 1;
  state.answered = false;
  nodes.nextButton.disabled = true;
  nodes.feedbackText.textContent = "";

  nodes.cityLabel.textContent = state.current.city;
  nodes.landmarkName.textContent = state.current.name;
  nodes.landmarkIntro.textContent = state.current.intro;
  nodes.questionText.textContent = state.current.question;
  nodes.landmarkVisual.style.background = visualGradient(state.current.city);
  renderPhoto(state.current);
  nodes.guideCallout.textContent = `观察提示：这是一处${state.current.city}古建。注意图片中的建筑形态，再对照题目关键词。`;

  nodes.optionsList.innerHTML = shuffleOptions(state.current)
    .map((option) => `<button class="option-button" type="button" data-correct="${option.correct}">${option.text}</button>`)
    .join("");

  nodes.statusText.textContent = `正在探访${state.current.name}。`;
  updateHud();
}

function renderPhoto(landmark) {
  nodes.landmarkImage.alt = `${landmark.name}实景图`;
  nodes.landmarkImage.src = landmark.image;
  nodes.photoCaption.textContent = landmark.photoCredit;
  nodes.landmarkVisual.classList.add("has-photo");
}

function visualGradient(city) {
  const gradients = {
    武汉: "linear-gradient(160deg, rgba(45, 111, 143, 0.28), rgba(216, 154, 40, 0.34))",
    宜昌: "linear-gradient(160deg, rgba(31, 122, 104, 0.26), rgba(45, 111, 143, 0.24))",
    荆州: "linear-gradient(160deg, rgba(169, 71, 42, 0.28), rgba(216, 154, 40, 0.32))",
    鄂州: "linear-gradient(160deg, rgba(118, 45, 30, 0.24), rgba(31, 122, 104, 0.24))",
  };
  return gradients[city] || gradients["武汉"];
}

function handleAnswer(button) {
  if (!state.current || state.answered) return;

  state.answered = true;
  const isCorrect = button.dataset.correct === "true";
  const optionButtons = [...document.querySelectorAll(".option-button")];

  optionButtons.forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.dataset.correct === "true") optionButton.classList.add("is-correct");
  });

  if (isCorrect) {
    state.combo += 1;
    const comboBonus = Math.max(0, state.combo - 1) * 5;
    state.score += 20 + comboBonus;
    state.earned.add(state.current.name);
    nodes.feedbackText.textContent = `答对了，获得“${state.current.name}”印章。${state.current.intro} 连击奖励 +${comboBonus}。`;
    nodes.statusText.textContent = `已收集 ${state.earned.size} 枚印章。`;
  } else {
    state.combo = 0;
    state.score = Math.max(0, state.score - 5);
    button.classList.add("is-wrong");
    nodes.feedbackText.textContent = `这次没有命中线索，扣 5 分。先看绿色正确答案，再对照左侧实景图中的建筑特征。`;
    nodes.statusText.textContent = "观察线索后继续下一关。";
  }

  nodes.nextButton.disabled = false;
  updateHud();

  if (state.earned.size >= landmarks.length) {
    nodes.nextButton.textContent = "查看通关评价";
  }
}

function finishGame() {
  const title = state.score >= 230 ? "楚地古建行家" : state.score >= 170 ? "江汉巡游达人" : "古建新晋向导";
  nodes.questionText.textContent = `巡游完成：${title}`;
  nodes.optionsList.innerHTML = "";
  nodes.feedbackText.textContent = `你收集了 ${state.earned.size} 枚印章，最终得分 ${state.score}。可以重新开始挑战更高连击。`;
  nodes.nextButton.disabled = true;
  nodes.nextButton.textContent = "下一座古建";
  nodes.statusText.textContent = title;
  updateHud();
}

function resetGame() {
  state.activeCity = "";
  state.current = null;
  state.currentRound = 0;
  state.score = 0;
  state.combo = 0;
  state.earned = new Set();
  state.answered = false;
  nodes.cityLabel.textContent = "等待启程";
  nodes.landmarkName.textContent = "请选择城市开始";
  nodes.landmarkIntro.textContent = "每座古建都有一条专属线索。答对即可获得对应印章。";
  nodes.landmarkImage.removeAttribute("src");
  nodes.landmarkImage.alt = "古建筑实景图";
  nodes.landmarkVisual.classList.remove("has-photo");
  nodes.photoCaption.textContent = "实景图会在抽取古建后显示";
  nodes.questionText.textContent = "点击“开始巡游”抽取第一座古建。";
  nodes.optionsList.innerHTML = "";
  nodes.feedbackText.textContent = "";
  nodes.nextButton.disabled = true;
  nodes.nextButton.textContent = "下一座古建";
  nodes.statusText.textContent = "准备出发，先选择一个城市。";
  nodes.guideCallout.textContent = "新手提示：先看左侧实景图，再读题干中的城市、建筑类型和文化关键词。";
  updateHud();
}

nodes.cityGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".city-button");
  if (button) chooseCity(button.dataset.city);
});

nodes.optionsList.addEventListener("click", (event) => {
  const button = event.target.closest(".option-button");
  if (button) handleAnswer(button);
});

nodes.startButton.addEventListener("click", drawLandmark);
nodes.nextButton.addEventListener("click", () => {
  if (state.earned.size >= landmarks.length) finishGame();
  else drawLandmark();
});
nodes.resetButton.addEventListener("click", resetGame);
nodes.landmarkImage.addEventListener("error", () => {
  nodes.landmarkImage.removeAttribute("src");
  nodes.landmarkVisual.classList.remove("has-photo");
  nodes.photoCaption.textContent = "实景图暂时无法显示，已切换为本地建筑剪影。";
});

renderStaticLists();
resetGame();
