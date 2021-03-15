function addGUI(){
    // GUIパラメータ
    let guiCtrl = function(){
        this.size = 1.8;
    };

    gui = new dat.GUI();
    guiObj = new guiCtrl();
    gui.add(guiObj, 'size', 0.1, 10.);
    gui.open();
    
    function onWindowResize() {
        width = window.innerWidth;
        height = window.innerHeight;
    
        canvas.width = width * this.resolution;
        canvas.height = height * this.resolution;
    
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
    }
    return guiObj;
}