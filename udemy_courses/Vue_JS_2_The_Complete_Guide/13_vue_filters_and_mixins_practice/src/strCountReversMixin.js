
export const strCountReversMixin = {
    computed: {
        textReverseMx() {
            return this.myText.split('').reverse().join('');
        },
        textCountMx() {
            if (this.myText.length) {
                return `${this.myText}  (${this.myText.length})`;
            }
        }
    }
}

