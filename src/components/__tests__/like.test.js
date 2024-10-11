import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

//Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
test("By default, the component displays the value 'Likes: 0' in the paragraph", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

//Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
test("When you click the Like button, the number of likes increases by one", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

//Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
test("When you click the Dislike button, the number of likes decreases by one", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});