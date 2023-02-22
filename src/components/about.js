import { Component } from "react";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./ProfileFunctional";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("Parent -componentDidMount");
  }

  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>This is About us Page.....</h1>
        <ProfileFunctional name={"Rekha"} />
        <ProfileClass name={"Child"} />
      </div>
    );
  }
}

export default About;
