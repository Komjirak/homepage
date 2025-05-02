이 헤더 컴포넌트는 Tailwind CSS를 사용합니다. 
프로젝트에 Tailwind CSS가 설치되어 있어야 합니다.

또한 다음 폰트를 사용하면 좋습니다:
- Poppins (Google Fonts)

Tailwind CSS가 없는 경우, 다음 CSS 클래스들을 직접 정의해야 합니다:
- fixed, top-0, left-0, right-0, z-50
- bg-opacity-80, backdrop-blur-md
- flex, items-center, justify-between
- gap-2, px-4, py-2
- rounded-lg, rounded-xl
- transition-all, hover:bg-opacity-70
- 등등

이 컴포넌트는 최소한의 외부 의존성을 가지도록 설계되었습니다.
