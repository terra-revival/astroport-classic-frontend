import { GovernanceProposal, ProposalStatus } from "types/common";

// temporary proposals
let proposals: GovernanceProposal[] = [
  {
    id: "1",
    title: "ASTRO Liquidity Proposal.",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    msg: "[{‘order’: 123, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}, {‘order’: 124, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}][{‘order’: 123, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}, {‘order’: 124, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}]",
    link: "https://discord.gg/C7WCtwT",
    amount: 1253,
    endDate: "1647124720",
    address: "terra14zees4lwrdds0em258axe7d3lqqj9n4v7saq7e",
    status: ProposalStatus.Active,
    history: {
      dates: [1645433859, 1645433859, 1645433859, 1645433859, 1645433859],
      status: 1,
      completed: 0,
    },
  },
  {
    id: "2",
    title: "Partnership with x. This is a very long proposal title!",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.tua.",
    msg: "[{‘order’: 123, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}, {‘order’: 124, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}]",
    link: "https://discord.gg/C7WCtwT",
    amount: 5253,
    endDate: "1645124444",
    address: "wd021.ust",
    status: ProposalStatus.Fail,
    history: {
      dates: [1645433859, 1645433859, 1645433859, 1645433859, 1645433859],
      status: 2,
      completed: -1,
    },
  },
  {
    id: "3",
    title: "Buyback and burns. Proposal numero 3.",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    msg: "[{‘order’: 123, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}, {‘order’: 124, ‘Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.’}]",
    link: "https://discord.gg/C7WCtwT",
    amount: 125,
    endDate: "1613588720",
    address: "terra14zees4lwrdds0em258axe7d3lqqj9n4v7sar321",
    status: ProposalStatus.Implemented,
    history: {
      dates: [1645433859, 1645433859, 1645433859, 1645433859, 1645433859],
      status: 4,
      completed: 1,
    },
  },
];

export const useProposals = () => {
  return proposals;
};
