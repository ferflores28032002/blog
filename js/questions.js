(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();



function toggleAccordion(event) {
    const header = event.target;
    const content = header.nextElementSibling;
  
    const isActive = content.style.maxHeight;
    if (isActive) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
  