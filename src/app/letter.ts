export class Letter {
    private letter;
    private amount;
    private isselected;

    constructor(letter: string, amount: number) {
        this.letter = letter;
        this.amount = amount;
        this.isselected = false;
    }

    getAmount() {
        return this.amount;
    }

    getLetter() {
        return this.letter;
    }

    select() {
        this.isselected = true;
    }

    unselect() {
        this.isselected = false;
    }

    isSelected(): boolean {
        return this.isselected;
    }
}