

const Not_Native=['동네', '규칙', '간단', "공격", "수비", "편", "시작", "선", "공격자", "수비자", "암행어사"]
const Not_Native_Kor=['洞內', '規則', "間斷", "攻擊", "守備", "便", "始作", "線", "攻擊者", "守備者", "暗行御史"]

const Knopka=document.getElementById('u')
Knopka.textContent = 'хангыль'
Knopka.addEventListener('click', () => {
    if (Knopka.textContent === 'хангыль') {
Knopka.textContent = 'ханча';}
    else {
Knopka.textContent = 'хангыль';}
    
}
)
const paragraphs = document.getElementsByTagName('button');
document.getElementById('sun-moon').addEventListener('click', function()  {
    const currentTheme = document.body.className;
    const currentHour = new Date().getHours();
    if (currentTheme === 'light-theme'){
        document.body.className='dark-theme'
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].className = 'dark-theme';
        }
    } else {
        document.body.className='light-theme'
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].className = 'light-theme';
        }
    }
})

for(let i=0;i<Not_Native.length;i++) {
    Knopka.addEventListener('click', () => {
        if (document.getElementById(Not_Native[i]).textContent === Not_Native_Kor[i]) {
            document.getElementById(Not_Native[i]).textContent = Not_Native[i];}
        else {
            document.getElementById(Not_Native[i]).textContent = Not_Native_Kor[i];}
        
    }
    )
}

let currentContentId = 1;

    function prevContent() {
      currentContentId--;
      if (currentContentId < 1) {
        currentContentId = 20; // Переход на последний элемент
      }
      updateContent();
    }

    function nextContent() {
      currentContentId++;
      if (currentContentId > 20) {
        currentContentId = 1; // Переход на первый элемент
      }
      updateContent();
    }

    function updateContent() {
      const elements = document.querySelectorAll('.KOREAN_TEXT');
      elements.forEach(element => {
        element.classList.remove('active');
        if (element.id === currentContentId.toString()) {
          element.classList.add('active');
        }
      });
    }

const Start_time=[20.3, 25.8, 30.5, 33, 35.2, 40, 43.7, 51.1, 52.5, 58.3, 68.1, 70.1, 72, 76.8, 79.9, 86.5, 89, 91.7, 96.6, 99.5, 105.2] 
const Duration=[3.8, 3.5, 1.2, 1.5, 2.6, 3.2, 4, 0.7, 5.3, 3.5, 0.8, 1.5, 2.3, 2.3, 3.5, 0.5, 2.5, 4, 2.5, 4, 2.2]



for(let i=0;i<Start_time.length;i++) {
    var audio = document.getElementById('Play_'+(i+1)+'_audio');
    var playButton = document.getElementById('Play_'+(i+1));

    playButton.addEventListener('click', () => {
    // Устанавливаем начальное и конечное время воспроизведения
    var startTime = Start_time[i]; // 10 минут в секундах
    var endTime = startTime + Duration[i]; // 5 секунд после начала

    // Устанавливаем текущее время воспроизведения
    audio.currentTime = startTime;

    // Начинаем воспроизведение
    audio.play();

    // Останавливаем воспроизведение после окончания заданного диапазона
    setTimeout(() => {
    audio.pause();
    }, (endTime - startTime) * 1000/audio.playbackRate); // Преобразуем секунды в миллисекунды
});
}
