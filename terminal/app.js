// NEXT
//   1: translate this big confusion into components
//   2:implement JSON for list (files-available and command-list)

Vue.component('hello', {
    template: `<div class="container d-flex" style="background-color: white">
        <p class="mx-auto">HELLO!</p>
        </div>`
});

// Turn all const into the right case style (CAPITALIZED)

const textFiles = {
    'file1.txt': "Sebbene sia in dubbio l'attuale esistenza di tale società, essa è spesso menzionata nell'ambito delle teorie del complotto per indicare presunti gruppi di potere e di pressione che eserciterebbero segretamente o, secondo altre versioni, aspirerebbero al dominio del mondo, con un nuovo ordine mondiale.",
    'file2.txt': "La società degli Illuminati, il cui nome completo è Illuminati di Baviera, secondo la storiografia tradizionale, sarebbe nata nel 1776 ad opera di Johann Adam Weishaupt (1748-1830), professore di giurisprudenza all'Università di Ingolstad.",
    'file3.txt': "Il 22 giugno 1784, proprio quando la società segreta sembrava all'apice, gli Illuminati dovettero superare un periodo critico. Il principe elettore di Baviera Carl Theodor pubblicò l'interdizione assoluta d'ogni comunità, società e confraternita segreta o non approvata dallo Stato",
    'file4.txt': "L'organizzazione della setta era simile a quella massonica, aveva struttura piramidale e diversi gradi di iniziazione a cui corrispondeva una consapevolezza progressiva dei segreti della setta e un maggiore potere. Solo gli adepti dei gradi superiori erano a conoscenza dello scopo ultimo dell'Ordine.",
    'vcute.gif': "img/vcute.gif",
    'moony.gif': "img/moony.gif",
    'atom1.gif': "img/atom1.gif",
}
let lsFunc = function() {
    let lsList = [];
    for (let el of Object.keys(textFiles)) {
        lsList.push(el);
    }
    return lsList.join(" - ");
};

let commandList = {
    clear: "",
    help: "cat [filename] - color [name] - help [-command] - history - ls - shutdown - start - system ",
    history: [],
    ls: lsFunc(),
    shutdown: "",
    start: "Work in progress ...",
    system: "Welcome in the System No-ProT555",
    helps: {
        cat: "cat => execute a program file as text format",
        color: "color => set the text color. 140 available, css type",
        help: "help => return the help list or help [-command] return the relative help command",
        history: "history => return the history of all command typed",
        ls: "ls => return the list of files available",
        shutdown: "shutdown => no need more presentations",
        start: "start => section work in progress...",
        system: "system => return all system specfic, name system, ...",
    }
};

let vm = new Vue({
    el: '#vm',
    data: {
        data2: "",
        textPrinted: "",
        word: "",
        x: 0,
        active: false,
        cmd: undefined,
        output: commandList,
        textColor: "aquamarine",
        switchOn: true,
        displayCmdLine: "none",
        items: [2, 3, 5, 7],
        imgDir: "img/gif.gif",
    },
    methods: {
        // show image
        powerUp() {
            this.data2 = "System loading ";
            let loading = setInterval(() => {
                this.data2 += ".";
            }, 500);
            setTimeout(() => {
                clearInterval(loading);
                this.imgDir = "";
                this.data2 = "You are welcome :: Arkess Terminal 0.1 :: type 'help' for list of commands";
                this.displayCmdLine = "";
                this.switchOn = !this.switchOn;
            }, 300);
            // Focus on input element
            setTimeout(() => {
                document.getElementById("input").focus();
            }, 1000);
        },
        printFile: function() {
            let interval;
            if (this.active) {
                this.btnStatus = "Activated";
                interval = setTimeout(() => {
                    if (this.x <= this.textPrinted.length - 1) {
                        this.word += this.textPrinted[this.x];
                        this.x += 1;
                    }
                }, 20);
            } else {
                clearTimeout(interval);
                this.btnStatus = "Disabled";
            }
        },
        runCommand: function(event) {
            // Check if history array is limit range
            if ((commandList.history.length - 1) >= 20) commandList.history = commandList.history.slice(1, );
            if ((event.key === 'Enter') && (this.cmd != "")) {
                this.cmd = this.cmd.toLowerCase();
                // Check if command is available
                if (Object.keys(commandList).some(x => x == this.cmd) ||
                    (/color/.test(this.cmd)) ||
                    (/cat/.test(this.cmd)) ||
                    (/help/.test(this.cmd))) {
                    this.textPrinted = "";
                    this.word = "";
                    this.x = 0;
                    this.data2 = this.output[this.cmd];
                    // if (/cat \w/.test(this.cmd)) {
                    if ((this.cmd.slice(0, 4) === "cat ")) {
                        // Uncaught TypeError: Cannot read property 'length' of undefined
                        // this.cmd.slice(4, ) => when undefined and not a name of a textFiles's key
                        this.data2 = this.cmd.slice(4, );
                        if (/txt/.test(this.cmd)) {
                            this.textPrinted = textFiles[this.data2];
                            this.active = true;
                            this.data2 = "";
                            // Blur focus in input
                            document.getElementById("input").blur();
                            setTimeout(() => {
                                document.getElementById("input").focus();
                            }, 7000);
                        }
                        if (/gif/.test(this.cmd)) {
                            this.displayCmdLine = "none";
                            this.imgDir = textFiles[this.data2];
                            let timer = 2;
                            let closingImage = setInterval(() => {
                                this.data2 = "close in: " + timer;
                                timer--;
                            }, 1000);
                            setTimeout(() => {
                                clearInterval(closingImage);
                                this.data2 = "";
                                this.displayCmdLine = "";
                                this.imgDir = "";
                                setTimeout(() => {
                                    document.getElementById("input").focus();
                                }, 1000);
                            }, 3000);

                        }
                    }
                    if (this.cmd.slice(0, 6) === "color ") this.textColor = this.cmd.slice(6, );
                    if (this.cmd.slice(0, 6) === "help -") this.data2 = commandList.helps[this.cmd.slice(6, )];
                    if (this.cmd === "clear") this.data2 = "";
                    if (this.cmd === "shutdown") {
                        this.data2 = "";
                        this.imgDir = "img/gif.gif";
                        this.displayCmdLine = "none";
                        this.switchOn = true;
                    }
                    //this.data2 = commandList.helps[this.cmd].slice(6, );
                    commandList.history.push(this.cmd);
                    this.cmd = "";
                    // this.word = "";
                    // this.x = 0;
                } else this.data2 = "Command not found. Please use 'help' command."
            }
        },

    }
})
