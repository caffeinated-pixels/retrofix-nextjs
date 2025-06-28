import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { colors } from '@/constants/theme'

export const Table = styled.table`
  padding-bottom: 10px;

  display: flex;
  border-collapse: collapse;
  text-align: center;
`

export const HiddenTableCaption = styled.caption`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`

export const TableBody = styled.tbody`
  display: flex;
  flex-wrap: wrap;
`

export const TableRow = styled.tr`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  position: relative;

  & + &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${colors.borderMedLightGrey};
  }
`

export const RowHeader = styled.th`
  width: 100%;
  min-height: 37px;
  padding: 16px 8px 4px;

  color: ${colors.textDarkGrey};
  font-size: 0.8125rem;
  font-weight: 400;

  @media (min-width: 600px) {
    width: 40%;
    min-height: 60px;

    text-align: left;
    font-size: 1rem;
    padding: 12px 16px;

    display: flex;
    align-items: center;
  }
`

type TableCellProps = {
  $typeNum: string
}

export const TableCell = styled.td<TableCellProps>`
  min-height: 37px;
  width: calc(100% / 3);
  padding: 8px;

  color: ${colors.textMedGrey};
  font-weight: 700;

  @media (min-width: 600px) {
    width: calc(60% / 3);
    min-height: 60px;
    padding: 12px 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-of-type(${({ $typeNum }) => $typeNum}) {
    color: ${colors.netflixRedFocus};
  }
`

export const FaCheckmark = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`
