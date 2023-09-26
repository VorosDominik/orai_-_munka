import { modell } from "../modell/model.js";
import { NagykepView } from "../view/nagykep.js";

export class controler {
    constructor() {
        const Modell = new modell();
        const nagykepView = new NagykepView(Modell.getAktkep(), $(".nagykep"));

        $(window).on("jobb", () => {
            Modell.jobb();
            console.log(Modell.getAktkep());
            nagykepView.Nagykepcsere(Modell.getAktkep());
        });
        $(window).on("bal", () => {
            Modell.bal();
            console.log(Modell.getAktkep());
            nagykepView.Nagykepcsere(Modell.getAktkep());
        });
    }
}
