import { useRef, useState } from 'react';
import { CalendarProps } from 'react-calendar';

import { cn } from '@ui/utils/cn';
import { DateTimeUtils } from '@utils/date';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@ui/overlay/Popover/Popover';

import { DatePicker } from './DatePicker';

interface DatePickerUnderlineProps extends Omit<CalendarProps, 'onChange'> {
  size?: 'sm' | 'md';
  value: Date | string | null;
  onChange: (date: Date | null) => void;
}

export const DatePickerUnderline = ({
  size,
  value,
  onChange,
  ...rest
}: DatePickerUnderlineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateInputChange = (data?: Date) => {
    if (!data) return onChange(null);
    const date = new Date(data);

    const normalizedDate = new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ),
    );

    onChange(normalizedDate);
    setIsOpen(false);
  };

  const textSize = {
    sm: 'text-sm',
    md: 'text-md',
  };

  return (
    <div ref={containerRef} className='inline-flex flex-start items-center'>
      <Popover
        modal={true}
        open={isOpen}
        onOpenChange={(value) => setIsOpen(value)}
      >
        <PopoverTrigger
          className={cn(
            'data-[state=open]:text-gray-700 data-[state=closed]:text-gray-500 text-sm',
            textSize[size ?? 'md'],
          )}
        >
          <span className='underline cursor-pointer whitespace-pre pb-[1px] text-inherit border-t-[1px] border-transparent hover:text-gray-700'>{`${
            value
              ? DateTimeUtils.format(value.toString(), DateTimeUtils.date)
              : 'Select date'
          }`}</span>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          sticky='always'
          className='items-end z-[999]'
          onClick={(e) => e.stopPropagation()}
          onOpenAutoFocus={(el) => el.preventDefault()}
        >
          <div>
            <DatePicker
              {...rest}
              value={value ? new Date(value) : new Date()}
              onChange={(date) => handleDateInputChange(date as Date)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
