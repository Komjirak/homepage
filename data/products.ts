export type Product = {
  id: string
  name: string
  icon: string
  url: string
  platforms: {
    ios?: string
    android?: string
    mobileWeb?: string
    appInToss?: string
  }
}

export const products: Product[] = [
  {
    id: "colorfulDiary",
    name: "Colorful Diary",
    icon: "/images/diary_icon.png",
    url: "https://colorfuldiary.komjirak.studio/",
    platforms: {
      ios: "https://apps.apple.com/us/app/colorful-diary-your-day/id6670740993",
      android: "https://play.google.com/store/apps/details?id=com.diary.komjirak",
      mobileWeb: "https://colorfuldiary.komjirak.studio/",
    },
  },
  {
    id: "tastory",
    name: "Tastory",
    icon: "/images/tastory_icon.png",
    url: "https://tastory.komjirak.studio",
    platforms: {
      mobileWeb: "https://tastory.komjirak.studio",
    },
  },
  {
    id: "memoryGame",
    name: "Memory Game",
    icon: "/images/memory-game_original.png",
    url: "https://memory-game.komjirak.studio",
    platforms: {
      mobileWeb: "https://memory-game.komjirak.studio",
    },
  },
  {
    id: "loveSmash",
    name: "LOVE Smash",
    icon: "/images/lovesmash.png",
    url: "https://lovesmash.komjirak.studio",
    platforms: {
      mobileWeb: "https://lovesmash.komjirak.studio",
    },
  },
  {
    id: "smashYou",
    name: "Smash You",
    icon: "/images/smashyou.png",
    url: "https://smashyou.komjirak.studio",
    platforms: {
      mobileWeb: "https://smashyou.komjirak.studio",
    },
  },
  {
    id: "dramaWhenLifeGivesYouTangerines",
    name: "When Life Gives You Tangerines",
    icon: "/images/whenlifegives.jpeg",
    url: "https://drama-pokssak.komjirak.studio/",
    platforms: {
      mobileWeb: "https://drama-pokssak.komjirak.studio/",
    },
  },
  {
    id: "todaysTaroCard",
    name: "Today's Tarot Cards",
    icon: "/images/taro.png",
    url: "https://today-tarot-cards.komjirak.studio",
    platforms: {
      mobileWeb: "https://today-tarot-cards.komjirak.studio",
    },
  },
  {
    id: "duckjilEssential",
    name: "Duckjil Essential",
    icon: "/images/duckjil_icon.png",
    url: "https://duckjil.komjirak.studio",
    platforms: {
      mobileWeb: "https://duckjil.komjirak.studio",
    },
  },
  {
    id: "wordBingo",
    name: "Word-Bingo",
    icon: "/images/wordbingo.png",
    url: "https://word-bingo.komjirak.studio",
    platforms: {
      mobileWeb: "https://word-bingo.komjirak.studio",
    },
  },
  {
    id: "runnersBadge",
    name: "Runners' Badge",
    icon: "/images/runner_homescreen_icon_rounded.png",
    url: "https://runners.komjirak.studio/",
    platforms: {
      mobileWeb: "https://runners.komjirak.studio/",
    },
  },
  {
    id: "meetra",
    name: "meetra",
    icon: "/images/meetra.jpg",
    url: "https://meetra.komjirak.studio",
    platforms: {
      mobileWeb: "https://meetra.komjirak.studio",
    },
  },
  {
    id: "komjirakMakers",
    name: "Komjirak Makers",
    icon: "/images/komjirakmakers.png",
    url: "https://makers.komjirak.studio",
    platforms: {
      mobileWeb: "https://makers.komjirak.studio",
    },
  },
  {
    id: "photoPuzzle",
    name: "Photo Puzzle",
    icon: "/images/puzzlemaster.png",
    url: "https://minion.toss.im/Fcd6CN1m",
    platforms: {
      appInToss: "https://minion.toss.im/Fcd6CN1m",
    },
  },
  {
    id: "memoryGameToss",
    name: "Memory Game",
    icon: "/images/memorygame.png",
    url: "https://minion.toss.im/Bd3uvFbB",
    platforms: {
      appInToss: "https://minion.toss.im/Bd3uvFbB",
    },
  },
  {
    id: "officeSurvival",
    name: "Office Survival",
    icon: "/images/office-survival.png",
    url: "http://office-survival.komjirak.studio/",
    platforms: {
      mobileWeb: "http://office-survival.komjirak.studio/",
    },
  },
]
