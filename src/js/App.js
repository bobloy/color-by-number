import React from "react";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import ImageEditor from "./components/main";

function App() {
    return <div className="App">
        <main>
            <ImageEditor/>
        </main>
    </div>;
}

export default connect()(App);
