

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = (data.data);
    showPhones(phones);
    console.log(phones);
}

function showPhones(phones){

   
    const phoneContainer = document.getElementById('phone-container');

    // clear previous displayed item
     phoneContainer.textContent = '';
    

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

function searchItems() {
    console.log('search button clicked')
    const searchText = document.getElementById('search-box').value;
    console.log(searchText);
    loadPhone(searchText);
}

