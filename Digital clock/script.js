function setTime() {
    let second = new Date();
    $('.second').text(second.getSeconds());
}

// Run after 2 seconds
setTimeout(setTime, 2000);