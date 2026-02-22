export type Locale = "ko" | "en" | "ja" | "zh-TW" | "zh-CN" | "th";

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
  th: "ไทย",
};

export const localeFlags: Record<Locale, string> = {
  ko: "🇰🇷",
  en: "🇺🇸",
  ja: "🇯🇵",
  "zh-TW": "🇹🇼",
  "zh-CN": "🇨🇳",
  th: "🇹🇭",
};

export const defaultLocale: Locale = "ko";

interface Translations {
  nav: {
    products: string;
  };
  intro: {
    title1: string;
    title2: string;
    subtitle: string;
  };
  code: string[];
  products: {
    heading: string;
    oldestFirst: string;
    newestFirst: string;
    goToProduct: string;
  };
  footer: {
    copyright: string;
    contact: string;
  };
  productDescriptions: Record<string, string>;
}

export const translations: Record<Locale, Translations> = {
  ko: {
    nav: { products: "프로덕트" },
    intro: {
      title1: "꼼지락",
      title2: " 스튜디오",
      subtitle: "만드는 사람도, 쓰는 사람도,\n모두가 행복한 서비스를 만들어나갑니다.",
    },
    code: [
      "const studio = new KomjirakStudio();",
      "studio.vibe('coding');",
      "studio.setMode('꼼지락');",
      "await studio.build({ with: 'passion' });",
      "// 작은 아이디어가 서비스가 되는 순간",
      "studio.launch(); 🚀",
    ],
    products: {
      heading: "Products",
      oldestFirst: "오래된순",
      newestFirst: "최신순",
      goToProduct: "프로덕트 바로가기",
    },
    footer: { copyright: "© 2025-2026 Komjirak Studio", contact: "문의하기" },
    productDescriptions: {
      "colorful-diary": "오늘 하루, 어떤 색깔이셨나요?\n감정을 색으로 기록하는 힐링 다이어리.\n나만의 다채로운 일상을 모아보세요.",
      tastory: "당신의 취향이 머무는 특별한 공간.\n책, 영화, 드라마까지 내 맘대로 아카이빙.\n잊고 싶지 않은 순간들을 기록하세요.",
      "memory-game": "추억 속 사진으로 즐기는 메모리 게임!\n다양한 테마로 기억력을 테스트하고 플레이하세요.\n친구들과 함께 추억을 맞춰볼까요?",
      "love-smash": "좋아하는 사람에게 하트를 날려보세요!\n스트레스가 풀리는 시원한 벽돌깨기 타임.\n짜릿하고 통쾌한 사랑의 직진 액션.",
      "smash-you": "미운 얼굴을 시원하게 날려버릴 시간!\n스트레스 타파 하이퍼 캐주얼 복수 게임.\n답답한 마음, 벽돌과 함께 산산조각 내보세요.",
      "when-life-gives": "눈물짓게 한 인생 명작, 폭싹 속았수다.\n팬심을 담아 기획한 드라마 아카이브.\n아름답고 소중한 순간들을 오래 기억하세요.",
      tarot: "오늘 나의 운명은 어떨까요?\n신비로운 카드가 전하는 따뜻한 메시지.\n당신의 하루에 작은 힌트를 선물할게요.",
      duckjil: "어덕행덕! 완벽한 덕질을 위한 준비물.\n콘서트 필수 아이템 챙기셨나요?\n소중한 순간을 100% 즐길 수 있게 도와드려요.",
      "word-bingo": "두뇌 회전 풀가동! 한글 자음 빙고.\nAI와의 숨막히는 대결에서 승리해 보세요.\n가볍게 즐기며 어휘력까지 쑥쑥 키우세요.",
      runners: "달리는 즐거움을 하나로 묶어드려요.\n전국 마라톤 일정부터 한눈에 보는 내 기록.\n성취감을 더해줄 특별한 뱃지도 모아보세요.",
      meetra: "장벽 없는 글로벌 커뮤니케이션의 시작.\n실시간 다국어 통역과 스마트한 AI 응답.\n마음과 마음이 통하는 대화를 경험하세요.",
      "komjirak-makers": "당신의 상상이 현실이 되는 마법 툴.\n스티커, 만화, 가상 피팅을 손가락 터치만으로!\n누구나 손쉽게 경험하는 AI 창작의 세계.",
      "photo-puzzle": "나만의 사진을 즐거운 퍼즐 보드로!\n퍼즐 마스터가 되어 제한된 이동을 극복하세요.\n매일매일 기록이 갱신되는 재미를 느껴보세요.",
      "memory-game-toss": "나의 뇌기능 나이는 과연 몇 살일까요?\n간단하게 내 사진을 넣고 테마 게임을 즐겨보세요.\n토스 미니앱에서 지금 바로 시작해 보세요!",
      "office-survival": "오늘도 무사히 버티는 자가 승리한다!\n쏟아지는 서류와 스트레스를 관리하는 오피스 꿀잼.\n눈물겨운 직장인 생존 게임에 도전하세요.",
    },
  },
  en: {
    nav: { products: "Products" },
    intro: {
      title1: "Komjirak",
      title2: " Studio",
      subtitle: "Creating services that make everyone happy — both makers and users.",
    },
    code: [
      "const studio = new KomjirakStudio();",
      "studio.vibe('coding');",
      "studio.setMode('creative');",
      "await studio.build({ with: 'passion' });",
      "// Where small ideas become real services",
      "studio.launch(); 🚀",
    ],
    products: {
      heading: "Products",
      oldestFirst: "Oldest first",
      newestFirst: "Newest first",
      goToProduct: "Go to Product",
    },
    footer: { copyright: "© 2025-2026 Komjirak Studio", contact: "Contact" },
    productDescriptions: {
      "colorful-diary": "Remember your day in color. Record your daily life with colorful diaries and express your emotions visually.",
      tastory: "Where your taste becomes a record. Create your own archive of favorite books, movies, and dramas.",
      "memory-game": "Memory game with photos! Match the people and things in your memory.",
      "love-smash": "Send hearts to your favorite person's photo! Express love through brick-breaking.",
      "smash-you": "Got a face you want to smash? Blast it with bricks! A stress-relief revenge game!",
      "when-life-gives": "A small way to remember a beautiful drama that made you cry. When everyday moments become dramatic.",
      tarot: "Let the cards reveal your fate today. Discover hidden messages in the cards you flip.",
      duckjil: "Perfect your fandom life! Essential items you shouldn't miss at concerts.",
      "word-bingo": "Bingo game with Korean consonants! Complete 3 lines before the AI on the bingo board.",
      runners: "Check marathon schedules nationwide, manage personal records, collect special badges. Enjoy running!",
      meetra: "Real-time multilingual interpretation and AI response service for smooth global communication.",
      "komjirak-makers": "Experience the joy of AI creation! Stickers, life comics, virtual fitting with just a few taps.",
      "photo-puzzle": "Create puzzle games with your own photos. Complete beautiful images within limited moves.",
      "memory-game-toss": "How old is your memory? Upload photos and check your memory age with random themes.",
      "office-survival": "The one who endures wins. Process documents, manage stress, and survive office life in this hyper-casual survival game.",
    },
  },
  ja: {
    nav: { products: "製品" },
    intro: {
      title1: "コムジラク",
      title2: " スタジオ",
      subtitle: "作る人も、使う人も、みんなが幸せになるサービスを作っていきます。",
    },
    code: [
      "const studio = new KomjirakStudio();",
      "studio.vibe('coding');",
      "studio.setMode('こつこつ');",
      "await studio.build({ with: 'passion' });",
      "// 小さなアイデアがサービスになる瞬間",
      "studio.launch(); 🚀",
    ],
    products: {
      heading: "製品",
      oldestFirst: "古い順",
      newestFirst: "新しい順",
      goToProduct: "製品を見る",
    },
    footer: { copyright: "© 2025-2026 Komjirak Studio", contact: "お問い合わせ" },
    productDescriptions: {
      "colorful-diary": "今日を色で覚えましょう。カラフルな日記で一日を記録し、感情を視覚的に表現しましょう。",
      tastory: "あなたの好みが記録になる場所。本、映画、ドラマなど好きなコンテンツの自分だけのアーカイブを作りましょう。",
      "memory-game": "写真で楽しむメモリーゲーム！記憶の中の人や物を合わせましょう。",
      "love-smash": "好きな人の写真にハートを送りましょう！ブロック崩しで愛を表現しましょう。",
      "smash-you": "復讐したい顔があるなら、ブロックで吹き飛ばしましょう！ストレス解消復讐ゲーム！",
      "when-life-gives": "涙を誘った美しいドラマを覚える小さな方法。日常の小さな出来事もドラマになる瞬間。",
      tarot: "今日の運命、カードが教えてくれます。何気なくめくったカードに隠された今日のメッセージを確認しましょう。",
      duckjil: "推し活を完璧に！コンサートで見逃せない必須アイテムを集めました。",
      "word-bingo": "韓国語の子音で楽しむビンゴゲーム！AIとビンゴボードで3列を先に完成させましょう。",
      runners: "全国のマラソン日程確認、個人記録管理、特別なバッジ収集。ランニングの楽しさを満喫しましょう。",
      meetra: "リアルタイム多言語通訳とAI応答サービスでグローバルコミュニケーションをスムーズに。",
      "komjirak-makers": "AI創作の楽しさを体験しましょう！ステッカー、人生漫画、バーチャル試着を指先ひとつで。",
      "photo-puzzle": "自分の写真でパズルゲームを作りましょう。限られた移動回数で美しい画像を完成させましょう。",
      "memory-game-toss": "あなたの記憶力は何歳？スマホの写真をアップロードしてランダムテーマで記憶力年齢を確認しましょう。",
      "office-survival": "耐える者が勝つ。書類を処理しストレスを管理しながら職場生活を耐え抜くハイパーカジュアルサバイバル。",
    },
  },
  "zh-TW": {
    nav: { products: "產品" },
    intro: {
      title1: "꼼지락",
      title2: " 工作室",
      subtitle: "無論是製作者還是使用者，我們致力於打造讓所有人幸福的服務。",
    },
    code: [
      "const studio = new KomjirakStudio();",
      "studio.vibe('coding');",
      "studio.setMode('creative');",
      "await studio.build({ with: 'passion' });",
      "// 小點子變成真正服務的瞬間",
      "studio.launch(); 🚀",
    ],
    products: {
      heading: "產品",
      oldestFirst: "最舊優先",
      newestFirst: "最新優先",
      goToProduct: "前往產品",
    },
    footer: { copyright: "© 2025-2026 Komjirak Studio", contact: "聯繫我們" },
    productDescriptions: {
      "colorful-diary": "用色彩記住今天。用多彩的日記記錄每一天，視覺化表達你的情感。",
      tastory: "你的品味成為記錄的地方。為喜愛的書籍、電影、電視劇建立專屬檔案。",
      "memory-game": "用照片玩記憶遊戲！配對記憶中的人和物。",
      "love-smash": "向喜歡的人的照片送出愛心！用打磚塊表達愛意。",
      "smash-you": "有想報復的臉嗎？用磚塊炸飛它！紓壓復仇遊戲！",
      "when-life-gives": "記住讓你落淚的美麗劇集的小方法。日常小事也能變成戲劇的瞬間。",
      tarot: "今天的命運，讓牌卡告訴你。發現隨意翻開的牌中隱藏的今日訊息。",
      duckjil: "完美追星！收集演唱會不可錯過的必備物品。",
      "word-bingo": "用韓語子音玩賓果遊戲！在賓果板上比AI先完成3條線。",
      runners: "查看全國馬拉松日程、管理個人記錄、收集特別徽章。享受跑步的樂趣！",
      meetra: "即時多語翻譯和AI回應服務，讓全球溝通更順暢。",
      "komjirak-makers": "體驗AI創作的樂趣！只需幾次點擊即可製作貼紙、人生漫畫、虛擬試穿。",
      "photo-puzzle": "用自己的照片創建拼圖遊戲。在有限的移動次數內完成美麗的圖像。",
      "memory-game-toss": "你的記憶力幾歲？上傳手機照片，用隨機主題檢測記憶力年齡。",
      "office-survival": "堅持就是勝利。處理文件、管理壓力，在這款超休閒生存遊戲中撐過辦公室生活。",
    },
  },
  "zh-CN": {
    nav: { products: "产品" },
    intro: {
      title1: "꼼지락",
      title2: " 工作室",
      subtitle: "无论是制作者还是使用者，我们致力于打造让所有人幸福的服务。",
    },
    code: [
      "const studio = new KomjirakStudio();",
      "studio.vibe('coding');",
      "studio.setMode('creative');",
      "await studio.build({ with: 'passion' });",
      "// 小点子变成真正服务的瞬间",
      "studio.launch(); 🚀",
    ],
    products: {
      heading: "产品",
      oldestFirst: "最旧优先",
      newestFirst: "最新优先",
      goToProduct: "前往产品",
    },
    footer: { copyright: "© 2025-2026 Komjirak Studio", contact: "联系我们" },
    productDescriptions: {
      "colorful-diary": "用色彩记住今天。用多彩的日记记录每一天，视觉化表达你的情感。",
      tastory: "你的品味成为记录的地方。为喜爱的书籍、电影、电视剧建立专属档案。",
      "memory-game": "用照片玩记忆游戏！配对记忆中的人和物。",
      "love-smash": "向喜欢的人的照片送出爱心！用打砖块表达爱意。",
      "smash-you": "有想报复的脸吗？用砖块炸飞它！减压复仇游戏！",
      "when-life-gives": "记住让你落泪的美丽剧集的小方法。日常小事也能变成戏剧的瞬间。",
      tarot: "今天的命运，让牌卡告诉你。发现随意翻开的牌中隐藏的今日信息。",
      duckjil: "完美追星！收集演唱会不可错过的必备物品。",
      "word-bingo": "用韩语子音玩宾果游戏！在宾果板上比AI先完成3条线。",
      runners: "查看全国马拉松日程、管理个人记录、收集特别徽章。享受跑步的乐趣！",
      meetra: "实时多语翻译和AI回应服务，让全球沟通更顺畅。",
      "komjirak-makers": "体验AI创作的乐趣！只需几次点击即可制作贴纸、人生漫画、虚拟试穿。",
      "photo-puzzle": "用自己的照片创建拼图游戏。在有限的移动次数内完成美丽的图像。",
      "memory-game-toss": "你的记忆力几岁？上传手机照片，用随机主题检测记忆力年龄。",
      "office-survival": "坚持就是胜利。处理文件、管理压力，在这款超休闲生存游戏中撑过办公室生活。",
    },
  },
  th: {
    nav: { products: "ผลิตภัณฑ์" },
    intro: {
      title1: "คมจิรัก",
      title2: " สตูดิโอ",
      subtitle: "สร้างบริการที่ทำให้ทุกคนมีความสุข ทั้งผู้สร้างและผู้ใช้",
    },
    code: [
      "const studio = new KomjirakStudio();",
      "studio.vibe('coding');",
      "studio.setMode('creative');",
      "await studio.build({ with: 'passion' });",
      "// เมื่อไอเดียเล็กๆ กลายเป็นบริการจริง",
      "studio.launch(); 🚀",
    ],
    products: {
      heading: "ผลิตภัณฑ์",
      oldestFirst: "เก่าสุดก่อน",
      newestFirst: "ใหม่สุดก่อน",
      goToProduct: "ไปที่ผลิตภัณฑ์",
    },
    footer: { copyright: "© 2025-2026 Komjirak Studio", contact: "ติดต่อเรา" },
    productDescriptions: {
      "colorful-diary": "จดจำวันนี้ด้วยสี บันทึกชีวิตประจำวันด้วยไดอารี่สีสันและแสดงอารมณ์ของคุณอย่างเห็นภาพ",
      tastory: "ที่ที่รสนิยมของคุณกลายเป็นบันทึก สร้างคลังส่วนตัวของหนังสือ ภาพยนตร์ และซีรีส์ที่คุณชื่นชอบ",
      "memory-game": "เกมจับคู่ด้วยรูปถ่าย! จับคู่คนและสิ่งของในความทรงจำของคุณ",
      "love-smash": "ส่งหัวใจไปยังรูปคนที่คุณชอบ! แสดงความรักผ่านเกมทำลายบล็อก",
      "smash-you": "มีหน้าที่อยากแก้แค้นไหม? ระเบิดมันด้วยอิฐ! เกมแก้แค้นคลายเครียด!",
      "when-life-gives": "วิธีเล็กๆ ในการจดจำละครสวยๆ ที่ทำให้คุณร้องไห้ เมื่อเรื่องเล็กน้อยในชีวิตประจำวันกลายเป็นดราม่า",
      tarot: "ให้ไพ่บอกชะตาวันนี้ของคุณ ค้นพบข้อความที่ซ่อนอยู่ในไพ่ที่คุณพลิก",
      duckjil: "แฟนคลับสมบูรณ์แบบ! รวบรวมของจำเป็นที่ห้ามพลาดในคอนเสิร์ต",
      "word-bingo": "เกมบิงโกด้วยพยัญชนะเกาหลี! ทำ 3 แถวให้เสร็จก่อน AI บนกระดานบิงโก",
      runners: "ดูตารางมาราธอนทั่วประเทศ จัดการสถิติส่วนตัว สะสมเหรียญพิเศษ สนุกกับการวิ่ง!",
      meetra: "บริการแปลภาษาหลายภาษาแบบเรียลไทม์และ AI ตอบกลับเพื่อการสื่อสารระดับโลกที่ราบรื่น",
      "komjirak-makers": "สัมผัสความสนุกของการสร้างสรรค์ด้วย AI! สติกเกอร์ การ์ตูนชีวิต การลองชุดเสมือนจริงด้วยการแตะไม่กี่ครั้ง",
      "photo-puzzle": "สร้างเกมจิ๊กซอว์ด้วยรูปถ่ายของคุณเอง ทำภาพสวยๆ ให้สมบูรณ์ภายในการเคลื่อนที่ที่จำกัด",
      "memory-game-toss": "ความจำของคุณอายุเท่าไหร่? อัปโหลดรูปจากมือถือและตรวจสอบอายุความจำด้วยธีมสุ่ม",
      "office-survival": "ผู้ที่อดทนจะชนะ จัดการเอกสาร จัดการความเครียด และเอาตัวรอดจากชีวิตออฟฟิศในเกมเอาชีวิตรอดสุดแคชชวล",
    },
  },
};
