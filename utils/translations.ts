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
  },
}

export const productDescriptions: Record<string, Record<string, string>> = {
  en: {
    colorfulDiary:
      "Remember today with colors. Record your day with a colorful diary and express your emotions visually.",
    bookclip:
      "Clip book sentences with your own sensibility! Search and save sentences you've read, and leave your emotions in this emotional reading memo service.",
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
  },
  ko: {
    colorfulDiary:
      "기억하고 싶은 오늘 하루를 색상으로 기억하세요. 당신의 하루를 다채로운 색의 다이어리로 기록하고, 감정을 시각적으로 표현해보세요.",
    bookclip:
      "책 속 문장을 나만의 감성으로 클립! 읽은 문장을 검색하고 저장하며, 그날의 감정까지 함께 남기는 감성 독서 메모 서비스.",
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
  },
  ja: {
    colorfulDiary: "今日を色で記憶しましょう。あなたの一日をカラフルな日記で記録し、感情を視覚的に表現してみましょう。",
    bookclip:
      "本の中の文章を自分だけの感性でクリップ！読んだ文章を検索して保存し、その日の感情も一緒に残す感性読書メモサービス。",
    memoryGame:
      "記憶の中の人物や物を組み合わせて楽しむ写真記憶ゲーム！自分の写真で直接作るメモリーカードゲームで記憶力も楽しく訓練してみましょう。",
    loveSmash:
      "推しの写真にハートをパンパン！愛を表現するブロック崩し。好きな人の写真をアップロードしてハートでいっぱいにしてみましょう。ブロックを壊しながら愛情を積み重ねるゲーム。",
    smashYou:
      "復讐したい顔があれば、ブロックで吹き飛ばしましょう！ストレスを発散するリベンジゲーム！復讐対象の写真をアップロードして痛快にブロックを壊してみましょう。",
    dramaWhenLifeGivesYouTangerines:
      "涙を誘った美しいドラマを覚えている小さな方法。小さな出来事もドラマになる瞬間。感性とストーリーで織りなす日常の一場面に出会ってみましょう。",
    todaysTaroCard:
      "今日の運命、カードがお知らせします。軽くめくったカード一枚に隠れている今日のメッセージを確認してみましょう。",
    duckjilEssential:
      "推し活をより完璧に！見逃せないコンサート必須アイテム。あなたの趣味を満たす、推し活必須アイテムを集めました。今すぐ確認してみましょう。",
    wordBingo:
      "ハングル子音で楽しむビンゴゲーム。AIが勝つか、私が勝つか、誰が先にビンゴボードの3列を完成させるか、今すぐ挑戦してみてください！",
    runnersBadge:
      "全国のマラソン日程を確認し、個人記録を管理し、特別なバッジを集めましょう。走る楽しさを満喫してください。",
    meetra: "シームレスなグローバルコミュニケーションのためのリアルタイム多言語通訳とAI応答サービス",
    komjirakMakers:
      "AIで作る創作の楽しさを体験！指先でちょこちょこ作る自分だけのステッカーを作り、人生漫画を作り、バーチャルフィッティングを楽しんでみてください",
  },
  "zh-CN": {
    colorfulDiary: "用颜色记住今天。用多彩的日记记录你的一天，视觉化表达你的情感。",
    bookclip: "用自己的感性剪辑书中的句子！搜索并保存你读过的句子，在这个感性阅读备忘录服务中留下你的情感。",
    memoryGame: "通过匹配记忆中的人物和物品来享受照片记忆游戏！用自己的照片制作记忆卡牌游戏，愉快地训练你的记忆力。",
    loveSmash: "向你最喜欢的人的照片发送爱心！通过打砖块表达你的爱。上传你喜欢的人的照片，用爱心填满它。",
    smashYou: "如果有你想报复的脸，用砖块把它吹走！一个释放压力的复仇游戏！上传你的复仇目标的照片，痛快地打破砖块。",
    dramaWhenLifeGivesYouTangerines:
      "记住那部让你流泪的美丽剧集的小方法。当小事件也成为戏剧的瞬间。体验一个用情感和故事编织的日常场景。",
    todaysTaroCard: "今天的命运，卡片会告诉你。查看隐藏在随意翻开的卡片中的今日信息。",
    duckjilEssential:
      "让你的粉丝活动更完美！不容错过的音乐会必备品。我们收集了满足你爱好的粉丝必备品。现在就来看看吧。",
    wordBingo: "用韩语辅音玩的宾果游戏。现在就来挑战，看看是AI还是你，谁能先完成宾果盘上的3行！",
    runnersBadge: "查看全国马拉松日程，管理个人记录，并收集特殊徽章。享受跑步的乐趣。",
    meetra: "为无缝全球沟通提供的实时多语言翻译和AI响应服务",
    komjirakMakers: "体验AI创作的乐趣！动动手指制作专属贴纸，创作人生漫画，享受虚拟试衣的乐趣",
  },
  "zh-TW": {
    colorfulDiary: "用顏色記住今天。用多彩的日記記錄你的一天，視覺化表達你的情感。",
    bookclip: "用自己的感性剪輯書中的句子！搜索並保存你讀過的句子，在這個感性閱讀備忘錄服務中留下你的情感。",
    memoryGame: "通過匹配記憶中的人物和物品來享受照片記憶遊戲！用自己的照片製作記憶卡牌遊戲，愉快地訓練你的記憶力。",
    loveSmash: "向你最喜歡的人的照片發送愛心！通過打磚塊表達你的愛。上傳你喜歡的人的照片，用愛心填滿它。",
    smashYou: "如果有你想報復的臉，用磚塊把它吹走！一個釋放壓力的復仇遊戲！上傳你的復仇目標的照片，痛快地打破磚塊。",
    dramaWhenLifeGivesYouTangerines:
      "記住那部讓你流淚的美麗劇集的小方法。當小事件也成為戲劇的瞬間。體驗一個用情感和故事編織的日常場景。",
    todaysTaroCard: "今天的命運，卡片會告訴你。查看隱藏在隨意翻開的卡片中的今日信息。",
    duckjilEssential:
      "讓你的粉絲活動更完美！不容錯過的音樂會必備品。我們收集了滿足你愛好的粉絲必備品。現在就來看看吧。",
    wordBingo: "用韓語輔音玩的賓果遊戲。現在就來挑戰，看看是AI還是你，誰能先完成賓果盤上的3行！",
    runnersBadge: "查看全國馬拉松日程，管理個人記錄，並收集特殊徽章。享受跑步的樂趣。",
    meetra: "為無縫全球溝通提供的即時多語言翻譯和AI回應服務",
    komjirakMakers: "體驗AI創作的樂趣！動動手指製作專屬貼紙，創作人生漫畫，享受虛擬試衣的樂趣",
  },
  th: {
    colorfulDiary: "จดจำวันนี้ด้วยสี บันทึกวันของคุณด้วยไดอารี่ที่มีสีสันและแสดงอารมณ์ของคุณด้วยภาพ",
    bookclip:
      "คลิปประโยคในหนังสือด้วยความรู้สึกของคุณเอง! ค้นหาและบันทึกประโยคที่คุณอ่าน และบันทึกอารมณ์ของคุณในบริการบันทึกการอ่านที่เต็มไปด้วยอารมณ์นี้",
    memoryGame:
      "สนุกกับเกมความจำรูปภาพโดยการจับคู่คนและวัตถุในความทรงจำของคุณ! ฝึกความจำของคุณด้วยเกมไพ่ความจำที่สร้างจากรูปถ่ายของคุณเอง",
    loveSmash: "ส่งหัวใจให้รูปถ่ายคนที่คุณชื่นชอบ! แสดงความรักของคุณผ่านการทำลายอิฐ อัปโหลดรูปถ่ายของคนที่คุณชอบและเติมด้วยหัวใจ",
    smashYou:
      "ถ้ามีใบหน้าที่คุณต้องการแก้แค้น ระเบิดมันด้วยอิฐ! เกมแก้แค้นที่ช่วยคลายความเครียด! อัปโหลดรูปถ่ายของเป้าหมายการแก้แค้นของคุณและทำลายอิฐอย่างสะใจ",
    dramaWhenLifeGivesYouTangerines:
      "วิธีเล็กๆ ในการจดจำละครที่สวยงามที่ทำให้คุณน้ำตาไหล เมื่อแม้แต่เหตุการณ์เล็กๆ ก็กลายเป็นละคร สัมผัสฉากจากชีวิตประจำวันที่ถักทอด้วยอารมณ์และเรื่องราว",
    todaysTaroCard: "ชะตากรรมของวันนี้ ไพ่จะบอกคุณ ตรวจสอบข้อความของวันนี้ที่ซ่อนอยู่ในไพ่ที่พลิกอย่างไม่ตั้งใจ",
    duckjilEssential:
      "ทำให้การเป็นแฟนคลับของคุณสมบูรณ์แบบ! สิ่งจำเป็นสำหรับคอนเสิร์ตที่คุณไม่ควรพลาด เรารวบรวมสิ่งของจำเป็นสำหรับการเป็นแฟนคลับของคุณ ตรวจสอบตอนนี้",
    wordBingo: "เกมบิงโกที่เล่นด้วยพยัญชนะเกาหลี ท้าทายตอนนี้เพื่อดูว่า AI หรือคุณจะทำบิงโกได้ 3 แถวก่อน!",
    runnersBadge: "ตรวจสอบตารางการวิ่งมาราธอนทั่วประเทศ จัดการบันทึกส่วนตัว และสะสมเหรียญตราพิเศษ สนุกกับการวิ่งได้เลย",
    meetra: "บริการแปลภาษาแบบเรียลไทม์และการตอบสนองด้วย AI สำหรับการสื่อสารระดับโลกที่ราบรื่น",
    komjirakMakers:
      "สัมผัสความสนุกของการสร้างสรรค์ด้วย AI! สร้างสติกเกอร์ของคุณเอง การ์ตูนชีวิต และเพลิดเพลินกับการลองเสื้อผ้าเสมือนจริงด้วยปลายนิ้ว",
  },
}
