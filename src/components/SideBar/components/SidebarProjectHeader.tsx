import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useProjects } from "@/hooks/queries";
import { useCommon } from "@/store";
import { cn } from "@/utils/helper";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

function SidebarProjectHeader() {
    const projects = useProjects();
    const projectActive = useCommon((state) => state.projectActive);
    const active = useCommon((state) => state.activeProject);
    const [isOpen, setOpen] = useState(false);

    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <Popover open={isOpen} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={isOpen}
                                className="w-[200px] justify-between"
                            >
                                <>
                                    {projects.data?.data.find(
                                        (pro) => pro.id === projectActive,
                                    )?.name}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search framework..." />
                                <CommandList>
                                    <CommandEmpty>
                                        No framework found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                        {projects.data?.data.map((pro) => (
                                            <CommandItem
                                                key={pro.id}
                                                value={pro.id.toString()}
                                                onSelect={(currentValue) => {
                                                    active(+currentValue);
                                                    setOpen(false);
                                                }}
                                            >
                                                <Check
                                                    className={cn(
                                                        "mr-2 h-4 w-4",
                                                        projectActive === pro.id
                                                            ? "opacity-100"
                                                            : "opacity-0",
                                                    )}
                                                />
                                                {pro.name}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    );
}

export default SidebarProjectHeader;

{
    /* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <SidebarMenuButton className="flex text-xl">
                                <span className="line-clamp-1 flex-1">
                                    Lorem
                                </span>
                                <ChevronDown />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-80">
                            <Command value={projectActive?.toString()} defaultChecked>
                                <CommandInput placeholder="Nhập tên dự án của bạn..." />
                                <CommandList>
                                    <CommandEmpty>
                                        No results found.
                                    </CommandEmpty>
                                    <CommandGroup heading="Suggestions">
                                        {projects.data?.data.map((pro) => (
                                            // <CommandItem key={pro.id} >
                                            <CommandItem key={pro.id} value={pro.id.toString()} onSelect={() => active(pro.id)} defaultChecked>
                                                {pro.name}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </DropdownMenuContent>
                    </DropdownMenu> */
}
