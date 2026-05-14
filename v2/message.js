function getDateTime(dateStyle='short', timeStyle='short'){
  const now = new Date()
  const fullDateTime = now.toLocaleString('en-GB', {
    dateStyle: dateStyle, 
    timeStyle:  timeStyle,
  })
  return fullDateTime
}

function getTempletDateTime(){
  const now = new Date()
  const datetime = now.toLocaleString('en-GB', { 
    weekday: 'short',  
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'

  });
  return datetime
}

function getCustomDateTime(){ 
  const now = new Date()

  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const date = now.toLocaleString('en-GB', {weekday:'short'})
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');

  const myFormat = `${date}, ${day}-${month}-${year} at ${hours}:${mins}`;
  return myFormat
}


const form = document.getElementById('message-form');
form.addEventListener('submit', async (event)=>{
  event.preventDefault()
  const formData = new FormData(form)

  formData.append('datetime', getCustomDateTime())
  
//   console.log(getDateTime())
//   console.log(getTempletDateTime())
//   console.log(getCustomDateTime())
// 
//   const name = formData.get('name')
//   const org = formData.get('org')
//   const sub = formData.get('subject')
//   const msg = formData.get('message')
//   const dash = '-'.repeat(30)
//   console.log(name, org, sub, msg)
// 
//   const full_message = 
//     `${getCustomDateTime()}\n${dash}\nName: ${name}\nOrganization: ${org}\n${dash}\nSubject: ${sub}\nMessage: \n\n\t--- ${msg}`
// 
//   const TOKEN = "8982831859:AAFTSvqF_OYhQlfSo8_TyHz2U-UvUf98JU4";
//   const CHAT_ID = "-5039723444";
// 
//   const toTelegram = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       chat_id: CHAT_ID,
//       text: full_message,
//     }),
//   });
// 
//   const r = await toTelegram.json()
//   if(!r.ok)
//     console.log('not ok')
//     return new Response(JSON.stringify({'ok':false}), {
//       status: 400,
//     })


  const sentData = await fetch('https://portfolio-message.sakpheak.workers.dev/', {
    method: 'POST',
    body: formData,
  })

  const r = await sentData.json()
  console.log(r)
  // console.log('status ', sentData.status)
  // console.log('time F', time,'date', time.getDate(),'day', time.getDay(),'TIME',time.getTime())
})