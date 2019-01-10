import * as React from "react";
import { render } from "react-testing-library";
import { Home } from "../../src/containers/Home"

describe("Home", () => {
    var a = 0
    it("Should render a Hello World message", () => {
        const {container} = render(<Home />);

        expect(container.textContent).toBe("Hello World");
    })
})    