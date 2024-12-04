import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { match } from 'ts-pattern';
import { observer } from 'mobx-react-lite';
import { FlowStore } from '@store/Flows/Flow.store';
import { ContactStore } from '@store/Contacts/Contact.store';
import { Organization } from '@store/Organizations/Organization.dto';
import { OpportunityStore } from '@store/Opportunities/Opportunity.store';
import { TableViewDefStore } from '@store/TableViewDefs/TableViewDef.store';

import { Button } from '@ui/form/Button/Button';
import { useStore } from '@shared/hooks/useStore';
import {
  Command,
  CommandCancelButton,
  CommandCancelIconButton,
} from '@ui/overlay/CommandMenu';

export const DeleteConfirmationModal = observer(() => {
  const store = useStore();
  const context = store.ui.commandMenu.context;
  const navigate = useNavigate();
  const location = useLocation();

  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const entity = match(context.entity)
    .returnType<
      | OpportunityStore
      | Organization
      | TableViewDefStore
      | ContactStore
      | FlowStore
      | undefined
    >()
    .with('Opportunity', () => store.opportunities.value.get(context.ids?.[0]))
    .with('Organization', () => store.organizations.value.get(context.ids?.[0]))
    .with('Contact', () => store.contacts.value.get(context.ids?.[0]))
    .with('TableViewDef', () => store.tableViewDefs.getById(context.ids?.[0]))
    .with(
      'Flow',
      () => store.flows.value.get(context.ids?.[0]) as FlowStore | undefined,
    )
    .otherwise(() => undefined);

  const handleClose = () => {
    store.ui.commandMenu.setOpen(false);

    match(context.entity)
      .with('Organization', () => {
        store.ui.commandMenu.setType('OrganizationCommands');
      })
      .with('Organizations', () => {
        store.ui.commandMenu.setType('OrganizationBulkCommands');
      })
      .with('Contact', () => {
        store.ui.commandMenu.setType('ContactHub');
      })
      .with('Opportunity', () => {
        store.ui.commandMenu.setType('OpportunityCommands');
      })
      .with('Opportunities', () => {
        store.ui.commandMenu.setType('OpportunityCommands');
      })
      .with('Flow', () => {
        store.ui.commandMenu.setType('FlowCommands');
      })
      .with('Flows', () => {
        store.ui.commandMenu.setType('FlowsBulkCommands');
      });
  };

  const handleConfirm = () => {
    match(context.entity)
      .with('Organization', () => {
        const oppoortunityOfOrgSelected = store.opportunities
          .toArray()
          .filter((o) => o.value.organization?.metadata.id === context.ids[0]);

        const oppotunityIdOfOrgSelected = oppoortunityOfOrgSelected.map(
          (o) => o.value.id,
        );

        store.organizations.hide(context.ids as string[]);

        store.opportunities.value.delete(oppotunityIdOfOrgSelected[0]);
        store.ui.commandMenu.setType('OrganizationHub');
        store.ui.commandMenu.clearContextIds();
        store.ui.commandMenu.clearContext();
        context.callback?.();
      })
      .with('Organizations', () => {
        store.organizations.hide(context.ids as string[]);
        store.ui.commandMenu.setType('OrganizationHub');
        store.ui.commandMenu.clearContextIds();
        store.ui.commandMenu.clearContext();

        context.callback?.();
      })
      .with('Contact', () => {
        store.contacts.archive(context.ids);
        store.ui.commandMenu.setType('ContactHub');
        store.ui.commandMenu.clearContextIds();
        store.ui.commandMenu.clearContext();

        context.callback?.();
      })
      .with('Opportunity', () => {
        store.opportunities.archive(context.ids?.[0]);
        store.ui.commandMenu.setType('OpportunityHub');
        store.ui.commandMenu.clearCallback();
        store.ui.commandMenu.clearContext();

        context.callback?.();
      })
      .with('Opportunities', () => {
        store.opportunities.archiveMany(context.ids);
        store.ui.commandMenu.setType('OpportunityHub');
        store.ui.commandMenu.clearCallback();
        store.ui.commandMenu.clearContext();

        context.callback?.();
      })
      .with('Flow', () => {
        store.flows.archive(context.ids?.[0], {
          onSuccess: () => {
            if (location.pathname.includes('flow-editor')) {
              navigate(`/finder?preset=${store.tableViewDefs.flowsPreset}`);
            }
          },
        });
        store.ui.commandMenu.setType('FlowHub');
        store.ui.commandMenu.clearCallback();
        store.ui.commandMenu.clearContext();

        context.callback?.();
      })
      .with('Flows', () => {
        store.flows.archiveMany(context.ids);
        store.ui.commandMenu.setType('FlowHub');
        store.ui.commandMenu.clearCallback();
        store.ui.commandMenu.clearContext();

        context.callback?.();
      })
      .with('TableViewDef', () => {
        store.tableViewDefs.archive(context.ids?.[0], {
          onSuccess: () => {
            navigate(
              `/finder?preset=${store.tableViewDefs.organizationsPreset}`,
            );
          },
        });
      })
      .otherwise(() => {});

    store.ui.commandMenu.setOpen(false);
  };

  const title = match(context.entity)
    .with(
      'Organization',
      () => `Archive ${(entity as Organization)?.value.name || 'Unnamed'}?`,
    )
    .with(
      'Organizations',
      () => `Archive ${context.ids?.length} organizations?`,
    )
    .with(
      'Opportunities',
      () => `Archive ${context.ids?.length} opportunities?`,
    )
    .with(
      'Opportunity',
      () => `Archive ${(entity as OpportunityStore)?.value.name}?`,
    )
    .with('Flows', () => `Archive ${context.ids.length} flows?`)
    .with(
      'Flow',
      () => `Archive ${store.flows.value.get(context.ids?.[0])?.value.name}?`,
    )

    .with('Contact', () =>
      context.ids?.length > 1
        ? `Archive ${context.ids?.length} contacts?`
        : `Archive ${(entity as ContactStore)?.name}?`,
    )
    .with(
      'TableViewDef',
      () => `Archive '${(entity as TableViewDefStore)?.value.name}' ?`,
    )
    .otherwise(() => `Archive selected ${context.entity?.toLowerCase()}`);
  const description = match(context.entity)
    .with(
      'Flow',
      () => `Archiving this flow will end all active contacts currently in it`, // todo update contacts to dynamic value when we'll be able to get different record types
    )
    .with(
      'Flows',
      () =>
        `Archiving these flows will end all active contacts currently in it`, // todo update contacts to dynamic value when we'll be able to get different record types
    )
    .otherwise(() => null);

  const confirmButtonLabel = match(context.entity)
    .with('Flows', () => `Archive flows`)
    .with('Flow', () => `Archive flow`)

    .otherwise(() => 'Archive');

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <Command>
      <article className='relative w-full p-6 flex flex-col border-b border-b-gray-100'>
        <div className='flex items-center justify-between'>
          <h1 className='text-base font-semibold'>{title}</h1>
          <CommandCancelIconButton onClose={handleClose} />
        </div>
        {description && <p className='mt-1 text-sm'>{description}</p>}

        <div className='flex justify-between gap-3 mt-6'>
          <CommandCancelButton ref={closeButtonRef} onClose={handleClose} />

          <Button
            size='sm'
            variant='outline'
            className='w-full'
            colorScheme='error'
            ref={confirmButtonRef}
            onClick={handleConfirm}
            dataTest='org-actions-confirm-archive'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleConfirm();
              }
            }}
          >
            {confirmButtonLabel}
          </Button>
        </div>
      </article>
    </Command>
  );
});