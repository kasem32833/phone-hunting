// function themeChanger(){
//    const toggleBtn =  document.getElementById('theme-changer')
//    if(toggleBtn.innerText == 'Dark'){
//         toggleBtn.innerText = 'Light';
//        const html = document.getElementsByName('html');
//        html.setAttribute 
//    }else if(toggleBtn.innerText == 'Light'){
//         toggleBtn.innerText = 'Dark'
//    }

// }

const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone#data/2')
    const data = await res.json();

    const phone = (data.data)
    console.log(phone[0]);
}

loadPhone();