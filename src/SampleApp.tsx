import { App } from "@web-atoms/web-atoms/dist/App.js";
import { AtomControl } from "@web-atoms/web-atoms/dist/core/AtomControl.js";
import Bind from "@web-atoms/web-atoms/dist/core/Bind.js";
import XNode from "@web-atoms/web-atoms/dist/core/XNode.js";

export default class SampleApp extends AtomControl {

    firstName = "";
    lastName = "";

    constructor(app, e) {
        super(app, e);
        this.pushInit();
    }

    async init() {
        this.renderer = <div>
            <div>
                <input placeholder="First Name" value={Bind.twoWaysImmediate(() => this.firstName)}/>
            </div>
            <div>
                <input placeholder="Last Name" value={Bind.twoWaysImmediate(() => this.lastName)}/>
            </div>
            <div>
                <div>Full name is <span text={Bind.oneWay(() => `${this.firstName} ${this.lastName}`)} /></div>
            </div>
        </div>;
    }

}

const webApp = new App();
const sample = new SampleApp(webApp, document.createElement("main"));
document.body.append(sample.element);