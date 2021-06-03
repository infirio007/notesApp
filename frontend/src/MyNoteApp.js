import "./css/nav.css";

const MyNoteApp = () => {
    const a = () => {
        document.querySelector("#h1").remove();
        document.querySelector("#h1").removeEventListener("click", a);
    }

    return (
        <div onClick={a}>
            <h1>hello world</h1>
        </div>
    );
}

export default MyNoteApp;