import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';

const TabsSizeContext = React.createContext<'small' | 'regular'>('regular');
function useTabsSize() {
  return React.useContext(TabsSizeContext);
}

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;
export function CustomTabs({ className, ...props }: TabsProps) {
  return <TabsPrimitive.Root className={cn('w-full', className)} {...props} />;
}

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & {
  size?: 'small' | 'regular';
};
export function TabsList({
  className,
  size = 'small',
  ...props
}: TabsListProps) {
  return (
    <TabsSizeContext.Provider value={size}>
      <TabsPrimitive.List
        className={cn('relative flex border-b border-gray-300', className)}
        {...props}
      />
    </TabsSizeContext.Provider>
  );
}

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  icon?: React.ReactNode;
};
export function TabsTrigger({
  className,
  icon,
  children,
  ...props
}: TabsTriggerProps) {
  const size = useTabsSize();

  return (
    <TabsPrimitive.Trigger
      className={cn(
        'relative flex items-center gap-2 px-9 py-3 font-medium text-gray-500 transition-colors duration-300 hover:text-black data-[state=active]:text-black',
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent after:transition-all after:duration-300",
        'data-[state=active]:after:bg-purple-600',
        size === 'small' ? 'text-sm' : 'text-md',
        className,
      )}
      {...props}
    >
      {icon && <span className='text-base'>{icon}</span>}
      <span>{children}</span>
    </TabsPrimitive.Trigger>
  );
}

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;
export function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn('py-4 text-sm text-gray-700', className)}
      {...props}
    />
  );
}

type TabItem = {
  label: string;
  value: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

type CustomTabsProps = {
  tabs: TabItem[];
  className?: string;
  defaultValue?: string;
  size?: 'small' | 'regular';
};

export function Tabs({
  tabs = [],
  defaultValue,
  className,
  size = 'regular',
}: CustomTabsProps) {
  const initialValue = defaultValue ?? tabs[0]?.value;

  return (
    <TabsPrimitive.Root
      defaultValue={initialValue}
      className={cn(`w-full`, className)}
    >
      <TabsList size={size}>
        {tabs.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value} icon={tab.icon}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(tab => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </TabsPrimitive.Root>
  );
}
