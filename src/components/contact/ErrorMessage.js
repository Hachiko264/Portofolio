import React from "react";
import "../../css/style.css";

function ErrorMessage({ children }) {
    return (
        <div class="error">{ children }</div>
    );
}

export default ErrorMessage;