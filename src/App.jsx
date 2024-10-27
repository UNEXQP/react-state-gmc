import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Step 2: Define the state
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer with a love for learning.',
        imgSrc: 'data:image/jpeg;base64,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', // You can replace this with a real image URL
        profession: 'Software Engineer'
      },
      shows: false,
      timeInterval: 0
    };
    this.intervalId = null;
  }

  // Step 3: Lifecycle method to start the interval timer when the component mounts
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000); // Update every second
  }

  // Step 4: Clear the interval when the component unmounts to avoid memory leaks
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Step 5: Toggle the 'shows' state
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
      timeInterval: 0 // Reset the timer when toggling
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        {/* Step 6: Conditionally render the profile */}
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <h4>{person.profession}</h4>
          </div>
        )}
        
        {/* Step 7: Display the time interval since the last toggle */}
        <p>Time since last mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;

