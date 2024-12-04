import { useState } from 'react';

import set from 'lodash/set';
import { observer } from 'mobx-react-lite';

import { cn } from '@ui/utils/cn';
import { Edit03 } from '@ui/media/icons/Edit03';
import { useStore } from '@shared/hooks/useStore';
import { IconButton } from '@ui/form/IconButton/IconButton';
import { OpportunityRenewalLikelihood } from '@graphql/types';
import { Menu, MenuList, MenuItem, MenuButton } from '@ui/overlay/Menu/Menu';

import { getLikelihoodColor, getRenewalLikelihoodLabel } from './utils';

interface RenewalLikelihoodCellProps {
  id: string;
}

export const RenewalLikelihoodCell = observer(
  ({ id }: RenewalLikelihoodCellProps) => {
    const store = useStore();
    const [isEditing, setIsEditing] = useState(false);
    const organization = store.organizations.getById(id);
    const value =
      organization?.value?.accountDetails?.renewalSummary?.renewalLikelihood;

    const colors = value ? getLikelihoodColor(value) : 'text-gray-400';

    if (!organization?.value) return null;

    const handleClick = (value: OpportunityRenewalLikelihood) => {
      const organization = store.organizations.getById(id);

      if (!organization) return;

      const potentialAmount =
        organization.value.accountDetails?.renewalSummary?.maxArrForecast ?? 0;

      organization.draft();

      set(
        organization.value,
        'accountDetails.renewalSummary.renewalLikelihood',
        value,
      );

      set(
        organization.value,
        'accountDetails.renewalSummary.arrForecast',
        (() => {
          switch (value) {
            case OpportunityRenewalLikelihood.HighRenewal:
              return potentialAmount;
            case OpportunityRenewalLikelihood.MediumRenewal:
              return (50 / 100) * potentialAmount;
            case OpportunityRenewalLikelihood.LowRenewal:
              return (25 / 100) * potentialAmount;
            default:
              return (50 / 100) * potentialAmount;
          }
        })(),
      );

      organization.commit();
    };

    const canUpdate = organization.value.contracts?.length;

    return (
      <div className='flex gap-1 items-center group/likelihood'>
        <Menu onOpenChange={setIsEditing} open={canUpdate ? isEditing : false}>
          <MenuButton asChild disabled>
            <span
              className={cn('cursor-default', colors)}
              onDoubleClick={() => setIsEditing(true)}
              data-test='organization-health-in-all-orgs-table'
            >
              {value ? getRenewalLikelihoodLabel(value) : 'No set'}
            </span>
          </MenuButton>
          <MenuList align='center'>
            <MenuItem
              onClick={() =>
                handleClick(OpportunityRenewalLikelihood.HighRenewal)
              }
            >
              High
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleClick(OpportunityRenewalLikelihood.MediumRenewal)
              }
            >
              Medium
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleClick(OpportunityRenewalLikelihood.LowRenewal)
              }
            >
              Low
            </MenuItem>
          </MenuList>
        </Menu>

        {!!canUpdate && (
          <IconButton
            size='xxs'
            variant='ghost'
            aria-label='edit renewal likelihood'
            icon={<Edit03 className='text-gray-500' />}
            onClick={() => {
              setIsEditing(true);
            }}
            className={cn(
              'rounded-md opacity-0 group-hover/likelihood:opacity-100',
              isEditing && 'opacity-100',
            )}
          />
        )}
      </div>
    );
  },
);
