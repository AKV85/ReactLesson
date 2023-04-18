import { render } from "@testing-library/react"
import { Checkbox } from "./Checkbox";
import { fireEvent } from '@testing-library/react';


test("Selecting the checkbox should change value true", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});