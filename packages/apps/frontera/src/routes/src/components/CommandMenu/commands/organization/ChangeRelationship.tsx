import { match } from 'ts-pattern';
import { observer } from 'mobx-react-lite';
import { Organization } from '@store/Organizations/Organization.dto';

import { Check } from '@ui/media/icons/Check.tsx';
import { useStore } from '@shared/hooks/useStore';
import { Seeding } from '@ui/media/icons/Seeding';
import { BrokenHeart } from '@ui/media/icons/BrokenHeart';
import { ActivityHeart } from '@ui/media/icons/ActivityHeart';
import { MessageXCircle } from '@ui/media/icons/MessageXCircle';
import { Command, CommandItem, CommandInput } from '@ui/overlay/CommandMenu';
import { OrganizationStage, OrganizationRelationship } from '@graphql/types';
import { relationshipOptions } from '@organization/components/Tabs/panels/AboutPanel/util';
const iconMap = {
  Customer: <ActivityHeart className='text-gray-500' />,
  Prospect: <Seeding className='text-gray-500' />,
  'Not a fit': <MessageXCircle className='text-gray-500' />,
  'Former Customer': <BrokenHeart className='text-gray-500' />,
};

export const ChangeRelationship = observer(() => {
  const store = useStore();
  const context = store.ui.commandMenu.context;

  const entity = match(context.entity)
    .returnType<Organization | Organization[] | undefined>()
    .with('Organization', () =>
      store.organizations.value.get(context.ids?.[0] as string),
    )
    .with(
      'Organizations',
      () =>
        context.ids?.map((e: string) =>
          store.organizations.value.get(e),
        ) as Organization[],
    )
    .otherwise(() => undefined);
  const label = match(context.entity)
    .with(
      'Organization',
      () => `Organization - ${(entity as Organization)?.value?.name}`,
    )
    .with('Organizations', () => `${context.ids?.length} organizations`)
    .otherwise(() => '');

  const handleSelect = (value: OrganizationRelationship) => () => {
    if (!context.ids?.[0]) return;

    if (!entity) return;

    match(context.entity)
      .with('Organization', () => {
        const organization = entity as Organization;

        organization.value.relationship = value;
        organization.value.stage = match(value)
          .with(OrganizationRelationship.Prospect, () => OrganizationStage.Lead)
          .with(
            OrganizationRelationship.Customer,
            () => OrganizationStage.InitialValue,
          )
          .with(
            OrganizationRelationship.NotAFit,
            () => OrganizationStage.Unqualified,
          )
          .with(
            OrganizationRelationship.FormerCustomer,
            () => OrganizationStage.Target,
          )
          .otherwise(() => undefined);

        organization.commit();
      })
      .with('Organizations', () => {
        store.organizations?.updateRelationship(context.ids as string[], value);
      })
      .otherwise(() => '');

    store.ui.commandMenu.toggle('ChangeRelationship');
  };

  const selectedRelationshipOption = match(context.entity)
    .with('Organization', () =>
      relationshipOptions.find(
        (option) =>
          option.value === (entity as Organization)?.value.relationship,
      ),
    )
    .with('Organizations', () => undefined)
    .otherwise(() => undefined);

  const options = match(context.entity)
    .with('Organization', () =>
      relationshipOptions.filter(
        (option) =>
          !(
            selectedRelationshipOption?.label === 'Not a fit' &&
            option.label === 'Prospect'
          ),
      ),
    )
    .with('Organizations', () => relationshipOptions)
    .otherwise(() => []);

  return (
    <Command label='Change Relationship'>
      <CommandInput
        label={label}
        placeholder='Change relationship...'
        onKeyDownCapture={(e) => {
          if (e.key === ' ') {
            e.stopPropagation();
          }

          if (e.metaKey && e.key === 'Enter') {
            store.ui.commandMenu.setOpen(false);
          }
        }}
      />

      <Command.List>
        {options.map((option) => (
          <CommandItem
            key={option.value}
            onSelect={handleSelect(option.value)}
            rightAccessory={
              selectedRelationshipOption?.value === option.value ? (
                <Check />
              ) : null
            }
          >
            {iconMap[option.label as keyof typeof iconMap]}
            {option.label}
          </CommandItem>
        ))}
      </Command.List>
    </Command>
  );
});
