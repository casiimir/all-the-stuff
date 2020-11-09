const inputNodeList = document.querySelectorAll('input');
inputNodeList.forEach(input => input.addEventListener("mousemove", changeEvent))

function changeEvent () {
    const suffix = this.id || '';
    // Get more info about style.setProperty
    document.documentElement.style.setProperty(`--${this.name}`, `blur(${ this.value + suffix })`);
}