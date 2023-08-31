
const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = (data.data);
    showPhones(phones, isShowAll);

}

function showPhones(phones, isShowAll){
    toggleLoadingSpinner(true);
    const phoneContainer = document.getElementById('phone-container');
    // clear previous displayed item
     phoneContainer.textContent = '';
    // show all button enable and disable 
    const showAllBtn = document.getElementById('show-all-btn')
    if(phones.length > 15 && !isShowAll){
        showAllBtn.classList.remove('hidden')
    }else{
        showAllBtn.classList.add('hidden')
    }
    console.log('is show all valeu', isShowAll);
    // limit to show items if more than 15 && not isShowALL
    if(!isShowAll){
        phones = phones.slice(0, 15);
    }
        

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
    toggleLoadingSpinner(false);
}
    // loading spinner
    const toggleLoadingSpinner = (isLoading) => {
        const loadingSpinner = document.getElementById('loading-spinner')
        if(isLoading){
            loadingSpinner.classList.remove('hidden');
        }else{
            loadingSpinner.classList.add('hidden');
        }

    }
    //search control
    const searchItems = (isShowAll) => {

        toggleLoadingSpinner(true)
        searchText = document.getElementById('search-box').value;
        loadPhone(searchText, isShowAll);
    }

    // show all data handler
    const showAllData = () => {
        console.log('show all btn clicked');
        searchItems(true);
    }



   
    
