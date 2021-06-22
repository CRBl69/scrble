import { Letter } from "./letter";

type CaseType = "normal" | "doubleLetter" | "doubleWord" | "tripleLetter" | "tripleWord" | "starting"

export class Case {
    private type;
    private letter: Letter | null;
    private bonusTaken = false;

    constructor(type: CaseType) {
        this.type = type;
        this.letter = null;
    }
    getType(): CaseType {
        return this.type;
    }
    getLetter(): Letter | null {
        return this.letter;
    }
    setLetter(letter: Letter): void {
        this.letter = letter;
    }
    removeLetter(): void {
        this.letter = null;
    }

    getLetterScore(): number {
        let letter = this.getLetter();
        if(this.bonusTaken == true && letter != null) return letter.getAmount();
        if(this.getType() == "doubleLetter" && letter != null) return letter.getAmount() * 2;
        if(this.getType() == "tripleLetter" && letter != null) return letter.getAmount() * 3;
        if(letter != null) return letter?.getAmount();
        return 0;
    }

    getMultiplier(): number {
        if(this.bonusTaken == true) return 1;
        if(this.type == "tripleWord") return 3;
        if(this.type == "doubleWord") return 2;
        return 1;
    }

    takeBonus() {
        this.bonusTaken = true;
    }
}