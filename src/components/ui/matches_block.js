import React from 'react';

const MatchesBlock = (props) => {
  return (
    <div className="match_block">
      <div className="match_date">
        {props.match.final ? props.match.date : `Match not played yet: ${props.match.date}`}
      </div>
      <div className="match_wrapper">
        <div className="match_top">
          <div className="left">
            <div className="icon" style={{ background: `url(/images/team_icons/${props.match.localThmb}.png)` }}>
            
            </div>
            <div className="team_name">{props.match.local}</div>
          </div>
          <div className="right">
            {props.match.final ? props.match.resultLocal : '-'}
          </div>
        </div>
        <div className="match_bottom">
          <div className="left">
            <div className="icon" style={{ background: `url(/images/team_icons/${props.match.awayThmb}.png)` }}>
            
            </div>
            <div className="team_name">{props.match.away}</div>
          </div>
          <div className="right">
            {props.match.final ? props.match.resultAway : '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesBlock;