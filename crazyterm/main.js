import {
    command,
    res,
} from "./module_data.js";
import {
    randomNumber,
    inIndex,
    inIndexObject,
} from "./module_func.js";

let commandAdnRes = 0;

function stage() {
    console.log(commandAdnRes);
    if (commandAdnRes === 0) {
        commandAdnRes = 1;
        let newP = document.createElement('p');
        newP.innerHTML = `
            ${inIndex(command.invite.user, 'invite')}<span class="invite">@</span>${inIndex(command.invite.machine, 'invite')}
            ${inIndex(command.invite.pwd, 'invite blue')}
            ${inIndex(command.invite.branch, 'invite red')}&emsp;<span class="invite purple">$</span>&emsp;
            ${inIndex(command.prefix, 'prefix')}
            ${inIndex(command.command, 'command')}
            ${inIndex(command.arg, 'command')}
            ${inIndex(command.invite.pwd, 'command')}${inIndex(command.target, 'command')}
            ${inIndex(command.invite.pwd, 'command')}${inIndex(command.target, 'command')}
        `;
        document.body.append(newP);
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
            stage();
        }, randomNumber(300, 3000));
    } else {
        commandAdnRes = randomNumber(0, 2);
        let newP = document.createElement('p');
        newP.innerHTML = `
            ${inIndexObject(res.startLine, 'res_start')}
            ${inIndex(res.label, '')}
            ${inIndex(res.action, '')}
            ${inIndex(command.invite.pwd, 'command')}${inIndex(command.target, 'command')}
            ${inIndex(command.invite.pwd, 'command')}${inIndex(command.target, 'command')}
        `;
        document.body.append(newP);
        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(() => {
            stage();
        }, randomNumber(0, 100));
    }
}

stage();