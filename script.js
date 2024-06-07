const correctAnswers = ['C', 'A', 'A', 'C', 'A'];

const form = document.querySelector('form');
const result = document.querySelector('.result');
const checkmarkAnswers = document.querySelectorAll('.checkmark-answer');
const label = document.querySelectorAll('.form-check-label');


form.addEventListener('submit', e => {
    e.preventDefault();

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];


    let score = 0;


    userAnswers.forEach((answer, index) => {

        if (answer === correctAnswers[index]) score += 20;

        // TODO: show checkmark for correct answers dynamically
        // label.forEach((l) => {
        //     l.innerHTML += '<span class="correct-answer">✅</span>';
        // });


    });

    scrollTo(0, 0);

    // show result to the user
    result.classList.remove('d-none');

    // animate score
    animateScore(score);

    // show correct answers checkmark
    checkmarkAnswers.forEach(checkmark => checkmark.classList.remove('d-none'));


});

function animateScore(score) {
    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;

        if (output === score) {
            clearInterval(timer);
        }
        output++;
    }, 10);
}
