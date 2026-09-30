const STR = {
  zh: {
    kicker: "讨论与笔记",
    position: "给中文使用者的讨论与笔记站：只聊公开可知的英语短剧 App（如 ReelShort、DramaBox、ShortMax、GoodShort、PineDrama）和常见套路，不提供播放，也不做新闻抓取。",
    boundary: "没有登录。没有视频。开场白只谈节奏和观感，不复述可代替观看的情节。",
    all: "全部",
    footer: "不提供视频、字幕包或网盘链接。只保留原创讨论。本站不发布下载量、收入或搜索量。",
    toggle: "EN",
    htmlLang: "zh-CN",
    sections: {
      A: "套路与节拍",
      B: "App 使用体感",
      C: "广告、付费墙与节奏",
      D: "文化对照笔记",
      E: "提问与弃剧"
    }
  },
  en: {
    kicker: "Discussion and notes",
    position: "A discussion and notes site for Chinese-speaking readers. It only talks about publicly known English short-drama apps (such as ReelShort, DramaBox, ShortMax, GoodShort, and PineDrama) and common tropes. No playback, and no news scraping.",
    boundary: "No login. No video. The openers stay on pacing and how a show feels. They do not recap a plot you could watch instead.",
    all: "All",
    footer: "No video, no subtitle packs, and no drive links. Original discussion only. This site does not publish download, revenue, or search figures.",
    toggle: "中文",
    htmlLang: "en",
    sections: {
      A: "Tropes and beats",
      B: "How the apps feel",
      C: "Ads, paywalls, and pacing",
      D: "Cultural contrast notes",
      E: "Questions and dropping a show"
    }
  }
};

const POSTS = [
  {
    id: 1, section: "A",
    zh: { title: "霸总开场三秒就亮身份，你们还吃这套吗", body: "很多英语短剧一上来就用豪车、姓氏和「我是CEO」把身份砸在脸上。有人觉得这是竖屏里省事的开场，冲突马上开始；也有人觉得人还没立住，后面的反差就软了。你更吃先亮牌，还是愿意等到几集后再揭？只聊节奏和观感，不要贴全集情节。" },
    en: { title: "Three seconds in, the CEO identity is already on the table. Do you still go for that?", body: "A lot of English short dramas open by throwing a luxury car, a family name, and “I’m the CEO” in your face. Some people see that as a shortcut that works on a vertical screen: the conflict starts at once. Others feel the person isn’t established yet, so the contrast later goes soft. Do you prefer the cards shown first, or would you rather wait a few episodes for the reveal? Talk only about rhythm and how it feels. Don’t paste a full-series plot." }
  },
  {
    id: 2, section: "A",
    zh: { title: "复仇线里，被踩到谷底要铺多久才不腻", body: "先被欺再翻盘，几乎是固定节拍，可谷底如果拖太久，人会在翻盘前关掉。你们一般能耐心看到哪一步？更吃当集就有一次小反击，还是愿意等一条长线？欢迎只谈自己的弃看点，不要按集复述某一部的情节，也不要贴资源。" },
    en: { title: "On a revenge line, how long can rock bottom run before you’re bored?", body: "Crushed first, then the comeback: it’s almost a fixed beat. But if the bottom drags too long, people close it before the turnaround. How far can you usually stay with it? Do you want a small counterblow in the same episode, or are you willing to wait out a long line? Talk only about your own point of quitting. Don’t recap any one show episode by episode, and don’t post resources." }
  },
  {
    id: 3, section: "A",
    zh: { title: "狼人与Alpha设定，短剧和你以前的网文差在哪", body: "超自然恋爱在英语短剧里很常见，但一集往往很短，来不及讲清族群规矩。你觉得它们是把「标记、真命、族群」压成一句台词，还是干脆只留恋爱外壳？哪种你还看得下去，哪种会立刻出戏？聊设定取舍就好，不要做全剧剧情替代。" },
    en: { title: "Werewolf and Alpha setups: how do short dramas differ from the web novels you used to read?", body: "Supernatural romance is common in English short dramas, but an episode is often very short, with no time to explain the pack’s rules. Do you think they compress “the mark, the fated mate, the pack” into a single line, or do they just keep the romance shell? Which version can you still watch, and which pulls you out immediately? Talk about what the setup keeps and drops. Don’t replace the whole plot." }
  },
  {
    id: 4, section: "B",
    zh: { title: "你实际在用的是ReelShort、DramaBox还是ShortMax", body: "这三个名字常被一起提起，打开之后的感受却不一定一样。有人在意免费部分够不够把钩子看完，有人在意广告卡在哪，有人只是跟朋友用同一个。你现在主力留在哪一个，想换的原因是什么？请只指向官方应用商店或官网，不要发网盘、字幕包或破解。" },
    en: { title: "Are you actually on ReelShort, DramaBox, or ShortMax?", body: "These three names are often mentioned together, but they don’t necessarily feel the same once you open them. Some people care whether the free portion is enough to finish the hook. Some people care where the ads cut in. Some just use the same app as their friends. Which one is your main app now, and why would you switch? Point only to an official app store or the official site. Don’t post drive links, subtitle packs, or cracks." }
  },
  {
    id: 5, section: "C",
    zh: { title: "看广告才能进下一集，你哪一次会直接退出", body: "断点如果刚好卡在一个刚抛出的问题上，有人愿意把广告看完；同一小段里连着被打断，就会觉得被拿捏。你的底线是次数、位置，还是广告内容本身？只谈使用感受。不要写解锁教程，不要讨论绕过付费或改包。" },
    en: { title: "When an ad is the gate to the next episode, which time do you just quit?", body: "If the break lands right after a question has just been thrown, some people will sit through the ad. If the same short stretch keeps getting interrupted, it feels like you’re being played. Is your limit the number of ads, where they sit, or the ad itself? Talk only about how it feels to use. Don’t write unlock tutorials, and don’t discuss bypassing payment or repackaging the app." }
  },
  {
    id: 6, section: "D",
    zh: { title: "家庭伦理线，为什么有时比纯恋爱更想跟人聊", body: "遗产、被家人冤枉、家里站队，冲突常常一句话就能懂，也容易想到自己的家里。可也有人觉得伦理线容易越写越狠，看到不舒服就停。你把它当成「好聊」，还是「容易弃」？什么尺度你会觉得过了，不想再看下去？" },
    en: { title: "Family-ethics lines: why do they sometimes make you want to talk more than pure romance?", body: "An inheritance, being wrongly blamed by family, the household taking sides: the conflict is often clear in one line, and it’s easy to think of your own home. But some people feel an ethics line can get harsher the longer it runs, and they stop when it gets uncomfortable. Do you treat it as “good to talk about,” or as “easy to drop”? What level makes you feel it has gone too far and you don’t want to keep watching?" }
  },
  {
    id: 7, section: "A",
    zh: { title: "契约婚姻开场，是冲突来得快，还是公式感太重", body: "闪婚、协议、假装夫妻，通常几集内就进入对峙，不用等两个人慢慢认识。坏处是下一步谁先破功，观众常常已经猜到。你还愿意为这个开场留下来吗？留下来，是在等感情，还是在等某一次身份穿帮？后半段请折叠，不要直接剧透。" },
    en: { title: "A contract-marriage opening: does the conflict arrive fast, or does the formula weigh too much?", body: "A flash marriage, a contract, pretending to be spouses: usually you’re in a standoff within a few episodes, without waiting for two people to get to know each other slowly. The downside is that viewers have often already guessed who breaks character first. Are you still willing to stay for this opening? If you stay, are you waiting for the feelings, or for an identity slip? Fold the second half. Don’t spoil it outright." }
  },
  {
    id: 8, section: "D",
    zh: { title: "英语短剧的隐藏身份，你最容易在哪里出戏", body: "失忆、私生子、假装普通人的继承人，译过来常常只剩一个标签。你出戏是因为台词太直白，还是因为阶层、礼貌和家人相处跟中文剧习惯不一样？用自己的观感说即可。不要整理成长篇剧情，也不要把听说的消息写成内部事实。" },
    en: { title: "Hidden identity in English short dramas: where do you fall out of the story most easily?", body: "Amnesia, a secret child, an heir pretending to be ordinary: once translated, it often shrinks to a single label. Do you fall out because the lines are too blunt, or because class, manners, and how family treats each other don’t match what you’re used to in Chinese dramas? Your own impression is enough. Don’t turn it into a long plot summary, and don’t write something you heard as an inside fact." }
  },
  {
    id: 9, section: "C",
    zh: { title: "通勤时你更能接受很短的一集，还是稍长一点", body: "一份2026年9月24日的调研笔记写过：公开材料里单集常见大约一到三分钟。这里只当作聊天起点，不是新的行业数据。你在等地铁时追得完一集，还是觉得情绪刚起来就断了？可以说自己大概能连看几集、什么时候会锁屏。" },
    en: { title: "On a commute, can you take a very short episode, or do you want it a bit longer?", body: "A research note dated 24 September 2026 said that, in public materials, a single episode is commonly about one to three minutes. Treat that only as a place to start the conversation, not as new industry data. When you’re waiting for the subway, can you finish an episode, or does the feeling cut off just as it starts? You can say roughly how many episodes you can watch in a row, and when you lock the screen." }
  },
  {
    id: 10, section: "E",
    zh: { title: "免费看到墙之后，你会补完、换一部，还是换App", body: "墙来得太早，故事还没让人在乎；来得太晚，又像把高潮故意扣住。你一般在墙出现前就已经决定去留，还是看到墙才发现自己其实没那么想看？可以比较不同App的体感。不要把听说的价格写成事实，也不要教人白看全集。" },
    en: { title: "After the free stretch hits the wall, do you finish it, switch shows, or switch apps?", body: "If the wall comes too early, the story hasn’t made you care yet. If it comes too late, it feels like the climax was held back on purpose. Do you usually decide to stay or leave before the wall appears, or do you only notice at the wall that you didn’t really want to keep watching? You can compare how different apps feel. Don’t write a price you only heard about as fact, and don’t teach anyone how to watch a whole series for free." }
  }
];

const KEY = "drama-notes-lang";
let lang = localStorage.getItem(KEY) === "en" ? "en" : "zh";
let filter = "all";

function t() { return STR[lang]; }

function renderChrome() {
  const s = t();
  document.documentElement.lang = s.htmlLang;
  document.getElementById("kicker").textContent = s.kicker;
  document.getElementById("position").textContent = s.position;
  document.getElementById("boundary").textContent = s.boundary;
  document.getElementById("footer").textContent = s.footer;
  const btn = document.getElementById("lang-toggle");
  btn.textContent = s.toggle;
  btn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  btn.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");

  const nav = document.getElementById("sections");
  nav.innerHTML = "";
  const chips = [["all", s.all], ...Object.entries(s.sections)];
  for (const [id, label] of chips) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = label;
    b.setAttribute("aria-pressed", filter === id ? "true" : "false");
    b.addEventListener("click", () => { filter = id; render(); });
    nav.appendChild(b);
  }
}

function renderList() {
  const s = t();
  const list = document.getElementById("list");
  const open = new Set([...list.querySelectorAll("details[open]")].map(d => d.dataset.id));
  list.innerHTML = "";
  for (const post of POSTS) {
    if (filter !== "all" && post.section !== filter) continue;
    const copy = post[lang];
    const d = document.createElement("details");
    d.className = "card";
    d.dataset.id = String(post.id);
    if (open.has(String(post.id))) d.open = true;
    const sum = document.createElement("summary");
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = "<span></span><span></span>";
    meta.children[0].textContent = s.sections[post.section];
    meta.children[1].textContent = String(post.id).padStart(2, "0");
    const h2 = document.createElement("h2");
    h2.textContent = copy.title;
    sum.append(meta, h2);
    const p = document.createElement("p");
    p.className = "body";
    p.textContent = copy.body;
    d.append(sum, p);
    list.appendChild(d);
  }
}

function render() { renderChrome(); renderList(); }

document.getElementById("lang-toggle").addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  localStorage.setItem(KEY, lang);
  render();
});

render();
