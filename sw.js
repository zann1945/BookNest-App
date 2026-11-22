const MSGS=['Kamu belum membaca buku hari ini? 📖','Indonesia kekurangan literasi ya? Yuk mulai dari dirimu, satu halaman saja.','Satu halaman hari ini lebih baik daripada nol. Buka BookNest yuk!','Buku-bukumu menunggu. Sudah baca berapa halaman hari ini?','Literasi dimulai dari kebiasaan kecil. Luangkan 10 menit untuk membaca.','Jangan putus kebiasaan membacamu hari ini ya 🔥','Target bacaan tahun ini menunggu. Lanjutkan bukumu yuk!'];
const today=()=>{let d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
async function remind(){
  let c=await caches.open('booknest-settings'),r=await c.match('settings.json');if(!r)return;
  let s=await r.json(),d=new Date();
  if(!s.on||s.active===today()||s.notified===today()||d.toTimeString().slice(0,5)<s.time)return;
  await self.registration.showNotification('BookNest',{body:MSGS[Math.floor(Math.random()*MSGS.length)],icon:'icon-192.png',tag:'booknest-reminder'});
  s.notified=today();await c.put('settings.json',new Response(JSON.stringify(s)));
}
self.addEventListener('periodicsync',e=>{if(e.tag==='booknest-reminder')e.waitUntil(remind())});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window'}).then(l=>l.length?l[0].focus():self.clients.openWindow('./')))});
