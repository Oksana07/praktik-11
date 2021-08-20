class CountdownTimer{
    constructor({targetDate,selector}){
this.selector=selector;
this.targetDate = targetDate;
    }

    getRefs(){
        const container = document.querySelector(this.selector);
        const daysRef = container.querySelector('[data-value="days"]');
        const hoursRef = container.querySelector('[data-value="hours"]');
        const minsRef = container.querySelector('[data-value="mins"]');
        const secsRef = container.querySelector('[ data-value="secs"]');
        return {daysRef, hoursRef, minsRef, secsRef};
    }
    upDateTimer({daysRef,  hoursRef, minsRef, secsRef}) {
        const time = this.targetDate - Date.now();
        daysRef.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
        hoursRef.textContent = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minsRef.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        secsRef.textContent = Math.floor((time % (1000 * 60)) / 1000);
    };
}

 
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));


// const secs = Math.floor((time % (1000 * 60)) / 1000);


const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug, 21, 2021'),
  });
