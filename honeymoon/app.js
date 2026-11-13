'use strict';
const $ = (selector) => document.querySelector(selector);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const searchUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const routeUrl = (destination,origin='') => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}${origin ? '&origin='+encodeURIComponent(origin):''}`;
const external = (url,label,extra='') => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" ${extra}>${label}</a>`;
function readStore(key,fallback){try{const v=JSON.parse(localStorage.getItem(key));return v===null?fallback:v;}catch{return fallback;}}
let saved = new Set(readStore('our-november-saved',[]).filter?.(id=>TRIP.restaurants.some(r=>r.id===id)) || []);
let checks = readStore('our-november-checks',{}); if(!checks || typeof checks!=='object') checks={};
let filter='all';
let toastTimer;
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2200);}
function persist(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{toast('브라우저 저장을 사용할 수 없어 이번 화면에서만 유지돼요.');}}
const weekdays=['일','월','화','수','목','금','토'];
const dateObj=(s)=>new Date(s+'T12:00:00Z');
const weekday=(s)=>weekdays[dateObj(s).getUTCDay()];
const sydneyDate = () => new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
function closestDate(){const today=sydneyDate();return TRIP.days.find(d=>d.date>=today)?.date || TRIP.days.at(-1).date;}
let selectedDate=closestDate();
let currentMapId='shangri';
const mapPlaces={...TRIP.places,...Object.fromEntries(TRIP.restaurants.map(r=>[r.id,{...r,type:'식당'}]))};
function badge(status){const cls=status==='확정'?'confirmed':(/미예약|확인 필요|현장 결정/.test(status)?'pending':'idea');return `<span class="status ${cls}">${esc(status)}</span>`;}
function renderCalendar(){
  $('#calendar').innerHTML=TRIP.days.map(d=>`<button class="date-tile ${d.region}" data-date="${d.date}" aria-pressed="${d.date===selectedDate}" aria-label="11월 ${Number(d.date.slice(-2))}일 ${weekday(d.date)}요일, ${esc(d.city)}, ${esc(d.short)}"><span class="tile-date"><strong>${d.date.slice(-2)}</strong><span>${weekday(d.date)} ${d.region==='transit'?'↗':''}</span></span><span class="tile-city">${d.city}</span><span class="tile-title">${d.short}</span></button>`).join('')+'<div class="calendar-end" aria-hidden="true">with you.<span>OUR NOVEMBER</span></div>';
  $('#day-strip').innerHTML=TRIP.days.map(d=>`<button class="day-chip" data-date="${d.date}" aria-label="11월 ${Number(d.date.slice(-2))}일 ${weekday(d.date)}요일" aria-pressed="${d.date===selectedDate}"><span>${weekday(d.date)}</span><strong>${d.date.slice(-2)}</strong></button>`).join('');
}
function selectDay(date,scroll=false){
  if(!TRIP.days.some(d=>d.date===date)) return;
  selectedDate=date;
  document.querySelectorAll('[data-date]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.date===date)));
  const d=TRIP.days.find(d=>d.date===date);
  const dayIndex=TRIP.days.indexOf(d)+1;
  const stay=d.stay?TRIP.places[d.stay]:null;
  const nearby=d.nearby.map(id=>TRIP.restaurants.find(r=>r.id===id));
  const routeIds=date==='2026-11-24'?['zara','watsons','bondi']:date==='2026-11-26'?['zara','university','cathedral']:date==='2026-11-25'?['zara','rydges']:[];
  let route='';
  if(routeIds.length){const ids=routeIds.map(id=>mapPlaces[id].query);let url=routeUrl(ids.at(-1),ids[0]);if(ids.length>2)url+='&waypoints='+encodeURIComponent(ids.slice(1,-1).join('|'));route=external(url,'이날 동선 구글맵 ↗');}
  $('#day-detail').innerHTML=`<article class="day-panel"><div class="day-main"><p class="day-kicker">11월 ${Number(date.slice(-2))}일 ${weekday(date)}요일 · ${dayIndex} / 13 · ${d.city}</p><h3>${d.title}</h3><p class="day-desc">${d.desc}</p><ol class="timeline">${d.events.map(e=>`<li><time>${e[0]}</time><div><span class="event-title">${e[1]} ${badge(e[3])}</span><span class="event-note">${e[2]}</span></div></li>`).join('')}</ol></div><aside class="day-aside"><p class="aside-label">TONIGHT, WE STAY</p><p class="stay-name">${stay?stay.name:date==='2026-11-27'?'귀국편 기내':'집으로'}</p>${stay?`<div class="card-links">${external(searchUrl(stay.query),'숙소 구글맵 ↗')}<button data-map="${d.stay}">지도에서 보기</button></div>`:''}<div class="day-alert"><strong>기억해 둘 것</strong>${d.alert}</div>${route?`<div class="card-links">${route}</div><p class="fine-print">경로는 참고용이며 실제 이동수단은 구글맵에서 선택해요.</p>`:''}${nearby.length?`<p class="aside-label" style="margin-top:25px">NEARBY TABLES · 선택 후보</p>${nearby.map(r=>`<a class="nearby-mini" href="#places" data-focus-place="${r.id}">${r.name} ↗<span>${r.budget} · ${r.category==='brunch'?'브런치':r.category==='seafood'?'해산물':'고기'}</span></a>`).join('')}`:''}</aside></article>`;
  const chip=$(`#day-strip [data-date="${date}"]`);if(chip && chip.offsetLeft>$('#day-strip').clientWidth) $('#day-strip').scrollLeft=chip.offsetLeft-$('#day-strip').offsetLeft-10;
  if(scroll) $('.day-section').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderRestaurants(){
  $('#saved-count').textContent=saved.size;
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
  $('#saved-toggle').setAttribute('aria-pressed',String(filter==='saved'));
  const list=TRIP.restaurants.filter(r=>filter==='all'||(filter==='saved'?saved.has(r.id):r.category===filter));
  $('#restaurant-grid').innerHTML=list.length?list.map(r=>`<article class="restaurant-card" id="place-${r.id}"><div class="card-art ${r.category}"><span class="art-number">0${TRIP.restaurants.indexOf(r)+1}</span><span class="art-label">${r.label}</span><button class="save-place" data-save="${r.id}" aria-pressed="${saved.has(r.id)}" aria-label="${esc(r.name)} 저장">${saved.has(r.id)?'♥':'♡'}</button></div><div class="card-body"><p class="card-area">${r.area}</p><h3>${r.name}</h3><div class="rating">★ ${r.rating} <span>· 구글 후기 ${r.reviews} · 참고값</span></div><p class="card-desc">${r.desc}</p><p class="menu-pick"><strong>ON OUR TABLE</strong>${r.menu}</p><p class="card-price">${r.budget}</p><p class="card-drink">${r.drink}</p><details><summary style="font-size:11px;cursor:pointer;margin-bottom:12px">방문 메모</summary><p class="card-desc">${r.detail}</p></details><div class="card-links">${external(searchUrl(r.query),'구글맵 ↗')}${external(r.url,'공식 메뉴 ↗')}<button data-map="${r.id}">지도에서 보기</button></div></div></article>`).join(''):'<div class="empty-state">마음에 드는 식당의 ♡를 눌러 모아 두세요.</div>';
}
function setMap(id,scroll=false){
  if(!mapPlaces[id]) return;
  currentMapId=id;const p=mapPlaces[id];$('#map-place').value=id;
  $('#google-map').src=`https://maps.google.com/maps?q=${encodeURIComponent(p.query)}&z=14&output=embed`;
  const origin=p.origin?mapPlaces[p.origin]:null;
  $('#map-detail').innerHTML=`<h3>${p.name}</h3><p class="map-address">${p.address}</p><div class="map-actions">${external(searchUrl(p.query),'구글맵에서 보기 ↗')}${external(routeUrl(p.query),'현재 위치에서 길찾기 ↗')}${origin?external(routeUrl(p.query,origin.query),`${origin.name}에서 길찾기 ↗`):''}</div>`;
  if(scroll) $('#map').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderStays(){ $('#stay-grid').innerHTML=TRIP.stays.map(s=>`<article class="stay-card"><span class="stay-dates">${s.dates} · ${s.nights}</span><h3>${s.name}</h3><p>${s.note}</p><div class="card-links">${external(searchUrl(TRIP.places[s.id].query),'구글맵 ↗')}<button data-map="${s.id}">지도에서 보기</button></div></article>`).join(''); }
function updateChecks(){const n=TRIP.checklist.filter(c=>checks[c[0]]).length;$('#check-progress').textContent=`${n} / ${TRIP.checklist.length}`;$('#check-bar').style.width=`${n/TRIP.checklist.length*100}%`;}
function renderChecklist(){ $('#checklist-items').innerHTML=TRIP.checklist.map(c=>`<label class="check-item"><input type="checkbox" data-check="${c[0]}" ${checks[c[0]]?'checked':''}><span><strong>${c[1]}</strong><span>${c[2]}</span></span></label>`).join('');updateChecks(); }
function renderCountdown(){const now=new Date();const seoul=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);const days=Math.round((Date.parse('2026-11-16')-Date.parse(seoul))/86400000);$('#countdown').textContent=days>0?`D–${days}`:days===0?'D–DAY':seoul<='2026-11-28'?'ON TRIP':'WITH YOU';$('#countdown-label').textContent=days>0?'출발까지':days===0?'오늘 떠나요':seoul<='2026-11-28'?'여행하는 중':'우리의 여행 기록';}
document.addEventListener('click',e=>{
  const day=e.target.closest('[data-date]');if(day){selectDay(day.dataset.date,day.classList.contains('date-tile'));return;}
  const f=e.target.closest('[data-filter]');if(f){filter=f.dataset.filter;renderRestaurants();return;}
  const save=e.target.closest('[data-save]');if(save){const id=save.dataset.save;saved.has(id)?saved.delete(id):saved.add(id);persist('our-november-saved',[...saved]);renderRestaurants();toast(saved.has(id)?'갈 만한 곳에 저장했어요.':'저장 목록에서 뺐어요.');return;}
  const m=e.target.closest('[data-map]');if(m){setMap(m.dataset.map,true);return;}
  const focus=e.target.closest('[data-focus-place]');if(focus){e.preventDefault();filter='all';renderRestaurants();$(`#place-${focus.dataset.focusPlace}`).scrollIntoView({behavior:'smooth',block:'center'});}
});
$('#map-place').addEventListener('change',e=>setMap(e.target.value));
$('#today-button').addEventListener('click',()=>selectDay(closestDate(),true));
$('#saved-toggle').addEventListener('click',()=>{filter=filter==='saved'?'all':'saved';renderRestaurants();$('#places').scrollIntoView({behavior:'smooth'});});
$('#checklist-items').addEventListener('change',e=>{if(e.target.dataset.check){checks[e.target.dataset.check]=e.target.checked;persist('our-november-checks',checks);updateChecks();}});
$('#map-place').innerHTML=['숙소','식당','관광','투어 집결','공항'].map(type=>`<optgroup label="${type}">${Object.entries(mapPlaces).filter(([,p])=>p.type===type).map(([id,p])=>`<option value="${id}">${p.name}</option>`).join('')}</optgroup>`).join('');
renderCalendar();selectDay(selectedDate);renderRestaurants();renderStays();renderChecklist();renderCountdown();setMap(currentMapId);
