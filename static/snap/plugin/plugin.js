// Messaging between web client and plugin

function Postal() {};

var extensionId = 'meajklokhjoflbimamdbhpdjlondmgpi';
postal = new Postal();

// Command sender function factory
Postal.prototype.commandSender = function () {
    var myself = this,
        command = arguments[0],
        args = Array.from(arguments).slice(1),
        callback = typeof args[args.length - 1] === 'function' ? args.splice(args.length - 1) : null;

    return function () { myself.sendCommand(command, args, callback); };
};

Postal.prototype.sendCommand = function (command, args, callback) {
    if (null!=chrome.runtime)
        chrome.runtime.sendMessage(extensionId, { command: command, args: args }, callback);
};

chrome.serial = {
    getDevices: function (callback) { postal.sendCommand('getDevices', null, callback) }
};
