# 한 입력기 지원 페이지

iOS용 한 입력기의 공식 지원 페이지입니다.

## 🌐 웹사이트

**지원 URL**: https://HanIME.saturnsky.io

## 📱 한 입력기 소개

한 입력기는 다양한 한글 자판과 영문 레이아웃을 지원하는 iOS 커스텀 키보드입니다.

### 지원 기능

#### 한글 입력 방식 (8가지)
- 천지인
- 천지인+
- 두벌식
- 세벌식 최종
- 단모음
- 단모음 Next
- 베가
- 모토로라

#### 영문 레이아웃 (4가지)
- QWERTY
- Dvorak
- Colemak
- Colemak-DH

#### 편의 기능
- 세로/가로 모드별 맞춤 설정
- 한손 모드 지원 (왼손/오른손)
- 제스처 기반 모드 전환
- 키보드 높이 조절 (80%~110%)
- 햅틱 피드백 (4단계 강도)
- 도깨비불 현상 완벽 지원
- 빠른 언어 전환

## 🔒 개인정보 보호

**한 입력기는 사용자의 개인정보를 일체 수집하지 않습니다.**

- ✅ 모든 설정은 기기에만 저장됩니다
- ✅ 외부 서버로 데이터를 전송하지 않습니다
- ✅ 인터넷 연결 없이 완전히 작동합니다
- ✅ 입력한 내용은 어디에도 저장되지 않습니다

## 🛠 프로젝트 구조

```
HanIMESupport/
├── index.html           # 메인 페이지
├── CNAME               # GitHub Pages 도메인 설정
├── css/
│   └── style.css       # 스타일시트 (반응형, 다크모드 지원)
├── js/
│   └── main.js         # JavaScript 기능
├── images/
│   ├── icon.png        # 앱 아이콘
│   └── app-store-badge.svg
└── README.md           # 프로젝트 설명
```

## 🎨 디자인 특징

- **iOS 디자인 가이드라인 준수**: Apple의 Human Interface Guidelines 따름
- **반응형 디자인**: 모바일/태블릿/데스크톱 모든 기기 지원
- **다크모드 자동 지원**: 시스템 설정에 따라 자동 전환
- **접근성 고려**: ARIA 레이블, 키보드 네비게이션 지원
- **부드러운 애니메이션**: 현대적인 사용자 경험

## 💬 문의 및 지원

### 문의 방법
웹사이트의 문의 폼을 통해 다음과 같은 문의가 가능합니다:

1. **기능 요청**: 새로운 기능 추가 요청
2. **버그 신고**: 문제점 및 오류 신고
3. **일반 문의**: 기타 문의사항

모든 문의는 [Formspree](https://formspree.io)를 통해 `developer@saturnsky.io`로 전달됩니다.

### FAQ
자주 묻는 질문들은 웹사이트의 FAQ 섹션에서 확인할 수 있습니다.

## 🚀 배포 설정

### GitHub Pages 설정
1. GitHub 저장소 Settings > Pages
2. Source: Deploy from a branch (main)
3. Custom domain: `HanIME.saturnsky.io`
4. Enforce HTTPS 활성화

### DNS 설정 (saturnsky.io 도메인)
CNAME 레코드 추가:
- Name: `HanIME`
- Value: `[github-username].github.io`

### Formspree 설정
각 문의 유형별로 별도의 Formspree 폼 ID가 필요합니다:
- 기능 요청: `YOUR_FEATURE_FORM_ID`
- 버그 신고: `YOUR_BUG_FORM_ID`
- 일반 문의: `YOUR_GENERAL_FORM_ID`

## 📋 App Store Connect 설정

### 필수 URL
- **지원 URL**: `https://HanIME.saturnsky.io`
- **개인정보 처리방침 URL**: `https://HanIME.saturnsky.io/#privacy`

### App Store 요구사항 충족
✅ 실제 연락처 정보 제공  
✅ 사용자 지원 방법 안내  
✅ 개인정보 보호 정책 명시  
✅ 앱 기능 및 사용법 설명  
✅ FAQ 제공  

## 🔧 개발 및 유지보수

### 로컬 개발
```bash
# 저장소 클론
git clone https://github.com/[username]/HanIMESupport.git
cd HanIMESupport

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js 사용
npx http-server
```

### 파일 수정 가이드
- **HTML 수정**: `index.html` 편집
- **스타일 수정**: `css/style.css` 편집
- **기능 수정**: `js/main.js` 편집
- **Formspree ID 업데이트**: `index.html`의 form action 속성 수정

## 📞 연락처

- **개발자**: Saturn Sky
- **이메일**: developer@saturnsky.io
- **프로젝트 지원**: https://HanIME.saturnsky.io

---

© 2025 Saturn Sky. All rights reserved.