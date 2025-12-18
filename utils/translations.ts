export type TranslationKey =
  | "studioName"
  | "studioValue"
  | "products"
  | "platforms"
  | "concept"
  | "ios"
  | "android"
  | "mobileWeb"
  | "viewProject"
  | "selectProduct"
  | "meetra"
  | "komjirakMakers"
  | "doDream"

export type Translations = {
  [key in TranslationKey]: string
}

export const translations: Record<string, Translations> = {
  en: {
    studioName: "Komjirak Studio",
    studioValue: "Creating services that make creators, users, and everyone happy.",
    products: "Products",
    platforms: "Platforms",
    concept: "Concept",
    ios: "iOS",
    android: "Android",
    mobileWeb: "Mobile Web",
    viewProject: "Go to Product",
    selectProduct: "Select Product",
    meetra: "Real-time multilingual interpretation and AI response service for seamless global communication",
    komjirakMakers:
      "Experience the joy of AI-powered creativity! Create your own stickers, life cartoons, and enjoy virtual fitting with just a few finger taps.",
    doDream:
      "Emotions accumulated all day long. Release those feelings that are hard to express in words by drumming them out. DoDream, your personal emotional relief space where you empty emotions and fill dreams.",
  },
  ko: {
    studioName: "꼼지락 스튜디오",
    studioValue: "만드는 사람도, 쓰는 사람도, 모두가 행복한 서비스를 만들어나갑니다.",
    products: "프로덕트",
    platforms: "제공 플랫폼",
    concept: "컨셉",
    ios: "iOS",
    android: "AOS",
    mobileWeb: "모바일 웹",
    viewProject: "프로덕트 바로가기",
    selectProduct: "프로덕트 선택",
    meetra:
      "원활한 글로벌 소통을 위한 실시간 다국어 통역 및 AI 응답 서비스. 언제 어디서나 글로벌 회의에서 당당하게 의견을 말해보세요.",
    komjirakMakers:
      "AI로 만드는 창작의 즐거움을 경험! 손가락을 꼼지락 거리며 만드는 나만의 스티커를 만들고, 인생 카툰을 만들고, 가상피팅을 즐겨보세요",
    doDream:
      "하루 종일 쌓인 감정들. 말로는 표현하기 어려운 그 마음을 북처럼 두드리며 털어내세요. 두드림(DoDream), 감정을 비우고 꿈을 채우는 나만의 감정 해우소.",
  },
  ja: {
    studioName: "コムジラク スタジオ",
    studioValue: "作る人も、使う人も、みんなが幸せなサービスを作っていきます。",
    products: "プロダクト",
    platforms: "プラットフォーム",
    concept: "コンセプト",
    ios: "iOS",
    android: "Android",
    mobileWeb: "モバイルウェブ",
    viewProject: "プロダクトへ",
    selectProduct: "プロダクトを選択",
    meetra: "シームレスなグローバルコミュニケーションのためのリアルタイム多言語通訳とAI応答サービス",
    komjirakMakers:
      "AIで作る創作の楽しさを体験！指先でちょこちょこ作る自分だけのステッカーを作り、人生漫画を作り、バーチャルフィッティングを楽しんでみてください",
    doDream:
      "一日中溜まった感情。言葉では表現しにくいその気持ちを、太鼓のように叩いて発散しましょう。DoDream、感情を空にして夢を満たす、あなただけの感情解放スペース。",
  },
  "zh-CN": {
    studioName: "Komjirak 工作室",
    studioValue: "创造让创作者、用户和所有人都感到幸福的服务。",
    products: "产品",
    platforms: "平台",
    concept: "概念",
    ios: "iOS",
    android: "Android",
    mobileWeb: "移动网页",
    viewProject: "前往产品",
    selectProduct: "选择产品",
    meetra: "为无缝全球沟通提供的实时多语言翻译和AI响应服务",
    komjirakMakers: "体验AI创作的乐趣！动动手指制作专属贴纸，创作人生漫画，享受虚拟试衣的乐趣",
    doDream:
      "一整天积累的情绪。像敲鼓一样敲打释放那些难以用言语表达的心情。DoDream，清空情绪、填满梦想的专属情绪释放空间。",
  },
  "zh-TW": {
    studioName: "Komjirak 工作室",
    studioValue: "創造讓創作者、用戶和所有人都感到幸福的服務。",
    products: "產品",
    platforms: "平台",
    concept: "概念",
    ios: "iOS",
    android: "Android",
    mobileWeb: "移動網頁",
    viewProject: "前往產品",
    selectProduct: "選擇產品",
    meetra: "為無縫全球溝通提供的即時多語言翻譯和AI回應服務",
    komjirakMakers: "體驗AI創作的樂趣！動動手指製作專屬貼紙，創作人生漫畫，享受虛擬試衣的樂趣",
    doDream:
      "一整天累積的情緒。像敲鼓一樣敲打釋放那些難以用言語表達的心情。DoDream，清空情緒、填滿夢想的專屬情緒釋放空間。",
  },
  th: {
    studioName: "Komjirak Studio",
    studioValue: "สร้างบริการที่ทำให้ผู้สร้าง ผู้ใช้ และทุกคนมีความสุข",
    products: "ผลิตภัณฑ์",
    platforms: "แพลตฟอร์ม",
    concept: "แนวคิด",
    ios: "iOS",
    android: "Android",
    mobileWeb: "เว็บมือถือ",
    viewProject: "ไปที่ผลิตภัณฑ์",
    selectProduct: "เลือกผลิตภัณฑ์",
    meetra: "บริการแปลภาษาแบบเรียลไทม์และการตอบสนองด้วย AI สำหรับการสื่อสารระดับโลกที่ราบรื่น",
    komjirakMakers:
      "สัมผัสความสนุกของการสร้างสรรค์ด้วย AI! สร้างสติกเกอร์ของคุณเอง การ์ตูนชีวิต และเพลิดเพลินกับการลองเสื้อผ้าเสมือนจริงด้วยปลายนิ้ว",
    doDream:
      "อารมณ์ที่สะสมมาทั้งวัน ปล่อยความรู้สึกที่ยากจะบรรยายด้วยคำพูดโดยการเคาะเหมือนกลอง DoDream พื้นที่ปลดปล่อยอารมณ์ส่วนตัวของคุณ ที่คุณสามารถเทอารมณ์ออกและเติมเต็มความฝัน",
  },
}

export const productDescriptions: Record<string, Record<string, string>> = {
  en: {
    colorfulDiary:
      "Remember today with colors. Record your day with a colorful diary and express your emotions visually.",
    tastory:
      "Taste Story - Where your tastes become records, meet Tastory. Build your personal archive of all the content you love - books, movies, and TV shows. Your taste grows with you.",
    memoryGame:
      "Enjoy a photo memory game by matching people and objects in your memory! Train your memory with a memory card game made with your own photos.",
    loveSmash:
      "Send hearts to your favorite person's photo! Express your love through brick-breaking. Upload a photo of someone you like and fill it with hearts.",
    smashYou:
      "If there's a face you want revenge on, blow it away with bricks! A stress-relieving revenge game! Upload a photo of your revenge target and break bricks satisfyingly.",
    dramaWhenLifeGivesYouTangerines:
      "A small way to remember the beautiful drama that brought tears to your eyes. When even small incidents become drama. Experience a scene from everyday life woven with emotion and story.",
    todaysTaroCard:
      "Today's destiny, the card will tell you. Check out today's message hidden in a casually flipped card.",
    duckjilEssential:
      "Make your fandom perfect! Concert essentials you don't want to miss. We've gathered essential items for your fandom. Check them out now.",
    wordBingo:
      "A bingo game played with Korean consonants. Challenge yourself now to see if AI or you will complete 3 lines on the bingo board first!",
    runnersBadge:
      "Check national marathon schedules, manage personal records, and collect special badges. Enjoy the fun of running.",
    meetra: "Real-time multilingual interpretation and AI response service for seamless global communication",
    komjirakMakers:
      "Experience the joy of AI-powered creativity! Create your own stickers, life cartoons, and enjoy virtual fitting with just a few finger taps.",
    doDream:
      "Emotions accumulated all day long. Release those feelings that are hard to express in words by drumming them out. DoDream, your personal emotional relief space where you empty emotions and fill dreams.",
  },
  ko: {
    colorfulDiary:
      "기억하고 싶은 오늘 하루를 색상으로 기억하세요. 당신의 하루를 다채로운 색의 다이어리로 기록하고, 감정을 시각적으로 표현해보세요.",
    tastory:
      "Taste Story 취향이 기록이 되는 공간, Tastory를 만나보세요. 책, 영화, TV 프로그램까지 내가 사랑한 모든 콘텐츠를 '당신의 취향이 쌓여가는 개인 아카이브'에 담아보세요.",
    memoryGame:
      "기억 속 인물과 물건을 짝지으며 즐기는 사진 기억 게임! 내 사진으로 직접 만드는 메모리 카드 게임으로 기억력도 즐겁게 훈련해보세요.",
    loveSmash:
      "최애의 사진에 하트를 팡팡! 사랑을 표현하는 벽돌깨기. 좋아하는 사람의 사진을 올리고 하트로 가득 채워보세요. 벽돌을 부수며 애정을 쌓아가는 게임.",
    smashYou:
      "복수하고 싶은 얼굴이 있다면, 벽돌로 날려버려요! 스트레스를 날리는 리벤지 게임! 복수 대상의 사진을 올리고 통쾌하게 벽돌을 깨보세요.",
    dramaWhenLifeGivesYouTangerines:
      "눈물 쏘옥 뺐던 아름다운 드라마를 기억하는 작은 방법. 작은 사건도 드라마가 되는 순간. 감성과 스토리로 엮은 일상의 한 장면을 만나보세요.",
    todaysTaroCard: "오늘의 운명, 카드가 알려드립니다. 가볍게 넘긴 카드 한 장에 숨어있는 오늘의 메시지를 확인해보세요.",
    duckjilEssential:
      "덕질을 더욱 완벽하게! 놓치면 아쉬운 콘서트 필수템. 당신의 취향을 채워줄, 덕질 필수템을 모았습니다. 지금 바로 확인해보세요.",
    wordBingo:
      "한글 초성으로 즐기는 빙고게임. AI가 이길 것인지 내가 이길 것인가 누가 먼저 빙고판 3줄을 완성 시킬지 지금 바로 도전해보세요",
    runnersBadge:
      "전국 마라톤 일정을 확인하고, 개인 기록을 관리하며, 특별한 배지를 수집하세요. 달리는 재미를 즐겨보세요.",
    meetra:
      "원활한 글로벌 소통을 위한 실시간 다국어 통역 및 AI 응답 서비스. 언제 어디서나 글로벌 회의에서 당당하게 의견을 말해보세요.",
    komjirakMakers:
      "AI로 만드는 창작의 즐거움을 경험! 손가락을 꼼지락 거리며 만드는 나만의 스티커를 만들고, 인생 카툰을 만들고, 가상피팅을 즐겨보세요",
    doDream:
      "하루 종일 쌓인 감정들. 말로는 표현하기 어려운 그 마음을 북처럼 두드리며 털어내세요. 두드림(DoDream), 감정을 비우고 꿈을 채우는 나만의 감정 해우소.",
  },
  ja: {
    studioName: "コムジラク スタジオ",
    studioValue: "作る人も、使う人も、みんなが幸せなサービスを作っていきます。",
    products: "プロダクト",
    platforms: "プラットフォーム",
    concept: "コンセプト",
    ios: "iOS",
    android: "Android",
    mobileWeb: "モバイルウェブ",
    viewProject: "プロダクトへ",
    selectProduct: "プロダクトを選択",
    meetra: "シームレスなグローバルコミュニケーションのためのリアルタイム多言語通訳とAI応答サービス",
    komjirakMakers:
      "AIで作る創作の楽しさを体験！指先でちょこちょこ作る自分だけのステッカーを作り、人生漫画を作り、バーチャルフィッティングを楽しんでみてください",
    doDream:
      "一日中溜まった感情。言葉では表現しにくいその気持ちを、太鼓のように叩いて発散しましょう。DoDream、感情を空にして夢を満たす、あなただけの感情解放スペース。",
  },
  "zh-CN": {
    studioName: "Komjirak 工作室",
    studioValue: "创造让创作者、用户和所有人都感到幸福的服务。",
    products: "产品",
    platforms: "平台",
    concept: "概念",
    ios: "iOS",
    android: "Android",
    mobileWeb: "移动网页",
    viewProject: "前往产品",
    selectProduct: "选择产品",
    meetra: "为无缝全球沟通提供的实时多语言翻译和AI响应服务",
    komjirakMakers: "体验AI创作的乐趣！动动手指制作专属贴纸，创作人生漫画，享受虚拟试衣的乐趣",
    doDream:
      "一整天积累的情绪。像敲鼓一样敲打释放那些难以用言语表达的心情。DoDream，清空情绪、填满梦想的专属情绪释放空间。",
  },
  "zh-TW": {
    studioName: "Komjirak 工作室",
    studioValue: "創造讓創作者、用戶和所有人都感到幸福的服務。",
    products: "產品",
    platforms: "平台",
    concept: "概念",
    ios: "iOS",
    android: "Android",
    mobileWeb: "移動網頁",
    viewProject: "前往產品",
    selectProduct: "選擇產品",
    meetra: "為無縫全球溝通提供的即時多語言翻譯和AI回應服務",
    komjirakMakers: "體驗AI創作的樂趣！動動手指製作專屬貼紙，創作人生漫畫，享受虛擬試衣的樂趣",
    doDream:
      "一整天累積的情緒。像敲鼓一樣敲打釋放那些難以用言語表達的心情。DoDream，清空情緒、填滿夢想的專屬情緒釋放空間。",
  },
  th: {
    studioName: "Komjirak Studio",
    studioValue: "สร้างบริการที่ทำให้ผู้สร้าง ผู้ใช้ และทุกคนมีความสุข",
    products: "ผลิตภัณฑ์",
    platforms: "แพลตฟอร์ม",
    concept: "แนวคิด",
    ios: "iOS",
    android: "Android",
    mobileWeb: "เว็บมือถือ",
    viewProject: "ไปที่ผลิตภัณฑ์",
    selectProduct: "เลือกผลิตภัณฑ์",
    meetra: "บริการแปลภาษาแบบเรียลไทม์และการตอบสนองด้วย AI สำหรับการสื่อสารระดับโลกที่ราบรื่น",
    komjirakMakers:
      "สัมผัสความสนุกของการสร้างสรรค์ด้วย AI! สร้างสติกเกอร์ของคุณเอง การ์ตูนชีวิต และเพลิดเพลินกับการลองเสื้อผ้าเสมือนจริงด้วยปลายนิ้ว",
    doDream:
      "อารมณ์ที่สะสมมาทั้งวัน ปล่อยความรู้สึกที่ยากจะบรรยายด้วยคำพูดโดยการเคาะเหมือนกลอง DoDream พื้นที่ปลดปล่อยอารมณ์ส่วนตัวของคุณ ที่คุณสามารถเทอารมณ์ออกและเติมเต็มความฝัน",
  },
}
