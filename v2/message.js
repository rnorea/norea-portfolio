// util functions

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



// form elements
const form = document.getElementById('message-form');
const submitBtn = document.getElementById('cf-submit')
const submitText = document.getElementById('cf-submit-text')
const submitArrow = document.getElementById('cf-submit-arrow')
const submitRes = document.getElementById('submit-response')
const another = document.getElementById('submit-another')


// submit fuction of form
form.addEventListener('submit', async (event)=>{
  event.preventDefault()
  
  form.classList.add('disabled')
  submitBtn.classList.add('disabled')
  submitText.innerHTML = 'Sending...'
  submitArrow.classList.add('reveal')
  submitRes.classList.remove('reveal', 'fail')

  const formData = new FormData(form)
  formData.append('datetime', getCustomDateTime())
  
  const sentData = await fetch('https://portfolio-message.sakpheak.workers.dev/', {
    method: 'POST',
    body: formData,
  })

  const res = await sentData.json()
  // ok = true
  if(res.ok){
    console.log('message sent')
    
    setTimeout(() => {
      submitText.innerHTML = 'Message Sent'
      submitBtn.classList.add('pale')
    }, 400);

    submitRes.classList.add('reveal')
  }else{
    setTimeout(() => {
      submitText.innerHTML = 'Sending Fail'
      submitBtn.classList.add('pale')

      another.innerHTML = 'Try again'
      submitRes.classList.add('reveal', 'fail')

    }, 400);
  }
})


// response feedback
another.addEventListener('click', ()=>{
  form.reset()
  form.classList.remove('disabled')
  submitBtn.classList.remove('disabled')
  submitText.innerHTML = 'Send Message'
  submitRes.classList.remove('reveal')
  submitArrow.classList.remove('reveal')
  another.innerHTML = 'Send another message'
})
