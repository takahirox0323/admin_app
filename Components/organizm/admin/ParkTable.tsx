import { useParkList } from "@/hooks";
import { SimpleTable } from "@/Components/organizm/Table";
import { columns } from "@/Components/atoms/Tables/park";

export const ParkTable: React.FC = () => {
  const { isLoading, parkList } = useParkList();

  return (
    <SimpleTable
      branchList={parkList?.data}
      isLoading={isLoading}
      columns={columns}
      itemUrl="/admin/parkDetail"
    />
  );
};
