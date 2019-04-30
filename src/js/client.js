import 'jquery'

let client = {
    //Activate function for when a textarea has been clicked. Starts custom inputs (Tab enables ect)
    activate: (id) => {

        var el = document.getElementById(id);

        el.onkeydown = function (e) {
            if (e.keyCode === 9) {
                // tab was pressed

                // get caret position/selection
                var val = this.value,
                    start = this.selectionStart,
                    end = this.selectionEnd;

                // set textarea value to: text before caret + tab + text after caret
                this.value = val.substring(0, start) + "    " + val.substring(end);

                // put caret at right position again
                this.selectionStart = this.selectionEnd = start + 1;

                // prevent the focus lose
                return false;
            }
        };
        el.onkeydown


    }
}


export default client;