export type Product = {
  id: string
  name: string
  icon: string
  url: string
  platforms: {
    ios?: string
    android?: string
    mobileWeb: string
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
    id: "bookclip",
    name: "Bookclip",
    icon: "/images/bookclip_icon.png",
    url: "https://bookclip.komjirak.studio",
    platforms: {
      ios: "https://apps.apple.com/us/app/bookclip/id6670740418",
      android: "https://play.google.com/store/apps/details?id=com.bookclip.komjirak",
      mobileWeb: "https://bookclip.komjirak.studio",
    },
  },
  {
    id: "memoryGame",
    name: "Memory Game",
    icon: "/images/memorygame.png",
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
]
