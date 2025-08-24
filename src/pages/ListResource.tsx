import Loading from '@/components/shared/Loading';
import { features } from '@/features';
import { useNavigate } from 'react-router-dom';

interface ListResourceProps {
  resourceType: keyof typeof features;
}

export default function ListResource({ resourceType }: ListResourceProps) {
  const navigate = useNavigate();
  const { data: resources, isLoading } = features[resourceType].useResources();
  const onDeleteResource = features[resourceType].onDeleteResource;
  const onEditResource = (id: string) => {
    navigate(`/${resourceType}/${id}`);
  };
  const ResourceTable = features[resourceType].resourceTable;
  const NewResourceButton = features[resourceType].newResourceButton;

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mt-2 text-5xl tracking-tight sm:text-6xl text-pretty">
          {resourceType}
        </h1>
        <NewResourceButton />
      </div>

      <div className="flex flex-col gap-4">
        {/* TODO: use skeleton loader instead in the future */}
        {isLoading ? (
          <Loading />
        ) : (
          <ResourceTable
            resources={resources}
            onEdit={onEditResource}
            onDelete={onDeleteResource}
          />
        )}
      </div>
    </div>
  );
}
