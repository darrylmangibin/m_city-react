import React, { Component } from 'react';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reversedArray } from '../../ui/misc';
import Slide from 'react-reveal';

import MatchesBlock from '../../ui/matches_block';

class Blocks extends Component {

  state = {
    matches: []
  }

  componentDidMount() {
    firebaseMatches.limitToLast(6).once('value').then((snapshot) => {
      const matches = firebaseLooper(snapshot)
      this.setState({ matches: reversedArray(matches)})
    })
  }

  showMatches = (matches) => {
    if(matches) {
      return matches.map((match) => {
        return (
          <Slide key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock 
                  match={match}
                />
              </div>
            </div>
          </Slide>
        )
      })
    }
  }

  render() {
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
      </div>
    );
  }
}

export default Blocks;