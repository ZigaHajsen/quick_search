const Result: React.FC<any> = ({ matches }) => {
  return (
    <div>
      {matches.map((match: any) => {
        return (
          <div key={match.name}>
            <h4>
              {match.name} ({match.abbr}) {match.capital}
            </h4>
            <p>
              Lat: {match.lat} / Long: {match.long}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
