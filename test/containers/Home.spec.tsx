import React from "react";
import { render } from "react-testing-library";
import { Home } from "../../src/containers/Home"

describe("Home", () => {
    it("Should render a Hello World message", () => {
        const {container} = render(<Home />);
        expect(container.innerText).toBe("Hello Mars.");
    })
})    