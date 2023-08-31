

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = (data.data);
    showPhones(phones);
}

function showPhones(phones){

   
    const phoneContainer = document.getElementById('phone-container');

    // clear previous displayed item
     phoneContainer.textContent = '';


    // show all button enable and disable 
    const showAllBtn = document.getElementById('show-all-btn')
    if(phones.length > 15){
        showAllBtn.classList.remove('hidden')
    }else{
        showAllBtn.classList.add('hidden')
    }

    // limit to show items if more than 15
    phones = phones.slice(0, 15);

    // const showAll = () =>{
    //     phones = phones
    //     return phones
    // }
    phones.forEach(phone => {
      

        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card  bg-base-100 shadow-xl';
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `

        phoneContainer.appendChild(phoneCard);
        
    });
    

    
}
   
    const searchItems = () => {
        searchText = document.getElementById('search-box').value;
        console.log(searchText);
        loadPhone(searchText)
    }

   
    
