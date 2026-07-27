/* ==========================================
   THRESHOLD
========================================== */

const transmissionLog = document.querySelector(".transmission-log");
console.log(transmissionLog);

const progressBar = document.querySelector(".progress-bar");

const threshold = document.querySelector("#threshold");

transmissionLog.textContent = "UNKNOWN SIGNAL DETECTED";

/* ==========================================
   THRESHOLD TIMELINE
========================================== */

const timeline = [
    {
        delay: 2000,
        message: "UNKNOWN SIGNAL DETECTED",
        progress: 0
    },
    {
        delay: 4000,
        message: "ESTABLISHING SECURE CONNECTION...",
        progress: 35
    },
    {
        delay: 7000,
        message: "SYNCHRONIZING OBSERVATORY SYSTEMS...",
        progress: 70
    },
    {
        delay: 9000,
        message: "CONNECTION ESTABLISHED",
        progress: 100
    }
];

timeline.forEach((step) => {

    setTimeout(() => {

        transmissionLog.textContent = step.message;

        progressBar.style.width = `${step.progress}%`;

    }, step.delay);

});

setTimeout(() => {

    document.querySelector(".signal").style.opacity = "1";

}, 800);


setTimeout(() => {

    transmissionLog.textContent = "UNKNOWN SIGNAL DETECTED";

    transmissionLog.style.opacity = "1";

}, 2000);