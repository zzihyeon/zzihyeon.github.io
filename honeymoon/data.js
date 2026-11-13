/* PDF / 최신 확인사항 기준: 2026-11-13. 예약번호와 개인 증빙은 수록하지 않습니다. */
const TRIP = {
  updated: '2026-11-13',
  places: {
    quest:{name:'Quest Mascot',query:'Quest Mascot Sydney Australia',address:'Mascot, Sydney',type:'숙소'},
    beach:{name:'Beach Club',query:'Beach Club Hamilton Island Australia',address:'Hamilton Island, Queensland',type:'숙소'},
    wahi:{name:'Whitsunday Apartments',query:'Whitsunday Apartments Hamilton Island',address:'Hamilton Island, Queensland',type:'숙소'},
    shangri:{name:'Shangri-La Sydney',query:'Shangri-La Sydney 176 Cumberland Street',address:'176 Cumberland St, The Rocks',type:'숙소'},
    zara:{name:'Zara Tower',query:'Zara Tower 61-65 Wentworth Avenue Sydney',address:'61–65 Wentworth Ave, Sydney',type:'숙소'},
    watsons:{name:'Watsons Bay',query:'Watsons Bay Sydney Australia',address:'Watsons Bay, Sydney',type:'관광'},
    bondi:{name:'Bondi Beach',query:'Bondi Beach Sydney Australia',address:'Bondi Beach, Sydney',type:'관광'},
    icebergs:{name:'Bondi Icebergs Pool',query:'Bondi Icebergs Pool Sydney',address:'1 Notts Ave, Bondi Beach',type:'관광'},
    rydges:{name:'Rydges World Square',query:'Rydges World Square 389 Pitt Street Sydney',address:'389 Pitt St, Sydney · 정확한 집결 출입구 별도 확인',type:'투어 집결'},
    university:{name:'University of Sydney',query:'University of Sydney Quadrangle Australia',address:'Camperdown, Sydney',type:'관광'},
    cathedral:{name:'St Mary’s Cathedral',query:'St Marys Cathedral Sydney Australia',address:'St Mary’s Rd, Sydney',type:'관광'},
    airport:{name:'Sydney Airport · T1',query:'Sydney International Airport Terminal 1',address:'International Terminal 1, Sydney Airport',type:'공항'}
  },
  stays:[
    {id:'quest',dates:'11.16 → 11.17',nights:'1박',name:'Quest Mascot',note:'시드니 도착 후 공항 근처에서 하룻밤. 다음 날 국내선 T2로 이동해요. 체크아웃과 공항 이동 확인 필요.'},
    {id:'beach',dates:'11.17 → 11.20',nights:'3박',name:'Beach Club',note:'조식 포함 · 체크인 14:00 / 체크아웃 10:00. 공항 픽업 편명을 VA1283으로 정정·재확인해야 해요.'},
    {id:'wahi',dates:'11.20 → 11.22',nights:'2박',name:'Whitsunday Apartments',note:'취사 중심 · 체크아웃 10:00. 체크인 시간·짐 보관과 숙소 간 이동을 확인해요.'},
    {id:'shangri',dates:'11.22 → 11.24',nights:'2박',name:'Shangri-La Sydney',note:'조식 불포함 · 체크아웃 11:00. 11/23 스냅 09:00~10:00, 저녁 Altitude는 예상·미예약.'},
    {id:'zara',dates:'11.24 → 11.27',nights:'3박',name:'Zara Tower',note:'체크인 14:00 / 체크아웃 10:00 · 취사 중심. 체크인 전·체크아웃 후 짐 보관 가능 여부를 확인해요.'}
  ],
  restaurants:[
    {id:'fish',name:'Fish at the Rocks',area:'THE ROCKS · 샹그릴라 도보 약 10–15분',category:'seafood',label:'LOCAL SEAFOOD',rating:'약 4.6',reviews:'약 1,400개',query:'Fish at the Rocks 29 Kent Street Millers Point Sydney',address:'29 Kent St, Millers Point',desc:'한국에서 흔히 접하기 어려운 모턴베이 버그와 시드니 록 오이스터. 현지 갑각류를 먹고 싶은 저녁의 첫 번째 후보.',menu:'모턴베이 버그 구이 A$98 + 시드니 록 오이스터 6개 A$40',budget:'2인 약 A$190–210',drink:'사이드 + 와인 각 한 잔 포함 예상 · 점심 / 저녁',detail:'굴은 Natural로. 버그는 케이준 갈릭버터 조리예요. 코코넛커리 소스 생선은 취향상 제외하고, 구이 위주로 골라요.',url:'https://fishattherocks.com.au/menus/',review:'https://restaurantguru.com/Fish-At-The-Rocks-Sydney',origin:'shangri'},
    {id:'bistecca',name:'BISTECCA',area:'SYDNEY CBD · 샹그릴라 도보 약 10–15분',category:'meat',label:'CHARCOAL & WINE',rating:'약 4.7',reviews:'약 2,200개',query:'BISTECCA 3 Dalley Street Sydney',address:'3 Dalley St, Sydney',desc:'두꺼운 티본을 중량으로 골라 숯불에 구워 나눠 먹는 저녁. 좋은 고기와 와인을 중심에 두고 싶은 날.',menu:'숯불 티본 + 사이드 2개 · 공개가 100g당 A$21',budget:'2인 약 A$250–310',drink:'와인 각 한 잔 포함 예상 · 와인 / 칵테일 / 맥주',detail:'800g~1kg 주문 가능 여부를 확인해요. 뼈 포함 중량이며 식사 중 휴대전화 보관 정책이 있어 촬영을 원하면 미리 확인하세요.',url:'https://www.liquidandlarder.com.au/venues/bistecca/menus/',review:'https://restaurantguru.com/Bistecca-Sydney',origin:'shangri'},
    {id:'sixhead',name:'6HEAD',area:'THE ROCKS · 샹그릴라 도보 약 10–15분',category:'meat',label:'STEAK BY THE HARBOUR',rating:'약 4.5–4.6',reviews:'3,000개 이상',query:'6HEAD Sydney Campbells Stores The Rocks',address:'Campbell’s Stores, The Rocks',desc:'숙성 스테이크와 해산물 전채, 그리고 하버 전망. 둘만의 특별한 식사와 시드니 풍경을 함께 남기고 싶은 날.',menu:'숙성 스테이크 + 굴 또는 해산물 전채',budget:'2인 약 A$240–340',drink:'각자 술 한 잔 포함 예상 · 와인 / 칵테일 / 맥주',detail:'BISTECCA와 둘 중 한 곳을 고르면 고기 메뉴가 덜 겹쳐요. 전망 좌석은 예약 때 요청하되 보장되지는 않아요.',url:'https://6head.com.au/sydney-restaurant/',review:'https://beststeak.com.au/restaurant/6head-sydney-the-rocks',origin:'shangri'},
    {id:'macelleria',name:'Macelleria Bondi',area:'BONDI BEACH · 11/24 해변 동선',category:'meat',label:'BUTCHER TO TABLE',rating:'약 4.6',reviews:'2,000개 이상',query:'Macelleria Bondi Beach 180 Campbell Parade',address:'G09/180 Campbell Parade, Bondi Beach',desc:'카운터에서 고기를 고르는 정육점형 식당. 본다이에서 호주산 숙성 소고기와 양고기를 한 끼에 비교해 먹기.',menu:'Scotch Fillet 250g A$49.90 + Lamb Rump 250g A$32.90',budget:'2인 약 A$100–130',drink:'사이드 포함 예상 · 술 별도 · 점심 / 저녁',detail:'11/24 본다이 점심에 연결하기 좋아요. 공식 안내상 예약 없이 방문 가능하며 주류 메뉴도 있어요.',url:'https://macelleriabondi.com.au/menus/all-day-menu/',review:'https://menumap.com.au/venue/macelleria-bondi-beach',origin:'bondi'},
    {id:'apollo',name:'The Apollo',area:'POTTS POINT · 별도 이동 필요',category:'meat',label:'LAMB, SLOWLY ROASTED',rating:'약 4.6',reviews:'약 2,500개',query:'The Apollo 44 Macleay Street Potts Point Sydney',address:'44 Macleay St, Potts Point',desc:'오븐에 오래 구운 양 어깨살과 문어구이. 익숙한 양꼬치·양갈비에서 벗어나 다른 방식의 양고기를 먹고 싶은 날.',menu:'양 어깨살 소 A$64 / 대 A$120 + 문어 A$39',budget:'2인 약 A$160–220',drink:'주문량·술에 따라 변동 · 그리스식 식사 / 주류 가능',detail:'숙소 바로 근처는 아니에요. 별도 외식으로 선택하고 점심 영업 요일은 예약 화면에서 확인해요.',url:'https://www.orkhestra.com.au/venues/the-apollo-sydney/menu',review:'https://mealfinder.com.au/providers/?cuisine_type=greek&state=qld',origin:'zara'},
    {id:'joe',name:'Joe Black Cafe',area:'SYDNEY CBD · 자라타워 도보 약 3–5분',category:'brunch',label:'A SLOW MORNING',rating:'약 4.7',reviews:'1,100개 이상',query:'Joe Black Cafe 27 Commonwealth Street Sydney',address:'27 Commonwealth St, Sydney',desc:'숙소 가까이에서 여유롭게 시작하는 아침. 특별한 희소 메뉴보다는 든든한 브런치와 커피를 위한 후보.',menu:'훈제연어·베이컨 에그베네딕트 / 로스트비프 샌드위치',budget:'2인 약 A$55–75',drink:'커피 포함 예상 · 아침 / 브런치',detail:'자라타워 숙박 중 11/26~27 아침에 연결해요. 영업 시간과 당일 메뉴는 방문 전에 확인하세요.',url:'https://joeblackcafe.com.au/',review:'https://restaurantguru.com/Joe-Black-Sydney',origin:'zara'}
  ],
  days:[
    {date:'2026-11-16',city:'시드니',region:'transit',short:'둘만의 여행 시작',title:'비행기를 타고, 여름 쪽으로',desc:'인천에서 시드니로. 오늘은 도착하고 푹 쉬는 날.',stay:'quest',alert:'시드니 국제선 도착은 T1, 내일 국내선 출발은 T2예요. 숙소 왕복 이동과 체크아웃 시간을 확인해요.',events:[['08:00','인천 출발 · KE401','인천 T2 출발, 시드니로 이동.','확정'],['20:05','시드니 도착','국제선 T1 입국 후 Quest Mascot으로 이동.','확정'],['도착 후','체크인과 휴식','다음 날 비행을 위해 짐을 정리하고 일찍 쉬어요.','예상']],nearby:[]},
    {date:'2026-11-17',city:'해밀턴',region:'island',short:'섬으로 가는 날',title:'바다가 가까운 방에 도착하면',desc:'해밀턴 아일랜드로 이동, 비치클럽에서 첫 저녁.',stay:'beach',alert:'호텔 도착 안내의 편명을 VA1283으로 정정하고 2명 공항 픽업을 재확인해야 해요.',events:[['오전','Quest Mascot 체크아웃','시드니 국내선 T2로 이동. 공항 11:00 도착을 여유 목표로 둬요.','확인 필요'],['12:40','시드니 출발 · VA1283','14:10 해밀턴 도착. 각 지역 현지 시각이에요.','확정'],['14:10','호텔 픽업과 체크인','공항 연결 통로 오른쪽 Beach Club 팻말 직원을 찾아요. 탑승권 보관.','확인 필요'],['18:00 희망','Ocean Table','물가 테이블·해산물 공유형 2코스·샴페인 각 한 잔. 2인 A$400.','미예약']],nearby:[]},
    {date:'2026-11-18',city:'해밀턴',region:'island',short:'아무것도 서두르지 않기',title:'느린 아침, 물빛의 오후',desc:'비치클럽에서 쉬고 수영하고, 오늘은 고기 중심의 저녁.',stay:'beach',alert:'비치클럽 조식 포함. 일반 디너는 예약 전 메뉴 추가금·취소 조건을 확인해요.',events:[['아침','조식과 산책','서두르지 않고 호텔에서 하루를 시작해요.','예상'],['낮','수영·휴식','점심은 현장에서 가볍게 결정해요.','자유'],['18:00 희망','Beach Club 일반 디너','3코스 A$138/인, 2인 A$276 기본. 오리·양고기 등으로 첫날과 다르게 선택.','미예약']],nearby:[]},
    {date:'2026-11-19',city:'해밀턴',region:'island',short:'한 번 더, 섬의 하루',title:'일정표를 조금 비워 두는 날',desc:'비치클럽에서 보내는 마지막 밤. 식사는 현지 상황에 맞춰.',stay:'beach',alert:'기존 식사 예상안에 coca chu가 남아 있지만 동남아 음식 제외 취향과 달라 재선택이 필요해요. 예약된 식사는 아니에요.',events:[['아침','호텔 조식','조식 후 해변과 호텔에서 휴식.','예상'],['낮','둘만의 자유 시간','별도 투어를 더하지 않고 섬에서 쉬어요.','자유'],['저녁','저녁 식사 재선택','기존 coca chu 예상안은 취향 재검토 대상으로 표시했어요.','확인 필요']],nearby:[]},
    {date:'2026-11-20',city:'해밀턴',region:'island',short:'짐을 옮기고, 다시 쉬기',title:'새 숙소에서 이어지는 섬의 시간',desc:'비치클럽에서 휘트선데이 아파트로 이동하는 날.',stay:'wahi',alert:'아파트 체크인 시간과 중간 짐 보관·숙소 간 짐 이동 방법은 확인이 필요해요.',events:[['10:00','Beach Club 체크아웃','Whitsunday Apartments로 짐 이동.','확정'],['낮','짐 보관과 체크인','입실 시간 전에는 짐 보관을 확인해요.','확인 필요'],['오후','장보기와 휴식','취사 중심으로 지내고 내일 투어 준비.','자유']],nearby:[]},
    {date:'2026-11-21',city:'해밀턴',region:'island',short:'하늘에서 만나는 리프',title:'하늘에서 바다로, 오늘의 하이라이트',desc:'헬기로 리프에 가고 크루즈로 돌아오는 하루.',stay:'wahi',alert:'Fly/Cruise는 확정, 체험 다이빙은 별도 미예약이에요. 다이빙 조건·종료 시간과 다음 날 비행 간격은 운영사 확인이 필요해요.',events:[['11:20','아파트에서 대기','정확한 픽업 대기 지점은 프런트에 확인.','확정'],['11:30','호텔 픽업','Whitsunday Apartments에서 출발.','확정'],['11:45','헬기 출발 · Fly/Cruise','리프월드 방문. 다이빙 추가는 별도 절차예요.','확정'],['15:00','리프에서 크루즈 출발','해밀턴 도착 시각과 마리나에서 숙소 이동은 별도 확인.','확정']],nearby:[]},
    {date:'2026-11-22',city:'시드니',region:'transit',short:'다시, 도시의 불빛',title:'섬의 오후를 지나 시드니의 밤으로',desc:'오늘은 이동에 여유를 두고, 체크인 후 간단한 식사.',stay:'shangri',alert:'호텔 체크인과 짐 보관, 아파트에서 공항으로 가는 이동편을 확인해요. 오늘 저녁은 시간 지정 예약을 두지 않아요.',events:[['10:00','아파트 체크아웃','짐 보관 후 공항 이동. 공항 13:00 도착을 여유 목표로.','확정'],['14:50','해밀턴 출발 · VA1282','시드니가 해밀턴보다 한 시간 빨라요.','확정'],['18:10','시드니 T2 도착','샹그릴라로 이동·체크인.','확정'],['체크인 후','간단한 저녁과 휴식','늦은 도착에 맞춰 현장에서 결정해요.','자유']],nearby:['fish','bistecca']},
    {date:'2026-11-23',city:'시드니',region:'city',short:'둘의 모습을 남기는 날',title:'사진 속에 남겨 둘, 시드니의 아침',desc:'한 시간의 신혼여행 스냅, 그 뒤로는 자유롭게.',stay:'shangri',alert:'촬영 집합 장소·작가 연락처·우천 조건은 확인 필요. 저녁 Altitude는 예상안이며 아직 예약하지 않았어요.',events:[['촬영 전','준비와 집합 장소 이동','호텔에서 준비 시간과 이동 여유 확보.','확인 필요'],['09:00–10:00','신혼여행 스냅','사용자 확인 일정 · 시드니 현지 시각.','확정'],['낮','식사·휴식·자유 일정','더록스 주변 맛집을 후보로 둬요.','자유'],['저녁','Altitude 예상안','2인 2코스 A$256부터 / 3코스 A$296부터. 음료·추가금 별도.','미예약']],nearby:['fish','bistecca','sixhead']},
    {date:'2026-11-24',city:'시드니',region:'city',short:'해변 따라 걷는 오후',title:'왓슨스베이에서 본다이까지',desc:'숙소를 옮기고, 바다를 따라 시드니를 만나기.',stay:'zara',alert:'Zara Tower 체크인 전 짐 보관 확인이 먼저예요. 아이스버그 수영은 날씨·운영 상태를 보고 현장에서 결정해요. 이동 순서는 제안이에요.',events:[['11:00','샹그릴라 체크아웃','Zara Tower로 짐을 옮겨요.','확정'],['짐 보관 후','왓슨스베이 → 본다이','이동수단·출발 시각 미정. 해변과 전망을 여유롭게.','예상'],['오후','아이스버그 전망 또는 수영','수영복·작은 타월·갈아입을 옷 준비.','현장 결정'],['14:00 이후','Zara Tower 체크인','관광 후 입실도 가능. 저녁은 취사 중심.','확정']],nearby:['macelleria']},
    {date:'2026-11-25',city:'시드니',region:'city',short:'블루마운틴의 푸른 겹',title:'도시를 벗어나, 산으로',desc:'놀러와시드니 블루마운틴 투어.',stay:'zara',alert:'07:40은 출발 시각이 아닌 집결 마감이에요. 정확한 호텔 출입구·복귀 시간·포함 식사·준비물은 바우처에서 확인해요.',events:[['07:40까지','리지스 월드 스퀘어 호텔 집결','숙소 출발 시각은 정확한 집결 장소 확인 후 정해요.','확정'],['낮','블루마운틴 투어','운영사: 놀러와시드니. 세부 코스는 바우처 기준.','확정'],['복귀 후','숙소에서 편한 저녁','복귀 시각에 맞춰 현장에서 결정.','자유']],nearby:[]},
    {date:'2026-11-26',city:'시드니',region:'city',short:'캠퍼스와 골목 사이',title:'오래된 건물, 새로운 발견',desc:'시드니대학교·성당·시장·쇼핑. 방문 순서는 유연하게.',stay:'zara',alert:'프리마켓 이름은 아직 미정이에요. 목요일 운영 여부를 확인하기 전 특정 시장으로 확정하지 않아요.',events:[['아침','가까운 곳에서 브런치','Joe Black Cafe를 후보로 두어요.','예상'],['낮','시드니대학교','캠퍼스 산책 후 다음 장소로 이동.','예정'],['오후','세인트 메리 대성당','관람은 예식 시간을 배려해요.','예정'],['이후','시장·쇼핑','정확한 시장과 방문 순서 확인 필요.','확인 필요']],nearby:['joe','apollo']},
    {date:'2026-11-27',city:'시드니',region:'transit',short:'마지막 커피, 다음 여행',title:'마지막까지, 조금 더 느리게',desc:'짐을 맡기고 가벼운 자유 일정 후 공항으로.',stay:null,alert:'체크아웃 후 짐 보관과 수령 시간, 공항 이동수단을 확인해요. 18:30은 개인 여유 목표로 항공사 마감과 달라요.',events:[['10:00','Zara Tower 체크아웃','짐 보관 가능 여부 확인.','확정'],['낮','브런치·자유 일정','짐 수령과 공항 이동에 여유를 두어요.','자유'],['18:30 목표','시드니 국제선 T1 도착','교통 상황에 맞춰 출발 시간을 정해요.','목표'],['21:55','귀국편 · KE402','시드니에서 인천으로. 기내 숙박.','확정']],nearby:['joe']},
    {date:'2026-11-28',city:'인천',region:'transit',short:'우리의 여행 한 페이지',title:'잘 다녀왔습니다',desc:'열세 날의 기억을 가지고 집으로.',stay:null,alert:'도착 후에는 푹 쉬고, 사진은 천천히 함께 정리해요.',events:[['06:35','인천 T2 도착','귀국 후 집으로 이동.','확정']],nearby:[]}
  ],
  checklist:[
    ['eta','여권·호주 ETA','두 사람 승인 내역과 영문명 일치, 오프라인 저장.'],
    ['esim','eSIM 구매·설치','여행 기간, 개통 기준, 해밀턴 통신망 확인.'],
    ['insurance','여행자보험','전체 여행 기간과 헬기·다이빙 보장 조건 확인.'],
    ['plug','호주 Type I 어댑터','충전기·충전선·보조배터리와 함께 준비.'],
    ['cards','해외 결제 카드·예비 카드','해외 사용 설정·한도·PIN 확인.'],
    ['outfits','수영복·촬영 의상·겉옷','선크림·선글라스·편한 신발·투어용 소프트백.'],
    ['vouchers','예약자료 오프라인 저장','항공·숙소·투어·스냅 바우처와 연락처.'],
    ['pickup','비치클럽 공항 픽업 재확인','VA1283, 11/17 14:10 도착, 성인 2명.'],
    ['dining','식당 예상안 정리·예약','Ocean Table·일반 디너·Altitude 확인. coca chu는 취향 재검토.'],
    ['tour','투어·촬영 집합 확인','11/23 스냅 장소 / 11/25 호텔 출입구·복귀 시각.'],
    ['bags','숙소 이동과 짐 보관','11/20 숙소 간 이동, 11/24·27 Zara Tower 짐 보관.'],
    ['return','공항 이동 확인','11/22 해밀턴 공항, 11/27 시드니 국제선 T1.']
  ]
};
