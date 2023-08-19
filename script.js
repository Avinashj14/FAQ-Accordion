
const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.title-question');
    const image = question.querySelector('img');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show");
                item.querySelector('img').style.transform = 'rotate(0deg)';
            }
        });

        question.classList.toggle("show");
         image.style.transform = question.classList.contains("show") ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});
