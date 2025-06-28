import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

import {
  FaCheckmark,
  HiddenTableCaption,
  RowHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from './styled'

type PlanTableProps = {
  selectedPlan: string
}

export default function PlanTable({ selectedPlan }: PlanTableProps) {
  const typeNum =
    selectedPlan === 'basic' ? '1' : selectedPlan === 'standard' ? '2' : '3'

  return (
    <Table>
      <HiddenTableCaption>Netflix Plan Features</HiddenTableCaption>
      <TableBody>
        <TableRow>
          <RowHeader>Monthly price</RowHeader>
          <TableCell $typeNum={typeNum}>$59.99</TableCell>
          <TableCell $typeNum={typeNum}>$149.99</TableCell>
          <TableCell $typeNum={typeNum}>$666.66</TableCell>
        </TableRow>
        <TableRow>
          <RowHeader>Video quality</RowHeader>
          <TableCell $typeNum={typeNum}>Garbage</TableCell>
          <TableCell $typeNum={typeNum}>Adequate</TableCell>
          <TableCell $typeNum={typeNum}>Uber</TableCell>
        </TableRow>
        <TableRow>
          <RowHeader>Resolution</RowHeader>
          <TableCell $typeNum={typeNum}>256p</TableCell>
          <TableCell $typeNum={typeNum}>480p</TableCell>
          <TableCell $typeNum={typeNum}>64K+4D</TableCell>
        </TableRow>
        <TableRow>
          <RowHeader>
            Watch on your TV, computer, mobile phone and tablet
          </RowHeader>
          <TableCell aria-label='included' $typeNum={typeNum}>
            <FaCheckmark icon={faTimes}></FaCheckmark>
          </TableCell>
          <TableCell aria-label='included' $typeNum={typeNum}>
            <FaCheckmark icon={faTimes}></FaCheckmark>
          </TableCell>
          <TableCell aria-label='included' $typeNum={typeNum}>
            <FaCheckmark icon={faTimes}></FaCheckmark>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
