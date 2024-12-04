import { Node } from '@xyflow/react';
import { FlowActionType } from '@store/Flows/types';

import { IconButton } from '@ui/form/IconButton';
import { Settings03 } from '@ui/media/icons/Settings03';

import { FlowStatusMenu } from '../header';
import { SenderSettings } from './SenderSettings';
import { NoEmailNodesPanel } from './NoEmailNodesPanel';

export const FlowSettingsPanel = ({
  id,
  nodes,
  hasChanges,
  onToggleHasChanges,
  onToggleSidePanel,
}: {
  id: string;
  nodes: Node[];
  hasChanges: boolean;
  onToggleSidePanel: (status: boolean) => void;
  onToggleHasChanges: (status: boolean) => void;
}) => {
  const hasEmailNodes = nodes.some(
    (node) =>
      node.data?.action &&
      [FlowActionType.EMAIL_NEW, FlowActionType.EMAIL_REPLY].includes(
        node.data.action as FlowActionType,
      ),
  );
  const hasLinkedInNodes = nodes.some(
    (node) =>
      node.data?.action &&
      [
        FlowActionType.LINKEDIN_CONNECTION_REQUEST,
        FlowActionType.LINKEDIN_MESSAGE,
      ].includes(node.data.action as FlowActionType),
  );

  const showSenderSettings = hasEmailNodes || hasLinkedInNodes;

  return (
    <article
      onClick={(e) => e.stopPropagation()}
      className='fixed z-10 top-[0px] bottom-0 right-0 w-[400px] bg-white  border-l flex flex-col gap-4 animate-slideLeft'
    >
      {' '}
      <div className='flex justify-between items-center border-b border-gray-200 p-4 y-2 h-[41px]'>
        <h1 className='font-medium'>Flow settings</h1>

        <div className='flex gap-2'>
          <FlowStatusMenu
            id={id}
            hasUnsavedChanges={hasChanges}
            onToggleHasChanges={onToggleHasChanges}
            handleOpenSettingsPanel={() => onToggleSidePanel(true)}
          />
          <IconButton
            size='xs'
            variant='outline'
            icon={<Settings03 />}
            aria-label={'Toggle Settings'}
            dataTest={'flow-toggle-settings'}
            onClick={() => onToggleSidePanel(false)}
          />
        </div>
      </div>
      <div className='px-4 gap-2 flex flex-col'>
        {showSenderSettings && (
          <SenderSettings
            id={id}
            hasEmailNodes={hasEmailNodes}
            hasLinkedInNodes={hasLinkedInNodes}
          />
        )}
        {!showSenderSettings && <NoEmailNodesPanel />}
      </div>
    </article>
  );
};