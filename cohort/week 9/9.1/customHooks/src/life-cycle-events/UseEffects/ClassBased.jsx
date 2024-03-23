import React from 'react';
export class ClassBased extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("component unmounted");
  }

  render() {
    // Render UI
    return (
        <div>
            hi there
        </div>
    )
  }
}
