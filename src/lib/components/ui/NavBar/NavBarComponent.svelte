<script lang="ts">
    import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from ".";
    let active: any = null;
    export let projectArray: {
        id: number;
        title: string;
        description: string;
        image: string;
        github: string;
        demo?: string;
    }[];
    function truncateDescription(description, maxLength) {
        return description.length > maxLength
            ? description.substring(0, maxLength) + "..."
            : description;
    }
</script>

<div class="relative flex w-full items-center justify-between">
    <div class={"fixed inset-x-0 top-5 z-50 mx-auto max-w-xl "}>
        <NavbarMenu>
            <MenuItem {active} item="About me">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#">Hobby</HoveredLink>
                    <HoveredLink href="#">Individual</HoveredLink>
                    <HoveredLink href="#">Team</HoveredLink>
                    <HoveredLink href="#">Enterprise</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem {active} item="Technologies">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#test">Web Development</HoveredLink>
                    <HoveredLink href="#">Interface Design</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem {active} item="Experience">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#anh-tuan"
                        >Anh Tuan Driving Center</HoveredLink
                    >
                    <HoveredLink href="#gmo"
                        >GMO-Z.com Runsystem JSC</HoveredLink
                    >
                </div>
            </MenuItem>
            <MenuItem {active} item="Projects">
                <div class=" grid grid-cols-2 gap-10 p-4 text-sm text-blue-600">
                    {#each projectArray as { title, description, image }}
                        <ProductItem
                            {title}
                            href="#"
                            src={image}
                            description={truncateDescription(description, 40)}
                        />
                    {/each}
                </div>
            </MenuItem>
            <MenuItem {active} item="Certificate">
                <div class="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="#">Hobby</HoveredLink>
                    <HoveredLink href="#">Individual</HoveredLink>
                    <HoveredLink href="#">Team</HoveredLink>
                    <HoveredLink href="#">Enterprise</HoveredLink>
                </div>
            </MenuItem>
        </NavbarMenu>
    </div>
</div>
