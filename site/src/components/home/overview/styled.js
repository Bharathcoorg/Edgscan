import styled from "styled-components";
import { mobilecss, smcss } from "../../../styles/responsive";
import { Flex } from "../../styled/flex";
import { block, gap_x, gap_y, grid_cols } from "../../../styles/tailwindcss";

export const OverviewPanel = styled(Flex)`
  margin: 24px;
  justify-content: space-between;

  ${mobilecss(block)}
`;

export const OverviewItemsWrapper = styled.div`
  flex: 1;
  display: grid;
  flex-wrap: wrap;
  ${gap_x(12)};
  ${gap_y(12)};
  ${grid_cols(5)};

  ${mobilecss(grid_cols(2))};
  ${smcss(grid_cols(2))}
`;
