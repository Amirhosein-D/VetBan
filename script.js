const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if(other !== item){

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        item.classList.toggle("active");

        const answer = item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight = answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }

    });

});