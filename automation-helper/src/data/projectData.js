export const safetyMessage =
  'AI 분석 결과는 참고용입니다. 복용 전 반드시 약사 또는 의사에게 확인하세요.';

export const documents = [
  {
    number: '01',
    title: '전체 개발 계획',
    file: 'drug_ai_appinventor_plan_01.md',
    summary: '앱 목표, 안전 원칙, 개발 범위 정리',
    stages: ['기획'],
  },
  {
    number: '02',
    title: 'AI 훈련 절차',
    file: 'drug_ai_training_guide_02.md',
    summary: 'Teachable Machine 훈련 방법 안내',
    stages: ['AI 훈련'],
  },
  {
    number: '03',
    title: '화면 및 블록 설계',
    file: 'drug_ai_appinventor_blocks_03.md',
    summary: '앱인벤터 컴포넌트와 블록 구성',
    stages: ['앱인벤터 설계', '블록 구현'],
  },
  {
    number: '04',
    title: 'iPhone 제약과 대안',
    file: 'drug_ai_iphone_companion_04.md',
    summary: 'iOS Companion 제약과 Web API 대안',
    stages: ['iPhone 대응'],
  },
  {
    number: '05',
    title: '개발 및 테스트 체크리스트',
    file: 'drug_ai_development_checklist_05.md',
    summary: '실제 제작과 플랫폼별 테스트 항목',
    stages: ['테스트'],
  },
  {
    number: '06',
    title: '훈련 결과 기록',
    file: 'drug_ai_training_results_06.md',
    summary: '정확도, 실패 사례, 개선 계획 기록',
    stages: ['AI 훈련'],
  },
  {
    number: '07',
    title: '앱인벤터 구현 기록',
    file: 'drug_ai_appinventor_implementation_07.md',
    summary: '실제 Designer와 Blocks 제작 기록',
    stages: ['앱인벤터 설계', '블록 구현'],
  },
  {
    number: '08',
    title: 'Web API 대안 설계',
    file: 'drug_ai_webapi_design_08.md',
    summary: '업로드, 분석 응답, 오류 응답 명세',
    stages: ['iPhone 대응', '테스트'],
  },
  {
    number: '09',
    title: '발표 및 보고서 구성',
    file: 'drug_ai_presentation_report_outline_09.md',
    summary: '슬라이드 목차와 최종 보고서 구조',
    stages: ['발표'],
  },
  {
    number: '10',
    title: '자동화 도우미 앱 계획',
    file: 'drug_ai_automation_app_plan_10.md',
    summary: '문서 기반 도우미 앱의 제품 방향',
    stages: ['기획'],
  },
  {
    number: '11',
    title: '도우미 앱 UI/데이터 설계',
    file: 'drug_ai_automation_helper_ui_design_11.md',
    summary: 'MVP 화면 구조와 정적 데이터 모델',
    stages: ['기획', '앱인벤터 설계'],
  },
];

export const stages = [
  {
    id: 'planning',
    title: '기획',
    status: '준비됨',
    description: '앱 목적, 안전 원칙, 초기 자동화 범위를 확인한다.',
    tasks: ['학습용 앱임을 명시', '안전 문구 고정', '.aia 자동 생성은 보류'],
    documents: ['01', '10', '11'],
  },
  {
    id: 'training',
    title: 'AI 훈련',
    status: '기록 필요',
    description: 'Teachable Machine 클래스와 훈련 결과를 정리한다.',
    tasks: ['3-5개 약 클래스 선정', '알 수 없음 클래스 추가', '정확도와 실패 사례 기록'],
    documents: ['02', '06'],
  },
  {
    id: 'designer',
    title: '앱인벤터 설계',
    status: '진행 필요',
    description: '화면1의 한국어 컴포넌트와 문구를 구성한다.',
    tasks: ['가시 컴포넌트 배치', '비가시 컴포넌트 추가', '주의 문구 항상 표시'],
    documents: ['03', '07', '11'],
  },
  {
    id: 'blocks',
    title: '블록 구현',
    status: '진행 필요',
    description: '사진 입력, AI 분석, 결과 표시 흐름을 블록으로 만든다.',
    tasks: ['사진 촬영 블록', '사진 선택 블록', '분석 전 사진 여부 확인', '신뢰도 기준 결과 표시'],
    documents: ['03', '07'],
  },
  {
    id: 'iphone',
    title: 'iPhone 대응',
    status: '검토 필요',
    description: 'iPhone Companion 제약을 확인하고 Web API 대안을 준비한다.',
    tasks: ['확장 미지원 여부 확인', 'Web 컴포넌트 요청 검토', 'WebViewer 대안 기록'],
    documents: ['04', '08'],
  },
  {
    id: 'testing',
    title: '테스트',
    status: '기록 필요',
    description: 'Android, iPhone, Web API 테스트 결과를 표로 남긴다.',
    tasks: ['Android Companion 테스트', 'iPhone Companion 테스트', '오류 응답 처리 확인'],
    documents: ['05', '08'],
  },
  {
    id: 'presentation',
    title: '발표',
    status: '준비됨',
    description: '발표 목차, 시연 순서, 예상 질문을 준비한다.',
    tasks: ['12장 슬라이드 구성 확인', '시연 순서 연습', '안전성과 한계 설명'],
    documents: ['09'],
  },
];

export const components = [
  { type: 'Screen', name: '화면1', role: '전체 화면과 제목 설정', visible: true },
  { type: 'VerticalArrangement', name: '전체배치', role: '화면 요소를 세로로 정렬', visible: true },
  { type: 'Label', name: '제목라벨', role: '앱 이름 표시', visible: true },
  { type: 'Image', name: '사진이미지', role: '촬영 또는 선택한 약 사진 표시', visible: true },
  { type: 'Button', name: '사진촬영버튼', role: '카메라 실행', visible: true },
  { type: 'ImagePicker', name: '이미지선택기1', role: '갤러리 사진 선택', visible: true },
  { type: 'Button', name: '분석하기버튼', role: 'AI 분석 실행', visible: true },
  { type: 'Label', name: '결과라벨', role: '예상 약 종류 표시', visible: true },
  { type: 'Label', name: '신뢰도라벨', role: 'AI 신뢰도 표시', visible: true },
  { type: 'Label', name: '주의문구라벨', role: '전문가 확인 안내', visible: true },
  { type: 'Camera', name: '카메라1', role: '사진 촬영 기능', visible: false },
  { type: 'Notifier', name: '알림창1', role: '오류와 안내 메시지 표시', visible: false },
  { type: 'Web', name: '웹요청1', role: 'Web API 대안 요청', visible: false },
];

export const blocks = [
  ['화면1.Initialize', '초기 문구와 전역 변수를 설정한다.'],
  ['사진촬영버튼.Click', '카메라를 실행한다.'],
  ['카메라1.AfterPicture', '촬영 사진을 저장하고 사진이미지에 표시한다.'],
  ['이미지선택기1.AfterPicking', '선택 사진을 저장하고 분석 가능 상태로 바꾼다.'],
  ['분석하기버튼.Click', '사진 여부를 확인한 뒤 AI 분석 또는 Web API 요청을 실행한다.'],
  ['결과표시하기', '신뢰도 기준에 따라 후보, 판별 불가, 오류 문구를 표시한다.'],
  ['웹요청1.GotText', 'JSON 응답에서 약 이름과 신뢰도를 분리해 표시한다.'],
];

export const checklists = [
  { group: 'Android', item: '사진 촬영 후 사진이미지에 표시되는지 확인' },
  { group: 'Android', item: '사진 없이 분석하면 안내 메시지가 나오는지 확인' },
  { group: 'iPhone', item: 'Companion에서 기본 화면과 한국어 문구가 보이는지 확인' },
  { group: 'iPhone', item: 'AI 확장 포함 프로젝트의 오류 또는 미지원 여부 기록' },
  { group: 'Web API', item: 'GET /health 응답이 정상인지 확인' },
  { group: 'Web API', item: 'POST /analyze 성공 및 오류 JSON 응답 확인' },
  { group: '발표', item: '안전 문구와 전문가 확인 필요성을 설명할 수 있는지 확인' },
];
