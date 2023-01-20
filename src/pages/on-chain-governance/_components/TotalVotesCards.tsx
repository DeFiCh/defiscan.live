import { NumericFormat } from "react-number-format";
import { ProposalInfo } from "@defichain/jellyfish-api-core/dist/category/governance";

export function TotalVotesCards({
  totalVotes,
  proposal,
}: {
  totalVotes: {};
  proposal: ProposalInfo;
}) {
  // creates an Array that contains cycle 1 to 1 before cycle current [1....currentCycle - 1]
  const cycleArray = Array.from(Array(proposal.currentCycle - 1).keys()).map(
    (num) => num + 1
  );
  return (
    <>
      {cycleArray.reverse().map((cycle, key) => {
        console.log(totalVotes);
        const total = totalVotes[cycle];
        return (
          <TotalVotesCard
            key={key}
            total={total}
            proposal={proposal}
            cycle={cycle}
          />
        );
      })}
    </>
  );
}

function TotalVotesCard({
  total,
  proposal,
  cycle,
}: {
  total: number;
  proposal: ProposalInfo;
  cycle: number;
}) {
  return (
    <div className="md:p-6 py-3 px-4 md:border border-[0.5px] md:border-gray-200 border-gray-300 md:rounded-lg rounded-xl flex flex-row items-center w-full md:mb-3 mb-2">
      <div className="text-gray-900 md:font-semibold font-medium md:text-xl text-sm grow md:tracking-[0.0015em] tracking-[0.0025em]">
        Cycle {cycle} of {proposal.totalCycles}
      </div>
      <div className="flex flex-col gap-y-1">
        <div className="md:px-3 md:py-1 text-right rounded-[32px] md:text-base text-xs md:bg-green-100 text-green-600 md:font-normal font-medium tracking-[0.0044em]">
          Approved
        </div>
        <NumericFormat
          value={total}
          fixedDecimalScale
          thousandSeparator=","
          displayType="text"
          suffix=" total votes"
          className="text-gray-600 dark:text-gray-100 md:text-sm text-xs text-right tracking-[0.0025em]"
        />
      </div>
    </div>
  );
}
