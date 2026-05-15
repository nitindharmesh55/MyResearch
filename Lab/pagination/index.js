let currentPage = 1;
const postPerPage = 3;
const totalPosts = 50;
const totalPages = Math.ceil(totalPosts / postPerPage);
const container = document.querySelector('.pagination');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector(".next");


function renderPost(){
    container.innerHTML = '';
    const start = (currentPage - 1) * postPerPage;
    const end = start + postPerPage;
    for(let i = start; i < end && i < totalPosts; i++)
    {
        const post = document.createElement('div');
        post.className ="post";
        post.textContent =  `Post ${i + 1}`;
        container.appendChild(post);
    }
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}


prevButton.addEventListener('click',()=>{
    if(currentPage > 1){
        currentPage--;
        renderPost();
    }
});

nextButton.addEventListener('click', ()=>{
    if(currentPage < totalPages){
        currentPage++;
        renderPost();
    }
})