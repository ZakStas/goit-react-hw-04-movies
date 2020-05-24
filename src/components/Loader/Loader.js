import React from "react";
import Spinner from "react-loader-spinner";

const Loader = () => (
  <div>
    <Spinner
     type="Puff"
     color="#00BFFF"
     height={100}
     width={100}
     timeout={2000}
    />
  </div>
);

export default Loader;