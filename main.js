let startButton = document.querySelector('.start');
        let stopButton = document.querySelector('.stop');
        let resetButton = document.querySelector('.reset');
        let msDom = document.querySelector('.ms');
        let secondsDom = document.querySelector('.seconds');
        let minsDom = document.querySelector('.mins');

        let ms = 0, sec = 0, mins = 0, start;
        //decare start outside , so that the function stop can get access to it
        function timer () {
            ms++;
            msDom.textContent = ms;
            if (ms > 99) {
                ms = 0;
                sec++;
                secondsDom.textContent = sec;
            }
            if (sec > 59) {
                sec = 0 ;
                mins++;
                minsDom.textContent = mins;
            } 
            addTen();   
        }
        
        startButton.addEventListener('click', startTimer);
        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);

        function startTimer() {
            start = setInterval(timer, 10);
            
        }
        function stopTimer() {
            window.clearInterval(start);
        }
        function resetTimer() {
            window.clearInterval(start);
            msDom.textContent = "00";
            secondsDom.textContent = "00";
            minsDom.textContent = "00";
            // ms = 0; sec = 0; mins = 0;
        }
        
        
        function addTen() {
            if (ms < 10) {
                msDom.textContent = "0" + ms;
            }
            if (sec < 10) {
                secondsDom.textContent = "0" + sec;
            }
            if (mins < 10) {
                minsDom.textContent = "0" + mins;
            }
        }