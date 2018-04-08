// gui.js

IDE_Morph.prototype.originalinit = IDE_Morph.prototype.init;
IDE_Morph.prototype.init = function (isAutoFill) {
    IDE_Morph.prototype.originalinit(isAutoFill);
    this.logoURL = this.resourceURL('manykit/manykit.png');
}

IDE_Morph.prototype.originalSetLanguage = IDE_Morph.prototype.setLanguage;
IDE_Morph.prototype.setLanguage = function (lang, callback) {
    var myself = this;

    myself.originalSetLanguage(lang, function () {
        myself.setLanguagePXFrame(lang, callback);
    });
};

IDE_Morph.prototype.setLanguagePXFrame = function (lang, callback) {
    // Load language script for s4a related functions
    var pxframeTranslation = document.getElementById('language'),
        s4aSrc = 'manykit/lang-' + lang + '.js',
        myself = this;
    if (pxframeTranslation) {
        document.head.removeChild(pxframeTranslation);
    }
    if (lang === 'en') {
        return this.reflectLanguage('en', callback);
    }
    pxframeTranslation = document.createElement('script');
    pxframeTranslation.id = 'language';
    pxframeTranslation.onload = function () {
        myself.reflectLanguage(lang, callback);
    };
    document.head.appendChild(pxframeTranslation);
    pxframeTranslation.src = s4aSrc;
};

IDE_Morph.prototype.originalNewProject = IDE_Morph.prototype.newProject
IDE_Morph.prototype.newProject = function () {
    // Disconnect each sprite before creating the new project
    var sprites = this.sprites.asArray()
    sprites.forEach(function (sprite) {
        if (sprite.pxframe) {
            sprite.pxframe.disconnect(true);
        }
    });
    this.originalNewProject();
};


// IDE_Morph.prototype.exportProject_MANYKIT = function (name) {
//     Export project XML, saving a file to disk
//     newWindow requests displaying the project in a new tab.
//     console.log(123+name)
//     var menu, str;

//     if (name) {
//         this.setProjectName(name);
//         try {
//             menu = this.showMessage('Exporting');
//             str = this.serializer.serialize(this.stage);
//             // send to server

//             menu.destroy();
//             this.showMessage('Exported!', 1);
//             return str;
//             console.log(str)
//         } catch (err) {
//             if (Process.prototype.isCatchingErrors) {
//                 this.showMessage('Export failed: ' + err);
//             } else {
//                 throw err;
//             }
//         }
//     }
// };

IDE_Morph.prototype.exportProject_MANYKIT= function (name, plain) {
    // Export project XML, saving a file to disk
    // newWindow requests displaying the project in a new tab.
    var menu, str, dataPrefix;

    if (name) {
        this.setProjectName(name);
        dataPrefix = 'data:text/' + plain ? 'plain,' : 'xml,';
        try {
            menu = this.showMessage('');
            str = this.serializer.serialize(this.stage);
            // this.setURL('#open:' + dataPrefix + encodeURIComponent(str));
            // this.saveXMLAs(str, name);
            // menu.destroy();
            // this.showMessage('Exported!', 1);
            return str
        } catch (err) {
            if (Process.prototype.isCatchingErrors) {
                this.showMessage('Export failed: ' + err);
            } else {
                throw err;
            }
        }
    }
};
