const events = [
  {id:1,title:'Rooftop Jazz at Golden Hour',category:'Music',day:'28',month:'JUN',time:'Sat · 6:30 PM',place:'Marina Bay · 1.2 km',price:'S$28',people:'18 going',image:'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=85'},
  {id:2,title:'Hawker After Dark',category:'Food',day:'29',month:'JUN',time:'Sun · 5:00 PM',place:'Lau Pa Sat · 2.4 km',price:'Free',people:'42 going',image:'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=85'},
  {id:3,title:'Clay & Calm: Pottery Social',category:'Learning',day:'29',month:'JUN',time:'Sun · 1:00 PM',place:'Tiong Bahru · 3.1 km',price:'S$45',people:'7 spots left',image:'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=85'},
  {id:4,title:'Indie Film Under the Stars',category:'Art',day:'28',month:'JUN',time:'Sat · 8:00 PM',place:'Fort Canning Green · 1.8 km',price:'S$16',people:'31 going',image:'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85'},
  {id:5,title:'Sunrise Cycle & Kopi',category:'Outdoor',day:'29',month:'JUN',time:'Sun · 7:30 AM',place:'East Coast Park · 6.2 km',price:'Free',people:'12 going',image:'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85'},
  {id:6,title:'Analog Dreams: Photo Walk',category:'Art',day:'28',month:'JUN',time:'Sat · 4:00 PM',place:'Kampong Glam · 2.7 km',price:'S$12',people:'9 going',image:'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1000&q=85'}
];

let saved = new Set([1,3]);
let activeCategory = 'All';
const grid = document.querySelector('#eventGrid');
const emptyState = document.querySelector('#emptyState');
const planCount = document.querySelector('#planCount');

function card(event){
  return `<article class="event-card" data-id="${event.id}">
    <div class="event-image" style="background-image:url('${event.image}')">
      <div class="date-badge"><span>${event.month}</span><strong>${event.day}</strong></div>
      <button class="save-button ${saved.has(event.id)?'saved':''}" data-save="${event.id}" aria-label="${saved.has(event.id)?'Remove from':'Save to'} plans">${saved.has(event.id)?'♥':'♡'}</button>
    </div>
    <div class="card-body"><span class="card-tag">${event.category.toUpperCase()}</span><h3>${event.title}</h3>
      <div class="meta"><span>◷</span>${event.time}</div><div class="meta"><span>⌖</span>${event.place}</div>
      <div class="card-footer"><div class="attendees"><span class="mini-avatar">M</span><span class="mini-avatar">J</span><span>${event.people}</span></div><span class="price">${event.price}</span></div>
    </div></article>`;
}

function render(){
  const query = document.querySelector('#searchInput').value.trim().toLowerCase();
  const filtered = events.filter(e => (activeCategory==='All'||e.category===activeCategory) && (`${e.title} ${e.category} ${e.place}`.toLowerCase().includes(query)));
  grid.innerHTML = filtered.map(card).join('');
  emptyState.hidden = filtered.length !== 0;
  planCount.textContent = saved.size;
  renderSaved();
}

function renderSaved(){
  const chosen = events.filter(e=>saved.has(e.id));
  document.querySelector('#savedEvents').innerHTML = chosen.length ? chosen.map(e=>`<div class="saved-item"><div class="saved-thumb" style="background-image:url('${e.image}')"></div><div><h3>${e.title}</h3><p>${e.time}<br>${e.place}</p><a class="calendar-link" href="${calendarUrl(e)}" target="_blank">+ Add to Google Calendar</a></div><button data-remove="${e.id}" aria-label="Remove ${e.title}">×</button></div>`).join('') : '<div class="empty-state"><span>♡</span><h3>No plans yet</h3><p>Save an event and it’ll show up here.</p></div>';
}

function calendarUrl(e){
  const day = e.day.padStart(2,'0');
  const start = `202606${day}T100000Z`, end = `202606${day}T120000Z`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.title)}&dates=${start}/${end}&location=${encodeURIComponent(e.place)}`;
}

function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),1800)}
function openDrawer(){document.querySelector('#plansDrawer').classList.add('open');document.querySelector('#plansDrawer').setAttribute('aria-hidden','false');document.querySelector('#scrim').classList.add('show')}
function closeDrawer(){document.querySelector('#plansDrawer').classList.remove('open');document.querySelector('#plansDrawer').setAttribute('aria-hidden','true');document.querySelector('#scrim').classList.remove('show')}

document.addEventListener('click',e=>{
  const save=e.target.closest('[data-save]'); if(save){const id=Number(save.dataset.save);saved.has(id)?saved.delete(id):saved.add(id);render();toast(saved.has(id)?'Saved to your weekend':'Removed from your plans');return}
  const remove=e.target.closest('[data-remove]');if(remove){saved.delete(Number(remove.dataset.remove));render();toast('Removed from your plans');return}
  const filter=e.target.closest('.filter');if(filter){activeCategory=filter.dataset.category;document.querySelectorAll('.filter').forEach(f=>f.classList.toggle('active',f===filter));render();return}
  const popular=e.target.closest('[data-query]');if(popular){document.querySelector('#searchInput').value=popular.dataset.query;render();document.querySelector('.content-section').scrollIntoView({behavior:'smooth'})}
});
document.querySelector('#searchButton').addEventListener('click',()=>{render();document.querySelector('.content-section').scrollIntoView({behavior:'smooth'})});
document.querySelector('#searchInput').addEventListener('input',render);
document.querySelector('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.querySelector('#searchButton').click()});
document.querySelector('#plansNav').addEventListener('click',openDrawer);document.querySelector('#closeDrawer').addEventListener('click',closeDrawer);document.querySelector('#scrim').addEventListener('click',closeDrawer);
document.querySelector('#sharePlans').addEventListener('click',async()=>{const text=`My Nearo weekend: ${events.filter(e=>saved.has(e.id)).map(e=>e.title).join(', ')}`;try{if(navigator.share)await navigator.share({title:'My weekend plans',text});else{await navigator.clipboard.writeText(text);toast('Weekend plans copied!')}}catch{}});
document.querySelector('#seeAll').addEventListener('click',()=>{activeCategory='All';document.querySelector('#searchInput').value='';document.querySelectorAll('.filter').forEach((f,i)=>f.classList.toggle('active',i===0));render()});
document.querySelector('#dateButton').addEventListener('click',()=>toast('Showing events for this weekend'));
render();
