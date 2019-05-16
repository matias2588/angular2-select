export class Option {

    value: string;
    label: string;
    tag?: any;

    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;
    order: number;
    originalOrder: number;

    constructor(value: string, label: string, tag?: any) {
        this.value = value;
        this.label = label;
        this.tag = tag;

        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }

    show() {
        this.shown = true;
    }

    hide() {
        this.shown = false;
    }

    disable() {
        this.disabled = true;
    }

    enable() {
        this.disabled = false;
    }

    undecoratedCopy() {
        return {
            label: this.label,
            value: this.value,
            tag: this.tag
        };
    }
}
