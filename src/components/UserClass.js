import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: null,
        location: null,
        avatar_url: null,
      },
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/anirudhsingh05");
    const json = await response.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>@madblaze05</h4>
      </div>
    );
  }
}

export default UserClass;
