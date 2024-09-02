import React from "react";
import AppLayout from "./component/Sx1";

/* 
header
 -logo
 -nav item
body
 -search
 -restrouantConatiner
 restaurantcard
    - image
    -name
    -cuisine
    -time for delivary
    -rating
footer
  -copyright
  -links
  -address
  -contact
*/

function App(props) {
  return (
    <div>
      <AppLayout />
    </div>
  );
}

export default App;
