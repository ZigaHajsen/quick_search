interface IMatch {
  abbr: string;
  name: string;
  capital: string;
  lat: string;
  long: string;
}

interface ResultProps {
  matches: IMatch[];
}

const Result: React.FC<ResultProps> = ({ matches }) => {
  return (
    <div>
      {matches.map((match: IMatch) => {
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
