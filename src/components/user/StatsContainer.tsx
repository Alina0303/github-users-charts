import StatsCard from "./StatsCard";

type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

function StatsContainer(props: StatsContainerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
      <StatsCard title="Total Repositories" count={props.totalRepos} />
      <StatsCard title="Followers" count={props.followers} />
      <StatsCard title="Following" count={props.following} />
      <StatsCard title="Gists" count={props.gists} />
    </div>
  );
}
export default StatsContainer;
